import { localizeI18nString } from "../../i18n/i18n-string";
import { type I18n } from "../../i18n/use-i18n";
import type { DndSpell } from "../models/dnd-spell";

function localizeCastingTime(spell: DndSpell, i18n: I18n): string {
  const { castingTime } = spell;
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
        `${castingTime.value}`,
        i18n.tp(`generic.time.${castingTime.unit}@short`, castingTime.value),
      );
  }
}

function localizeDuration(spell: DndSpell, i18n: I18n): string {
  const { concentration, duration } = spell;
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
        `${duration.value}`,
        i18n.tp(`generic.time.${duration.unit}@short`, duration.value),
        concentration ? i18n.t("dnd.spell.duration.time.concentration") : "",
      );
    }
  }
}

function localizeRange(spell: DndSpell, i18n: I18n): string {
  const { range } = spell;
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
      const localizedRange =
        i18n.system === "imperial" ? range.imperial : range.metric;
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

function localizeComponents(spell: DndSpell, i18n: I18n): string {
  const letters: string[] = [];
  if (spell.components.v) letters.push("V");
  if (spell.components.s) letters.push("S");
  if (spell.components.m) letters.push("M");
  return letters.length === 0
    ? i18n.t("dnd.spell.components.none")
    : letters.join(", ");
}

function localizeComponentMaterials(spell: DndSpell, i18n: I18n): string {
  const { materials } = spell;
  return materials
    ? i18n.ti(
        "dnd.spell.component_materials.present",
        localizeI18nString(materials, i18n.language),
      ) + "."
    : i18n.t("dnd.spell.component_materials.none");
}

export default function localizeDndSpell(spell: DndSpell, i18n: I18n) {
  return {
    castingTime:
      localizeCastingTime(spell, i18n) +
      (spell.ritual ? i18n.t("dnd.spell.or_ritual") : ""),
    classes: spell.classes
      .filter((c) => c !== "artificer")
      .map((c) => i18n.t(`dnd.class@short.${c}`))
      .sort()
      .join(" "),
    components: localizeComponents(spell, i18n),
    duration: localizeDuration(spell, i18n),
    level: `${spell.level}`,
    materials: localizeComponentMaterials(spell, i18n),
    name: localizeI18nString(spell.name, i18n.language),
    range: localizeRange(spell, i18n),
    school: i18n.t(`dnd.spell_school.${spell.school}`),
    source: {
      book: spell.source.book,
      page: i18n.ti("dnd.spell.source.page", `${spell.source.page}`),
    },
    text: {
      base: localizeI18nString(spell.text.base, i18n.language),
      full: spell.text.upgrade
        ? localizeI18nString(spell.text.base, i18n.language) +
          "\n\n**" +
          (spell.level === 0
            ? i18n.t("dnd.spell.upgrade.cantrip")
            : i18n.t("dnd.spell.upgrade.spell")) +
          "**\n" +
          localizeI18nString(spell.text.upgrade, i18n.language)
        : localizeI18nString(spell.text.base, i18n.language),
      upgrade: spell.text.upgrade
        ? localizeI18nString(spell.text.upgrade, i18n.language)
        : undefined,
    },
  };
}

export type DndSpellLocalized = ReturnType<typeof localizeDndSpell>;
