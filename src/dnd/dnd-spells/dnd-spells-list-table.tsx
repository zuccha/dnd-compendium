import { Checkbox, Flex, Span, Table, VStack } from "@chakra-ui/react";
import { type ReactNode, useState } from "react";
import RichText from "../../components/ui/rich-text";
import useI18n from "../../i18n/use-i18n";
import DndSpellsListEmpty from "./dnd-spells-list-empty";
import dndSpellsStore from "./dnd-spells-store";

export default function DndSpellsListTable() {
  const spellIds = dndSpellsStore.useVisibleDataIds();

  if (spellIds.length === 0) return <DndSpellsListEmpty />;

  return (
    <Table.Root interactive size="sm">
      <Table.Header>
        <DndSpellsTableHeader size={spellIds.length} />
      </Table.Header>
      <Table.Body>
        {spellIds.map((id) => (
          <DndSpellsTableRow key={id} spellId={id} />
        ))}
      </Table.Body>
    </Table.Root>
  );
}

function DndSpellsTableHeader({ size }: { size: number }) {
  const i18n = useI18n();
  const count = dndSpellsStore.useSelectedVisibleDataCount();

  return (
    <Table.Row>
      <Table.ColumnHeader w="2em">
        <Flex alignItems="center">
          <Checkbox.Root
            checked={
              count === size ? true : count === 0 ? false : "indeterminate"
            }
            onCheckedChange={
              count === size
                ? dndSpellsStore.deselectAllVisibleData
                : dndSpellsStore.selectAllVisibleData
            }
            position="static"
            size="sm"
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label />
          </Checkbox.Root>
        </Flex>
      </Table.ColumnHeader>
      <Table.ColumnHeader>{i18n.t("dnd.spell.name")}</Table.ColumnHeader>
      <Table.ColumnHeader>{i18n.t("dnd.spell.level")}</Table.ColumnHeader>
      <Table.ColumnHeader>{i18n.t("dnd.spell.school")}</Table.ColumnHeader>
      <Table.ColumnHeader>
        {i18n.t("dnd.spell.casting_time")}
      </Table.ColumnHeader>
      <Table.ColumnHeader>{i18n.t("dnd.spell.range")}</Table.ColumnHeader>
      <Table.ColumnHeader>{i18n.t("dnd.spell.duration")}</Table.ColumnHeader>
      <Table.ColumnHeader w="5em">
        {i18n.t("dnd.spell.components@short")}
      </Table.ColumnHeader>
    </Table.Row>
  );
}

function DndSpellsTableRow({ spellId }: { spellId: string }) {
  const spellLocalized = dndSpellsStore.useLocalizedData(spellId);
  const selected = dndSpellsStore.useIsDataSelected(spellId);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Table.Row onClick={() => setExpanded((prev) => !prev)}>
        <Table.Cell alignItems="center">
          <Flex alignItems="center">
            <Checkbox.Root
              checked={selected}
              onCheckedChange={() =>
                dndSpellsStore.toggleDataSelection(spellId)
              }
              onClick={(e) => e.stopPropagation()}
              position="static"
              size="sm"
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label />
            </Checkbox.Root>
          </Flex>
        </Table.Cell>
        <Table.Cell>{spellLocalized.name}</Table.Cell>
        <Table.Cell>{spellLocalized.level}</Table.Cell>
        <Table.Cell>{spellLocalized.school}</Table.Cell>
        <Table.Cell>{spellLocalized.castingTime}</Table.Cell>
        <Table.Cell>{spellLocalized.range}</Table.Cell>
        <Table.Cell>{spellLocalized.duration}</Table.Cell>
        <Table.Cell>{spellLocalized.components}</Table.Cell>
      </Table.Row>

      {expanded && (
        <Table.Row>
          <Table.Cell colSpan={8}>
            <VStack align="flex-start" gap={1} w="full">
              {spellLocalized.text.split("\n").map((paragraph, i) => (
                <RichText key={i} patterns={patterns} text={paragraph} />
              ))}
            </VStack>
          </Table.Cell>
        </Table.Row>
      )}
    </>
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
