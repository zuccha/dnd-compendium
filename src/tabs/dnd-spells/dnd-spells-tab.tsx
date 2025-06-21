import { Box, Flex, HStack, Input, VStack } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import AppHeader from "../../components/app-header";
import Select, { createListCollection } from "../../components/ui/select";
import { dndClassLocalization } from "../../data/dnd-localizations";
import dndSpells from "../../data/dnd-spells";
import useLocalizationLanguage from "../../hooks/use-localization-language";
import DndSpellCard from "./dnd-spell-card";

export default function DndSpellsTab() {
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

  const [name, setName] = useState("");
  const [classes, setClasses] = useState(defaultClasses);
  const [levels, setLevels] = useState(defaultLevels.map((l) => parseInt(l)));

  const filteredDnDSpells = useMemo(() => {
    const nameLowerCase = name.toLowerCase();

    return dndSpells
      .filter(
        (spell) =>
          spell.name.en.toLowerCase().includes(nameLowerCase) ||
          spell.name.it?.toLowerCase().includes(nameLowerCase)
      )
      .filter((spell) => spell.classes.some((c) => classes.includes(c)))
      .filter((spell) => levels.some((l) => spell.level === l));
  }, [classes, levels, name]);

  return (
    <VStack w="100%" position="relative">
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
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              size="sm"
            />
            <Select
              collection={levelsCollection}
              size="sm"
              defaultValue={defaultLevels}
              onValueChange={(e) => setLevels(e.value.map((v) => parseInt(v)))}
              placeholder={SelectPlaceholderLocalization[lang].levels}
              multiple
            />
            <Select
              collection={classesCollection}
              size="sm"
              defaultValue={defaultClasses}
              onValueChange={(e) => setClasses(e.value)}
              placeholder={SelectPlaceholderLocalization[lang].classes}
              multiple
            />
          </HStack>
        </Box>
      </VStack>

      <Flex wrap="wrap" gap={4} maxW="64em" w="100%" justifyContent="center">
        {filteredDnDSpells.map((spell) => (
          <DndSpellCard key={spell.name.en} spell={spell} />
        ))}
      </Flex>
    </VStack>
  );
}

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

const defaultClasses = [
  "barbarian",
  "bard",
  "cleric",
  "druid",
  "fighter",
  "monk",
  "paladin",
  "ranger",
  "rogue",
  "sorcerer",
  "warlock",
  "wizard",
];

const defaultLevels = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

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
