import {
  Box,
  HStack,
  Input,
  VStack,
  createListCollection,
} from "@chakra-ui/react";
import { useMemo } from "react";
import AppHeader from "../../components/app-header";
import Select from "../../components/ui/select";
import useI18n from "../../hooks/useI18n";
import { defaultClasses, defaultLevels } from "./constants";

export type DndSpellsHeaderProps = {
  onChangeClasses: (classes: string[]) => void;
  onChangeLevels: (levels: number[]) => void;
  onChangeName: (name: string) => void;
};

export default function DndSpellsHeader({
  onChangeClasses,
  onChangeLevels,
  onChangeName,
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

  return (
    <VStack
      position="sticky"
      w="100%"
      top={0}
      bgColor="bg"
      gap={0.25}
      shadow="sm"
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
            size="sm"
            defaultValue={defaultLevelsStr}
            onValueChange={(e) =>
              onChangeLevels(e.value.map((v) => parseInt(v)))
            }
            placeholder={i18n.t("dnd.selector.levels.placeholder")}
            multiple
          />
          <Select
            collection={classesCollection}
            size="sm"
            defaultValue={defaultClasses}
            onValueChange={(e) => onChangeClasses(e.value)}
            placeholder={i18n.t("dnd.selector.classes.placeholder")}
            multiple
          />
        </HStack>
      </Box>
    </VStack>
  );
}

const defaultLevelsStr = defaultLevels.map((l) => `${l}`);

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
