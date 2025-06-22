import { useMemo, useState } from "react";
import type { I18nLanguage } from "./i18n-language";
import I18nLanguageContext from "./i18n-language-context";

export type I18nLanguageProviderProps = {
  children: React.ReactNode;
};

export default function I18nLanguageProvider({
  children,
}: I18nLanguageProviderProps) {
  const [language, setLanguage] = useState<I18nLanguage>("en");

  const languageValue = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage]
  );

  return (
    <I18nLanguageContext.Provider value={languageValue}>
      {children}
    </I18nLanguageContext.Provider>
  );
}
