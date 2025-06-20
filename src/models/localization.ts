//------------------------------------------------------------------------------
// Localization Language
//------------------------------------------------------------------------------

export type MandatoryLocalizationLanguage = "en";

export type OptionalLocalizationLanguage = "it";

export type LocalizationLanguage =
  | MandatoryLocalizationLanguage
  | OptionalLocalizationLanguage;

//------------------------------------------------------------------------------
// Localized Distance
//------------------------------------------------------------------------------

export type LocalizedDistance = {
  [lang in MandatoryLocalizationLanguage]: {
    unit: "foot" | "mile";
    value: number;
  };
} & Partial<
  Record<
    OptionalLocalizationLanguage,
    { unit: "cm" | "m" | "km"; value: number }
  >
>;

//------------------------------------------------------------------------------
// Localized String
//------------------------------------------------------------------------------

export type LocalizedString = {
  [lang in MandatoryLocalizationLanguage]: string;
} & Partial<Record<OptionalLocalizationLanguage, string>>;
