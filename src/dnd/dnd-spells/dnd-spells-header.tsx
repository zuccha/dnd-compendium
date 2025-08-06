import {
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
  createListCollection,
} from "@chakra-ui/react";
import { useCallback, useMemo } from "react";
import { LuCopy, LuSquareCheck, LuSquareX } from "react-icons/lu";
import NumberInput from "../../components/ui/number-input";
import Select from "../../components/ui/select";
import SelectSimple from "../../components/ui/select-simple";
import { toaster } from "../../components/ui/toaster";
import useI18n from "../../i18n/use-i18n";
import { compareLabels } from "../../utils/select-collection";
import {
  type DndClass,
  type DndSpellSchool,
  dndClasses,
  dndSpellLevels,
  dndSpellSchools,
} from "../models/dnd";
import {
  type ViewSortOrder,
  type ViewType,
  viewSortOrders,
  viewTypes,
} from "../models/view";
import {
  deselectAllVisibleDndSpells,
  selectAllVisibleDndSpells,
  useDndSpellsFilters,
  useDndSpellsView,
  useSelectedVisibleSpells,
} from "./dnd-spells-store";
import { localizeDndSpell } from "./use-dnd-spell-localized";

export default function DndSpellsHeader() {
  const i18n = useI18n();
  const [filters, setFilters] = useDndSpellsFilters();
  const [view, setView] = useDndSpellsView();

  const classesCollection = useMemo(() => {
    return createListCollection({
      items: dndClasses
        .filter((dndClass) => dndClass !== "artificer")
        .map((dndClass) => ({
          label: i18n.t(`dnd.class.${dndClass}`),
          value: dndClass,
        }))
        .sort(compareLabels),
    });
  }, [i18n]);

  const schoolsCollection = useMemo(() => {
    return createListCollection({
      items: dndSpellSchools
        .map((dndSchool) => ({
          label: i18n.t(`dnd.spell_school.${dndSchool}`),
          value: dndSchool,
        }))
        .sort(compareLabels),
    });
  }, [i18n]);

  const viewCollection = useMemo(() => {
    return createListCollection({
      items: viewTypes.map((viewType) => ({
        label: i18n.t(`dnd.spell.view.${viewType}`),
        value: viewType,
      })),
    });
  }, [i18n]);

  const sortByCollection = useMemo(() => {
    return createListCollection({
      items: ["name", "level", "school"].map((sortBy) => ({
        label: i18n.t(`dnd.spells.view.sort_by.${sortBy}`),
        value: sortBy,
      })),
    });
  }, [i18n]);

  const sortOrderCollection = useMemo(() => {
    return createListCollection({
      items: viewSortOrders.map((sortOrder) => ({
        label: i18n.t(`dnd.spells.view.sort_order.${sortOrder}`),
        value: sortOrder,
      })),
    });
  }, [i18n]);

  return (
    <VStack pb={2} px={1} w="100%">
      <HStack w="100%">
        <HStack w="100%">
          <Text fontSize="sm">{i18n.t("dnd.spells.view.label.display")}</Text>
          <SelectSimple
            collection={viewCollection}
            defaultValue={[view.type]}
            flex={0}
            minW="6em"
            name="dnd-spells-view-type"
            onValueChange={(e) => setView({ type: e.value[0] as ViewType })}
            size="sm"
          />

          <Text fontSize="sm">{i18n.t("dnd.spells.view.label.sort")}</Text>
          <SelectSimple
            collection={sortByCollection}
            defaultValue={[view.sortBy]}
            flex={0}
            minW="6em"
            name="dnd-spells-view-sort-by"
            onValueChange={(e) => setView({ sortBy: e.value[0] })}
            size="sm"
          />
          <Text fontSize="sm">{" : "}</Text>
          <SelectSimple
            collection={sortOrderCollection}
            defaultValue={[view.sortOrder]}
            flex={0}
            minW="5em"
            name="dnd-spells-view-sort-order"
            onValueChange={(e) =>
              setView({ sortOrder: e.value[0] as ViewSortOrder })
            }
            size="sm"
          />

          {view.type === "cards" && (
            <>
              <Text fontSize="sm">{i18n.t("dnd.spells.view.label.at")}</Text>
              <NumberInput
                defaultValue={`${view.zoom * 100}%`}
                formatOptions={{ style: "percent" }}
                inputProps={{ w: "6em" }}
                max={2}
                min={0.5}
                name="dnd-spells-view-zoom"
                onValueChange={(e) => setView({ zoom: e.valueAsNumber })}
                size="sm"
                step={0.1}
              />
              <Text fontSize="sm">{i18n.t("dnd.spells.view.label.zoom")}</Text>
            </>
          )}
        </HStack>

        <HStack>
          <IconButton
            onClick={deselectAllVisibleDndSpells}
            size="sm"
            variant="outline"
          >
            <LuSquareX />
          </IconButton>

          <IconButton
            onClick={selectAllVisibleDndSpells}
            size="sm"
            variant="outline"
          >
            <LuSquareCheck />
          </IconButton>

          <CopySelectedSpellsToClipboard />
        </HStack>
      </HStack>

      <HStack w="100%">
        <Input
          defaultValue={filters.name}
          name="dnd-spells-filters-name"
          onChange={(e) => setFilters({ name: e.target.value })}
          placeholder={i18n.t("dnd.spells.filters.input.name.placeholder")}
          size="sm"
        />
        <Select
          collection={levelsCollection}
          defaultValue={filters.levels.map(String)}
          multiple
          name="dnd-spells-filters-levels"
          onValueChange={(e) => setFilters({ levels: e.value.map((v) => +v) })}
          placeholder={i18n.t("dnd.spells.filters.select.levels.placeholder")}
          size="sm"
        />
        <Select
          collection={classesCollection}
          defaultValue={filters.classes}
          multiple
          name="dnd-spells-filters-classes"
          onValueChange={(e) => setFilters({ classes: e.value as DndClass[] })}
          placeholder={i18n.t("dnd.spells.filters.select.classes.placeholder")}
          size="sm"
        />
        <Select
          collection={schoolsCollection}
          defaultValue={filters.school ? [filters.school] : []}
          name="dnd-spells-filters-schools"
          onValueChange={(e) =>
            setFilters({ school: e.value?.[0] as DndSpellSchool })
          }
          placeholder={i18n.t("dnd.spells.filters.select.schools.placeholder")}
          size="sm"
        />
      </HStack>
    </VStack>
  );
}

const levelsCollection = createListCollection({
  items: dndSpellLevels.map((level) => ({
    label: `${level}`,
    value: `${level}`,
  })),
});

function CopySelectedSpellsToClipboard() {
  const i18n = useI18n();
  const spells = useSelectedVisibleSpells();

  const copySpellsAsJson = useCallback(async () => {
    const localizedSpells = spells.map((s) => localizeDndSpell(s, i18n));
    const json = JSON.stringify(localizedSpells, null, 2);
    await navigator.clipboard.writeText(json);
    toaster.success({ title: "Spells copied to clipboard." });
  }, [i18n, spells]);

  const disabled = spells.length === 0;

  return (
    <IconButton disabled={disabled} onClick={copySpellsAsJson} size="sm">
      <LuCopy />
    </IconButton>
  );
}
