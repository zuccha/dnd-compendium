import {
  HStack,
  Heading,
  type SelectValueChangeDetails,
  createListCollection,
} from "@chakra-ui/react";
import { useCallback, useMemo } from "react";
import SelectSimple from "./components/ui/select-simple";
import {
  type I18nDistanceSystem,
  i18nDistanceSystems,
} from "./i18n/i18n-distance";
import type { I18nLanguage } from "./i18n/i18n-language";
import useI18n from "./i18n/use-i18n";
import useI18nDistanceSystem from "./i18n/use-i18n-distance-system";
import useI18nLanguage from "./i18n/use-i18n-language";
import ThemeButton from "./theme/theme-button";
import { compareLabels } from "./utils/select-collection";

export default function AppHeader() {
  const i18n = useI18n();
  const [language, setLanguage] = useI18nLanguage();
  const [distanceSystem, setDistanceSystem] = useI18nDistanceSystem();

  const distanceSystemCollection = useMemo(() => {
    return createListCollection({
      items: i18nDistanceSystems
        .map((distanceSystem) => ({
          label: i18n.t(`generic.distance_system.${distanceSystem}`),
          value: distanceSystem,
        }))
        .sort(compareLabels),
    });
  }, [i18n]);

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

        <SelectSimple
          collection={distanceSystemCollection}
          defaultValue={[distanceSystem]}
          name="dnd-spells-options-distance-system"
          onValueChange={(e) =>
            setDistanceSystem(e.value?.[0] as I18nDistanceSystem)
          }
          size="sm"
          w="7em"
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
