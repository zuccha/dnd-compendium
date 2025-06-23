import { Checkbox, Flex, Table } from "@chakra-ui/react";
import { useMemo } from "react";
import useI18n from "../../i18n/use-i18n";
import type { DndSpell } from "../../models/dnd";
import {
  useDndSpellsSelectionContext,
  useDndSpellsSelectionCount,
  useDndSpellsSelectionSelected,
  useDndSpellsSelectionToggle,
} from "./dnd-spells-selection";
import {
  type DndSpellLocalized,
  localizeDndSpell,
} from "./use-dnd-spell-localized";

export type DndSpellsTableProps = {
  spells: DndSpell[];
};

export default function DndSpellsTable({ spells }: DndSpellsTableProps) {
  const i18n = useI18n();

  const localizedSpells = useMemo(() => {
    return spells.map((spell) => localizeDndSpell(spell, i18n));
  }, [i18n, spells]);

  return (
    <Table.Root interactive size="sm">
      <Table.Header>
        <DndSpellsTableHeader spells={spells} />
      </Table.Header>
      <Table.Body>
        {localizedSpells.map((spell) => (
          <DndSpellsTableRow key={spell.raw.id} spell={spell} />
        ))}
      </Table.Body>
    </Table.Root>
  );
}

function DndSpellsTableHeader({ spells }: { spells: DndSpell[] }) {
  const i18n = useI18n();
  const spellsSelection = useDndSpellsSelectionContext();
  const count = useDndSpellsSelectionCount();

  const selectedCount = useMemo(() => {
    return count > 0
      ? spells.reduce(
          (count, spell) =>
            spellsSelection.selected.has(spell.id) ? count + 1 : count,
          0,
        )
      : 0;
  }, [count, spells, spellsSelection.selected]);

  const allSelected = selectedCount === spells.length;

  const deselectAll = () => {
    spells.forEach((spell) => spellsSelection.deselect(spell.id));
  };

  const selectAll = () => {
    spells.forEach((spell) => spellsSelection.select(spell.id));
  };

  return (
    <Table.Row>
      <Table.ColumnHeader>
        <Flex alignItems="center">
          <Checkbox.Root
            checked={
              allSelected || (selectedCount > 0 ? "indeterminate" : false)
            }
            onCheckedChange={allSelected ? deselectAll : selectAll}
            position="static"
            size="sm"
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
          </Checkbox.Root>
        </Flex>
      </Table.ColumnHeader>
      <Table.ColumnHeader>{i18n.t("dnd.spell.name")}</Table.ColumnHeader>
      <Table.ColumnHeader>{i18n.t("dnd.spell.level")}</Table.ColumnHeader>
      <Table.ColumnHeader>
        {i18n.t("dnd.spell.magic_school")}
      </Table.ColumnHeader>
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

function DndSpellsTableRow({ spell }: { spell: DndSpellLocalized }) {
  const toggle = useDndSpellsSelectionToggle(spell.raw.id);
  const selected = useDndSpellsSelectionSelected(spell.raw.id);

  return (
    <Table.Row key={spell.raw.id}>
      <Table.Cell alignItems="center">
        <Flex alignItems="center">
          <Checkbox.Root
            checked={selected}
            onCheckedChange={toggle}
            position="static"
            size="sm"
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
          </Checkbox.Root>
        </Flex>
      </Table.Cell>
      <Table.Cell>{spell.name}</Table.Cell>
      <Table.Cell>{spell.raw.level}</Table.Cell>
      <Table.Cell>{spell.school}</Table.Cell>
      <Table.Cell>{spell.castingTime}</Table.Cell>
      <Table.Cell>{spell.range}</Table.Cell>
      <Table.Cell>{spell.duration}</Table.Cell>
      <Table.Cell>{spell.components}</Table.Cell>
    </Table.Row>
  );
}
