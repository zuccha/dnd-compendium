import z from "zod";

export const i18nDistanceImperialSchema = z.object({
  unit: z.enum(["foot", "mile"]),
  value: z.number(),
});

export const i18nDistanceMetricSchema = z.object({
  unit: z.enum(["cm", "m", "km"]),
  value: z.number(),
});

export const i18nDistanceSchema = z.object({
  en: i18nDistanceImperialSchema,
  it: i18nDistanceMetricSchema.optional(),
});

export type I18nDistance = z.infer<typeof i18nDistanceSchema>;
