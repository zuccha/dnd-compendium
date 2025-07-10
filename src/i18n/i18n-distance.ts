import z from "zod";

export const i18nDistanceImperialSchema = z.object({
  unit: z.enum(["ft", "mi"]),
  value: z.number(),
});

export const i18nDistanceMetricSchema = z.object({
  unit: z.enum(["cm", "m", "km"]),
  value: z.number(),
});

export const i18nDistanceSchema = z.object({
  imperial: i18nDistanceImperialSchema,
  metric: i18nDistanceMetricSchema,
});

export type I18nDistance = z.infer<typeof i18nDistanceSchema>;

export const i18nDistanceSystemSchema = z.enum(["imperial", "metric"]);

export type I18nDistanceSystem = z.infer<typeof i18nDistanceSystemSchema>;

export const i18nDistanceSystems = i18nDistanceSystemSchema.options;
