import {
  Box,
  Flex,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { memo, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { dndLabelLocalization } from "../../data/dnd-localizations";
import useLocalizationLanguage from "../../hooks/use-localization-language";
import type { DndSpell } from "../../models/dnd";
import localizeDndSpell from "../../utils/localize-dnd-spell";

const remarkPlugins = [remarkGfm];

export type DndSpellCardProps = {
  spell: DndSpell;
};

function DndSpellCard({ spell }: DndSpellCardProps) {
  const lang = useLocalizationLanguage();
  const {
    name,
    school,
    level,
    description,
    higherLevel,
    castingTime,
    reactionTo,
    duration,
    range,
    components,
    componentMaterials,
  } = useMemo(() => localizeDndSpell(spell, lang), [lang, spell]);

  const castingTimeLabel = dndLabelLocalization[lang].castingTime;
  const durationLabel = dndLabelLocalization[lang].duration;
  const rangeLabel = dndLabelLocalization[lang].range;
  const componentsLabel = dndLabelLocalization[lang].components;
  const higherLevelLabel = dndLabelLocalization[lang].higherLevel;

  return (
    <VStack
      w="15em"
      h="21em"
      bgColor="#444444"
      borderRadius="0.75em"
      px="0.625em"
      pt="0.625em"
      pb="0.5em"
      color="black"
      fontFamily="Bookinsanity"
      gap="0.5em"
    >
      <Flex
        bgColor="#dad5d5"
        w="100%"
        px="0.5em"
        py="0.25em"
        borderTopRadius="0.375em"
        lineHeight={1}
      >
        <Text fontFamily="Mr Eaves" fontSize="1em" fontWeight="bold">
          {name}
        </Text>
      </Flex>

      <SimpleGrid columns={2} w="100%" gap="0.125em" borderColor="">
        <GridCell label={castingTimeLabel} text={castingTime} />
        <GridCell label={rangeLabel} text={range} />
        <GridCell label={componentsLabel} text={components} />
        <GridCell label={durationLabel} text={duration} />
        {componentMaterials && (
          <GridItem
            colSpan={2}
            bgColor="#dad5d5"
            lineHeight={1}
            gap="0.2em"
            px="0.5em"
            py="0.2em"
          >
            <Box fontSize="0.625em">
              <ReactMarkdown remarkPlugins={remarkPlugins}>
                {componentMaterials}
              </ReactMarkdown>
            </Box>
          </GridItem>
        )}
      </SimpleGrid>

      <VStack
        overflow="auto"
        bgColor="#dad5d5"
        w="100%"
        px="0.5em"
        py="0.5em"
        fontSize="0.625em"
        lineHeight={1.1}
        flex={1}
        align="start"
      >
        {reactionTo && <Text>{reactionTo}</Text>}

        <ReactMarkdown remarkPlugins={remarkPlugins}>
          {description}
        </ReactMarkdown>

        {higherLevel && (
          <>
            <Text fontFamily="Mr Eaves" fontWeight="bold">
              {higherLevelLabel}
            </Text>

            <ReactMarkdown remarkPlugins={remarkPlugins}>
              {higherLevel}
            </ReactMarkdown>
          </>
        )}
      </VStack>

      <HStack
        color="white"
        justify="space-between"
        w="100%"
        fontFamily="Mr Eaves"
        fontSize="0.625em"
        lineHeight={1}
        mt="-0.25em"
      >
        <Text>{`${school}, ${level}`}</Text>
        <Text>D&D</Text>
      </HStack>
    </VStack>
  );
}

export default memo(DndSpellCard);

function GridCell({ label, text }: { label: string; text: string }) {
  return (
    <GridItem
      bgColor="#dad5d5"
      lineHeight={1}
      gap="0.2em"
      px="0.5em"
      py="0.2em"
    >
      <Text fontFamily="Mr Eaves" textAlign="center" fontSize="0.75em">
        {label}
      </Text>
      <Text fontSize="0.625em" textAlign="center">
        {text}
      </Text>
    </GridItem>
  );
}
