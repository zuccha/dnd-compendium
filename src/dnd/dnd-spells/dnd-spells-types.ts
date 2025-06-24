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
      quantity: z.number(),
      type: z.literal("time"),
      unit: timeSchema,
    }),
  ]),
  classes: z.array(dndClassSchema),
  components: z.intersection(
    z.object({ somatic: z.boolean(), verbal: z.boolean() }),
    z.union([
      z.object({ material: z.literal(false) }),
      z.object({ material: z.literal(true), materials: i18nStringSchema }),
    ]),
  ),
  description: i18nStringSchema,
  duration: z.union([
    z.object({
      type: z.enum(["instantaneous", "until_dispelled", "special"]),
    }),
    z.object({
      concentration: z.boolean(),
      quantity: z.number(),
      type: z.literal("time"),
      unit: timeSchema,
      upTo: z.boolean(),
    }),
  ]),
  id: z.string(),
  level: z.number(),
  name: i18nStringSchema,
  range: z.union([
    z.object({
      type: z.enum(["self", "touch", "sight", "unlimited", "special"]),
    }),
    z.intersection(
      z.object({
        type: z.enum([
          "distance",
          "self_circle",
          "self_cone",
          "self_cube",
          "self_hemisphere",
          "self_line",
          "self_sphere",
        ]),
      }),
      i18nDistanceSchema,
    ),
  ]),
  ritual: z.boolean(),
  school: dndMagicSchoolSchema,
  source: z.object({
    book: z.string(),
    page: z.number(),
  }),
  upgrade: i18nStringSchema.optional(),
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

  view: dndSpellsOptionsViewSchema,
  zoom: z.number(),
});

export type DndSpellsOptions = z.infer<typeof dndSpellsOptionsSchema>;
