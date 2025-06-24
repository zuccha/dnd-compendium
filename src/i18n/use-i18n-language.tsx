import { useStorePersistent } from "../utils/store-persistent";
import { type I18nLanguage, i18nLanguageSchema } from "./i18n-language";

export default function useI18nLanguage() {
  return useStorePersistent<I18nLanguage>(
    "i18n.language",
    "en",
    i18nLanguageSchema.parse,
  );
}
