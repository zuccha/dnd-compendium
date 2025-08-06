import z from "zod/v4";

export const i18nSystemSchema = z.enum(["imperial", "metric"]);

export const i18nSystems = i18nSystemSchema.options;

export type I18nSystem = z.infer<typeof i18nSystemSchema>;
