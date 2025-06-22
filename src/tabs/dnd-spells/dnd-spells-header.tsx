import {
  Box,
  HStack,
  Input,
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

        <HStack pb={2} px={1} w="100%">
          <Input
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={i18n.t("dnd.input.name.placeholder")}
            size="sm"
          />
          <Select
            collection={levelsCollection}
            defaultValue={levels.map(String)}
            multiple
            onValueChange={(e) => setLevels(e.value.map((v) => +v))}
            placeholder={i18n.t("dnd.selector.levels.placeholder")}
            size="sm"
          />
          <Select
            collection={classesCollection}
            defaultValue={classes}
            multiple
            onValueChange={(e) => setClasses(e.value as DndClass[])}
            placeholder={i18n.t("dnd.selector.classes.placeholder")}
            size="sm"
          />
          <SelectSimple
            collection={viewCollection}
            defaultValue={[`${view}`]}
            flex={0}
            minW="8em"
            onValueChange={(e) => setView(+e.value[0] as DndSpellsView)}
            size="sm"
          />
          <NumberInput
            defaultValue={`${zoom * 100}%`}
            formatOptions={{ style: "percent" }}
            inputProps={{ w: "6em" }}
            max={2}
            min={0.5}
            onValueChange={(e) => setZoom(e.valueAsNumber)}
            size="sm"
            step={0.1}
          />
        </HStack>
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
