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
import {
  type DndClass,
  type DndSpellsView,
  dndSpellsView,
} from "../../models/dnd";
import {
  dndClasses,
  dndSpellLevels,
  useDndSpellsFilterClasses,
  useDndSpellsFilterLevels,
  useDndSpellsFilterName,
  useDndSpellsSettingView,
  useDndSpellsSettingZoom,
} from "./dnd-store";

export default function DndSpellsHeader() {
  const i18n = useI18n();

  const [name, setName] = useDndSpellsFilterName();
  const [classes, setClasses] = useDndSpellsFilterClasses();
  const [levels, setLevels] = useDndSpellsFilterLevels();
  const [view, setView] = useDndSpellsSettingView();
  const [zoom, setZoom] = useDndSpellsSettingZoom();

  const classesCollection = useMemo(() => {
    return createListCollection({
      items: dndClasses.map((dndClass) => ({
        label: i18n.t(`dnd.class.${dndClass}`),
        value: dndClass,
      })),
    });
  }, [i18n]);

  const viewCollection = useMemo(() => {
    const { full, compact, minimal, table } = dndSpellsView;
    return createListCollection({
      items: [
        { label: i18n.t("dnd.spell.view.full"), value: `${full}` },
        { label: i18n.t("dnd.spell.view.compact"), value: `${compact}` },
        { label: i18n.t("dnd.spell.view.minimal"), value: `${minimal}` },
        { label: i18n.t("dnd.spell.view.table"), value: `${table}` },
      ],
    });
  }, [i18n]);

  return (
    <VStack
      bgColor="bg"
      gap={0.25}
      position="sticky"
      shadow="sm"
      top={0}
      w="100%"
    >
      <Box maxW="64em" w="100%">
        <AppHeader />

        <VStack pb={2} px={1} w="100%">
          <HStack w="100%">
            <HStack w="100%">
              <Text>{i18n.t("dnd.spells.options.label.display")}</Text>
              <SelectSimple
                collection={viewCollection}
                defaultValue={[`${view}`]}
                flex={0}
                minW="11em"
                name="spells-view-setting"
                onValueChange={(e) => setView(+e.value[0] as DndSpellsView)}
                size="sm"
              />
              {view !== dndSpellsView.table && (
                <>
                  <Text>{i18n.t("dnd.spells.options.label.at")}</Text>
                  <NumberInput
                    defaultValue={`${zoom * 100}%`}
                    formatOptions={{ style: "percent" }}
                    inputProps={{ w: "6em" }}
                    max={2}
                    min={0.5}
                    name="spells-zoom-setting"
                    onValueChange={(e) => setZoom(e.valueAsNumber)}
                    size="sm"
                    step={0.1}
                  />
                  <Text>{i18n.t("dnd.spells.options.label.zoom")}</Text>
                </>
              )}
            </HStack>

            <HStack>
              <Button size="sm" variant="outline">
                {i18n.t("dnd.spells.options.button.deselect_all")}
              </Button>
              <Button size="sm" variant="outline">
                {i18n.t("dnd.spells.options.button.select_all")}
              </Button>
              <Button size="sm">
                {i18n.t("dnd.spells.options.button.export_selected")}
              </Button>
            </HStack>
          </HStack>

          <HStack w="100%">
            <Input
              defaultValue={name}
              name="spells-name-filter"
              onChange={(e) => setName(e.target.value)}
              placeholder={i18n.t("dnd.spells.options.input.name.placeholder")}
              size="sm"
            />
            <Select
              collection={levelsCollection}
              defaultValue={levels.map(String)}
              multiple
              name="spells-levels-filter"
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
              name="spells-classes-filter"
              onValueChange={(e) => setClasses(e.value as DndClass[])}
              placeholder={i18n.t(
                "dnd.spells.options.select.classes.placeholder",
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
  items: dndSpellLevels.map((level) => ({
    label: `${level}`,
    value: `${level}`,
  })),
});
