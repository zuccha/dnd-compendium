import { localizeI18nNumber } from "../../i18n/i18n-number";
import { localizeI18nString } from "../../i18n/i18n-string";
import type { I18n } from "../../i18n/use-i18n";
import type { DndWeapon } from "../models/dnd-weapon";

export default function localizeDndWeapon(weapon: DndWeapon, i18n: I18n) {
  return {
    cost:
      weapon.cost < 0.1
        ? `${weapon.cost * 100} ` + i18n.t("dnd.coins.cp")
        : weapon.cost < 1
          ? `${weapon.cost * 10} ` + i18n.t("dnd.coins.sp")
          : `${weapon.cost} ` + i18n.t("dnd.coins.gp"),
    damage:
      weapon.damage.regular +
      " " +
      i18n.t(`dnd.damage_type.${weapon.damageType}`),
    mastery: i18n.t(`dnd.weapon.mastery.${weapon.mastery}`),
    melee: weapon.melee,
    name: localizeI18nString(weapon.name, i18n.language),
    notes: weapon.notes,
    properties: weapon.properties
      .map((property) => {
        if ((property === "ammunition" || property === "throw") && weapon.range)
          return i18n.ti(
            `dnd.weapon.property.${property}.range`,
            `${weapon.range.short[i18n.system].value}`,
            `${weapon.range.long[i18n.system].value}`,
          );
        if (property === "versatile" && weapon.damage.versatile)
          return i18n.ti(
            `dnd.weapon.property.${property}.damage`,
            weapon.damage.versatile,
          );
        return i18n.t(`dnd.weapon.property.${property}`);
      })
      .join(", "),
    ranged: weapon.ranged,
    source: {
      book: weapon.source.book,
      page: i18n.ti(
        "dnd.weapon.source.page",
        `${localizeI18nNumber(weapon.source.page, i18n.language)}`,
      ),
    },
    type: i18n.t(`dnd.weapon.type.${weapon.type}`),
    weight:
      `${weapon.weight[i18n.system].value} ` +
      i18n.tp(
        `generic.weight.${weapon.weight[i18n.system].unit}@short`,
        weapon.weight[i18n.system].value,
      ),
  };
}

export type DndWeaponLocalized = ReturnType<typeof localizeDndWeapon>;
