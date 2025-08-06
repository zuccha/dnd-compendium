import { HStack, Input, createListCollection } from "@chakra-ui/react";
import { useMemo } from "react";
import Select from "../../components/ui/select";
import useI18n from "../../i18n/use-i18n";
import { compareLabels } from "../../utils/select-collection";
import DndDataHeader from "../dnd-data/dnd-data-header";
import {
  type DndWeaponMastery,
  type DndWeaponProperty,
  type DndWeaponType,
  dndWeaponMasteries,
  dndWeaponProperties,
  dndWeaponTypes,
} from "../models/dnd-weapon";
import dndWeaponsStore, {
  type DndWeaponsRangeFilter,
  dndWeaponsOrderByItems,
  dndWeaponsRangeFilters,
} from "./dnd-weapons-store";

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

  const masteriesCollection = useMemo(() => {
    return createListCollection({
      items: dndWeaponMasteries
        .map((type) => ({
          label: i18n.t(`dnd.weapon.mastery.${type}`),
          value: type,
        }))
        .sort(compareLabels),
    });
  }, [i18n]);

  const propertiesCollection = useMemo(() => {
    return createListCollection({
      items: dndWeaponProperties
        .map((type) => ({
          label: i18n.t(`dnd.weapon.property.${type}`),
          value: type,
        }))
        .sort(compareLabels),
    });
  }, [i18n]);

  const rangeCollection = useMemo(() => {
    return createListCollection({
      items: dndWeaponsRangeFilters.map((type) => ({
        label: i18n.t(`dnd.weapons.filters.range.${type}`),
        value: type,
      })),
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
          name="dnd-weapons-filters-types"
          onValueChange={(e) =>
            setFilters({ types: e.value as DndWeaponType[] })
          }
          placeholder={i18n.t("dnd.weapons.filters.select.types.placeholder")}
          size="sm"
        />
        <Select
          collection={propertiesCollection}
          defaultValue={filters.properties}
          multiple
          name="dnd-weapons-filters-properties"
          onValueChange={(e) =>
            setFilters({ properties: e.value as DndWeaponProperty[] })
          }
          placeholder={i18n.t(
            "dnd.weapons.filters.select.properties.placeholder",
          )}
          size="sm"
        />
        <Select
          collection={masteriesCollection}
          defaultValue={filters.masteries}
          multiple
          name="dnd-weapons-filters-masteries"
          onValueChange={(e) =>
            setFilters({ masteries: e.value as DndWeaponMastery[] })
          }
          placeholder={i18n.t(
            "dnd.weapons.filters.select.masteries.placeholder",
          )}
          size="sm"
        />
        <Select
          collection={rangeCollection}
          defaultValue={[filters.range]}
          name="dnd-weapons-filters-range"
          onValueChange={(e) =>
            setFilters({ range: e.value[0] as DndWeaponsRangeFilter })
          }
          size="sm"
        />
      </HStack>
    </DndDataHeader>
  );
}
