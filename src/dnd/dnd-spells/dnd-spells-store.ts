import { useCallback, useLayoutEffect, useState } from "react";
import { z } from "zod";
import { createObservable } from "../../utils/observable";
import { createObservableBydId } from "../../utils/observable-by-id";
import {
  StorePersistent,
  useStorePersistent,
} from "../../utils/store-persistent";
import { dndMagicSchoolSchema } from "../dnd-types";
import dndSpells from "./dnd-spells";
import {
  type DndSpell,
  type DndSpellsOptions,
  dndSpellsOptionsClasses,
  dndSpellsOptionsClassesSchema,
  dndSpellsOptionsLevels,
  dndSpellsOptionsLevelsSchema,
  dndSpellsOptionsViewSchema,
} from "./dnd-spells-types";

//------------------------------------------------------------------------------
// State
//------------------------------------------------------------------------------

const state = {
  ids: dndSpells.ids,
  selection: new Set<string>(),
};

//------------------------------------------------------------------------------
// Observables
//------------------------------------------------------------------------------

const { notify: notifyIds, subscribe: subscribeIds } =
  createObservable<string[]>();

const { notify: notifySelectionSize, subscribe: subscribeSelectionSize } =
  createObservable<number>();

const { notify: notifySpellSelected, subscribe: subscribeSpellSelected } =
  createObservableBydId<boolean>();

const { notify: notifySpellSelectedAny, subscribe: subscribeSpellSelectedAny } =
  createObservable<boolean>();

//------------------------------------------------------------------------------
// Is Visible
//------------------------------------------------------------------------------

function isVisible(id: string): boolean {
  const spell = dndSpells.byId[id];
  const name = optionsCache.name;
  const levels = optionsCache.levels;
  const classes = optionsCache.classes;
  const school = optionsCache.school;
  return Boolean(
    (spell.name.en.toLowerCase().includes(name) ||
      spell.name.it?.toLowerCase().includes(name)) &&
      spell.classes.some((c) => classes.includes(c)) &&
      (!school || spell.school === school) &&
      levels.some((l) => spell.level === l),
  );
}

//------------------------------------------------------------------------------
// Utils
//------------------------------------------------------------------------------

const idsSelected = (ids: string[]) =>
  ids.filter((id) => state.selection.has(id));

const idsUnselected = (ids: string[]) =>
  ids.filter((id) => !state.selection.has(id));

//------------------------------------------------------------------------------
// Use Dnd Spell Ids
//------------------------------------------------------------------------------

export function useDndSpellIds(): string[] {
  const [ids, setIds] = useState(state.ids);
  useLayoutEffect(() => subscribeIds(setIds), []);
  return ids;
}

//------------------------------------------------------------------------------
// Use Dnd Spell Ids Selected
//------------------------------------------------------------------------------

export function useDndSpellIdsSelected(): string[] {
  const [ids, setIds] = useState(() => idsSelected(state.ids));
  const getIdsSelected = () => setIds(idsSelected(state.ids));

  useLayoutEffect(() => subscribeIds(getIdsSelected), []);
  useLayoutEffect(() => subscribeSpellSelectedAny(getIdsSelected), []);

  return ids;
}

//------------------------------------------------------------------------------
// Use Dnd Spell
//------------------------------------------------------------------------------

export function useDndSpell(id: string): DndSpell {
  return dndSpells.byId[id];
}

//------------------------------------------------------------------------------
// Options Cache
//------------------------------------------------------------------------------

const optionsCache: DndSpellsOptions = {
  classes: [],
  levels: [],
  name: "",
  school: undefined,

  view: "table",
  zoom: 1,
};

//------------------------------------------------------------------------------
// Create Use Option
//------------------------------------------------------------------------------

function createUseOption<T>(
  id: string,
  defaultValue: T,
  parse: (maybeT: unknown) => T,
  setCache: (value: T) => void,
): () => [T, (nextValueOrUpdateValue: T | ((prevValue: T) => T)) => T] {
  setCache(StorePersistent.load(id, defaultValue, parse));

  return function useDndSpellsOptionsName() {
    const [option, setOption] = useStorePersistent<T>(id, defaultValue, parse);

    return [
      option,
      useCallback(
        (nextValueOrUpdateValue: T | ((prevValue: T) => T)): T => {
          const nextOption = setOption(nextValueOrUpdateValue);
          setCache(nextOption);
          const prevIds = state.ids;
          const nextIds = dndSpells.ids.filter(isVisible);
          state.ids = nextIds;
          notifyIds(nextIds);
          const prevSelectedIdsSize = idsSelected(prevIds).length;
          const nextSelectedIdsSize = idsSelected(nextIds).length;
          if (prevSelectedIdsSize !== nextSelectedIdsSize)
            notifySelectionSize(nextSelectedIdsSize);
          return nextOption;
        },
        [setOption],
      ),
    ];
  };
}

//------------------------------------------------------------------------------
// Use Dnd Spells Options Name
//------------------------------------------------------------------------------

export const useDndSpellsOptionsName = createUseOption(
  "dns.spells.options.name",
  "",
  z.string().parse,
  (name) => (optionsCache.name = name),
);

//------------------------------------------------------------------------------
// Use Dnd Spells Options Classes
//------------------------------------------------------------------------------

export const useDndSpellsOptionsClasses = createUseOption(
  "dns.spells.options.classes",
  dndSpellsOptionsClasses,
  dndSpellsOptionsClassesSchema.parse,
  (classes) => (optionsCache.classes = classes),
);

//------------------------------------------------------------------------------
// Use Dnd Spells Options School
//------------------------------------------------------------------------------

export const useDndSpellsOptionsSchool = createUseOption(
  "dns.spells.options.school",
  undefined,
  dndMagicSchoolSchema.parse,
  (school) => (optionsCache.school = school),
);

//------------------------------------------------------------------------------
// Use Dnd Spells Options Levels
//------------------------------------------------------------------------------

export const useDndSpellsOptionsLevels = createUseOption(
  "dns.spells.options.levels",
  dndSpellsOptionsLevels,
  dndSpellsOptionsLevelsSchema.parse,
  (levels) => (optionsCache.levels = levels),
);

//------------------------------------------------------------------------------
// Use Dnd Spells Options View
//------------------------------------------------------------------------------

export const useDndSpellsOptionsView = createUseOption(
  "dns.spells.options.view",
  "table",
  dndSpellsOptionsViewSchema.parse,
  (view) => (optionsCache.view = view),
);

//------------------------------------------------------------------------------
// Use Dnd Spells Options Zoom
//------------------------------------------------------------------------------

export const useDndSpellsOptionsZoom = createUseOption(
  "dns.spells.options.zoom",
  1,
  z.number().parse,
  (zoom) => (optionsCache.zoom = zoom),
);

//------------------------------------------------------------------------------
// Use Dnd Spells Selection Size
//------------------------------------------------------------------------------

export function useDndSpellsSelectionSize(): number {
  const [size, setSize] = useState(idsSelected(state.ids).length);
  useLayoutEffect(() => subscribeSelectionSize(setSize), []);
  return size;
}

//------------------------------------------------------------------------------
// Use Dnd Spells Deselect All
//------------------------------------------------------------------------------

export function useDndSpellsDeselectAll(): () => void {
  return useCallback(() => {
    if (state.selection.size > 0) {
      const selectedIds = Array.from(state.selection);
      const someVisible = selectedIds.some((id) => isVisible(id));
      state.selection.clear();
      selectedIds.forEach((id) => notifySpellSelected(id, false));
      if (selectedIds.length > 0) notifySpellSelectedAny(false);
      if (someVisible) notifySelectionSize(0);
    }
  }, []);
}

//------------------------------------------------------------------------------
// Use Dnd Spells Select All
//------------------------------------------------------------------------------

export function useDndSpellsSelectAll(): () => void {
  return useCallback(() => {
    const selectedIds = idsSelected(state.ids);
    if (selectedIds.length < state.ids.length) {
      const unselectedIds = idsUnselected(state.ids);

      unselectedIds.forEach((id) => {
        state.selection.add(id);
        notifySpellSelected(id, true);
        notifySpellSelectedAny(true);
      });
      notifySelectionSize(selectedIds.length + unselectedIds.length);
    }
  }, []);
}

//------------------------------------------------------------------------------
// Use Dnd Spell Selected
//------------------------------------------------------------------------------

export function useDndSpellSelected(id: string): boolean {
  const [selected, setSelected] = useState(state.selection.has(id));
  useLayoutEffect(() => subscribeSpellSelected(id, setSelected), [id]);
  return selected;
}

//------------------------------------------------------------------------------
// Use Dnd Spell Toggle Selection
//------------------------------------------------------------------------------

export function useDndSpellToggleSelection(id: string): () => void {
  return useCallback(() => {
    if (state.selection.has(id)) {
      state.selection.delete(id);
      notifySpellSelected(id, false);
      notifySpellSelectedAny(false);
    } else {
      state.selection.add(id);
      notifySpellSelected(id, true);
      notifySpellSelectedAny(true);
    }
    if (isVisible(id)) notifySelectionSize(idsSelected(state.ids).length);
  }, [id]);
}

//------------------------------------------------------------------------------
// Update Ids
//------------------------------------------------------------------------------

state.ids = dndSpells.ids.filter(isVisible);
