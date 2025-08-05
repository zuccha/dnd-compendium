import z from "zod/v4";

export const i18nLanguageMandatorySchema = z.literal("en");
export type I18nLanguageMandatory = z.infer<typeof i18nLanguageMandatorySchema>;

export const i18nLanguageOptionalSchema = z.literal("it");
export type I18nLanguageOptional = z.infer<typeof i18nLanguageOptionalSchema>;

export const i18nLanguageSchema = z.union([
  i18nLanguageMandatorySchema,
  i18nLanguageOptionalSchema,
]);

export type I18nLanguage = z.infer<typeof i18nLanguageSchema>;
