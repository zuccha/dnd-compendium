import useStore from "../store/use-store";
import { type I18nLanguage, i18nLanguageSchema } from "./i18n-language";

export default function useI18nLanguage() {
  return useStore<I18nLanguage>(
    "i18n.language",
    "en",
    i18nLanguageSchema.parse,
  );
}
