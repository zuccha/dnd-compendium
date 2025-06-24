import z from "zod";

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

export type DndClass = z.infer<typeof dndClassSchema>;

//------------------------------------------------------------------------------
// Magic School
//------------------------------------------------------------------------------

export const dndMagicSchoolSchema = z.enum([
  "abjuration",
  "conjuration",
  "divination",
  "enchantment",
  "evocation",
  "illusion",
  "necromancy",
  "transmutation",
]);

export const dndMagicSchool = dndMagicSchoolSchema.options;

export type DndMagicSchool = z.infer<typeof dndMagicSchoolSchema>;
