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
  defaultClasses,
  defaultLevels,
  defaultView,
  defaultZoom,
  SpellView,
} from "./constants";

export type DndSpellsHeaderProps = {
  onChangeClasses: (classes: string[]) => void;
  onChangeLevels: (levels: number[]) => void;
  onChangeName: (name: string) => void;
  onChangeView: (view: number) => void;
  onChangeZoom: (zoom: number) => void;
};

export default function DndSpellsHeader({
  onChangeClasses,
  onChangeLevels,
  onChangeName,
  onChangeView,
  onChangeZoom,
}: DndSpellsHeaderProps) {
  const i18n = useI18n();

  const classesCollection = useMemo(() => {
    return createListCollection({
      items: [
        { label: i18n.t("dnd.class.barbarian"), value: "barbarian" },
        { label: i18n.t("dnd.class.bard"), value: "bard" },
        { label: i18n.t("dnd.class.cleric"), value: "cleric" },
        { label: i18n.t("dnd.class.druid"), value: "druid" },
        { label: i18n.t("dnd.class.fighter"), value: "fighter" },
        { label: i18n.t("dnd.class.monk"), value: "monk" },
        { label: i18n.t("dnd.class.paladin"), value: "paladin" },
        { label: i18n.t("dnd.class.ranger"), value: "ranger" },
        { label: i18n.t("dnd.class.rogue"), value: "rogue" },
        { label: i18n.t("dnd.class.sorcerer"), value: "sorcerer" },
        { label: i18n.t("dnd.class.warlock"), value: "warlock" },
        { label: i18n.t("dnd.class.wizard"), value: "wizard" },
      ],
    });
  }, [i18n]);

  const viewCollection = useMemo(() => {
    return createListCollection({
      items: [
        {
          label: i18n.t("dnd.spell.view.full"),
          value: `${SpellView.full}`,
        },
        {
          label: i18n.t("dnd.spell.view.compact"),
          value: `${SpellView.compact}`,
        },
        {
          label: i18n.t("dnd.spell.view.minimal"),
          value: `${SpellView.minimal}`,
        },
        {
          label: i18n.t("dnd.spell.view.table"),
          value: `${SpellView.table}`,
        },
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

        <HStack w="100%" pb={2} px={1}>
          <Input
            onChange={(e) => onChangeName(e.target.value)}
            placeholder={i18n.t("dnd.input.name.placeholder")}
            size="sm"
          />
          <Select
            collection={levelsCollection}
            defaultValue={defaultLevelsAsStrings}
            multiple
            onValueChange={(e) => onChangeLevels(e.value.map((v) => +v))}
            placeholder={i18n.t("dnd.selector.levels.placeholder")}
            size="sm"
          />
          <Select
            collection={classesCollection}
            defaultValue={defaultClasses}
            multiple
            onValueChange={(e) => onChangeClasses(e.value)}
            placeholder={i18n.t("dnd.selector.classes.placeholder")}
            size="sm"
          />
          <SelectSimple
            collection={viewCollection}
            defaultValue={defaultViewAsList}
            flex={0}
            minW="8em"
            onValueChange={(e) => onChangeView(+e.value[0])}
            size="sm"
          />
          <NumberInput
            defaultValue={`${defaultZoom * 100}%`}
            formatOptions={{ style: "percent" }}
            max={2}
            min={0.5}
            onValueChange={(e) => onChangeZoom(e.valueAsNumber)}
            size="sm"
            step={0.1}
            w="6em"
          />
        </HStack>
      </Box>
    </VStack>
  );
}

const defaultLevelsAsStrings = defaultLevels.map((l) => `${l}`);

const defaultViewAsList = [`${defaultView}`];

const levelsCollection = createListCollection({
  items: [
    { label: "0", value: "0" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
  ],
});
