import {
  Box,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
  createListCollection,
} from "@chakra-ui/react";
import { useCallback, useMemo } from "react";
import { LuCopy, LuSquareCheck, LuSquareX } from "react-icons/lu";
import AppHeader from "../../app-header";
import NumberInput from "../../components/ui/number-input";
import Select from "../../components/ui/select";
import SelectSimple from "../../components/ui/select-simple";
import { toaster } from "../../components/ui/toaster";
import useI18n from "../../i18n/use-i18n";
import { compareLabels } from "../../utils/select-collection";
import {
  type DndClass,
  type DndMagicSchool,
  dndMagicSchool,
} from "../dnd-types";
import {
  useDndSpellsDeselectAll,
  useDndSpellsOptionsClasses,
  useDndSpellsOptionsLevels,
  useDndSpellsOptionsName,
  useDndSpellsOptionsSchool,
  useDndSpellsOptionsSortBy,
  useDndSpellsOptionsSortOrder,
  useDndSpellsOptionsView,
  useDndSpellsOptionsZoom,
  useDndSpellsSelectAll,
  useDndSpellsSelected,
} from "./dnd-spells-store";
import {
  type DndSpellsOptionsSortBy,
  type DndSpellsOptionsSortOrder,
  type DndSpellsOptionsView,
  dndSpellsOptionsClasses,
  dndSpellsOptionsLevels,
  dndSpellsOptionsSortByOptions,
  dndSpellsOptionsSortOrderOptions,
  dndSpellsOptionsViewOptions,
} from "./dnd-spells-types";
import { localizeDndSpell } from "./use-dnd-spell-localized";

export default function DndSpellsHeader() {
  const i18n = useI18n();

  const [name, setName] = useDndSpellsOptionsName();
  const [levels, setLevels] = useDndSpellsOptionsLevels();
  const [classes, setClasses] = useDndSpellsOptionsClasses();
  const [school, setSchool] = useDndSpellsOptionsSchool();
  const [sortBy, setSortBy] = useDndSpellsOptionsSortBy();
  const [sortOrder, setSortOrder] = useDndSpellsOptionsSortOrder();
  const [view, setView] = useDndSpellsOptionsView();
  const [zoom, setZoom] = useDndSpellsOptionsZoom();

  const deselectAll = useDndSpellsDeselectAll();
  const selectAll = useDndSpellsSelectAll();

  const classesCollection = useMemo(() => {
    return createListCollection({
      items: dndSpellsOptionsClasses
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
      items: dndMagicSchool
        .map((dndSchool) => ({
          label: i18n.t(`dnd.magic_school.${dndSchool}`),
          value: dndSchool,
        }))
        .sort(compareLabels),
    });
  }, [i18n]);

  const viewCollection = useMemo(() => {
    return createListCollection({
      items: dndSpellsOptionsViewOptions.map((option) => ({
        label: i18n.t(`dnd.spell.view.${option}`),
        value: option,
      })),
    });
  }, [i18n]);

  const sortByCollection = useMemo(() => {
    return createListCollection({
      items: dndSpellsOptionsSortByOptions.map((option) => ({
        label: i18n.t(`dnd.spells.options.sort_by.${option}`),
        value: option,
      })),
    });
  }, [i18n]);

  const sortOrderCollection = useMemo(() => {
    return createListCollection({
      items: dndSpellsOptionsSortOrderOptions.map((option) => ({
        label: i18n.t(`dnd.spells.options.sort_order.${option}`),
        value: option,
      })),
    });
  }, [i18n]);

  return (
    <VStack bgColor="bg" gap={0.25} shadow="sm" top={0} w="100%" zIndex={1}>
      <Box maxW="64em" w="100%">
        <AppHeader />

        <VStack pb={2} px={1} w="100%">
          <HStack w="100%">
            <HStack w="100%">
              <Text fontSize="sm">
                {i18n.t("dnd.spells.options.label.display")}
              </Text>
              <SelectSimple
                collection={viewCollection}
                defaultValue={[view]}
                flex={0}
                minW="6em"
                name="dnd-spells-options-view"
                onValueChange={(e) =>
                  setView(e.value[0] as DndSpellsOptionsView)
                }
                size="sm"
              />

              <Text fontSize="sm">
                {i18n.t("dnd.spells.options.label.sort")}
              </Text>
              <SelectSimple
                collection={sortByCollection}
                defaultValue={[sortBy]}
                flex={0}
                minW="6em"
                name="dnd-spells-options-sort-by"
                onValueChange={(e) =>
                  setSortBy(e.value[0] as DndSpellsOptionsSortBy)
                }
                size="sm"
              />
              <Text fontSize="sm">{" : "}</Text>
              <SelectSimple
                collection={sortOrderCollection}
                defaultValue={[sortOrder]}
                flex={0}
                minW="5em"
                name="dnd-spells-options-sort-order"
                onValueChange={(e) =>
                  setSortOrder(e.value[0] as DndSpellsOptionsSortOrder)
                }
                size="sm"
              />

              {view === "cards" && (
                <>
                  <Text fontSize="sm">
                    {i18n.t("dnd.spells.options.label.at")}
                  </Text>
                  <NumberInput
                    defaultValue={`${zoom * 100}%`}
                    formatOptions={{ style: "percent" }}
                    inputProps={{ w: "6em" }}
                    max={2}
                    min={0.5}
                    name="dnd-spells-options-zoom"
                    onValueChange={(e) => setZoom(e.valueAsNumber)}
                    size="sm"
                    step={0.1}
                  />
                  <Text fontSize="sm">
                    {i18n.t("dnd.spells.options.label.zoom")}
                  </Text>
                </>
              )}
            </HStack>

            <HStack>
              <IconButton
                aria-label={i18n.t("dnd.spells.options.button.deselect_all")}
                onClick={deselectAll}
                size="sm"
                variant="outline"
              >
                <LuSquareX />
              </IconButton>

              <IconButton
                aria-label={i18n.t("dnd.spells.options.button.select_all")}
                onClick={selectAll}
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
              defaultValue={name}
              name="dnd-spells-options-name"
              onChange={(e) => setName(e.target.value)}
              placeholder={i18n.t("dnd.spells.options.input.name.placeholder")}
              size="sm"
            />
            <Select
              collection={levelsCollection}
              defaultValue={levels.map(String)}
              multiple
              name="dnd-spells-options-levels"
              onValueChange={(e) => setLevels(e.value.map((v) => +v))}
              placeholder={i18n.t(
                "dnd.spells.options.select.levels.placeholder",
              )}
              size="sm"
            />
            <Select
              collection={classesCollection}
              defaultValue={classes}
              multiple
              name="dnd-spells-options-classes"
              onValueChange={(e) => setClasses(e.value as DndClass[])}
              placeholder={i18n.t(
                "dnd.spells.options.select.classes.placeholder",
              )}
              size="sm"
            />
            <Select
              collection={schoolsCollection}
              defaultValue={school ? [school] : []}
              name="dnd-spells-options-schools"
              onValueChange={(e) => setSchool(e.value?.[0] as DndMagicSchool)}
              placeholder={i18n.t(
                "dnd.spells.options.select.schools.placeholder",
              )}
              size="sm"
            />
          </HStack>
        </VStack>
      </Box>
    </VStack>
  );
}

const levelsCollection = createListCollection({
  items: dndSpellsOptionsLevels.map((level) => ({
    label: `${level}`,
    value: `${level}`,
  })),
});

function CopySelectedSpellsToClipboard() {
  const i18n = useI18n();
  const spells = useDndSpellsSelected();

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
