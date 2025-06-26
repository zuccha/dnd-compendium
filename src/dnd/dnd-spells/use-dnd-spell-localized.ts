import { useMemo } from "react";
import { localizeI18nString } from "../../i18n/i18n-string";
import useI18n, { type I18n } from "../../i18n/use-i18n";
import type { DndSpell } from "./dnd-spells-types";

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
        i18n.tp(`generic.time.${castingTime.unit}@short`, castingTime.quantity),
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
        i18n.tp(`generic.time.${duration.unit}@short`, duration.quantity),
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
          `generic.distance.${localizedRange.unit}@short`,
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
): string {
  return components.material
    ? i18n.ti(
        "dnd.spell.component_materials.present",
        localizeI18nString(components.materials, i18n.language),
      )
    : i18n.t("dnd.spell.component_materials.none");
}

export function localizeDndSpell(spell: DndSpell, i18n: I18n) {
  return {
    castingTime:
      localizeCastingTime(spell.castingTime, i18n) +
      (spell.ritual ? i18n.t("dnd.spell.or_ritual") : ""),
    classes: spell.classes
      .filter((c) => c !== "artificer")
      .map((c) => i18n.t(`dnd.class@short.${c}`))
      .sort()
      .join(" "),
    componentMaterials: localizeComponentMaterials(spell.components, i18n),
    components: localizeComponents(spell.components, i18n),
    description: localizeI18nString(spell.description, i18n.language),
    duration: localizeDuration(spell.duration, i18n),
    level: localizeLevel(spell.level, i18n),
    name: localizeI18nString(spell.name, i18n.language),
    range: localizeRange(spell.range, i18n),
    raw: spell,
    school: i18n.t(`dnd.magic_school.${spell.school}`),
    source: {
      book: spell.source.book,
      page: i18n.ti("dnd.spell.source.page", `${spell.source.page}`),
    },
    upgrade: spell.upgrade
      ? localizeI18nString(spell.upgrade, i18n.language)
      : undefined,
  };
}

export default function useDndSpellLocalized(spell: DndSpell) {
  const i18n = useI18n();
  return useMemo(() => localizeDndSpell(spell, i18n), [i18n, spell]);
}

export type DndSpellLocalized = ReturnType<typeof useDndSpellLocalized>;
