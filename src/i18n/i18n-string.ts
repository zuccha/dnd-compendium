import z from "zod";

export const i18nStringSchema = z.object({
  en: z.string(),
  it: z.string().optional(),
});

export type I18nString = z.infer<typeof i18nStringSchema>;
