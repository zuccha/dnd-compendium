import { useMemo } from "react";
import useI18n from "../../i18n/use-i18n";
import DndDataListTable, {
  type DndDataListTableColumn,
} from "../dnd-data/dnd-data-list-table";
import dndWeaponsStore from "./dnd-weapons-store";
import type { DndWeaponLocalized } from "./localize-dnd-weapon";

export default function DndWeaponsListTable() {
  const i18n = useI18n();

  const columns: DndDataListTableColumn<DndWeaponLocalized>[] = useMemo(
    () => [
      { header: i18n.t("dnd.weapon.name"), key: "name" },
      { header: i18n.t("dnd.weapon.damage"), key: "damage" },
      { header: i18n.t("dnd.weapon.properties"), key: "properties" },
      { header: i18n.t("dnd.weapon.mastery"), key: "mastery" },
      { header: i18n.t("dnd.weapon.weight"), key: "weight" },
      { header: i18n.t("dnd.weapon.cost"), key: "cost" },
    ],
    [i18n],
  );

  return (
    <DndDataListTable
      columns={columns}
      store={dndWeaponsStore}
      textKey="notes"
    />
  );
}
