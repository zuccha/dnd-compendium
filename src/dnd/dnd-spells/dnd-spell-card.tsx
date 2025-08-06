import {
  Center,
  Flex,
  GridItem,
  HStack,
  SimpleGrid,
  Span,
  Text,
  VStack,
} from "@chakra-ui/react";
import { type ReactNode, memo } from "react";
import RichText from "../../components/ui/rich-text";
import useI18n from "../../i18n/use-i18n";
import type { DndSpell } from "../models/dnd-spell";
import useDndSpellLocalized from "./use-dnd-spell-localized";

export type DndSpellCardProps = {
  onClickSpell?: () => void;
  selected?: boolean;
  spell: DndSpell;
};

export const dndCardBackgroundColor = "orange.50";
export const dndCardBorderColor = "gray.700";
export const dndCardTextColor = "black";
export const dndCardTextColorInverted = "gray.50";

export const dndCardHeight = 21;
export const dndCardWidth = 15;

export default memo(function DndSpellCard({
  onClickSpell = () => {},
  selected = false,
  spell,
}: DndSpellCardProps) {
  const i18n = useI18n();

  const {
    castingTime,
    classes,
    components,
    duration,
    materials,
    name,
    range,
    school,
    source,
    text,
  } = useDndSpellLocalized(spell);

  const castingTimeLabel = i18n.t("dnd.spell.casting_time");
  const durationLabel = i18n.t("dnd.spell.duration");
  const rangeLabel = i18n.t("dnd.spell.range");
  const componentsLabel = i18n.t("dnd.spell.components");

  return (
    <VStack
      bgColor={dndCardBorderColor}
      borderRadius="0.75em"
      color={dndCardTextColor}
      fontFamily="Bookinsanity"
      gap="0.2em"
      h={`${dndCardHeight}em`}
      onClick={onClickSpell}
      outlineColor="border.info"
      outlineStyle="solid"
      outlineWidth={selected ? "0.25em" : 0}
      pb="0.5em"
      pt="0.625em"
      px="0.625em"
      w={`${dndCardWidth}em`}
    >
      <Flex fontFamily="Mr Eaves" fontWeight="bold" lineHeight={1} w="100%">
        <Flex
          alignItems="center"
          bgColor={dndCardBackgroundColor}
          borderColor={dndCardBackgroundColor}
          borderTopLeftRadius="0.375em"
          borderWidth="0.1em"
          flex={1}
          px="0.5em"
          py="0.25em"
        >
          <Text fontSize="1em">{name}</Text>
        </Flex>

        <Center
          bgColor={dndCardBorderColor}
          borderColor={dndCardBackgroundColor}
          borderTopRightRadius="0.375em"
          borderWidth="0.1em"
          color={dndCardTextColorInverted}
          px="0.5em"
          py="0.25em"
        >
          <Text fontSize="1em">{spell.level}</Text>
        </Center>
      </Flex>

      <HStack
        alignItems="start"
        color={dndCardTextColorInverted}
        fontFamily="Mr Eaves"
        fontSize="0.6em"
        justify="space-between"
        lineHeight={1}
        textTransform="lowercase"
        w="100%"
      >
        <Text>{classes}</Text>
        <Text>{school}</Text>
      </HStack>

      <SimpleGrid borderColor="" columns={2} gap="0.125em" w="100%">
        <GridCell label={castingTimeLabel} text={castingTime} />
        <GridCell label={rangeLabel} text={range} />
        <GridCell label={componentsLabel} text={components} />
        <GridCell label={durationLabel} text={duration} />
      </SimpleGrid>

      <Text
        color={dndCardTextColorInverted}
        fontFamily="Mr Eaves"
        fontSize="0.6em"
        lineHeight={1}
        textAlign="left"
        textTransform="lowercase"
        w="100%"
      >
        {materials}
      </Text>

      <VStack
        align="start"
        bgColor={dndCardBackgroundColor}
        flex={1}
        fontSize="0.625em"
        lineHeight={1.1}
        overflow="auto"
        px="0.5em"
        py="0.5em"
        w="100%"
      >
        <VStack align="flex-start" gap={1} w="full">
          {text.full.split("\n").map((paragraph, i) => (
            <RichText key={i} patterns={patterns} text={paragraph} />
          ))}
        </VStack>
      </VStack>

      <HStack
        color={dndCardTextColorInverted}
        fontFamily="Mr Eaves"
        fontSize="0.75em"
        gap={0}
        justify="space-between"
        lineHeight={1}
        textTransform="lowercase"
        w="100%"
      >
        <Text>{source.book}</Text>
        <Text>{source.page}</Text>
      </HStack>
    </VStack>
  );
});

function GridCell({ label, text }: { label: string; text: string }) {
  return (
    <GridItem
      bgColor={dndCardBackgroundColor}
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

const patterns = [
  {
    regex: /\*\*(.+?)\*\*/,
    render: (val: ReactNode) => <Span fontWeight="bold">{val}</Span>,
  },
  {
    regex: /_(.+?)_/,
    render: (val: ReactNode) => <Span fontStyle="italic">{val}</Span>,
  },
];
