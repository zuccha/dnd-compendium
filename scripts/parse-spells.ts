import { parse as parseCsv } from "https://deno.land/std@0.224.0/csv/mod.ts";
import { DndSpell, dndSpellSchema } from "../src/models/dnd.ts";
import { capitalize } from "../src/utils/string.ts";

// type DndSpellCsv = {
//   ["Name"]: string;
//   ["Source"]: string;
//   ["Page"]: string;
//   ["Level"]: string;
//   ["Casting Time"]: string;
//   ["Duration"]: string;
//   ["School"]: string;
//   ["Range"]: string;
//   ["Components"]: string;
//   ["Classes"]: string;
//   ["Optional/Variant Classes"]: string;
//   ["Text"]: string;
//   ["At Higher Levels"]: string;
// };

type SpellCsv = Record<string, string>;

const spellsCsvText = await Deno.readTextFile("./data/spells/5e-tools.csv");
const spellsCsv = parseCsv(spellsCsvText, { skipFirstRow: true }) as SpellCsv[];

function parsePositive(str: string): number {
  const n = +str;
  return isNaN(n) ? -1 : n;
}

function parseCastingTime(spellCsv: SpellCsv): DndSpell["castingTime"] {
  const castingTime = spellCsv["Casting Time"];
  if (castingTime === "Action") return { type: "action" };
  if (castingTime === "Bonus") return { type: "bonus_action" };
  if (castingTime === "Reaction") return { type: "reaction" };

  const pattern = /^(\d+) (Hr\.|Min\.)$/;
  const match = castingTime.match(pattern);
  if (!match) {
    throw new Error("No match found for casting time!\n" + spellCsv);
  }

  const quantity = +match[1];
  const unit = match[2] === "Hr." ? "hour" : "minute";

  return { quantity, type: "time", unit };
}

function parseComponents(spellCsv: SpellCsv): DndSpell["components"] {
  const pattern =
    /^(?:(V)(?:, (S))?(?:, (M) \((.*?)\))?|()S(?:, (M) \((.*?)\))?|()M \((.*?)\))?$/;
  const match = spellCsv["Components"].match(pattern);
  if (!match) {
    throw new Error("No match found for components!\n" + spellCsv);
  }

  const verbal = Boolean(match[1]);
  const somatic = Boolean(match[2] || match[5]);
  const material = Boolean(match[3] || match[6] || match[8]);
  const materials = material
    ? { en: `${capitalize(match[4] || match[7] || match[9])}.` }
    : undefined;

  return material && materials
    ? { material, materials, somatic, verbal }
    : { material: false, somatic, verbal };
}

function parseDuration(spellCsv: SpellCsv): DndSpell["duration"] {
  const duration = spellCsv["Duration"];
  if (duration.startsWith("Instantaneous")) return { type: "instantaneous" };
  if (duration.startsWith("Until dispelled"))
    return { type: "until_dispelled" };
  if (duration === "Special") return { type: "special" };

  const pattern = /(\d+) (rounds?|minutes?|hours?|days?)$/;
  const match = duration.match(pattern);
  if (!match) {
    throw new Error("No match found for duration!\n" + spellCsv);
  }

  const concentration = duration.startsWith("Concentration");
  const upTo = duration.startsWith("Up to") || duration.includes("up to");
  const quantity = +match[1];
  const unit = /s$/.test(match[2])
    ? match[2].substring(0, match[2].length - 1)
    : match[2];

  return {
    concentration,
    quantity,
    type: "time",
    unit,
    upTo,
  };
}

function parseRange(spellCsv: SpellCsv): DndSpell["range"] {
  const range = spellCsv["Range"];
  if (range === "Self") return { type: "self" };
  if (range === "Touch") return { type: "touch" };
  if (range === "Sight") return { type: "sight" };
  if (range === "Unlimited") return { type: "unlimited" };
  if (range === "Special") return { type: "special" };

  const pattern = /(\d+) (foot|feet|mile|miles)$/;
  const match = range.match(pattern);
  if (!match) {
    throw new Error("No match found for duration!\n" + spellCsv);
  }

  const value = +match[1];
  const unit = match[2].startsWith("mile") ? "mile" : "foot";

  return {
    en: { unit, value },
    type: "distance",
  };
}

function parseUpgrade(spellCsv: SpellCsv): DndSpell["upgrade"] {
  const upgrade = spellCsv["At Higher Levels"];
  if (!upgrade) return undefined;

  if (upgrade.startsWith("Cantrip Upgrade. "))
    return { en: upgrade.replace(/^Cantrip Upgrade\. /, "") };
  if (upgrade.startsWith("At Higher Levels. "))
    return { en: upgrade.replace(/^At Higher Levels\. /, "") };
  if (upgrade.startsWith("Using a Higher-Level Spell Slot. "))
    return { en: upgrade.replace(/^Using a Higher-Level Spell Slot\. /, "") };

  throw new Error("No match found for upgrade!\n" + spellCsv);
}

function parseSpell(spellCsv: SpellCsv): DndSpell {
  return dndSpellSchema.parse({
    castingTime: parseCastingTime(spellCsv),
    classes: Array.from(
      new Set([
        ...spellCsv["Classes"].toLowerCase().split(", "),
        ...spellCsv["Optional/Variant Classes"].toLowerCase().split(", "),
      ]),
    )
      .sort()
      .filter((c) => c),
    components: parseComponents(spellCsv),
    description: { en: spellCsv["Text"] },
    duration: parseDuration(spellCsv),
    level:
      spellCsv["Level"] === "Cantrip" ? 0 : parsePositive(spellCsv["Level"][0]),
    name: { en: spellCsv["Name"] },
    range: parseRange(spellCsv),
    ritual: /\(ritual\)$/.test(spellCsv["School"]),
    school: spellCsv["School"].replace(/ \(.*\)$/, "").toLowerCase(),
    source: {
      book: spellCsv["Source"],
      page: parsePositive(spellCsv["Page"]),
    },
    upgrade: parseUpgrade(spellCsv),
  });
}

// const spells: DndSpell[] = [];
// for (const spellCsv of spellsCsv) {
//   try {
//     const spell = parseSpell(spellCsv);
//     if (spell.source.book === "PHB'24") spells.push(spell);
//   } catch {
//     console.log(spellCsv.name);
//   }
// }

const spells = spellsCsv
  .map(parseSpell)
  .filter((spell) => spell.source.book === "PHB'24");

const spellsJson = JSON.stringify(spells, null, 2);
const spellsTs = `import type { DndSpell } from "../models/dnd";

/* eslint-disable sort-keys */
const dndSpells: DndSpell[] = ${spellsJson};

export default dndSpells;`;

Deno.writeTextFile("./data/spells/zuccha.json", spellsJson);
Deno.writeTextFile("../src/data/dnd-spells.ts", spellsTs);
