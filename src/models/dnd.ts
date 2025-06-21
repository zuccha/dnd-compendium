import type { I18nDistance, I18nString } from "./localization";

//------------------------------------------------------------------------------
// Class
//------------------------------------------------------------------------------

export const DndClass = {
  barbarian: "barbarian",
  bard: "bard",
  cleric: "cleric",
  druid: "druid",
  fighter: "fighter",
  monk: "monk",
  paladin: "paladin",
  ranger: "ranger",
  rogue: "rogue",
  sorcerer: "sorcerer",
  warlock: "warlock",
  wizard: "wizard",
} as const;

export type DndClass = keyof typeof DndClass;

//------------------------------------------------------------------------------
// Spell School
//------------------------------------------------------------------------------

export const DndSpellSchool = {
  abjuration: "abjuration",
  conjuration: "conjuration",
  divination: "divination",
  enchantment: "enchantment",
  evocation: "evocation",
  illusion: "illusion",
  necromancy: "necromancy",
  transmutation: "transmutation",
} as const;

export type DndMagicSchool = keyof typeof DndSpellSchool;

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
