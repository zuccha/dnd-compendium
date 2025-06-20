import {
  dndTimeUnitPluralLocalization,
  dndTimeUnitSingularLocalization,
  dndDistanceUnitSingularLocalization,
  dndDistanceUnitPluralLocalization,
  dndSpellSchoolLocalization,
  dndClassLocalization,
} from "../data/dnd-localizations";
import type { DndSpell } from "../models/dnd";
import type {
  LocalizedString,
  LocalizationLanguage,
  LocalizedDistance,
} from "../models/localization";

function localizeString(
  localizedString: LocalizedString,
  lang: LocalizationLanguage
): string {
  return localizedString[lang] ?? localizedString.en;
}

function localizeTimeUnit(
  time: "round" | "minute" | "hour" | "day",
  plural: boolean,
  lang: LocalizationLanguage
): string {
  return plural
    ? dndTimeUnitPluralLocalization[lang][time]
    : dndTimeUnitSingularLocalization[lang][time];
}

function localizeDistance(
  distance: LocalizedDistance,
  lang: LocalizationLanguage
): string {
  const localizedDistance = distance[lang] ?? distance.en;

  return localizedDistance.value === 1
    ? `${localizedDistance.value} ${dndDistanceUnitSingularLocalization[lang][localizedDistance.unit]}`
    : `${localizedDistance.value} ${dndDistanceUnitPluralLocalization[lang][localizedDistance.unit]}`;
}

function localizeLevel(level: number, lang: LocalizationLanguage): string {
  switch (lang) {
    case "it":
      return level === 0 ? "trucchetto" : `${level}˚ livello`;
    default:
      return level === 0 ? "cantrip" : `level ${level}`;
  }
}

function localizeCastingTime(
  castingTime: DndSpell["castingTime"],
  lang: LocalizationLanguage
): string {
  switch (lang) {
    case "it":
      switch (castingTime.type) {
        case "action":
          return "Azione";
        case "bonus_action":
          return "Azione bonus";
        case "reaction":
          return "Reazione";
        case "time":
          return `${castingTime.quantity} ${localizeTimeUnit(castingTime.unit, castingTime.quantity !== 1, lang)}`;
        default:
          return "";
      }
    default:
      switch (castingTime.type) {
        case "action":
          return "Action";
        case "bonus_action":
          return "Bonus action";
        case "reaction":
          return "Reaction";
        case "time":
          return `${castingTime.quantity} ${localizeTimeUnit(castingTime.unit, castingTime.quantity !== 1, lang)}`;
      }
  }
}

function localizeDuration(
  duration: DndSpell["duration"],
  lang: LocalizationLanguage
): string {
  switch (lang) {
    case "it":
      switch (duration.type) {
        case "instantaneous":
          return "Istantaneo";
        case "until_dispelled":
          return "";
        case "special":
          return "Speciale";
        case "time": {
          const prefix = duration.upTo ? "Fino a " : "";
          const suffix = duration.concentration ? " (C)" : "";
          return `${prefix}${duration.quantity} ${localizeTimeUnit(duration.unit, duration.quantity !== 1, lang)}${suffix}`;
        }
        default:
          return "";
      }
    default:
      switch (duration.type) {
        case "instantaneous":
          return "Instantaneous";
        case "until_dispelled":
          return "Until dispelled";
        case "special":
          return "Special";
        case "time": {
          const prefix = duration.upTo ? "Up to " : "";
          const suffix = duration.concentration ? " (C)" : "";
          return `${prefix}${duration.quantity} ${localizeTimeUnit(duration.unit, duration.quantity !== 1, lang)}${suffix}`;
        }
      }
  }
}

function localizeRange(
  range: DndSpell["range"],
  lang: LocalizationLanguage
): string {
  switch (lang) {
    case "it":
      switch (range.type) {
        case "self":
          return "Incantatore";
        case "touch":
          return "Contatto";
        case "sight":
          return "Vista";
        case "unlimited":
          return "Illimitata";
        case "special":
          return "Speciale";
        case "distance": {
          return localizeDistance(range, lang);
        }
        default:
          return "Incantatore";
      }
    default:
      switch (range.type) {
        case "self":
          return "Self";
        case "touch":
          return "Touch";
        case "sight":
          return "Sight";
        case "unlimited":
          return "Unlimited";
        case "special":
          return "Special";
        case "distance": {
          return localizeDistance(range, lang);
        }
        default:
          return "Self";
      }
  }
}

function localizeComponents(components: DndSpell["components"]): string {
  const letters: string[] = [];
  if (components.verbal) letters.push("V");
  if (components.somatic) letters.push("S");
  if (components.material) letters.push("M");
  return letters.join(", ");
}

function localizeComponentMaterials(
  components: DndSpell["components"],
  lang: LocalizationLanguage
): string | undefined {
  return components.material
    ? capitalize(
        components.materials.map((m) => localizeString(m, lang)).join(", ")
      )
    : undefined;
}

export default function localizeDndSpell(
  spell: DndSpell,
  lang: LocalizationLanguage
) {
  return {
    name: localizeString(spell.name, lang),
    school: dndSpellSchoolLocalization[lang][spell.school],
    level: localizeLevel(spell.level, lang),
    classes: spell.classes.map((c) => dndClassLocalization[lang][c]).join(", "),
    description: localizeString(spell.description, lang),
    higherLevel: spell.higherLevel
      ? localizeString(spell.higherLevel, lang)
      : undefined,
    castingTime:
      localizeCastingTime(spell.castingTime, lang) +
      (spell.ritual ? { en: " or ritual", it: " o rituale" }[lang] : ""),
    reactionTo:
      spell.castingTime.type === "reaction"
        ? localizeString(spell.castingTime.reactionTo, lang)
        : undefined,
    duration: localizeDuration(spell.duration, lang),
    range: localizeRange(spell.range, lang),
    components: localizeComponents(spell.components),
    componentMaterials: localizeComponentMaterials(spell.components, lang),
  };
}

function capitalize(text: string): string {
  return text.length === 0 ? "" : text[0].toUpperCase() + text.substring(1);
}
