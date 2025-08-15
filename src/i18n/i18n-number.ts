import z from "zod/v4";
import type { I18nLanguage } from "./i18n-language";

export const i18nNumberSchema = z.object({
  en: z.number(),
  it: z.number().optional(),
});

export type I18nNumber = z.infer<typeof i18nNumberSchema>;

export function localizeI18nNumber(
  i18Number: I18nNumber,
  lang: I18nLanguage,
): number {
  return i18Number[lang] ?? i18Number.en;
}
