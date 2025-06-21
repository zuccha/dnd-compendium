import { useCallback, useMemo } from "react";
import type { LocalizationLanguage } from "../models/localization";
import dndI18n from "../i18n/dnd";
import genericI18n from "../i18n/generic";

function i(text: string, ...args: string[]) {
  return text.replace(/<(\d+)>/g, (_, index) => args[+index - 1] ?? "");
}

const i18n = {
  t: (
    context: Record<LocalizationLanguage, Record<string, string>>,
    lang: LocalizationLanguage,
    key: string
  ): string => {
    return context[lang]?.[key] ?? context.en[key] ?? "n/a";
  },
  tp: (
    context: Record<LocalizationLanguage, Record<string, string>>,
    lang: LocalizationLanguage,
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
    context: Record<LocalizationLanguage, Record<string, string>>,
    lang: LocalizationLanguage,
    key: string,
    ...args: string[]
  ): string => {
    const text = context[lang]?.[key] ?? context.en[key] ?? "n/a";
    return i(text, ...args);
  },
  tpi: (
    context: Record<LocalizationLanguage, Record<string, string>>,
    lang: LocalizationLanguage,
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

const genericContext = {
  en: { ...dndI18n.en, ...genericI18n.en },
  it: { ...dndI18n.it, ...genericI18n.it },
};

export default function useI18n() {
  const lang: LocalizationLanguage = "en";

  const t = useCallback(
    (key: string) => i18n.t(genericContext, lang, key),
    [lang]
  );

  const tp = useCallback(
    (key: string, count: number) => i18n.tp(genericContext, lang, key, count),
    [lang]
  );

  const ti = useCallback(
    (key: string, ...args: string[]) =>
      i18n.ti(genericContext, lang, key, ...args),
    [lang]
  );

  const tpi = useCallback(
    (key: string, count: number, ...args: string[]) =>
      i18n.tpi(genericContext, lang, key, count, ...args),
    [lang]
  );

  return useMemo(() => ({ lang, t, tp, ti, tpi }), [lang, t, tp, ti, tpi]);
}

export type I18n = ReturnType<typeof useI18n>;
