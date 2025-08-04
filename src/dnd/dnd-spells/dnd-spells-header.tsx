import {
  Box,
  Button,
  HStack,
  Input,
  Text,
  VStack,
  createListCollection,
} from "@chakra-ui/react";
import { useMemo } from "react";
import AppHeader from "../../app-header";
import NumberInput from "../../components/ui/number-input";
import Select from "../../components/ui/select";
import SelectSimple from "../../components/ui/select-simple";
import useI18n from "../../i18n/use-i18n";
import { compareLabels } from "../../utils/select-collection";
import {
  type DndClass,
  type DndMagicSchool,
  dndMagicSchool,
} from "../dnd-types";
import DndSpellsExportDialog from "./dnd-spells-export-dialog";
import {
  useDndSpellsDeselectAll,
  useDndSpellsOptionsClasses,
  useDndSpellsOptionsLevels,
  useDndSpellsOptionsName,
  useDndSpellsOptionsSchool,
  useDndSpellsOptionsView,
  useDndSpellsOptionsZoom,
  useDndSpellsSelectAll,
} from "./dnd-spells-store";
import {
  type DndSpellsOptionsView,
  dndSpellsOptionsClasses,
  dndSpellsOptionsLevels,
  dndSpellsOptionsViewOptions,
} from "./dnd-spells-types";

export default function DndSpellsHeader() {
  const i18n = useI18n();

  const [name, setName] = useDndSpellsOptionsName();
  const [levels, setLevels] = useDndSpellsOptionsLevels();
  const [classes, setClasses] = useDndSpellsOptionsClasses();
  const [school, setSchool] = useDndSpellsOptionsSchool();
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
                defaultValue={[`${view}`]}
                flex={0}
                minW="6em"
                name="dnd-spells-options-view"
                onValueChange={(e) =>
                  setView(e.value[0] as DndSpellsOptionsView)
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
              <Button onClick={deselectAll} size="sm" variant="outline">
                {i18n.t("dnd.spells.options.button.deselect_all")}
              </Button>
              <Button onClick={selectAll} size="sm" variant="outline">
                {i18n.t("dnd.spells.options.button.select_all")}
              </Button>
              <DndSpellsExportDialog />
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
