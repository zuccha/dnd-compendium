import { HStack, Input, createListCollection } from "@chakra-ui/react";
import { useMemo } from "react";
import Select from "../../components/ui/select";
import useI18n from "../../i18n/use-i18n";
import { compareLabels } from "../../utils/select-collection";
import DndDataHeader from "../dnd-data/dnd-data-header";
import { type DndWeaponType, dndWeaponTypes } from "../models/dnd-weapon";
import dndWeaponsStore, { dndWeaponsOrderByItems } from "./dnd-weapons-store";

export default function DndWeaponsHeader() {
  const i18n = useI18n();
  const [filters, setFilters] = dndWeaponsStore.useFilters();

  const typesCollection = useMemo(() => {
    return createListCollection({
      items: dndWeaponTypes
        .map((type) => ({
          label: i18n.t(`dnd.weapon.type.${type}`),
          value: type,
        }))
        .sort(compareLabels),
    });
  }, [i18n]);

  const kindCollection = useMemo(() => {
    return createListCollection({
      items: ["non_magic", "magic"]
        .map((kind) => ({
          label: i18n.t(`dnd.weapon.kind.${kind}`),
          value: kind,
        }))
        .sort(compareLabels),
    });
  }, [i18n]);

  return (
    <DndDataHeader
      onLocalizeData={(weapon) => weapon}
      sortByItems={dndWeaponsOrderByItems}
      store={dndWeaponsStore}
    >
      <HStack w="100%">
        <Input
          defaultValue={filters.name}
          name="dnd-weapons-filters-name"
          onChange={(e) => setFilters({ name: e.target.value })}
          placeholder={i18n.t("dnd.weapons.filters.input.name.placeholder")}
          size="sm"
        />
        <Select
          collection={typesCollection}
          defaultValue={filters.types}
          multiple
          name="dnd-weapons-filters-classes"
          onValueChange={(e) =>
            setFilters({ types: e.value as DndWeaponType[] })
          }
          placeholder={i18n.t("dnd.weapons.filters.select.classes.placeholder")}
          size="sm"
        />
        <Select
          collection={kindCollection}
          defaultValue={filters.kind ? [filters.kind] : []}
          name="dnd-weapons-filters-kind"
          onValueChange={(e) =>
            setFilters({ kind: e.value?.[0] as "magic" | "non_magic" })
          }
          placeholder={i18n.t("dnd.weapons.filters.select.kind.placeholder")}
          size="sm"
        />
      </HStack>
    </DndDataHeader>
  );
}
