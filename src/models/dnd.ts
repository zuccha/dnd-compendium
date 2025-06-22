import { z } from "zod";
import type { I18nDistance } from "../i18n/i18n-distance";
import type { I18nString } from "../i18n/i18n-string";

//------------------------------------------------------------------------------
// Class
//------------------------------------------------------------------------------

export const dndClassSchema = z.enum([
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

export type DndSpell = {
  name: I18nString;
  description: I18nString;
  higherLevel?: I18nString;
  level: number;
  classes: DndClass[];
  school: DndMagicSchool;
  castingTime:
    | {
        type: "action" | "bonus_action";
      }
    | {
        type: "time";
        unit: "minute" | "hour";
        quantity: number;
      }
    | {
        type: "reaction";
        reactionTo: I18nString;
      };
  ritual: boolean;
  duration:
    | {
        type: "instantaneous" | "until_dispelled" | "special";
      }
    | {
        type: "time";
        unit: "round" | "minute" | "hour" | "day";
        quantity: number;
        concentration: boolean;
        upTo: boolean;
      };
  range:
    | {
        type: "self" | "touch" | "sight" | "unlimited" | "special";
      }
    | ({
        type: "distance";
      } & I18nDistance)
    | ({
        type:
          | "self_circle"
          | "self_cone"
          | "self_cube"
          | "self_hemisphere"
          | "self_line"
          | "self_sphere";
      } & I18nDistance);
  components: {
    somatic: boolean;
    verbal: boolean;
  } & (
    | {
        material: false;
      }
    | {
        material: true;
        materials: I18nString[];
      }
  );
};
