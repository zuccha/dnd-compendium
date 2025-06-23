import {
  Center,
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
import useDownloadableDiv from "../../hooks/use-downloadable-div";
import useI18n from "../../i18n/use-i18n";
import { type DndSpell, dndSpellsView } from "../../models/dnd";
import useDndSpellLocalized from "./use-dnd-spell-localized";

const remarkPlugins = [remarkGfm];

export type DndSpellCardProps = {
  spell: DndSpell;
  view: number;
};

const cardBorderColor = "gray.700";
const cardBackgroundColor = "orange.50";

const cardTextColor = "black";
const cardTextColorInverted = "gray.50";

function DndSpellCard({ spell, view }: DndSpellCardProps) {
  const i18n = useI18n();

  const {
    castingTime,
    classes,
    componentMaterials,
    components,
    description,
    duration,
    name,
    range,
    school,
    upgrade,
  } = useDndSpellLocalized(spell);

  const downloadableDiv = useDownloadableDiv(name, 2.5, 3.5, 1000);

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
      bgColor={cardBorderColor}
      borderRadius="0.75em"
      color={cardTextColor}
      fontFamily="Bookinsanity"
      gap="0.2em"
      h={view === dndSpellsView.full ? "21em" : undefined}
      onClick={downloadableDiv.downloadPng}
      pb="0.5em"
      pt="0.625em"
      px="0.625em"
      ref={downloadableDiv.ref}
      w="15em"
    >
      <Flex fontFamily="Mr Eaves" fontWeight="bold" lineHeight={1} w="100%">
        <Flex
          alignItems="center"
          bgColor={cardBackgroundColor}
          borderColor={cardBackgroundColor}
          borderTopLeftRadius="0.375em"
          borderWidth="0.1em"
          flex={1}
          px="0.5em"
          py="0.25em"
        >
          <Text fontSize="1em">{name}</Text>
        </Flex>

        <Center
          bgColor={cardBorderColor}
          borderColor={cardBackgroundColor}
          borderTopRightRadius="0.375em"
          borderWidth="0.1em"
          color={cardTextColorInverted}
          px="0.5em"
          py="0.25em"
        >
          <Text fontSize="1em">{spell.level}</Text>
        </Center>
      </Flex>

      <HStack
        alignItems="start"
        color={cardTextColorInverted}
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

      {view >= dndSpellsView.compact && (
        <SimpleGrid borderColor="" columns={2} gap="0.125em" w="100%">
          <GridCell label={castingTimeLabel} text={castingTime} />
          <GridCell label={rangeLabel} text={range} />
          <GridCell label={componentsLabel} text={components} />
          <GridCell label={durationLabel} text={duration} />
        </SimpleGrid>
      )}

      {view >= dndSpellsView.full && (
        <Text
          color={cardTextColorInverted}
          fontFamily="Mr Eaves"
          fontSize="0.6em"
          lineHeight={1}
          textAlign="left"
          textTransform="lowercase"
          w="100%"
        >
          {componentMaterials}
        </Text>
      )}

      {view >= dndSpellsView.full && (
        <VStack
          align="start"
          bgColor={cardBackgroundColor}
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

      <HStack
        color={cardTextColorInverted}
        fontFamily="Mr Eaves"
        fontSize="0.75em"
        gap={0}
        justify="space-between"
        lineHeight={1}
        textTransform="lowercase"
        w="100%"
      >
        <Text>{spell.source.book}</Text>
        <Text>{`p. ${spell.source.page}`}</Text>
      </HStack>
    </VStack>
  );
}

export default memo(DndSpellCard);

function GridCell({ label, text }: { label: string; text: string }) {
  return (
    <GridItem
      bgColor={cardBackgroundColor}
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
