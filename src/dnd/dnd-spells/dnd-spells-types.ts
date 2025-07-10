import { z } from "zod";
import { i18nDistanceSchema } from "../../i18n/i18n-distance";
import { i18nStringSchema } from "../../i18n/i18n-string";
import { range } from "../../utils/array";
import { dndClassSchema, dndMagicSchoolSchema } from "../dnd-types";

//------------------------------------------------------------------------------
// Spell
//------------------------------------------------------------------------------

const timeSchema = z.enum(["round", "minute", "hour", "day"]);

export const dndSpellSchema = z.object({
  castingTime: z.union([
    z.object({
      type: z.enum(["action", "bonus_action", "reaction"]),
    }),
    z.object({
      type: z.literal("time"),
      unit: timeSchema,
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
      unit: timeSchema,
      upTo: z.boolean(),
      value: z.number(),
    }),
  ]),
  id: z.string(),
  level: z.number(),
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
  school: dndMagicSchoolSchema,
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

//------------------------------------------------------------------------------
// Options - Classes
//------------------------------------------------------------------------------

export const dndSpellsOptionsClasses = dndClassSchema.options;

export const dndSpellsOptionsClassesSchema = z.array(dndClassSchema);

//------------------------------------------------------------------------------
// Options - Levels
//------------------------------------------------------------------------------

export const dndSpellsOptionsLevels = range(10);

export const dndSpellsOptionsLevelsSchema = z.array(z.number());

//------------------------------------------------------------------------------
// Options - View
//------------------------------------------------------------------------------

export const dndSpellsOptionsViewSchema = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
]);

/* eslint-disable sort-keys */
export const dndSpellsOptionsView = {
  minimal: 0,
  compact: 1,
  full: 2,
  table: 3,
} as const;
/* eslint-enable sort-keys */

export type DndSpellsOptionsView =
  (typeof dndSpellsOptionsView)[keyof typeof dndSpellsOptionsView];

//------------------------------------------------------------------------------
// Options
//------------------------------------------------------------------------------

export const dndSpellsOptionsSchema = z.object({
  classes: dndSpellsOptionsClassesSchema,
  levels: dndSpellsOptionsLevelsSchema,
  name: z.string(),
  school: dndMagicSchoolSchema.optional(),

  view: dndSpellsOptionsViewSchema,
  zoom: z.number(),
});

export type DndSpellsOptions = z.infer<typeof dndSpellsOptionsSchema>;
