import z from "zod/v4";

//------------------------------------------------------------------------------
// State Filter
//------------------------------------------------------------------------------

export const stateFilterSchema = z.enum(["neutral", "positive", "negative"]);

export const stateFilters = stateFilterSchema.options;

export type StateFilter = z.infer<typeof stateFilterSchema>;
