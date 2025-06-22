import type { I18nLanguage } from "./i18n-language";

function i(text: string, ...args: string[]) {
  return text.replace(/<(\d+)>/g, (_, index) => args[+index - 1] ?? "");
}

const i18n = {
  t: (
    context: Record<I18nLanguage, Record<string, string>>,
    lang: I18nLanguage,
    key: string
  ): string => {
    return context[lang]?.[key] ?? context.en[key] ?? "n/a";
  },

  tp: (
    context: Record<I18nLanguage, Record<string, string>>,
    lang: I18nLanguage,
    key: string,
    count: number
  ): string => {
    return (
      context[lang]?.[`${key}/${count}`] ??
      context[lang]?.[`${key}/*`] ??
      context.en[`${key}/${count}`] ??
      context.en[`${key}/*`] ??
      "n/a"
    );
  },

  ti: (
    context: Record<I18nLanguage, Record<string, string>>,
    lang: I18nLanguage,
    key: string,
    ...args: string[]
  ): string => {
    const text = context[lang]?.[key] ?? context.en[key] ?? "n/a";
    return i(text, ...args);
  },

  tpi: (
    context: Record<I18nLanguage, Record<string, string>>,
    lang: I18nLanguage,
    key: string,
    count: number,
    ...args: string[]
  ): string => {
    const text =
      context[lang]?.[`${key}/${count}`] ??
      context[lang]?.[`${key}/*`] ??
      context.en[`${key}/${count}`] ??
      context.en[`${key}/*`] ??
      "n/a";
    return i(text, ...args);
  },
};

export default i18n;
