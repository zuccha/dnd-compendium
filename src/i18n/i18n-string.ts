import z from "zod/v4";
import type { I18nLanguage } from "./i18n-language";

export const i18nStringSchema = z.object({
  en: z.string(),
  it: z.string().optional(),
});

export type I18nString = z.infer<typeof i18nStringSchema>;

export function localizeI18nString(
  i18String: I18nString,
  lang: I18nLanguage,
): string {
  return i18String[lang] ?? i18String.en;
}
