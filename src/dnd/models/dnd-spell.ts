import { z } from "zod/v4";
import { i18nDistanceSchema } from "../../i18n/i18n-distance";
import { i18nStringSchema } from "../../i18n/i18n-string";
import { range } from "../../utils/array";
import { dndClassSchema } from "./dnd-class";
import { dndTimeSchema } from "./dnd-time";

//------------------------------------------------------------------------------
// Spell Level
//------------------------------------------------------------------------------

export const dndSpellLevelSchema = z.number().int().min(0).max(9);

export const dndSpellLevels = range(9);

export type DndSpellLevel = z.infer<typeof dndSpellLevelSchema>;

//------------------------------------------------------------------------------
// Spell School
//------------------------------------------------------------------------------

export const dndSpellSchoolSchema = z.enum([
  "abjuration",
  "conjuration",
  "divination",
  "enchantment",
  "evocation",
  "illusion",
  "necromancy",
  "transmutation",
]);

export const dndSpellSchools = dndSpellSchoolSchema.options;

export type DndSpellSchool = z.infer<typeof dndSpellSchoolSchema>;

//------------------------------------------------------------------------------
// Spell
//------------------------------------------------------------------------------

export const dndSpellSchema = z.object({
  castingTime: z.union([
    z.object({
      type: z.enum(["action", "bonus_action", "reaction"]),
    }),
    z.object({
      type: z.literal("time"),
      unit: dndTimeSchema,
      value: z.number(),
    }),
  ]),
  classes: z.array(dndClassSchema),
  components: z.object({
    m: z.boolean(),
    s: z.boolean(),
    v: z.boolean(),
  }),
  concentration: z.boolean(),
  duration: z.union([
    z.object({
      type: z.enum(["instantaneous", "until_dispelled", "special"]),
    }),
    z.object({
      type: z.literal("time"),
      unit: dndTimeSchema,
      upTo: z.boolean(),
      value: z.number(),
    }),
  ]),
  id: z.string(),
  level: dndSpellLevelSchema,
  materials: i18nStringSchema.optional(),
  name: i18nStringSchema,
  range: z.union([
    z.object({
      type: z.enum(["self", "touch", "sight", "unlimited", "special"]),
    }),
    z.intersection(
      z.object({ type: z.literal("distance") }),
      i18nDistanceSchema,
    ),
  ]),
  ritual: z.boolean(),
  school: dndSpellSchoolSchema,
  source: z.object({
    book: z.string(),
    page: z.number(),
  }),
  text: z.object({
    base: i18nStringSchema,
    upgrade: i18nStringSchema.optional(),
  }),
});

export type DndSpell = z.infer<typeof dndSpellSchema>;
