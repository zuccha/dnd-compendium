import {
  Box,
  HStack,
  type SelectValueChangeDetails,
  StackSeparator,
  Text,
  VStack,
  createListCollection,
} from "@chakra-ui/react";
import { type ReactNode, useCallback, useMemo } from "react";
import SelectSimple from "./components/ui/select-simple";
import { dndTabIds, useSelectedDndTabId } from "./dnd/dnd-tabs";
import type { I18nLanguage } from "./i18n/i18n-language";
import { type I18nSystem, i18nSystems } from "./i18n/i18n-system";
import useI18n from "./i18n/use-i18n";
import useI18nLanguage from "./i18n/use-i18n-language";
import useI18nSystem from "./i18n/use-i18n-system";
import ThemeButton from "./theme/theme-button";
import { compareObjects } from "./utils/object";
import { compareLabels } from "./utils/select-collection";

export type AppHeaderProps = {
  children: ReactNode;
};

export default function AppHeader({ children }: AppHeaderProps) {
  const i18n = useI18n();
  const [language, setLanguage] = useI18nLanguage();
  const [system, setSystem] = useI18nSystem();
  const [selectedTabId, setSelectedTabId] = useSelectedDndTabId();

  const systemCollection = useMemo(() => {
    return createListCollection({
      items: i18nSystems
        .map((system) => ({
          label: i18n.t(`generic.system.${system}`),
          value: system,
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

  const dndTabInfos = dndTabIds
    .map((id) => ({ id, label: i18n.t(`dnd.tab.${id}`) }))
    .sort(compareObjects("label"));

  return (
    <VStack bgColor="bg" gap={0.25} shadow="sm" top={0} w="100%" zIndex={1}>
      <Box maxW="64em" w="100%">
        <HStack justifyContent="space-between" px={1} py={2} w="100%">
          <HStack fontWeight="bold" separator={<StackSeparator />}>
            {dndTabInfos.sort().map(({ id, label }) =>
              id === selectedTabId ? (
                <Text key={id}>{label}</Text>
              ) : (
                <Text
                  color="fg.info"
                  cursor="pointer"
                  key={id}
                  onClick={() => setSelectedTabId(id)}
                >
                  {label}
                </Text>
              ),
            )}
          </HStack>

          <HStack>
            <SelectSimple
              collection={langCollection}
              onValueChange={handleLanguageChange}
              size="sm"
              value={[language]}
              w="4em"
            />

            <SelectSimple
              collection={systemCollection}
              defaultValue={[system]}
              name="i18n-system"
              onValueChange={(e) => setSystem(e.value?.[0] as I18nSystem)}
              size="sm"
              w="7em"
            />

            <ThemeButton />
          </HStack>
        </HStack>

        {children}
      </Box>
    </VStack>
  );
}

const langCollection = createListCollection({
  items: [
    { label: "EN", value: "en" },
    { label: "IT", value: "it" },
  ],
});
