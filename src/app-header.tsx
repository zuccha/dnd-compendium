import {
  HStack,
  Heading,
  type SelectValueChangeDetails,
  createListCollection,
} from "@chakra-ui/react";
import { useCallback } from "react";
import SelectSimple from "./components/ui/select-simple";
import type { I18nLanguage } from "./i18n/i18n-language";
import useI18nLanguage from "./i18n/use-i18n-language";
import ThemeButton from "./theme/theme-button";

export default function AppHeader() {
  const [language, setLanguage] = useI18nLanguage();

  const handleLanguageChange = useCallback(
    (e: SelectValueChangeDetails) => {
      if (e.value.length > 0) setLanguage(e.value[0] as I18nLanguage);
    },
    [setLanguage],
  );

  return (
    <HStack justifyContent="space-between" px={1} py={2} w="100%">
      <Heading>DnD spells</Heading>

      <HStack>
        <SelectSimple
          collection={langCollection}
          onValueChange={handleLanguageChange}
          size="xs"
          value={[language]}
          w="4em"
        />

        <ThemeButton />
      </HStack>
    </HStack>
  );
}

const langCollection = createListCollection({
  items: [
    { label: "EN", value: "en" },
    { label: "IT", value: "it" },
  ],
});
