import { useMemo } from "react";
import useI18n, { type I18n } from "../../hooks/useI18n";
import type { DndSpell } from "../../models/dnd";
import type {
  LocalizedString,
  LocalizationLanguage,
} from "../../models/localization";

function capitalize(text: string): string {
  return text.length === 0 ? "" : text[0].toUpperCase() + text.substring(1);
}

function localizeString(
  localizedString: LocalizedString,
  lang: LocalizationLanguage
): string {
  return localizedString[lang] ?? localizedString.en;
}

function localizeLevel(level: number, i18n: I18n): string {
  return level === 0
    ? i18n.t("dnd.spell.level.cantrip")
    : i18n.ti("dnd.spell.level.number", `${level}`);
}

function localizeCastingTime(
  castingTime: DndSpell["castingTime"],
  i18n: I18n
): string {
  switch (castingTime.type) {
    case "action":
      return i18n.t("dnd.spell.casting_time.action");
    case "bonus_action":
      return i18n.t("dnd.spell.casting_time.bonus_action");
    case "reaction":
      return i18n.t("dnd.spell.casting_time.reaction");
    case "time":
      return i18n.ti(
        "dnd.spell.casting_time.time",
        `${castingTime.quantity}`,
        i18n.tp(`generic.time.${castingTime.unit}`, castingTime.quantity)
      );
  }
}

function localizeDuration(duration: DndSpell["duration"], i18n: I18n): string {
  switch (duration.type) {
    case "instantaneous":
      return i18n.t("dnd.spell.duration.instantaneous");
    case "until_dispelled":
      return i18n.t("dnd.spell.duration.until_dispelled");
    case "special":
      return i18n.t("dnd.spell.duration.special");
    case "time": {
      return i18n.ti(
        "dnd.spell.duration.time",
        duration.upTo ? i18n.t("dnd.spell.duration.time.up_to") : "",
        i18n.tp(`generic.time.${duration.unit}`, duration.quantity),
        duration.concentration
          ? i18n.t("dnd.spell.duration.time.concentration")
          : ""
      );
    }
  }
}

function localizeRange(range: DndSpell["range"], i18n: I18n): string {
  switch (range.type) {
    case "self":
      return i18n.t("dnd.spell.range.self");
    case "touch":
      return i18n.t("dnd.spell.range.touch");
    case "sight":
      return i18n.t("dnd.spell.range.sight");
    case "unlimited":
      return i18n.t("dnd.spell.range.unlimited");
    case "special":
      return i18n.t("dnd.spell.range.special");
    case "distance": {
      const localizedRange = range[i18n.lang] ?? range.en;
      return i18n.ti(
        "dnd.spell.range.distance",
        `${localizedRange.value}`,
        i18n.tp(`generic.distance.${localizedRange.unit}`, localizedRange.value)
      );
    }
    default:
      return i18n.t("dnd.spell.range.self");
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
  i18n: I18n
): string | undefined {
  return components.material
    ? capitalize(
        components.materials.map((m) => localizeString(m, i18n.lang)).join(", ")
      )
    : undefined;
}

function localizeDndSpell(spell: DndSpell, i18n: I18n) {
  return {
    name: localizeString(spell.name, i18n.lang),
    school: i18n.t(`dnd.magic_school.${spell.school}`),
    level: localizeLevel(spell.level, i18n),
    classes: spell.classes.map((c) => i18n.t(`dnd.class.${c}`)).join(", "),
    description: localizeString(spell.description, i18n.lang),
    higherLevel: spell.higherLevel
      ? localizeString(spell.higherLevel, i18n.lang)
      : undefined,
    castingTime:
      localizeCastingTime(spell.castingTime, i18n) +
      (spell.ritual ? i18n.t("dnd.spell.ritual") : ""),
    reactionTo:
      spell.castingTime.type === "reaction"
        ? localizeString(spell.castingTime.reactionTo, i18n.lang)
        : undefined,
    duration: localizeDuration(spell.duration, i18n),
    range: localizeRange(spell.range, i18n),
    components: localizeComponents(spell.components),
    componentMaterials: localizeComponentMaterials(spell.components, i18n),
  };
}

export default function useLocalizedDndSpell(spell: DndSpell) {
  const i18n = useI18n();
  return useMemo(() => localizeDndSpell(spell, i18n), [i18n, spell]);
}
