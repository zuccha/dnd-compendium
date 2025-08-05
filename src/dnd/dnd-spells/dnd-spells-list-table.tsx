import { Checkbox, Flex, Table } from "@chakra-ui/react";
import useI18n from "../../i18n/use-i18n";
import DndSpellsListEmpty from "./dnd-spells-list-empty";
import {
  deselectAllVisibleDndSpells,
  selectAllVisibleDndSpells,
  toggleDndSpellSelection,
  useDndSpell,
  useIsDndSpellSelected,
  useSelectedVisibleSpellsCount,
  useVisibleDndSpellIds,
} from "./dnd-spells-store";
import useDndSpellLocalized from "./use-dnd-spell-localized";

export default function DndSpellsListTable() {
  const spellIds = useVisibleDndSpellIds();

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
  const count = useSelectedVisibleSpellsCount();

  return (
    <Table.Row>
      <Table.ColumnHeader>
        <Flex alignItems="center">
          <Checkbox.Root
            checked={
              count === size ? true : count === 0 ? false : "indeterminate"
            }
            onCheckedChange={
              count === size
                ? deselectAllVisibleDndSpells
                : selectAllVisibleDndSpells
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
      <Table.ColumnHeader>
        {i18n.t("dnd.spell.components@short")}
      </Table.ColumnHeader>
    </Table.Row>
  );
}

function DndSpellsTableRow({ spellId }: { spellId: string }) {
  const spell = useDndSpell(spellId);
  const spellLocalized = useDndSpellLocalized(spell);

  const selected = useIsDndSpellSelected(spellId);

  return (
    <Table.Row>
      <Table.Cell alignItems="center">
        <Flex alignItems="center">
          <Checkbox.Root
            checked={selected}
            onCheckedChange={() => toggleDndSpellSelection(spellId)}
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
  );
}
