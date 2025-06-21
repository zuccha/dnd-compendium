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
import { dndClassLocalization } from "../../data/dnd-localizations";
import useLocalizationLanguage from "../../hooks/use-localization-language";
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
  const lang = useLocalizationLanguage();

  const classesCollection = useMemo(() => {
    return createListCollection({
      items: [
        { label: dndClassLocalization[lang]["barbarian"], value: "barbarian" },
        { label: dndClassLocalization[lang]["bard"], value: "bard" },
        { label: dndClassLocalization[lang]["cleric"], value: "cleric" },
        { label: dndClassLocalization[lang]["druid"], value: "druid" },
        { label: dndClassLocalization[lang]["fighter"], value: "fighter" },
        { label: dndClassLocalization[lang]["monk"], value: "monk" },
        { label: dndClassLocalization[lang]["paladin"], value: "paladin" },
        { label: dndClassLocalization[lang]["ranger"], value: "ranger" },
        { label: dndClassLocalization[lang]["rogue"], value: "rogue" },
        { label: dndClassLocalization[lang]["sorcerer"], value: "sorcerer" },
        { label: dndClassLocalization[lang]["warlock"], value: "warlock" },
        { label: dndClassLocalization[lang]["wizard"], value: "wizard" },
      ],
    });
  }, [lang]);

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
            placeholder="Name"
            size="sm"
          />
          <Select
            collection={levelsCollection}
            size="sm"
            defaultValue={defaultLevelsStr}
            onValueChange={(e) =>
              onChangeLevels(e.value.map((v) => parseInt(v)))
            }
            placeholder={SelectPlaceholderLocalization[lang].levels}
            multiple
          />
          <Select
            collection={classesCollection}
            size="sm"
            defaultValue={defaultClasses}
            onValueChange={(e) => onChangeClasses(e.value)}
            placeholder={SelectPlaceholderLocalization[lang].classes}
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

const SelectPlaceholderLocalization = {
  en: {
    classes: "Select classes",
    levels: "Select levels",
  },
  it: {
    classes: "Seleziona classi",
    levels: "Seleziona livelli",
  },
};
