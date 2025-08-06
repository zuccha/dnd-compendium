import z from "zod/v4";

export const i18nWeightImperialSchema = z.object({
  unit: z.enum(["lb"]),
  value: z.number(),
});

export const i18nWeightMetricSchema = z.object({
  unit: z.enum(["g", "kg"]),
  value: z.number(),
});

export const i18nWeightSchema = z.object({
  imperial: i18nWeightImperialSchema,
  metric: i18nWeightMetricSchema,
});

export type I18nWeight = z.infer<typeof i18nWeightSchema>;
