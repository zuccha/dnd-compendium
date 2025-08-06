import { z } from "zod/v4";

//------------------------------------------------------------------------------
// Class
//------------------------------------------------------------------------------

export const dndClassSchema = z.enum([
  "artificer",
  "barbarian",
  "bard",
  "cleric",
  "druid",
  "fighter",
  "monk",
  "paladin",
  "ranger",
  "rogue",
  "sorcerer",
  "warlock",
  "wizard",
]);

export const dndClasses = dndClassSchema.options;

export type DndClass = z.infer<typeof dndClassSchema>;
