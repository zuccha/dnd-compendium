import { useMemo } from "react";
import useI18n from "../../i18n/use-i18n";
import DndDataListTable, {
  type DndDataListTableColumn,
} from "../dnd-data/dnd-data-list-table";
import dndSpellsStore from "./dnd-spells-store";
import type { DndSpellLocalized } from "./localize-dnd-spell";

export default function DndSpellsListTable() {
  const i18n = useI18n();

  const columns: DndDataListTableColumn<DndSpellLocalized>[] = useMemo(
    () => [
      { header: i18n.t("dnd.spell.name"), key: "name" },
      { header: i18n.t("dnd.spell.level"), key: "level" },
      { header: i18n.t("dnd.spell.school"), key: "school" },
      { header: i18n.t("dnd.spell.casting_time"), key: "castingTime" },
      { header: i18n.t("dnd.spell.range"), key: "range" },
      { header: i18n.t("dnd.spell.duration"), key: "duration" },
      {
        header: i18n.t("dnd.spell.components@short"),
        key: "components",
        style: { w: "5em" },
      },
    ],
    [i18n],
  );

  return (
    <DndDataListTable columns={columns} store={dndSpellsStore} textKey="text" />
  );
}
