import { useMemo } from "react";
import useLocalizationLanguage from "./use-localization-language";
import type { LocalizedString } from "../models/localization";

export default function useLocalizedString(
  localizedString: LocalizedString
): [string, boolean] {
  const localizationLanguage = useLocalizationLanguage();

  return useMemo(() => {
    if (typeof localizedString === "string") {
      return localizationLanguage === "en"
        ? [localizedString, true]
        : [localizedString, false];
    }

    return localizedString[localizationLanguage]
      ? [localizedString[localizationLanguage], true]
      : [localizedString.en, false];
  }, [localizedString, localizationLanguage]);
}
