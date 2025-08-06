import { z } from "zod/v4";

//------------------------------------------------------------------------------
// Damage Type
//------------------------------------------------------------------------------

export const dndDamageTypeSchema = z.enum([
  "acid",
  "bludgeoning",
  "cold",
  "fire",
  "force",
  "lightning",
  "necrotic",
  "piercing",
  "poison",
  "psychic",
  "radiant",
  "slashing",
  "thunder",
]);

export const dndDamageTypes = dndDamageTypeSchema.options;

export type DndDamageType = z.infer<typeof dndDamageTypeSchema>;
