import { z } from "zod";
import { i18nDistanceSchema } from "../i18n/i18n-distance";
import { i18nStringSchema } from "../i18n/i18n-string";

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
// Spell School
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

//------------------------------------------------------------------------------
// Spells View
//------------------------------------------------------------------------------

export const dndSpellsViewSchema = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
]);

export type DndSpellsView = (typeof dndSpellsView)[keyof typeof dndSpellsView];

/* eslint-disable sort-keys */
export const dndSpellsView = {
  minimal: 0,
  compact: 1,
  full: 2,
  table: 3,
} as const;
/* eslint-enable sort-keys */

//------------------------------------------------------------------------------
// Spell (Raw)
//------------------------------------------------------------------------------

export type DndSpellRaw = {
  casting_time: string;
  classes: DndClass[];
  components: {
    raw: string;
    somatic: boolean;
    verbal: boolean;
  } & (
    | {
        material: true;
        materials_needed: string[];
      }
    | {
        material: false;
      }
  );
  description: string;
  duration: string;
  higher_levels?: string;
  level: string;
  name: string;
  range: string;
  ritual: boolean;
  school: DndMagicSchool;
  tags: string[];
  type: string;
};

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
