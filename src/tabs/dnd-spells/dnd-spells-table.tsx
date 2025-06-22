import { Table } from "@chakra-ui/react";
import { useMemo } from "react";
import useI18n from "../../i18n/use-i18n";
import type { DndSpell } from "../../models/dnd";
import { localizeDndSpell } from "./use-dnd-spell-localized";

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
        <Table.Row>
          <Table.ColumnHeader>{i18n.t("dnd.spell.name")}</Table.ColumnHeader>
          <Table.ColumnHeader>{i18n.t("dnd.spell.level")}</Table.ColumnHeader>
          <Table.ColumnHeader>
            {i18n.t("dnd.spell.magic_school")}
          </Table.ColumnHeader>
          <Table.ColumnHeader>
            {i18n.t("dnd.spell.casting_time")}
          </Table.ColumnHeader>
          <Table.ColumnHeader>{i18n.t("dnd.spell.range")}</Table.ColumnHeader>
          <Table.ColumnHeader>
            {i18n.t("dnd.spell.duration")}
          </Table.ColumnHeader>
          <Table.ColumnHeader>
            {i18n.t("dnd.spell.components@short")}
          </Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {localizedSpells.map((spell) => (
          <Table.Row key={spell.raw.id}>
            <Table.Cell>{spell.name}</Table.Cell>
            <Table.Cell>{spell.raw.level}</Table.Cell>
            <Table.Cell>{spell.school}</Table.Cell>
            <Table.Cell>{spell.castingTime}</Table.Cell>
            <Table.Cell>{spell.range}</Table.Cell>
            <Table.Cell>{spell.duration}</Table.Cell>
            <Table.Cell>{spell.components}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
