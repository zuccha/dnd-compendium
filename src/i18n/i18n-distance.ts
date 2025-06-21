import type {
  I18nLanguageMandatory,
  I18nLanguageOptional,
} from "./i18n-language";

export type I18nDistance = {
  [lang in I18nLanguageMandatory]: {
    unit: "foot" | "mile";
    value: number;
  };
} & Partial<
  Record<I18nLanguageOptional, { unit: "cm" | "m" | "km"; value: number }>
>;
