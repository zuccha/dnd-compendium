import z from "zod/v4";
import type { I18nLanguage } from "../../i18n/i18n-language";
import { createDndDataStore } from "../dnd-data/dnd-data-store";
import { dndClassSchema, dndClasses } from "../models/dnd-class";
import {
  type DndSpell,
  dndSpellLevelSchema,
  dndSpellLevels,
  dndSpellSchema,
  dndSpellSchoolSchema,
} from "../models/dnd-spell";
import type { ViewSortBy, ViewSortOrder } from "../models/view";

//------------------------------------------------------------------------------
// Dnd Spells Filters
//------------------------------------------------------------------------------

export const dndSpellsFiltersSchema = z.object({
  classes: z.array(dndClassSchema).default(dndClasses),
  levels: z.array(dndSpellLevelSchema).default(dndSpellLevels),
  name: z.string().default(""),
  school: dndSpellSchoolSchema.optional().default(undefined),
});

export type DndSpellsFilters = z.infer<typeof dndSpellsFiltersSchema>;

//------------------------------------------------------------------------------
// Compare Dnd Spells
//------------------------------------------------------------------------------

function compareDndSpells(
  spell1: DndSpell,
  spell2: DndSpell,
  sortBy: ViewSortBy,
  sortOrder: ViewSortOrder,
  lang: I18nLanguage,
) {
  const value = sortOrder === "asc" ? 1 : -1;

  switch (sortBy) {
    case "level": {
      if (spell1.level > spell2.level) return value;
      if (spell1.level < spell2.level) return -value;
      return 0;
    }
    case "name": {
      const name1 = spell1.name[lang] ?? spell1.name.en;
      const name2 = spell2.name[lang] ?? spell2.name.en;
      if (name1 > name2) return value;
      if (name1 < name2) return -value;
      return 0;
    }
    case "school": {
      if (spell1.school > spell2.school) return value;
      if (spell1.school < spell2.school) return -value;
      return 0;
    }
  }
  return 0;
}

//------------------------------------------------------------------------------
// Is Dnd Spell Visible
//------------------------------------------------------------------------------

function isDndSpellVisible(
  spell: DndSpell,
  filters: DndSpellsFilters,
): boolean {
  const containsName =
    spell.name.en.toLowerCase().includes(filters.name) ||
    !!spell.name.it?.toLowerCase().includes(filters.name);
  const containsClass = spell.classes.some((c) => filters.classes.includes(c));
  const containsSchool = !filters.school || spell.school === filters.school;
  const containsLevel = filters.levels.some((l) => spell.level === l);
  return containsName && containsClass && containsSchool && containsLevel;
}

//------------------------------------------------------------------------------
// Store
//------------------------------------------------------------------------------

const dndSpellsStore = createDndDataStore({
  compareData: compareDndSpells,
  dataSchema: dndSpellSchema,
  dataUrl: "/data/spells.json",
  isDataVisible: isDndSpellVisible,
  parseFilters: dndSpellsFiltersSchema.parse,
  storeId: "spells",
});

export default dndSpellsStore;
