import z from "zod/v4";
import { i18nDistanceSchema } from "../../i18n/i18n-distance";
import { i18nStringSchema } from "../../i18n/i18n-string";
import { i18nWeightSchema } from "../../i18n/i18n-weight";
import { dndDamageTypeSchema } from "./dnd-damage-type";

//------------------------------------------------------------------------------
// Weapon Mastery
//------------------------------------------------------------------------------

export const dndWeaponMasterySchema = z.enum([
  "cleave",
  "graze",
  "nick",
  "push",
  "sap",
  "slow",
  "topple",
  "vex",
]);

export const dndWeaponMasteries = dndWeaponMasterySchema.options;

export type DndWeaponMastery = z.infer<typeof dndWeaponMasterySchema>;

//------------------------------------------------------------------------------
// Weapon Property
//------------------------------------------------------------------------------

export const dndWeaponPropertySchema = z.enum([
  "ammunition",
  "finesse",
  "heavy",
  "light",
  "loading",
  "range",
  "reach",
  "throw",
  "two-handed",
  "versatile",
]);

export const dndWeaponProperties = dndWeaponPropertySchema.options;

export type DndWeaponProperty = z.infer<typeof dndWeaponPropertySchema>;

//------------------------------------------------------------------------------
// Weapon Type
//------------------------------------------------------------------------------

export const dndWeaponTypeSchema = z.enum(["simple", "martial"]);

export const dndWeaponTypes = dndWeaponTypeSchema.options;

export type DndWeaponType = z.infer<typeof dndWeaponTypeSchema>;

//------------------------------------------------------------------------------
// Weapon
//------------------------------------------------------------------------------

export const dndWeaponSchema = z.object({
  cost: z.number(),
  damage: z.object({
    regular: z.string(),
    versatile: z.string().optional(),
  }),
  damageType: dndDamageTypeSchema,
  id: z.string(),
  magic: z.boolean(),
  mastery: dndWeaponMasterySchema,
  name: i18nStringSchema,
  notes: z.string(),
  properties: z.array(dndWeaponPropertySchema),
  range: z
    .object({ long: i18nDistanceSchema, short: i18nDistanceSchema })
    .optional(),
  source: z.object({
    book: z.string(),
    page: z.number(),
  }),
  type: dndWeaponTypeSchema,
  weight: i18nWeightSchema,
});

export type DndWeapon = z.infer<typeof dndWeaponSchema>;
