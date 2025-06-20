import type { DndSpell, DndSpellRaw } from "../models/dnd";

const l = (text: string): { en: string } => ({ en: text });

const pct = (ct: string): DndSpell["castingTime"] => {
  if (/^\d+ action/.test(ct)) return { type: "action" };
  if (/^\d+ bonus action/.test(ct)) return { type: "bonus_action" };
  if (/^\d+ reaction/.test(ct))
    return {
      type: "reaction",
      reactionTo: { en: ct.replace(/^\d+ reaction[s]?, /, "Reaction, ") },
    };
  if (/^\d+ minute[s]?/.test(ct))
    return {
      type: "time",
      unit: "minute",
      quantity: Number.parseInt(ct.replace(/ minute[s]?$/, "")),
    };
  if (/^\d+ hour[s]?/.test(ct))
    return {
      type: "time",
      unit: "hour",
      quantity: Number.parseInt(ct.replace(/ hour[s]?$/, "")),
    };
  throw new Error("Failed to parse casting time");
};

const pd = (d: string): DndSpell["duration"] => {
  if (/^Instantaneous/.test(d)) return { type: "instantaneous" };
  if (/^Until dispelled/.test(d)) return { type: "until_dispelled" };
  if (/^Special/.test(d)) return { type: "special" };

  const concentration = d.startsWith("Concentration");
  const upTo = d.toLowerCase().includes("up to");
  const unit = d.includes("round")
    ? "round"
    : d.includes("minute")
      ? "minute"
      : d.includes("hour")
        ? "hour"
        : d.includes("day")
          ? "day"
          : undefined;

  if (!unit) throw new Error("Failed to parse duration (unknown unit)");

  const quantity = d.match(/\d+/);
  if (!quantity) throw new Error("Failed to parse duration (unknown quantity)");

  return {
    type: "time",
    unit,
    quantity: Number.parseInt(quantity[0]),
    concentration,
    upTo,
  };
};

const pr = (r: string): DndSpell["range"] => {
  if (/^Self$/.test(r)) return { type: "self" };
  if (/^Touch$/.test(r)) return { type: "touch" };
  if (/^Sight$/.test(r)) return { type: "sight" };
  if (/^Unlimited$/.test(r)) return { type: "unlimited" };
  if (/^Special$/.test(r)) return { type: "special" };

  const unit =
    r.includes("foot") || r.includes("feet")
      ? "foot"
      : r.includes("mile")
        ? "mile"
        : undefined;

  if (!unit) throw new Error("Failed to parse duration (unknown unit)");

  const quantity = r.match(/\d+/);
  if (!quantity) throw new Error("Failed to parse duration (unknown quantity)");

  if (/^Self \(/.test(r)) {
    const type = r.includes("cone")
      ? "self_cone"
      : r.includes("cube")
        ? "self_cube"
        : r.includes("hemisphere")
          ? "self_hemisphere"
          : r.includes("line")
            ? "self_line"
            : r.includes("sphere")
              ? "self_sphere"
              : r.includes("radius")
                ? "self_circle"
                : undefined;

    if (!type) throw new Error("Failed to parse duration (unknown self type)");

    return { type, en: { unit, value: Number.parseInt(quantity[0]) } };
  }

  return {
    type: "distance",
    en: { unit, value: Number.parseInt(quantity[0]) },
  };
};

export default function dndSpellsRawToDndSpells(
  spellsRaw: DndSpellRaw[]
): DndSpell[] {
  return spellsRaw.map((spell) => ({
    name: l(spell.name),
    description: l(spell.description),
    ...(spell.higher_levels
      ? { higherLevel: l(spell.higher_levels) }
      : undefined),
    level: spell.level === "cantrip" ? 0 : Number.parseInt(spell.level),
    classes: spell.classes as unknown as DndSpell["classes"],
    school: spell.school as unknown as DndSpell["school"],
    castingTime: pct(spell.casting_time),
    ritual: spell.ritual,
    duration: pd(spell.duration),
    range: pr(spell.range),
    components: {
      somatic: spell.components.somatic,
      verbal: spell.components.verbal,
      ...(spell.components.material && spell.components.materials_needed
        ? {
            material: true,
            materials: spell.components.materials_needed.map(l),
          }
        : {
            material: false,
          }),
    },
  }));
}
