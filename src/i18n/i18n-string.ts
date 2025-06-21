import type {
  I18nLanguageMandatory,
  I18nLanguageOptional,
} from "./i18n-language";

export type I18nString = {
  [lang in I18nLanguageMandatory]: string;
} & Partial<Record<I18nLanguageOptional, string>>;
