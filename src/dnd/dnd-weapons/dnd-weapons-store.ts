import { z } from "zod/v4";
import type { I18nLanguage } from "../../i18n/i18n-language";
import { createDndDataStore } from "../dnd-data/dnd-data-store";
import { type DndWeapon, dndWeaponSchema } from "../models/dnd-weapon";
import { dndWeaponTypeSchema, dndWeaponTypes } from "../models/dnd-weapon";
import { type ViewSortBy, type ViewSortOrder } from "../models/view";

//------------------------------------------------------------------------------
// Dnd Weapons Order By Items
//------------------------------------------------------------------------------

export const dndWeaponsOrderByItems = ["name", "type", "weight", "cost"];

//------------------------------------------------------------------------------
// Dnd Weapons Filters
//------------------------------------------------------------------------------

export const dndWeaponsFiltersSchema = z.object({
  kind: z.enum(["non_magic", "magic"]).optional().default(undefined),
  name: z.string().default(""),
  types: z.array(dndWeaponTypeSchema).default(dndWeaponTypes),
});

export type DndWeaponsFilters = z.infer<typeof dndWeaponsFiltersSchema>;

//------------------------------------------------------------------------------
// Compare Dnd Weapons
//------------------------------------------------------------------------------

function compareDndWeapons(
  weapon1: DndWeapon,
  weapon2: DndWeapon,
  sortBy: ViewSortBy,
  sortOrder: ViewSortOrder,
  lang: I18nLanguage,
) {
  const value = sortOrder === "asc" ? 1 : -1;

  switch (sortBy) {
    case "cost": {
      if (weapon1.cost > weapon2.cost) return value;
      if (weapon1.cost < weapon2.cost) return -value;
      return 0;
    }
    case "name": {
      const name1 = weapon1.name[lang] ?? weapon1.name.en;
      const name2 = weapon2.name[lang] ?? weapon2.name.en;
      if (name1 > name2) return value;
      if (name1 < name2) return -value;
      return 0;
    }
    case "type": {
      if (weapon1.type > weapon2.type) return value;
      if (weapon1.type < weapon2.type) return -value;
      return 0;
    }
    case "weight": {
      const weight1 =
        weapon1.weight.metric.unit === "kg"
          ? weapon1.weight.metric.value
          : weapon1.weight.metric.value * 1000;
      const weight2 =
        weapon2.weight.metric.unit === "kg"
          ? weapon2.weight.metric.value
          : weapon2.weight.metric.value * 1000;
      if (weight1 > weight2) return value;
      if (weight1 < weight2) return -value;
      return 0;
    }
  }
  return 0;
}

//------------------------------------------------------------------------------
// Is Dnd Weapon Visible
//------------------------------------------------------------------------------

function isDndWeaponVisible(
  weapon: DndWeapon,
  filters: DndWeaponsFilters,
): boolean {
  const containsName =
    weapon.name.en.toLowerCase().includes(filters.name) ||
    !!weapon.name.it?.toLowerCase().includes(filters.name);
  const containsKind =
    !filters.kind || (weapon.magic && filters.kind === "magic");
  const containsType = filters.types.some((t) => weapon.type === t);
  return containsName && containsKind && containsType;
}

//------------------------------------------------------------------------------
// Store
//------------------------------------------------------------------------------

const dndWeaponsStore = createDndDataStore({
  compareData: compareDndWeapons,
  dataSchema: dndWeaponSchema,
  dataUrl: "/data/weapons.json",
  isDataVisible: isDndWeaponVisible,
  parseFilters: dndWeaponsFiltersSchema.parse,
  storeId: "weapons",
});

export default dndWeaponsStore;
