import { z } from "zod/v4";

//------------------------------------------------------------------------------
// Time
//------------------------------------------------------------------------------

export const dndTimeSchema = z.enum(["round", "minute", "hour", "day"]);

export type DndTime = z.infer<typeof dndTimeSchema>;
