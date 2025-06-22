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
import { type DndSpell, dndSpellsView } from "../../models/dnd";
import useDndSpellLocalized from "./use-dnd-spell-localized";

const remarkPlugins = [remarkGfm];

export type DndSpellCardProps = {
  spell: DndSpell;
  view: number;
};

function DndSpellCard({ spell, view }: DndSpellCardProps) {
  const i18n = useI18n();

  const {
    castingTime,
    classes,
    componentMaterials,
    components,
    description,
    duration,
    level,
    name,
    range,
    school,
    upgrade,
  } = useDndSpellLocalized(spell);

  const castingTimeLabel = i18n.t("dnd.spell.casting_time");
  const durationLabel = i18n.t("dnd.spell.duration");
  const rangeLabel = i18n.t("dnd.spell.range");
  const componentsLabel = i18n.t("dnd.spell.components");
  const upgradeLabel =
    spell.level === 0
      ? i18n.t("dnd.spell.upgrade.cantrip")
      : i18n.t("dnd.spell.upgrade.spell");

  return (
    <VStack
      bgColor="#444444"
      borderRadius="0.75em"
      color="black"
      fontFamily="Bookinsanity"
      gap="0.5em"
      h={view === dndSpellsView.full ? "21em" : undefined}
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

      <HStack
        color="white"
        fontFamily="Mr Eaves"
        fontSize="0.6em"
        justify="space-between"
        lineHeight={1}
        my="-0.5em"
        textTransform="lowercase"
        w="100%"
      >
        <Text>{classes}</Text>
      </HStack>

      {view >= dndSpellsView.compact && (
        <SimpleGrid borderColor="" columns={2} gap="0.125em" w="100%">
          <GridCell label={castingTimeLabel} text={castingTime} />
          <GridCell label={rangeLabel} text={range} />
          <GridCell label={componentsLabel} text={components} />
          <GridCell label={durationLabel} text={duration} />
          {view >= dndSpellsView.full && componentMaterials && (
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

      {view >= dndSpellsView.full && (
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
          <ReactMarkdown remarkPlugins={remarkPlugins}>
            {description}
          </ReactMarkdown>

          {upgrade && (
            <>
              <Text fontFamily="Mr Eaves" fontWeight="bold">
                {upgradeLabel}
              </Text>

              <ReactMarkdown remarkPlugins={remarkPlugins}>
                {upgrade}
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
          gap={0}
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
