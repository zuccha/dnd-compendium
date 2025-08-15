import { z } from "zod/v4";
import type { I18nLanguage } from "../../i18n/i18n-language";
import { createDndDataStore } from "../dnd-data/dnd-data-store";
import {
  type DndWeapon,
  dndWeaponMasteries,
  dndWeaponMasterySchema,
  dndWeaponProperties,
  dndWeaponPropertySchema,
  dndWeaponSchema,
} from "../models/dnd-weapon";
import { dndWeaponTypeSchema, dndWeaponTypes } from "../models/dnd-weapon";
import { stateFilterSchema } from "../models/filter";
import { type ViewSortBy, type ViewSortOrder } from "../models/view";
import localizeDndWeapon from "./localize-dnd-weapon";

//------------------------------------------------------------------------------
// Dnd Weapons Order By Items
//------------------------------------------------------------------------------

export const dndWeaponsOrderByItems = ["name", "type", "weight", "cost"];

//------------------------------------------------------------------------------
// Dnd Weapons Filters
//------------------------------------------------------------------------------

export const dndWeaponsFiltersSchema = z.object({
  magic: stateFilterSchema.default("neutral"),
  masteries: z.array(dndWeaponMasterySchema).default(dndWeaponMasteries),
  melee: stateFilterSchema.default("neutral"),
  name: z.string().default(""),
  properties: z.array(dndWeaponPropertySchema).default(dndWeaponProperties),
  ranged: stateFilterSchema.default("neutral"),
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
  return (
    // Name
    (weapon.name.en.toLowerCase().includes(filters.name) ||
      !!weapon.name.it?.toLowerCase().includes(filters.name)) &&
    // Mastery
    filters.masteries.some((m) => weapon.mastery === m) &&
    // Properties
    (!weapon.properties.length ||
      filters.properties.some((p) => weapon.properties.includes(p))) &&
    // Magic
    {
      negative: !weapon.magic,
      neutral: true,
      positive: weapon.magic,
    }[filters.magic] &&
    // Melee
    {
      negative: !weapon.melee,
      neutral: true,
      positive: weapon.melee,
    }[filters.melee] &&
    // Ranged
    {
      negative: !weapon.ranged,
      neutral: true,
      positive: weapon.ranged,
    }[filters.ranged] &&
    // Type
    filters.types.some((t) => weapon.type === t)
  );
}

//------------------------------------------------------------------------------
// Store
//------------------------------------------------------------------------------

const dndWeaponsStore = createDndDataStore({
  compareData: compareDndWeapons,
  dataSchema: dndWeaponSchema,
  dataUrl: "/data/weapons.json",
  isDataVisible: isDndWeaponVisible,
  localizeData: localizeDndWeapon,
  parseFilters: dndWeaponsFiltersSchema.parse,
  storeId: "weapons",
});

export default dndWeaponsStore;
