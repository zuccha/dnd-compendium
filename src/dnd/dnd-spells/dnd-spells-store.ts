import { useCallback, useLayoutEffect, useState } from "react";
import { z } from "zod/v4";
import type { I18nLanguage } from "../../i18n/i18n-language";
import { i18nLanguageStore } from "../../i18n/use-i18n-language";
import { type NormalizedList, normalize } from "../../utils/normalized-list";
import { createObservable } from "../../utils/observable";
import { createStore } from "../../utils/store";
import { createStorePersistent } from "../../utils/store-persistent";
import {
  type DndSpell,
  dndClassSchema,
  dndClasses,
  dndSpellLevelSchema,
  dndSpellLevels,
  dndSpellSchema,
  dndSpellSchoolSchema,
} from "../models/dnd";
import {
  type View,
  type ViewSortBy,
  type ViewSortOrder,
  viewSchema,
} from "../models/view";

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
// Stores
//------------------------------------------------------------------------------

const defaultSpells = { byId: {}, ids: [] };

const spellsStore = createStore<NormalizedList<DndSpell>>(defaultSpells);

const spellsFiltersStore = createStorePersistent(
  "dnd.spells.filters",
  dndSpellsFiltersSchema.parse({}),
  dndSpellsFiltersSchema.parse,
);

const spellsViewStore = createStorePersistent(
  "dnd.spells.view",
  viewSchema.parse({}),
  viewSchema.parse,
);

const visibleSpellIdsStore = (() => {
  let visibleSpellIds: string[] = [];

  const { notify, subscribe } = createObservable<string[]>();

  const refresh = () => {
    const spells = spellsStore.get();
    const filters = spellsFiltersStore.get();
    const view = spellsViewStore.get();
    const lang = i18nLanguageStore.get();

    const isVisible = isDndSpellVisible(spells, filters);
    const compare = compareDndSpells(spells, view.sortBy, view.sortOrder, lang);
    visibleSpellIds = spells.ids.filter(isVisible).sort(compare);
    notify(visibleSpellIds);
  };

  spellsStore.subscribe(refresh);
  spellsFiltersStore.subscribe(refresh);
  spellsViewStore.subscribe(refresh);
  i18nLanguageStore.subscribe(refresh);

  refresh();

  const get = () => visibleSpellIds;

  return { get, subscribe };
})();

const selectedSpellIdsStore = createStore<string[]>([]);

//------------------------------------------------------------------------------
// Is Dnd Spell Visible
//------------------------------------------------------------------------------

function isDndSpellVisible(
  spells: NormalizedList<DndSpell>,
  filters: DndSpellsFilters,
) {
  return (id: string): boolean => {
    const spell = spells.byId[id];
    const containsName =
      spell.name.en.toLowerCase().includes(filters.name) ||
      !!spell.name.it?.toLowerCase().includes(filters.name);
    const containsClass = spell.classes.some((c) =>
      filters.classes.includes(c),
    );
    const containsSchool = !filters.school || spell.school === filters.school;
    const containsLevel = filters.levels.some((l) => spell.level === l);
    return containsName && containsClass && containsSchool && containsLevel;
  };
}

//------------------------------------------------------------------------------
// Compare Dnd Spells
//------------------------------------------------------------------------------

function compareDndSpells(
  spells: NormalizedList<DndSpell>,
  sortBy: ViewSortBy,
  sortOrder: ViewSortOrder,
  lang: I18nLanguage,
) {
  const value = sortOrder === "asc" ? 1 : -1;

  const compares: Record<string, (id1: string, id2: string) => number> = {
    level: (id1: string, id2: string): number => {
      const spell1 = spells.byId[id1];
      const spell2 = spells.byId[id2];
      if (spell1.level > spell2.level) return value;
      if (spell1.level < spell2.level) return -value;
      return 0;
    },
    name: (id1: string, id2: string): number => {
      const spell1 = spells.byId[id1];
      const spell2 = spells.byId[id2];
      const name1 = spell1.name[lang] ?? spell1.name.en;
      const name2 = spell2.name[lang] ?? spell2.name.en;
      if (name1 > name2) return value;
      if (name1 < name2) return -value;
      return 0;
    },
    school: (id1: string, id2: string): number => {
      const spell1 = spells.byId[id1];
      const spell2 = spells.byId[id2];
      if (spell1.school > spell2.school) return value;
      if (spell1.school < spell2.school) return -value;
      return 0;
    },
  };

  return compares[sortBy] ?? (() => 0);
}

//------------------------------------------------------------------------------
// Use Dnd Spells
//------------------------------------------------------------------------------

export function useDndSpells(): NormalizedList<DndSpell> {
  const [spells] = spellsStore.use();
  return spells;
}

//------------------------------------------------------------------------------
// Use Visible Dnd Spell Ids
//------------------------------------------------------------------------------

export function useVisibleDndSpellIds(): string[] {
  const [ids, setIds] = useState(visibleSpellIdsStore.get());
  useLayoutEffect(() => visibleSpellIdsStore.subscribe(setIds), []);
  return ids;
}

//------------------------------------------------------------------------------
// Use Dnd Spell
//------------------------------------------------------------------------------

export function useDndSpell(id: string): DndSpell {
  const [spells] = spellsStore.use();
  return spells.byId[id];
}

//------------------------------------------------------------------------------
// Use Is Dnd Spell Selected
//------------------------------------------------------------------------------

export function useIsDndSpellSelected(id: string): boolean {
  const [selectedSpellIds] = selectedSpellIdsStore.use();
  return selectedSpellIds.includes(id);
}

//------------------------------------------------------------------------------
// Use Selected Visible Spells Count
//------------------------------------------------------------------------------

export function useSelectedVisibleSpellsCount(): number {
  const visibleDndSpellIds = useVisibleDndSpellIds();
  const selectedSpellIds = selectedSpellIdsStore.useValue();
  return visibleDndSpellIds.filter((id) => selectedSpellIds.includes(id))
    .length;
}

//------------------------------------------------------------------------------
// Use Dnd Spells Filters
//------------------------------------------------------------------------------

export function useDndSpellsFilters(): [
  DndSpellsFilters,
  (partialFilters: Partial<DndSpellsFilters>) => void,
] {
  const [filters, setFilters] = spellsFiltersStore.use();

  const setPartialFilters = useCallback(
    (partialFilters: Partial<DndSpellsFilters>) => {
      console.log(partialFilters);
      setFilters((prev) => ({ ...prev, ...partialFilters }));
    },
    [setFilters],
  );

  return [filters, setPartialFilters];
}

//------------------------------------------------------------------------------
// Use Dnd Spells View
//------------------------------------------------------------------------------

export function useDndSpellsView(): [
  View,
  (partialView: Partial<View>) => void,
] {
  const [view, setView] = spellsViewStore.use();

  const setPartialView = useCallback(
    (partialView: Partial<View>) =>
      setView((prev) => ({ ...prev, ...partialView })),
    [setView],
  );

  return [view, setPartialView];
}

//------------------------------------------------------------------------------
// Fetch Dnd Spells
//------------------------------------------------------------------------------

export async function fetchDndSpells(): Promise<void> {
  const response = await fetch("/data/spells.json");
  const json = await response.json();
  const spells = z.array(dndSpellSchema).parse(json);
  spellsStore.set(normalize(spells, (spell) => spell.id));
}

//------------------------------------------------------------------------------
// Select Dnd Spell
//------------------------------------------------------------------------------

export function selectDndSpell(id: string): void {
  const selectedSpellIds = selectedSpellIdsStore.get();
  if (!selectedSpellIds.includes(id))
    selectedSpellIdsStore.set([...selectedSpellIds, id]);
}

//------------------------------------------------------------------------------
// Select All Visible Dnd Spells
//------------------------------------------------------------------------------

export function selectAllVisibleDndSpells() {
  // TODO.
}

//------------------------------------------------------------------------------
// Deselect Dnd Spell
//------------------------------------------------------------------------------

export function deselectDndSpell(id: string): void {
  const selectedSpellIds = selectedSpellIdsStore.get();
  if (selectedSpellIds.includes(id))
    selectedSpellIdsStore.set(selectedSpellIds.filter((other) => other !== id));
}

//------------------------------------------------------------------------------
// Deselect All Visible Dnd Spells
//------------------------------------------------------------------------------

export function deselectAllVisibleDndSpells() {
  // TODO.
}

//------------------------------------------------------------------------------
// Toggle Dnd Spell Selection
//------------------------------------------------------------------------------

export function toggleDndSpellSelection(id: string): void {
  const selectedSpellIds = selectedSpellIdsStore.get();
  if (selectedSpellIds.includes(id))
    selectedSpellIdsStore.set(selectedSpellIds.filter((other) => other !== id));
  else selectedSpellIdsStore.set([...selectedSpellIds, id]);
}
