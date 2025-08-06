import { useCallback, useMemo } from "react";
import dndI18n from "../dnd/dnd-i18n";
import i18n from "./i18n";
import genericI18n from "./i18n-data";
import useI18nLanguage from "./use-i18n-language";
import useI18nSystem from "./use-i18n-system";

const genericContext = {
  en: { ...dndI18n.en, ...genericI18n.en },
  it: { ...dndI18n.it, ...genericI18n.it },
};

export default function useI18n() {
  const [language] = useI18nLanguage();
  const [system] = useI18nSystem();

  const t = useCallback(
    (key: string) => i18n.t(genericContext, language, key),
    [language],
  );

  const tp = useCallback(
    (key: string, count: number) =>
      i18n.tp(genericContext, language, key, count),
    [language],
  );

  const ti = useCallback(
    (key: string, ...args: string[]) =>
      i18n.ti(genericContext, language, key, ...args),
    [language],
  );

  const tpi = useCallback(
    (key: string, count: number, ...args: string[]) =>
      i18n.tpi(genericContext, language, key, count, ...args),
    [language],
  );

  return useMemo(
    () => ({ language, system, t, ti, tp, tpi }),
    [system, language, t, tp, ti, tpi],
  );
}

export type I18n = ReturnType<typeof useI18n>;
