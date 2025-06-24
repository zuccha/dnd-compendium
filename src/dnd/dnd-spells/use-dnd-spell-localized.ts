import { useMemo } from "react";
import type { I18nLanguage } from "../../i18n/i18n-language";
import type { I18nString } from "../../i18n/i18n-string";
import useI18n, { type I18n } from "../../i18n/use-i18n";
import type { DndSpell } from "./dnd-spells-types";

function localizeString(
  localizedString: I18nString,
  lang: I18nLanguage,
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
  i18n: I18n,
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
        i18n.tp(`generic.time.${castingTime.unit}`, castingTime.quantity),
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
        `${duration.quantity}`,
        i18n.tp(`generic.time.${duration.unit}`, duration.quantity),
        duration.concentration
          ? i18n.t("dnd.spell.duration.time.concentration")
          : "",
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
      const localizedRange = range[i18n.language] ?? range.en;
      return i18n.ti(
        "dnd.spell.range.distance",
        `${localizedRange.value}`,
        i18n.tp(
          `generic.distance.${localizedRange.unit}`,
          localizedRange.value,
        ),
      );
    }
    default:
      return i18n.t("dnd.spell.range.self");
  }
}

function localizeComponents(
  components: DndSpell["components"],
  i18n: I18n,
): string {
  const letters: string[] = [];
  if (components.verbal) letters.push("V");
  if (components.somatic) letters.push("S");
  if (components.material) letters.push("M");
  return letters.length === 0
    ? i18n.t("dnd.spell.components.none")
    : letters.join(", ");
}

function localizeComponentMaterials(
  components: DndSpell["components"],
  i18n: I18n,
): string | undefined {
  return components.material
    ? i18n.ti(
        "dnd.spell.component_materials.present",
        localizeString(components.materials, i18n.language),
      )
    : i18n.t("dnd.spell.component_materials.none");
}

export function localizeDndSpell(spell: DndSpell, i18n: I18n) {
  return {
    castingTime:
      localizeCastingTime(spell.castingTime, i18n) +
      (spell.ritual ? i18n.t("dnd.spell.or_ritual") : ""),
    classes: spell.classes.map((c) => i18n.t(`dnd.class.${c}`)).join(" "),
    classesShort: spell.classes
      .map((c) => i18n.t(`dnd.class@short.${c}`))
      .join(" "),
    componentMaterials: localizeComponentMaterials(spell.components, i18n),
    components: localizeComponents(spell.components, i18n),
    description: localizeString(spell.description, i18n.language),
    duration: localizeDuration(spell.duration, i18n),
    level: localizeLevel(spell.level, i18n),
    name: localizeString(spell.name, i18n.language),
    range: localizeRange(spell.range, i18n),
    raw: spell,
    school: i18n.t(`dnd.magic_school.${spell.school}`),
    upgrade: spell.upgrade
      ? localizeString(spell.upgrade, i18n.language)
      : undefined,
  };
}

export default function useDndSpellLocalized(spell: DndSpell) {
  const i18n = useI18n();
  return useMemo(() => localizeDndSpell(spell, i18n), [i18n, spell]);
}

export type DndSpellLocalized = ReturnType<typeof useDndSpellLocalized>;
