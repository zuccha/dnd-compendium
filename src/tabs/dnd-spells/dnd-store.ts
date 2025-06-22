import { z } from "zod";
import {
  type DndClass,
  type DndSpellsView,
  dndClassSchema,
  dndSpellsView,
  dndSpellsViewSchema,
} from "../../models/dnd";
import useStore, {
  useStoreNumber,
  useStoreString,
} from "../../store/use-store";
import { range } from "../../utils/array";

//------------------------------------------------------------------------------
// Spells Filter Name
//------------------------------------------------------------------------------

export const useDndSpellsFilterName = () =>
  useStoreString("module[spells].filter.name", "");

//------------------------------------------------------------------------------
// Spells Filter Classes
//------------------------------------------------------------------------------

export const dndClasses = dndClassSchema.options;
export const dndClassesSchema = z.array(dndClassSchema);

export const useDndSpellsFilterClasses = () =>
  useStore<DndClass[]>(
    "module[spells].filter.classes",
    dndClasses,
    dndClassesSchema.parse,
  );

//------------------------------------------------------------------------------
// Spells Filter Levels
//------------------------------------------------------------------------------

export const dndSpellLevels = range(10);
export const dndSpellLevelsSchema = z.array(z.number());

export const useDndSpellsFilterLevels = () =>
  useStore<number[]>(
    "module[spells].filter.levels",
    dndSpellLevels,
    dndSpellLevelsSchema.parse,
  );

//------------------------------------------------------------------------------
// Spells Setting View
//------------------------------------------------------------------------------

export const useDndSpellsSettingView = () =>
  useStore<DndSpellsView>(
    "module[spells].setting.view",
    dndSpellsView.table,
    dndSpellsViewSchema.parse,
  );

//------------------------------------------------------------------------------
// Spells Setting Zoom
//------------------------------------------------------------------------------

export const useDndSpellsSettingZoom = () =>
  useStoreNumber("module[spells].setting.zoom", 1);
