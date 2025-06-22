import {
  Box,
  Flex,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { memo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import useI18n from "../../i18n/use-i18n";
import type { DndSpell } from "../../models/dnd";
import { DndSpellView } from "./constants";
import useLocalizedDndSpell from "./use-localized-dnd-spell";

const remarkPlugins = [remarkGfm];

export type DndSpellCardProps = {
  spell: DndSpell;
  view: number;
};

function DndSpellCard({ spell, view }: DndSpellCardProps) {
  const i18n = useI18n();

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
    classes,
  } = useLocalizedDndSpell(spell);

  const castingTimeLabel = i18n.t("dnd.spell.casting_time");
  const durationLabel = i18n.t("dnd.spell.duration");
  const rangeLabel = i18n.t("dnd.spell.range");
  const componentsLabel = i18n.t("dnd.spell.components");
  const higherLevelLabel = i18n.t("dnd.spell.higher_levels");

  return (
    <VStack
      bgColor="#444444"
      borderRadius="0.75em"
      color="black"
      fontFamily="Bookinsanity"
      gap="0.5em"
      h={view === DndSpellView.full ? "21em" : undefined}
      pb="0.5em"
      pt="0.625em"
      px="0.625em"
      w="15em"
    >
      <Flex
        bgColor="#dad5d5"
        borderTopRadius="0.375em"
        lineHeight={1}
        px="0.5em"
        py="0.25em"
        w="100%"
      >
        <Text fontFamily="Mr Eaves" fontSize="1em" fontWeight="bold">
          {name}
        </Text>
      </Flex>

      {view >= DndSpellView.compact && (
        <SimpleGrid borderColor="" columns={2} gap="0.125em" w="100%">
          <GridCell label={castingTimeLabel} text={castingTime} />
          <GridCell label={rangeLabel} text={range} />
          <GridCell label={componentsLabel} text={components} />
          <GridCell label={durationLabel} text={duration} />
          {view >= DndSpellView.full && componentMaterials && (
            <GridItem
              bgColor="#dad5d5"
              colSpan={2}
              gap="0.2em"
              lineHeight={1}
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
      )}

      {view >= DndSpellView.full && (
        <VStack
          align="start"
          bgColor="#dad5d5"
          flex={1}
          fontSize="0.625em"
          lineHeight={1.1}
          overflow="auto"
          px="0.5em"
          py="0.5em"
          w="100%"
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
      )}

      <VStack align="start" gap={0} w="100%">
        <HStack
          color="white"
          fontFamily="Mr Eaves"
          fontSize="0.75em"
          justify="space-between"
          lineHeight={1}
          mt="-0.25em"
          textTransform="lowercase"
          w="100%"
        >
          <Text>{classes}</Text>
        </HStack>

        <HStack
          color="white"
          fontFamily="Mr Eaves"
          fontSize="0.75em"
          justify="space-between"
          lineHeight={1}
          mt="-0.25em"
          textTransform="lowercase"
          w="100%"
        >
          <Text>{school}</Text>
          <Text>{level}</Text>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default memo(DndSpellCard);

function GridCell({ label, text }: { label: string; text: string }) {
  return (
    <GridItem
      bgColor="#dad5d5"
      gap="0.2em"
      lineHeight={1}
      px="0.5em"
      py="0.2em"
    >
      <Text fontFamily="Mr Eaves" fontSize="0.75em" textAlign="center">
        {label}
      </Text>
      <Text fontSize="0.625em" textAlign="center">
        {text}
      </Text>
    </GridItem>
  );
}
