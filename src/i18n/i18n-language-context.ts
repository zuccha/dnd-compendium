import { createContext } from "react";
import type { I18nLanguage } from "./i18n-language";

export type I18nLanguageContextType = {
  language: I18nLanguage;
  setLanguage: (lang: I18nLanguage) => void;
};

const I18nLanguageContext = createContext<I18nLanguageContextType | undefined>(
  undefined
);

export default I18nLanguageContext;
