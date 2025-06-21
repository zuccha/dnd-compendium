import { useContext } from "react";
import I18nLanguageContext, {
  type I18nLanguageContextType,
} from "./i18n-language-context";

export const useI18nLanguage = (): I18nLanguageContextType => {
  const ctx = useContext(I18nLanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};
