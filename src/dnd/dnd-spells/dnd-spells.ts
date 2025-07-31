import { normalize } from "../../utils/normalized-list";
import type { DndSpell } from "./dnd-spells-types";

/* eslint-disable sort-keys */
const dndSpells = normalize<DndSpell>(
  [
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: false,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Mind Spike",
      level: 2,
      name: {
        en: "Mind Spike",
        it: "Aculeo Mentale",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 298,
      },
      text: {
        base: {
          en: "You drive a spike of psionic energy into the mind of one creature you can see within range. The target makes a Wisdom saving throw, taking 3d8 Psychic damage on a failed save or half as much damage on a successful one. On a failed save, you also always know the target's location until the spell ends, but only while the two of you are on the same plane of existence. While you have this knowledge, the target can't become hidden from you, and if it has the Invisible condition, it gains no benefit from that condition against you.",
          it: "L'incantatore guida un flusso di energia psionica nella mente di una creatura entro gittata che è in grado di vedere. Il bersaglio effettua un tiro salvezza su Saggezza, subendo 3d8 danni psichici in caso di fallimento, o la metà dei danni in caso di successo. Se fallisce il tiro, l'incantatore sa sempre dove si trova il bersaglio fino al termine dell'incantesimo, ma solo se entrambi si trovano sullo stesso piano di esistenza. Finché l'incantatore è in possesso di queste conoscenze, il bersaglio non può nascondersi da lui e, se è invisibile, non ottiene alcun beneficio da questa condizione contro di lui.",
        },
        upgrade: {
          en: "The damage increases by 1d8 for each spell slot level above 2.",
          it: "I danni aumentano di 1d8 per ogni slot di livello superiore al 2˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "bard", "cleric", "druid", "paladin", "ranger"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 8,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Aid",
      level: 2,
      materials: {
        en: "a strip of white cloth",
        it: "una striscia di tessuto bianco",
      },
      name: {
        en: "Aid",
        it: "Aiuto",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 239,
      },
      text: {
        base: {
          en: "Choose up to three creatures within range. Each target's Hit Point maximum and current Hit Points increase by 5 for the duration.",
          it: "L'incantatore sceglie fino a tre creature entro gittata. I punti ferita massimi e i punti ferita attuali di ogni bersaglio aumentano di 5 per la durata dell'incantesimo.",
        },
        upgrade: {
          en: "Each target's Hit Points increase by 5 for each spell slot level above 2.",
          it: "I punti ferita di ciascun bersaglio aumentano di 5 per ogni slot incantesimo di livello superiore al 2˚.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["artificer", "ranger", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 8,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Alarm",
      level: 1,
      materials: {
        en: "a bell and silver wire",
        it: "una campanella e un filo d'argento",
      },
      name: {
        en: "Alarm",
        it: "Allarme",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: true,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 239,
      },
      text: {
        base: {
          en: "You set an alarm against intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot Cube. Until the spell ends, an alarm alerts you whenever a creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is audible or mental:\n**Audible Alarm.** The alarm produces the sound of a handbell for 10 seconds within 60 feet of the warded area.\n**Mental Alarm.** You are alerted by a mental ping if you are within 1 mile of the warded area. This ping awakens you if you're asleep.",
          it: "L'incantatore predispone un allarme che segnala un'intrusione. Sceglie una porta, una finestra o un'area entro gittata che non sia più ampia di un cubo con spigolo di 6 metri. Fino al termine dell'incantesimo, un allarme avverte l'incantatore tutte le volte che una creatura tocca o entra nell'area protetta. Al momento del lancio dell'incantesimo, l'incantatore designa quali creature non faranno scattare l'allarme. Inoltre, se l'allarme è acustico o mentale.\n**Allarme acustico.** L'allarme produce il suono di una campanella per 10 secondi entro 18 metri dall'area protetta.\n**Allarme mentale.** Un suono nella mente avverte l'incantatore se questi si trova entro 1,5 chilometri dall'area protetta. Il suono risveglia l'incantatore se sta dormendo.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 10,
        unit: "minute",
      },
      classes: ["cleric"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Planar Ally",
      level: 6,
      name: {
        en: "Planar Ally",
        it: "Alleato Planare",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 304,
      },
      text: {
        base: {
          en: "You beseech an otherworldly entity for aid. The being must be known to you: a god, a demon prince, or some other being of cosmic power. That entity sends a Celestial, an Elemental, or a Fiend loyal to it to aid you, making the creature appear in an unoccupied space within range. If you know a specific creature's name, you can speak that name when you cast this spell to request that creature, though you might get a different creature anyway (DM's choice).When the creature appears, it is under no compulsion to behave a particular way. You can ask it to perform a service in exchange for payment, but it isn't obliged to do so. The requested task could range from simple (fly us across the chasm, or help us fight a battle) to complex (spy on our enemies, or protect us during our foray into the dungeon). You must be able to communicate with the creature to bargain for its services.Payment can take a variety of forms. A Celestial might require a sizable donation of gold or magic items to an allied temple, while a Fiend might demand a living sacrifice or a gift of treasure. Some creatures might exchange their service for a quest undertaken by you.A task that can be measured in minutes requires a payment worth 100 GP per minute. A task measured in hours requires 1,000 GP per hour. And a task measured in days (up to 10 days) requires 10,000 GP per day. The DM can adjust these payments based on the circumstances under which you cast the spell. If the task is aligned with the creature's ethos, the payment might be halved or even waived. Nonhazardous tasks typically require only half the suggested payment, while especially dangerous tasks might require a greater gift. Creatures rarely accept tasks that seem suicidal.After the creature completes the task, or when the agreed-upon duration of service expires, the creature returns to its home plane after reporting back to you if possible. If you are unable to agree on a price for the creature's service, the creature immediately returns to its home plane.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Phantasmal Force",
      level: 2,
      materials: {
        en: "a bit of fleece",
        it: "un ciuffo di lana",
      },
      name: {
        en: "Phantasmal Force",
        it: "Allucinazione di Forza",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 304,
      },
      text: {
        base: {
          en: "You attempt to craft an illusion in the mind of a creature you can see within range. The target makes an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other phenomenon that is no larger than a 10-foot Cube and that is perceivable only to the target for the duration. The phantasm includes sound, temperature, and other stimuli.The target can take a Study action to examine the phantasm with an Intelligence (Investigation) check against your spell save DC. If the check succeeds, the target realizes that the phantasm is an illusion, and the spell ends.While affected by the spell, the target treats the phantasm as if it were real and rationalizes any illogical outcomes from interacting with it. For example, if the target steps through a phantasmal bridge and survives the fall, it believes the bridge exists and something else caused it to fall.An affected target can even take damage from the illusion if the phantasm represents a dangerous creature or hazard. On each of your turns, such a phantasm can deal 2d8 Psychic damage to the target if it is in the phantasm's area or within 5 feet of the phantasm. The target perceives the damage as a type appropriate to the illusion.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Phantasmal Killer",
      level: 4,
      name: {
        en: "Phantasmal Killer",
        it: "Allucinazione Mortale",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 304,
      },
      text: {
        base: {
          en: "You tap into the nightmares of a creature you can see within range and create an illusion of its deepest fears, visible only to that creature. The target makes a Wisdom saving throw. On a failed save, the target takes 4d10 Psychic damage and has Disadvantage on ability checks and attack rolls for the duration. On a successful save, the target takes half as much damage, and the spell ends.\nFor the duration, the target makes a Wisdom saving throw at the end of each of its turns. On a failed save, it takes the Psychic damage again. On a successful save, the spell ends.",
        },
        upgrade: {
          en: "The damage increases by 1d10 for each spell slot level above 4.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Alter Self",
      level: 2,
      name: {
        en: "Alter Self",
        it: "Alterare sè Stesso",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 239,
      },
      text: {
        base: {
          en: "You alter your physical form. Choose one of the following options. Its effects last for the duration, during which you can take a Magic action to replace the option you chose with a different one. Aquatic Adaptation. You sprout gills and grow webs between your fingers. You can breathe underwater and gain a Swim Speed equal to your Speed. Change Appearance. You alter your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and other distinguishing characteristics. You can make yourself appear as a member of another species, though none of your statistics change. You can't appear as a creature of a different size, and your basic shape stays the same; if you're bipedal, you can't use this spell to become quadrupedal, for instance. For the duration, you can take a Magic action to change your appearance in this way again. Natural Weapons. You grow claws (Slashing), fangs (Piercing), horns (Piercing), or hooves (Bludgeoning). When you use your Unarmed Strike to deal damage with that new growth, it deals 1d6 damage of the type in parentheses instead of dealing the normal damage for your Unarmed Strike, and you use your spellcasting ability modifier for the attack and damage rolls rather than using Strength.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: false,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Friends",
      level: 0,
      materials: {
        en: "some makeup",
        it: "un po' di trucco",
      },
      name: {
        en: "Friends",
        it: "Amicizia",
      },
      range: {
        type: "distance",
        imperial: {
          value: 10,
          unit: "ft",
        },
        metric: {
          value: 3,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 277,
      },
      text: {
        base: {
          en: "You magically emanate a sense of friendship toward one creature you can see within range. The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target succeeds automatically if it isn't a Humanoid, if you're fighting it, or if you have cast this spell on it within the past 24 hours.\nThe spell ends early if the target takes damage or if you make an attack roll, deal damage, or force anyone to make a saving throw. When the spell ends, the target knows it was Charmed by you.",
          it: "L'incantatore emana magicamente un sentimento di amicizia verso una creatura che è in grado di vedere entro gittata. Il bersaglio deve superare un tiro salvezza su Saggezza, altrimenti rimane affascinato per la durata dell'incantesimo. Il bersaglio supera automaticamente il tiro se non è un umanoide, se l'incantatore sta combattendo contro di esso o se l'incantatore ha lanciato questo incantesimo sul bersaglio nelle ultime 24 ore.\nL'incantesimo termina in anticipo se il bersaglio subisce danni o se l'incantatore effettua un tiro per colpire, infligge danni o costringe qualcuno a effettuare un tiro salvezza. Al termine dell'incantesimo, il bersaglio capirà di essere stato affascinato dall'incantatore.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "druid", "ranger"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 24,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Animal Friendship",
      level: 1,
      materials: {
        en: "a morsel of food",
        it: "un boccone di cibo",
      },
      name: {
        en: "Animal Friendship",
        it: "Amicizia con gli Animali",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 239,
      },
      text: {
        base: {
          en: "Target a Beast that you can see within range. The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration. If you or one of your allies deals damage to the target, the spells ends.",
          it: "L'incantatore sceglie come bersaglio una bestia entro gittata che è in grado di vedere. Il bersaglio deve superare un tiro salvezza su Saggezza, altrimenti rimane affascinato per la durata dell'incantesimo. Se l'incantatore o uno dei suoi alleati infligge danni al bersaglio, l'incantesimo termina.",
        },
        upgrade: {
          en: "You can target one additional Beast for each spell slot level above 1.",
          it: "L'incantatore può scegliere come bersaglio una bestia aggiuntiva per ogni slot di livello superiore al 1˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "cleric", "warlock"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Bane",
      level: 1,
      materials: {
        en: "a drop of blood",
        it: "una goccia di sangue",
      },
      name: {
        en: "Bane",
        it: "Anatema",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 245,
      },
      text: {
        base: {
          en: "Up to three creatures of your choice that you can see within range must each make a Charisma saving throw. Whenever a target that fails this save makes an attack roll or a saving throw before the spell ends, the target must subtract 1d4 from the attack roll or save.",
          it: "L'incantatore sceglie fino a tre creature situate entro gittata e che è in grado di vedere, ciascuna delle quali deve effettuare un tiro salvezza su Carisma. Se un bersaglio fallisce il tiro, ogni volta che effettua un tiro per colpire o un tiro salvezza prima del termine dell'incantesimo deve sottrarre 1d4 da essi.",
        },
        upgrade: {
          en: "You can target one additional creature for each spell slot level above 1.",
          it: "L'incantatore può bersagliare una creatura aggiuntiva per ogni slot di livello superiore al 1˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "druid", "ranger"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 24,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Animal Messenger",
      level: 2,
      materials: {
        en: "a morsel of food",
        it: "un boccone di cibo",
      },
      name: {
        en: "Animal Messenger",
        it: "Animale Messaggero",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: true,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 240,
      },
      text: {
        base: {
          en: 'A Tiny Beast of your choice that you can see within range must succeed on a Charisma saving throw, or it attempts to deliver a message for you (if the target\'s Challenge Rating isn\'t 0, it automatically succeeds). You specify a location you have visited and a recipient who matches a general description, such as "a person dressed in the uniform of the town guard" or "a red-haired dwarf wearing a pointed hat." You also communicate a message of up to twenty-five words. The Beast travels for the duration toward the specified location, covering about 25 miles per 24 hours or 50 miles if the Beast can fly.\nWhen the Beast arrives, it delivers your message to the creature that you described, mimicking your communication. If the Beast doesn\'t reach its destination before the spell ends, the message is lost, and the Beast returns to where you cast the spell.',
          it: "Una bestia Minuscola a scelta entro gittata che l'incantatore è in grado di vedere deve superare un tiro salvezza su Carisma, altrimenti deve cercare di consegnare un messaggio da parte sua (se il grado di sfida del bersaglio non è 0, la prova viene superata automaticamente). L'incantatore specifica il luogo di consegna, che ha già visitato, e un destinatario che corrisponda a una descrizione generica, come \"una persona che indossa l'uniforme della guardia cittadina: o \"un nano dai capelli rossi che indossa un cappello a punta\". Inoltre, l'incantatore comunica un messaggio composto da un massimo di venticinque parole. La bestia bersaglio viaggia per la durata dell'incantesimo verso il luogo specificato, percorrendo circa 37,5 chilometri in 24 ore o 75 chilometri se è una bestia volante.\nQuando la bestia arriva a destinazione, trasmette il messaggio alla creatura descritta, imitando il modo di comunicare dell'incantatore. Se la bestia non raggiunge la sua destinazione prima della fine dell'incantesimo, il messaggio viene perso e la bestia torna nel luogo dove l'incantatore ha lanciato l'incantesimo.",
        },
        upgrade: {
          en: "The spell's duration increases by 48 hours for each spell slot level above 2.",
          it: "La durata dell'incantesimo aumenta di 48 ore per ogni slot di livello superiore al 2˚.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["cleric", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Animate Dead",
      level: 3,
      materials: {
        en: "a drop of blood, a piece of flesh, and a pinch of bone dust",
        it: "una goccia di sangue, un pezzo di carne e un pizzico di polvere d'osso",
      },
      name: {
        en: "Animate Dead",
        it: "Animare Morti",
      },
      range: {
        type: "distance",
        imperial: {
          value: 10,
          unit: "ft",
        },
        metric: {
          value: 3,
          unit: "m",
        },
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 240,
      },
      text: {
        base: {
          en: "Choose a pile of bones or a corpse of a Medium or Small Humanoid within range. The target becomes an Undead creature: a Skeleton if you chose bones or a Zombie if you chose a corpse.On each of your turns, you can take a Bonus Action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move on its next turn, or you can issue a general command, such as to guard a chamber or corridor. If you issue no commands, the creature takes the Dodge action and moves only to avoid harm. Once given an order, the creature continues to follow it until its task is complete.The creature is under your control for 24 hours, after which it stops obeying any command you've given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell rather than animating a new creature.",
        },
        upgrade: {
          en: "You animate or reassert control over two additional Undead creatures for each spell slot level above 3. Each of the creatures must come from a different corpse or pile of bones.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "bard", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Animate Objects",
      level: 5,
      name: {
        en: "Animate Objects",
        it: "Animare Oggetti",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 240,
      },
      text: {
        base: {
          en: "Objects animate at your command. Choose a number of nonmagical objects within range that aren't being worn or carried, aren't fixed to a surface, and aren't Gargantuan. The maximum number of objects is equal to your spellcasting ability modifier; for this number, a Medium or smaller target counts as one object, a Large target counts as two, and a Huge target counts as three.Each target animates, sprouts legs, and becomes a Construct that uses the Animated Object stat block; this creature is under your control until the spell ends or until it is reduced to 0 Hit Points. Each creature you make with this spell is an ally to you and your allies. In combat, it shares your Initiative count and takes its turn immediately after yours.Until the spell ends, you can take a Bonus Action to mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any of them at the same time, issuing the same command to each one). If you issue no commands, the creature takes the Dodge action and moves only to avoid harm. When the creature drops to 0 Hit Points, it reverts to its object form, and any remaining damage carries over to that form.",
        },
        upgrade: {
          en: "The creature's Slam damage increases by 1d4 (Medium or smaller), 1d6 (Large), or 1d12 (Huge) for each spell slot level above 5.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "ranger", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 8,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Nondetection",
      level: 3,
      materials: {
        en: "a pinch of diamond dust worth 25+ GP, which the spell consumes",
        it: "un pizzico di polvere di diamante del valore di 25 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Nondetection",
        it: "Anti-individuazione",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 302,
      },
      text: {
        base: {
          en: "For the duration, you hide a target that you touch from Divination spells. The target can be a willing creature, or it can be a place or an object no larger than 10 feet in any dimension. The target can't be targeted by any Divination spell or perceived through magical scrying sensors.",
          it: "Per la durata dell'incantesimo, l'incantatore nasconde agli incantesimi di divinazione un bersaglio da lui toccato. Il bersaglio può essere una creatura consenziente, oppure un luogo o un oggetto non più grande di 3 metri in qualsiasi dimensione. Il bersaglio non può essere preso di mira da alcun incantesimo di divinazione né percepito da sensori di scrutamento magico.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "hour",
      },
      classes: ["bard", "druid", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "day",
        upTo: false,
      },
      id: "PHB'24/Antipathy/Sympathy",
      level: 8,
      materials: {
        en: "a mix of vinegar and honey",
        it: "una miscela di aceto e miele",
      },
      name: {
        en: "Antipathy/Sympathy",
        it: "Antipatia/Simpatia",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 242,
      },
      text: {
        base: {
          en: "As you cast the spell, choose whether it creates antipathy or sympathy, and target one creature or object that is Huge or smaller. Then specify a kind of creature, such as red dragons, goblins, or vampires. A creature of the chosen kind makes a Wisdom saving throw when it comes within 120 feet of the target. Your choice of antipathy or sympathy determines what happens to a creature when it fails that save:Antipathy. The creature has the Frightened condition. The Frightened creature must use its movement on its turns to get as far away as possible from the target, moving by the safest route.Sympathy. The creature has the Charmed condition. The Charmed creature must use its movement on its turns to get as close as possible to the target, moving by the safest route. If the creature is within 5 feet of the target, the creature can't willingly move away. If the target damages the Charmed creature, that creature can make a Wisdom saving throw to end the effect, as described below. Ending the Effect. If the Frightened or Charmed creature ends its turn more than 120 feet away from the target, the creature makes a Wisdom saving throw. On a successful save, the creature is no longer affected by the target. A creature that successfully saves against this effect is immune to it for 1 minute, after which it can be affected again.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "druid", "paladin", "ranger"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Elemental Weapon",
      level: 3,
      name: {
        en: "Elemental Weapon",
        it: "Arma Elementale",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 267,
      },
      text: {
        base: {
          en: "A nonmagical weapon you touch becomes a magic weapon. Choose one of the following damage types: Acid, Cold, Fire, Lightning, or Thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits.",
          it: "Un'arma non magica toccata dall'incantatore diventa un'arma magica. L'incantatore sceglie uno dei tipi di danno seguenti: acido, freddo, fulmine, fuoco o tuono. Per la durata dell'incantesimo, l'arma ottiene un bonus di +1 ai tiri per colpire e infligge 1d4 danni extra del tipo scelto quando colpisce.",
        },
        upgrade: {
          en: "If you use a level 5-6 spell slot, the bonus to attack rolls increases to +2, and the extra damage increases to 2d4. If you use a level 7+ spell slot, the bonus increases to +3, and the extra damage increases to 3d4.",
          it: "Se l'incantatore usa uno slot incantesimo di 5˚ o 6˚ livello, il bonus ai tiri per colpire aumenta a +2 e i danni extra aumentano a 2d4. Se l'incantatore usa uno slot incantesimo di 7˚ livello o superiore, il bonus aumenta a +3 e i danni extra aumentano a 3d4.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["artificer", "paladin", "ranger", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Magic Weapon",
      level: 2,
      name: {
        en: "Magic Weapon",
        it: "Arma Magica",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 295,
      },
      text: {
        base: {
          en: "You touch a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack rolls and damage rolls. The spell ends early if you cast it again.",
          it: "L'incantatore tocca un'arma non magica, e, fino al termine dell'incantesimo, quell'arma diventa un'arma magica con un bonus di +1 ai tiri per colpire e ai tiri per i danni. L'incantesimo termina in anticipo se l'incantatore lo lancia di nuovo.",
        },
        upgrade: {
          en: "The bonus increases to +2 with a level 3-5 spell slot. The bonus increases to +3 with a level 6+ spell slot.",
          it: "Il bonus aumenta a +2 con uno slot incantesimo compreso tra il 3˚ e il 5˚ livello. Il bonus aumenta a +3 con uno slot incantesimo di 6˚ livello o superiore.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["cleric"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Spiritual Weapon",
      level: 2,
      name: {
        en: "Spiritual Weapon",
        it: "Arma Spirituale",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 319,
      },
      text: {
        base: {
          en: "You create a floating, spectral force that resembles a weapon of your choice and lasts for the duration. The force appears within range in a space of your choice, and you can immediately make one melee spell attack against one creature within 5 feet of the force. On a hit, the target takes Force damage equal to 1d8 plus your spellcasting ability modifier.As a Bonus Action on your later turns, you can move the force up to 20 feet and repeat the attack against a creature within 5 feet of it.",
        },
        upgrade: {
          en: "The damage increases by 1d8 for every slot level above 2.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["warlock"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Armor of Agathys",
      level: 1,
      materials: {
        en: "a shard of blue glass",
        it: "un frammento di vetro blu",
      },
      name: {
        en: "Armor of Agathys",
        it: "Armatura di Agathys",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 243,
      },
      text: {
        base: {
          en: "Protective magical frost surrounds you. You gain 5 Temporary Hit Points. If a creature hits you with a melee attack roll before the spell ends, the creature takes 5 Cold damage. The spell ends early if you have no Temporary Hit Points.",
          it: "Una patina di gelo magico protettivo circonda l'incantatore, che ottiene 5 punti ferita temporanei. Se una creatura colpisce l'incantatore con un tiro per colpire in mischia prima del termine dell'incantesimo, la creatura subisce 5 danni da freddo. L'incantesimo termina in anticipo se l'incantatore non ha punti ferita temporanei.",
        },
        upgrade: {
          en: "The Temporary Hit Points and the Cold damage both increase by 5 for each spell slot level above 1.",
          it: "I punti ferita temporanei e i danni da freddo aumentano di 5 per ogni slot di livello superiore al 1˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 8,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Mage Armor",
      level: 1,
      materials: {
        en: "a piece of cured leather",
        it: "un pezzo di cuoio trattato",
      },
      name: {
        en: "Mage Armor",
        it: "Armatura Magica",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 293,
      },
      text: {
        base: {
          en: "You touch a willing creature who isn't wearing armor. Until the spell ends, the target's base AC becomes 13 plus its Dexterity modifier. The spell ends early if the target dons armor.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Druidcraft",
      level: 0,
      name: {
        en: "Druidcraft",
        it: "Artificio Druidico",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 266,
      },
      text: {
        base: {
          en: "Whispering to the spirits of nature, you create one of the following effects within range. Weather Sensor. You create a Tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round. Bloom. You instantly make a flower blossom, a seed pod open, or a leaf bud bloom. Sensory Effect. You create a harmless sensory effect, such as falling leaves, spectral dancing fairies, a gentle breeze, the sound of an animal, or the faint odor of skunk. The effect must fit in a 5-foot Cube. Fire Play. You light or snuff out a candle, a torch, or a campfire.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "paladin"],
      concentration: true,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Aura of Purity",
      level: 4,
      name: {
        en: "Aura of Purity",
        it: "Aura di Purezza",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 244,
      },
      text: {
        base: {
          en: "An aura radiates from you in a 30-foot Emanation for the duration. While in the aura, you and your allies have Resistance to Poison damage and Advantage on saving throws to avoid or end effects that include the Blinded, Charmed, Deafened, Frightened, Paralyzed, Poisoned, or Stunned condition.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "paladin"],
      concentration: true,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Aura of Life",
      level: 4,
      name: {
        en: "Aura of Life",
        it: "Aura di Vita",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 244,
      },
      text: {
        base: {
          en: "An aura radiates from you in a 30-foot Emanation for the duration. While in the aura, you and your allies have Resistance to Necrotic damage, and your Hit Point maximums can't be reduced. If an ally with 0 Hit Points starts its turn in the aura, that ally regains 1 Hit Point.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "druid", "paladin"],
      concentration: true,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Aura of Vitality",
      level: 3,
      name: {
        en: "Aura of Vitality",
        it: "Aura di Vitalità",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 244,
      },
      text: {
        base: {
          en: "An aura radiates from you in a 30-foot Emanation for the duration. When you create the aura and at the start of each of your turns while it persists, you can restore 2d6 Hit Points to one creature in it.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 24,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Nystul's Magic Aura",
      level: 2,
      materials: {
        en: "a small square of silk",
        it: "un piccolo pezzo quadrato di seta",
      },
      name: {
        en: "Nystul's Magic Aura",
        it: "Aura Magica di Nystul",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 302,
      },
      text: {
        base: {
          en: "With a touch, you place an illusion on a willing creature or an object that isn't being worn or carried. A creature gains the Mask effect below, and an object gains the False Aura effect below. The effect lasts for the duration. If you cast the spell on the same target every day for 30 days, the illusion lasts until dispelled. Mask (Creature). Choose a creature type other than the target's actual type. Spells and other magical effects treat the target as if it were a creature of the chosen type. False Aura (Object). You change the way the target appears to spells and magical effects that detect magical auras, such as Detect Magic. You can make a nonmagical object appear magical, make a magic item appear nonmagical, or change the object's aura so that it appears to belong to a school of magic you choose.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Holy Aura",
      level: 8,
      materials: {
        en: "a reliquary worth 1,000+ GP",
        it: "un reliquiario del valore di 1.000 mo o più",
      },
      name: {
        en: "Holy Aura",
        it: "Aura Sacra",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 286,
      },
      text: {
        base: {
          en: "For the duration, you emit an aura in a 30-foot Emanation. While in the aura, creatures of your choice have Advantage on all saving throws, and other creatures have Disadvantage on attack rolls against them. In addition, when a Fiend or an Undead hits an affected creature with a melee attack roll, the attacker must succeed on a Constitution saving throw or have the Blinded condition until the end of its next turn.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "ranger"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 24,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Goodberry",
      level: 1,
      materials: {
        en: "a sprig of mistletoe",
        it: "un rametto di vischio",
      },
      name: {
        en: "Goodberry",
        it: "Bacche Benefiche",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 280,
      },
      text: {
        base: {
          en: "Ten berries appear in your hand and are infused with magic for the duration. A creature can take a Bonus Action to eat one berry. Eating a berry restores 1 Hit Point, and the berry provides enough nourishment to sustain a creature for one day.\nUneaten berries disappear when the spell ends.",
          it: "Per la durata dell'incantesimo, nella mano dell'incantatore appaiono dieci bacche infuse di magia. Una creatura può effettuare un'azione bonus per mangiare una bacca, recuperando così 1 punto ferita e ottenendo nutrimento sufficiente per una giornata intera.\nLe bacche non mangiate scompaiono al termine dell'incantesimo.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Moonbeam",
      level: 2,
      materials: {
        en: "a moonseed leaf",
        it: "una foglia di un vitigno legnoso",
      },
      name: {
        en: "Moonbeam",
        it: "Bagliore Lunare",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 300,
      },
      text: {
        base: {
          en: "A silvery beam of pale light shines down in a 5-foot-radius, 40-foot-high Cylinder centered on a point within range. Until the spell ends, Dim Light fills the Cylinder, and you can take a Magic action on later turns to move the Cylinder up to 60 feet.When the Cylinder appears, each creature in it makes a Constitution saving throw. On a failed save, a creature takes 2d10 Radiant damage, and if the creature is shape-shifted (as a result of the Polymorph spell, for example), it reverts to its true form and can't shape-shift until it leaves the Cylinder. On a successful save, a creature takes half as much damage only. A creature also makes this save when the spell's area moves into its space and when it enters the spell's area or ends its turn there. A creature makes this save only once per turn.",
        },
        upgrade: {
          en: "The damage increases by 1d10 for each spell slot level above 2.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "druid", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Sunbeam",
      level: 6,
      materials: {
        en: "a magnifying glass",
        it: "una lente d'ingrandimento",
      },
      name: {
        en: "Sunbeam",
        it: "Bagliore Solare",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 329,
      },
      text: {
        base: {
          en: "You launch a sunbeam in a 5-foot-wide, 60-foot-long Line. Each creature in the Line makes a Constitution saving throw. On a failed save, a creature takes 6d8 Radiant damage and has the Blinded condition until the start of your next turn. On a successful save, it takes half as much damage only.Until the spell ends, you can take a Magic action to create a new Line of radiance.For the duration, a mote of brilliant radiance shines above you. It sheds Bright Light in a 30-foot radius and Dim Light for an additional 30 feet. This light is sunlight.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 10,
        unit: "minute",
      },
      classes: ["bard", "cleric", "druid"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Heroes' Feast",
      level: 6,
      materials: {
        en: "a gem-encrusted bowl worth 1,000+ GP, which the spell consumes",
        it: "una ciotola tempestata di gemme del valore di 1.000 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Heroes' Feast",
        it: "Banchetto degli Eroi",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 284,
      },
      text: {
        base: {
          en: "You conjure a feast that appears on a surface in an unoccupied 10-foot Cube next to you. The feast takes 1 hour to consume and disappears at the end of that time, and the beneficial effects don't set in until this hour is over. Up to twelve creatures can partake of the feast.A creature that partakes gains several benefits, which last for 24 hours. The creature has Resistance to Poison damage, and it has Immunity to the Frightened and Poisoned conditions. Its Hit Point maximum also increases by 2d10, and it gains the same number of Hit Points.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Blade Barrier",
      level: 6,
      name: {
        en: "Blade Barrier",
        it: "Barriera di Lame",
      },
      range: {
        type: "distance",
        imperial: {
          value: 90,
          unit: "ft",
        },
        metric: {
          value: 27,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 247,
      },
      text: {
        base: {
          en: "You create a wall of whirling blades made of magical energy. The wall appears within range and lasts for the duration. You make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides Three-Quarters Cover, and its space is Difficult Terrain.Any creature in the wall's space makes a Dexterity saving throw, taking 6d10 Force damage on a failed save or half as much damage on a successful one. A creature also makes that save if it enters the wall's space or ends it turn there. A creature makes that save only once per turn.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Vicious Mockery",
      level: 0,
      name: {
        en: "Vicious Mockery",
        it: "Beffa Crudele",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 337,
      },
      text: {
        base: {
          en: "You unleash a string of insults laced with subtle enchantments at one creature you can see or hear within range. The target must succeed on a Wisdom saving throw or take 1d6 Psychic damage and have Disadvantage on the next attack roll it makes before the end of its next turn.",
        },
        upgrade: {
          en: "The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "paladin"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Bless",
      level: 1,
      materials: {
        en: "a Holy Symbol worth 5+ GP",
        it: "un simbolo sacro del valore di 5 mo o più",
      },
      name: {
        en: "Bless",
        it: "Benedizione",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 247,
      },
      text: {
        base: {
          en: "You bless up to three creatures within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target adds 1d4 to the attack roll or save.",
        },
        upgrade: {
          en: "You can target one additional creature for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Hold Monster",
      level: 5,
      materials: {
        en: "a straight piece of iron",
        it: "una sbarra di ferro",
      },
      name: {
        en: "Hold Monster",
        it: "Blocca Mostri",
      },
      range: {
        type: "distance",
        imperial: {
          value: 90,
          unit: "ft",
        },
        metric: {
          value: 27,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 285,
      },
      text: {
        base: {
          en: "Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or have the Paralyzed condition for the duration. At the end of each of its turns, the target repeats the save, ending the spell on itself on a success.",
          it: "L'incantatore sceglie una creatura entro gittata che è in grado di vedere. Il bersaglio deve superare un tiro salvezza su Saggezza, altrimenti rimane paralizzato per la durata dell'incantesimo. Alla fine di ogni suo turno, il bersaglio ripete il tiro salvezza e, se lo supera, termina l'incantesimo su di sé.",
        },
        upgrade: {
          en: "You can target one additional creature for each spell slot level above 5.",
          it: "L'incantatore può bersagliare una creatura aggiuntiva per ogni slot di livello superiore al 5˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "cleric", "druid", "sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Hold Person",
      level: 2,
      materials: {
        en: "a straight piece of iron",
        it: "una sbarra di ferro",
      },
      name: {
        en: "Hold Person",
        it: "Blocca Persone",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 286,
      },
      text: {
        base: {
          en: "Choose a Humanoid that you can see within range. The target must succeed on a Wisdom saving throw or have the Paralyzed condition for the duration. At the end of each of its turns, the target repeats the save, ending the spell on itself on a success.",
          it: "L'incantatore sceglie un umanoide entro gittata che è in grado di vedere. Il bersaglio deve superare un tiro salvezza su Saggezza, altrimenti rimane paralizzato per la durata dell'incantesimo. Alla fine di ogni suo turno, il bersaglio ripete il tiro salvezza e, se lo supera, termina l'incantesimo su di sé.",
        },
        upgrade: {
          en: "You can target one additional Humanoid for each spell slot level above 2.",
          it: "L'incantatore può bersagliare un umanoide aggiuntiva per ogni slot di livello superiore al 5˚.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["artificer", "bard", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "until_dispelled",
      },
      id: "PHB'24/Magic Mouth",
      level: 2,
      materials: {
        en: "jade dust worth 10+ GP, which the spell consumes",
        it: "polvere di giada del valore di 10 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Magic Mouth",
        it: "Bocca Magica",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: true,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 295,
      },
      text: {
        base: {
          en: "You implant a message within an object in range—a message that is uttered when a trigger condition is met. Choose an object that you can see and that isn't being worn or carried by another creature. Then speak the message, which must be 25 words or fewer, though it can be delivered over as long as 10 minutes. Finally, determine the circumstance that will trigger the spell to deliver your message.When that trigger occurs, a magical mouth appears on the object and recites the message in your voice and at the same volume you spoke. If the object you chose has a mouth or something that looks like a mouth (for example, the mouth of a statue), the magical mouth appears there, so the words appear to come from the object's mouth. When you cast this spell, you can have the spell end after it delivers its message, or it can remain and repeat its message whenever the trigger occurs.The trigger can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the object. For example, you could instruct the mouth to speak when any creature moves within 30 feet of the object or when a silver bell rings within 30 feet of it.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["warlock"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Arms of Hadar",
      level: 1,
      name: {
        en: "Arms of Hadar",
        it: "Braccia di Hadar",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 243,
      },
      text: {
        base: {
          en: "Invoking Hadar, you cause tendrils to erupt from yourself. Each creature in a 10-foot Emanation originating from you makes a Strength saving throw. On a failed save, a target takes 2d6 Necrotic damage and can't take Reactions until the start of its next turn. On a successful save, a target takes half as much damage only.",
          it: "Invocando Hadar, dal corpo dell'incantatore erompono dei tentacoli. Ogni creatura in un'emanazione di 3 metri di cui l'incantatore è il punto di origine effettua un tiro salvezza su Forza. Se lo fallisce, il bersaglio subisce 2d6 danni necrotici e non può effettuare reazioni fino all'inizio del proprio turno successivo. Se invece lo supera, subisce soltanto la metà di quei danni.",
        },
        upgrade: {
          en: "The damage increases by 1d6 for each spell slot level above 1.",
          it: "I danni aumentano di 1d6 per ogni slot incantesimo di livello superiore al 1˚.",
        },
      },
    },
    {
      castingTime: {
        type: "reaction",
      },
      classes: ["artificer", "bard", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Feather Fall",
      level: 1,
      materials: {
        en: "a small feather or piece of down",
        it: "una piccola piuma",
      },
      name: {
        en: "Feather Fall",
        it: "Caduta Morbida",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 271,
      },
      text: {
        base: {
          en: "Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If a creature lands before the spell ends, the creature takes no damage from the fall, and the spell ends for that creature.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["warlock", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Tasha's Bubbling Cauldron",
      level: 6,
      materials: {
        en: "a gilded ladle worth 500 + GP",
        it: "un mestolo dorato del valore di 500 mo o più",
      },
      name: {
        en: "Tasha's Bubbling Cauldron",
        it: "Calderone Ribollente di Tasha",
      },
      range: {
        type: "distance",
        imperial: {
          value: 5,
          unit: "ft",
        },
        metric: {
          value: 1.5,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 330,
      },
      text: {
        base: {
          en: "You conjure a claw-footed cauldron filled with bubbling liquid. The cauldron appears in an unoccupied space on the ground within 5 feet of you and lasts for the duration. The cauldron can't be moved and disappears when the spell ends, along with the bubbling liquid inside it.\nThe liquid in the cauldron duplicates the properties of a Common or an Uncommon potion of your choice (such as a _Potion of Healing_). As a Bonus Action, you or an ally can reach into the cauldron and withdraw one potion of that kind. The potion is contained in a vial that disappears when the potion is consumed. The cauldron can produce a number of these potions equal to your spellcasting ability modifier (minimum 1). When the last of these potions is withdrawn from the cauldron, the cauldron disappears, and the spell ends.\nPotions obtained from the cauldron that aren't consumed disappear when you cast this spell again.",
          it: "L'incantatore evoca un calderone dotato di piedini curvi, pieno di liquido ribollente. Il calderone appare in uno spazio libero sul terreno entro 1,5 metri dall'incantatore e permane per la durata dell'incantesimo. Il calderone non può essere spostato e scompare al termine dell'incantesimo, insieme al liquido gorgogliante al suo interno.\nIl liquido nel calderone è in grado di replicare le proprietà di una pozione comune o non comune a scelta dell'incantatore (per esempio, una _pozione di guarigione_). Come azione bonus, l'incantatore o un alleato può attingere al calderone e prelevare una pozione del tipo scelto. La pozione è contenuta in una fiala che scompare quando viene consumata. Il calderone può produrre un numero di pozioni pari al modificatore di caratteristica da incantatore dell'incantatore (minimo 1). Quando l'ultima di queste pozioni viene prelevata da calderone, il calderone scompare e l'incantesimo termina.\nLe pozioni ricavate dal calderone che non vengono consumate scompaiono quando l'incantatore lancia nuovamente l'incantesimo.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "cleric"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Calm Emotions",
      level: 2,
      name: {
        en: "Calm Emotions",
        it: "Calmare Emozioni",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 249,
      },
      text: {
        base: {
          en: "Each Humanoid in a 20-foot-radius Sphere centered on a point you choose within range must succeed on a Charisma saving throw or be affected by one of the following effects (choose for each creature):The creature has Immunity to the Charmed and Frightened conditions until the spell ends. If the creature was already Charmed or Frightened, those conditions are suppressed for the duration.The creature becomes Indifferent about creatures of your choice that it's Hostile toward. This indifference ends if the target takes damage or witnesses its allies taking damage. When the spell ends, the creature's attitude returns to normal.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["druid"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 8,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Wind Walk",
      level: 6,
      materials: {
        en: "a candle",
        it: "una candela",
      },
      name: {
        en: "Wind Walk",
        it: "Camminare nel Vento",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 341,
      },
      text: {
        base: {
          en: "You and up to ten willing creatures of your choice within range assume gaseous forms for the duration, appearing as wisps of cloud. While in this cloud form, a target has a Fly Speed of 300 feet and can hover; it has Immunity to the Prone condition; and it has Resistance to Bludgeoning, Piercing, and Slashing damage. The only actions a target can take in this form are the Dash action or a Magic action to begin reverting to its normal form. Reverting takes 1 minute, during which the target has the Stunned condition. Until the spell ends, the target can revert to cloud form, which also requires a Magic action followed by a 1-minute transformation.If a target is in cloud form and flying when the effect ends, the target descends 60 feet per round for 1 minute until it lands, which it does safely. If it can't land after 1 minute, it falls the remaining distance.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "cleric", "druid", "ranger", "sorcerer"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Water Walk",
      level: 3,
      materials: {
        en: "a piece of cork",
        it: "un pezzo di sughero",
      },
      name: {
        en: "Water Walk",
        it: "Camminare sull'acqua",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: true,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 340,
      },
      text: {
        base: {
          en: "This spell grants the ability to move across any liquid surface—such as water, acid, mud, snow, quicksand, or lava—as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heat). Up to ten willing creatures of your choice within range gain this ability for the duration.\nAn affected target must take a Bonus Action to pass from the liquid's surface into the liquid itself and vice versa, but if the target falls into the liquid, the target passes through the surface into the liquid below.",
          it: "Questo incantesimo conferisce la capacità di muoversi su una qualsiasi superficie liquida, come l'acqua, l'acido, il fango, la neve, le sabbie mobili o la lava, come se si trattasse di un innocuo terreno solido (ma le creature che attraversano un tratto di lava fusa possono comunque subire danni da calore). Fino a dieci creature consenzienti entro gittata a scelta dell'incantatore ottengono questa capacità per la durata dell'incantesimo.\nUn bersaglio colpito deve usare un'azione bonus per passare dalla superficie del liquido all'interno del liquido stesso e viceversa, ma se il bersaglio cade dentro di esso passa attraverso la superficie nel liquido sottostante.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Antimagic Field",
      level: 8,
      materials: {
        en: "iron filings",
        it: "limatura di ferro",
      },
      name: {
        en: "Antimagic Field",
        it: "Campo Anti-magia",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 241,
      },
      text: {
        base: {
          en: "An aura of antimagic surrounds you in 10-foot Emanation. No one can cast spells, take Magic actions, or create other magical effects inside the aura, and those things can't target or otherwise affect anything inside it. Magical properties of magic items don't work inside the aura or on anything inside it.Areas of effect created by spells or other magic can't extend into the aura, and no one can teleport into or out of it or use planar travel there. Portals close temporarily while in the aura.Ongoing spells, except those cast by an Artifact or a deity, are suppressed in the area. While an effect is suppressed, it doesn't function, but the time it spends suppressed counts against its duration.Dispel Magic has no effect on the aura, and the auras created by different Antimagic Field spells don't nullify each other.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "bard", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Disguise Self",
      level: 1,
      name: {
        en: "Disguise Self",
        it: "Camuffare Sè Stesso",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 262,
      },
      text: {
        base: {
          en: "You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends. You can seem 1 foot shorter or taller and can appear heavier or lighter. You must adopt a form that has the same basic arrangement of limbs as you have. Otherwise, the extent of the illusion is up to you.The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing.To discern that you are disguised, a creature must take the Study action to inspect your appearance and succeed on an Intelligence (Investigation) check against your spell save DC.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["bard", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 8,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Leomund's Tiny Hut",
      level: 3,
      materials: {
        en: "a crystal bead",
        it: "una perla di cristallo",
      },
      name: {
        en: "Leomund's Tiny Hut",
        it: "Capanna di Leomund",
      },
      range: {
        type: "self",
      },
      ritual: true,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 291,
      },
      text: {
        base: {
          en: "A 10-foot Emanation springs into existence around you and remains stationary for the duration. The spell fails when you cast it if the Emanation isn't big enough to fully encapsulate all creatures in its area.Creatures and objects within the Emanation when you cast the spell can move through it freely. All other creatures and objects are barred from passing through it. Spells of level 3 or lower can't be cast through it, and the effects of such spells can't extend into it.The atmosphere inside the Emanation is comfortable and dry, regardless of the weather outside. Until the spell ends, you can command the interior to have Dim Light or Darkness (no action required). The Emanation is opaque from the outside and of any color you choose, but it's transparent from the inside.The spell ends early if you leave the Emanation or if you cast it again.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: [
        "artificer",
        "bard",
        "cleric",
        "druid",
        "ranger",
        "sorcerer",
        "wizard",
      ],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Enhance Ability",
      level: 2,
      materials: {
        en: "fur or a feather",
        it: "un ciuffo di peli o una piuma",
      },
      name: {
        en: "Enhance Ability",
        it: "Caratteristica Potenziata",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 268,
      },
      text: {
        base: {
          en: "You touch a creature and choose Strength, Dexterity, Intelligence, Wisdom, or Charisma. For the duration, the target has Advantage on ability checks using the chosen ability.",
          it: "L'incantatore tocca una creatura e sceglie Forza, Destrezza, Intelligenza, Saggezza o Carisma. Per la durata dell'incantesimo, il bersaglio dispone di vantaggio sulle prove di caratteristica effettuate utilizzando l'abilità scelta.",
        },
        upgrade: {
          en: "You can target one additional creature for each spell slot level above 2. You can choose a different ability for each target.",
          it: "L'incantatore può bersagliare una creatura aggiuntiva per ogni slot di livello superiore al 2˚. L'incantatore può scegliere una caratteristica differente per ogni bersaglio.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Flesh to Stone",
      level: 6,
      materials: {
        en: "a cockatrice feather",
        it: "una piuma di coccatrice",
      },
      name: {
        en: "Flesh to Stone",
        it: "Carne di Pietra",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 275,
      },
      text: {
        base: {
          en: "You attempt to turn one creature that you can see within range into stone. The target makes a Constitution saving throw. On a failed save, it has the Restrained condition for the duration. On a successful save, its Speed is 0 until the start of your next turn. Constructs automatically succeed on the save.A Restrained target makes another Constitution saving throw at the end of each of its turns. If it successfully saves against this spell three times, the spell ends. If it fails its saves three times, it is turned to stone and has the Petrified condition for the duration. The successes and failures needn't be consecutive; keep track of both until the target collects three of a kind.If you maintain your Concentration on this spell for the entire possible duration, the target is Petrified until the condition is ended by Greater Restoration or similar magic.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Chain Lightning",
      level: 6,
      materials: {
        en: "three silver pins",
        it: "tre spilli d'argento",
      },
      name: {
        en: "Chain Lightning",
        it: "Catena di Fulmini",
      },
      range: {
        type: "distance",
        imperial: {
          value: 150,
          unit: "ft",
        },
        metric: {
          value: 45,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 249,
      },
      text: {
        base: {
          en: "You launch a lightning bolt toward a target you can see within range. Three bolts then leap from that target to as many as three other targets of your choice, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts.Each target makes a Dexterity saving throw, taking 10d8 Lightning damage on a failed save or half as much damage on a successful one.",
        },
        upgrade: {
          en: "One additional bolt leaps from the first target to another target for each spell slot level above 6.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "cleric", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Blindness/Deafness",
      level: 2,
      name: {
        en: "Blindness/Deafness",
        it: "Cecità/Sordità",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 248,
      },
      text: {
        base: {
          en: "One creature that you can see within range must succeed on a Constitution saving throw, or it has the Blinded or Deafened condition (your choice) for the duration. At the end of each of its turns, the target repeats the save, ending the spell on itself on a success.",
        },
        upgrade: {
          en: "You can target one additional creature for each spell slot level above 2.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "until_dispelled",
      },
      id: "PHB'24/Sequester",
      level: 7,
      materials: {
        en: "gem dust worth 5,000+ GP, which the spell consumes",
        it: "polvere di gemme del valore di 5.000 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Sequester",
        it: "Celare",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 315,
      },
      text: {
        base: {
          en: 'With a touch, you magically sequester an object or a willing creature. For the duration, the target has the Invisible condition and can\'t be targeted by Divination spells, detected by magic, or viewed remotely with magic.If the target is a creature, it enters a state of suspended animation; it has the Unconscious condition, doesn\'t age, and doesn\'t need food, water, or air.You can set a condition for the spell to end early. The condition can be anything you choose, but it must occur or be visible within 1 mile of the target. Examples include "after 1,000 years" or "when the tarrasque awakens." This spell also ends if the target takes any damage.',
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Circle of Death",
      level: 6,
      materials: {
        en: "the powder of a crushed black pearl worth 500+ GP",
        it: "polvere ricavata da una perla nera frantumata, del valore di 500 mo o più",
      },
      name: {
        en: "Circle of Death",
        it: "Cerchio di Morte",
      },
      range: {
        type: "distance",
        imperial: {
          value: 150,
          unit: "ft",
        },
        metric: {
          value: 45,
          unit: "m",
        },
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 250,
      },
      text: {
        base: {
          en: "Negative energy ripples out in a 60-foot-radius Sphere from a point you choose within range. Each creature in that area makes a Constitution saving throw, taking 8d8 Necrotic damage on a failed save or half as much damage on a successful one.",
          it: "Un flusso di energia negativa si espande in una sfera del raggio di 18 metri da un punto a scelta dell'incantatore situato entro gittata. Ogni creatura nell'area effettua un tiro salvezza su Costituzione, subendo 8d8 danni necrotici in caso di fallimento, o la metà dei danni in caso di successo.",
        },
        upgrade: {
          en: "The damage increases by 2d8 for each spell slot level above 6.",
          it: "I danni aumentano di 2d8 per ogni slot di livello superiore al 6˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "paladin", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Circle of Power",
      level: 5,
      name: {
        en: "Circle of Power",
        it: "Cerchio di Potere",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 250,
      },
      text: {
        base: {
          en: "An aura radiates from you in a 30-foot Emanation for the duration. While in the aura, you and your allies have Advantage on saving throws against spells and other magical effects. When an affected creature makes a saving throw against a spell or magical effect that allows a save to take only half damage, it takes no damage if it succeeds on the save.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "round",
        upTo: false,
      },
      id: "PHB'24/Teleportation Circle",
      level: 5,
      materials: {
        en: "rare inks worth 50+ GP, which the spell consumes",
        it: "inchiostri rari dal valore di 50 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Teleportation Circle",
        it: "Cerchio di Teletrasporto",
      },
      range: {
        type: "distance",
        imperial: {
          value: 10,
          unit: "ft",
        },
        metric: {
          value: 3,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 332,
      },
      text: {
        base: {
          en: "As you cast the spell, you draw a 5-foot-radius circle on the ground inscribed with sigils that link your location to a permanent teleportation circle of your choice whose sigil sequence you know and that is on the same plane of existence as you. A shimmering portal opens within the circle you drew and remains open until the end of your next turn. Any creature that enters the portal instantly appears within 5 feet of the destination circle or in the nearest unoccupied space if that space is occupied.\nMany major temples, guildhalls, and other important places have permanent teleportation circles. Each circle includes a unique sigil sequence—a string of runes arranged in a particular pattern.\nWhen you first gain the ability to cast this spell, you learn the sigil sequences for two destinations on the Material Plane, determined by the DM. You might learn additional sigil sequences during your adventures. You can commit a new sigil sequence to memory after studying it for 1 minute.\nYou can create a permanent teleportation circle by casting this spell in the same location every day for 365 days.",
          it: "Quando lancia l'incantesimo, l'incantatore traccia un cerchio di diametro di 1,5 metri sul terreno dotato di sigilli che collegano il luogo in cui si trova a un cerchio di teletrasporto permanente a sua scelta, di cui conosce la sequenza di sigilli e che si trova sullo stesso piano di esistenza. All'interno del cerchio tracciato si apre un portale scintillante che rimane aperto fino al termine del suo turno successivo. Qualsiasi creatura che entra nel portale appare immediatamente entro 1,5 metri dal cerchio di destinazione o nello spazio libero più vicino se tale spazio è occupato.\nNella maggior parte dei casi, templi e palazzi delle gilde più grandi, oltre ad altri luoghi importanti, sono dotati di cerchi di teletrasporto permanenti. Ognuno di essi include una sequenza di sigilli unica: una serie di rune disposte secondo uno schema particolare.\nQuando l'incantatore ottiene per la prima volta la capacità di lanciare questo incantesimo, apprende la sequenza di sigilli abbinata a due destinazioni situate sul Piano Materiale, determinate dal DM. Nel corso delle avventure può apprendere ulteriori sequenze di sigilli, imparando a memoria ciascuna di esse dopo 1 minuto di studio.\nL'incantatore può creare un cerchio di teletrasporto permanente lanciando questo incantesimo nello stesso luogo ogni giorno per 365 giorni.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["cleric", "paladin", "warlock", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Magic Circle",
      level: 3,
      materials: {
        en: "salt and powdered silver worth 100+ GP, which the spell consumes",
        it: "sale e polvere d'argento del valore di 100 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Magic Circle",
        it: "Cerchio Magico",
      },
      range: {
        type: "distance",
        imperial: {
          value: 10,
          unit: "ft",
        },
        metric: {
          value: 3,
          unit: "m",
        },
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 293,
      },
      text: {
        base: {
          en: "You create a 10-foot-radius, 20-foot-tall Cylinder of magical energy centered on a point on the ground that you can see within range. Glowing runes appear wherever the Cylinder intersects with the floor or other surface.\nChoose one or more of the following types of creatures: Celestials, Elementals, Fey, Fiends, or Undead. The circle affects a creature of the chosen type in the following ways:\n- The creature can't willingly enter the Cylinder by nonmagical means. If the creature tries to use teleportation or interplanar travel to do so, it must first succeed on a Charisma saving throw.\n- The creature has Disadvantage on attack rolls against targets within the Cylinder.\n- Targets within the Cylinder can't be possessed by or gain the Charmed or Frightened condition from the creature.\nEach time you cast this spell, you can cause its magic to operate in the reverse direction, preventing a creature of the specified type from leaving the Cylinder and protecting targets outside it.",
          it: "L'incantatore crea un cilindro di energia magica di 3 metri di raggio e 6 metri di altezza, centrato su un punto del terreno entro gittata che è in grado di vedere. Rune luminose appaiono nei punti in cui il cilindro si interseca con il pavimento o altre superfici.\nL'incantatore sceglie uno o più tra i tipi di creature seguenti: celestiali, elementali, folletti, immondi o non morti. Il cerchio influenza una creatura del tipo scelto nei seguenti modi:\n- La creatura non può entrare volontariamente nel cilindro tramite mezzi non magici. Se prova a utilizzare il teletrasporto o il viaggio interplanare, deve prima superare un tiro salvezza su Carisma.\n- La creatura subisce svantaggio ai tiri per colpire contro i bersagli all'interno del cilindro.\n- I bersagli all'interno del cilindro non possono essere posseduti, affascinati o spaventati dalla creatura.\nOgni volta che lancia questo incantesimo, l'incantatore può far funzionare la sua magia nella direzione inversa, impedendo cioè a una creatura di un tipo specifico di uscire dal cilindro e proteggendo i bersagli all'esterno.",
        },
        upgrade: {
          en: "The duration increases by 1 hour for each spell slot level above 3.",
          it: "La durata aumenta di 1 ora per ogni slot di livello superiore al 3˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "druid", "sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Charm Person",
      level: 1,
      name: {
        en: "Charm Person",
        it: "Charme su Persone",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 249,
      },
      text: {
        base: {
          en: "One Humanoid you can see within range makes a Wisdom saving throw. It does so with Advantage if you or your allies are fighting it. On a failed save, the target has the Charmed condition until the spell ends or until you or your allies damage it. The Charmed creature is Friendly to you. When the spell ends, the target knows it was Charmed by you.",
          it: "Un umanoide entro gittata che l'incantatore è in grado di vedere effettua un tiro salvezza su Saggezza, disponendo di vantaggio se l'incantatore o i suoi alleati stanno combattendo contro di essa. In caso di fallimento, il bersaglio è affascinato fino al termine dell'incantesimo o finché non gli vengono inflitti danni dall'incantatore o i suoi alleati. La creatura affascinata è amichevole nei confronti dell'incantatore. Al termine dell'incantesimo, il bersaglio capirà di essere stato affascinato dall'incantatore.",
        },
        upgrade: {
          en: "You can target one additional creature for each spell slot level above 1.",
          it: "L'incantatore può bersagliare una creatura aggiuntiva per ogni slot di livello superiore al 1˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "druid", "sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Charm Monster",
      level: 4,
      name: {
        en: "Charm Monster",
        it: "Charme sui Mostri",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 249,
      },
      text: {
        base: {
          en: "One creature you can see within range makes a Wisdom saving throw. It does so with Advantage if you or your allies are fighting it. On a failed save, the target has the Charmed condition until the spell ends or until you or your allies damage it. The Charmed creature is Friendly to you. When the spell ends, the target knows it was Charmed by you.",
          it: "Una creatura entro gittata che l'incantatore è in grado di vedere effettua un tiro salvezza su Saggezza, disponendo di vantaggio se l'incantatore o i suoi alleati stanno combattendo contro di essa. In caso di fallimento, il bersaglio è affascinato fino al termine dell'incantesimo o finché non gli vengono inflitti danni dall'incantatore o i suoi alleati. La creatura affascinata è amichevole nei confronti dell'incantatore. Al termine dell'incantesimo, il bersaglio capirà di essere stato affascinato dall'incantatore.",
        },
        upgrade: {
          en: "You can target one additional creature for each spell slot level above 4.",
          it: "L'incantatore può bersagliare una creatura aggiuntiva per ogni slot di livello superiore al 4˚.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 10,
        unit: "minute",
      },
      classes: ["bard", "cleric", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Clairvoyance",
      level: 3,
      materials: {
        en: "a focus worth 100+ GP, either a jeweled horn for hearing or a glass eye for seeing",
        it: "un focus del valore di 100 mo o più, a scelta tra un cornetto acustico incastonato di gemme o un occhio di vetro per la vista",
      },
      name: {
        en: "Clairvoyance",
        it: "Chiaroveggenza",
      },
      range: {
        type: "distance",
        imperial: {
          value: 1,
          unit: "mi",
        },
        metric: {
          value: 1.5,
          unit: "km",
        },
      },
      ritual: false,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 250,
      },
      text: {
        base: {
          en: "You create an Invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The intangible, invulnerable sensor remains in place for the duration.When you cast the spell, choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As a Bonus Action, you can switch between seeing and hearing.A creature that sees the sensor (such as a creature benefiting from See Invisibility or Truesight) sees a luminous orb about the size of your fist.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "hour",
      },
      classes: ["wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Clone",
      level: 8,
      materials: {
        en: "a diamond worth 1,000+ GP, which the spell consumes, and a sealable vessel worth 2,000+ GP that is large enough to hold the creature being cloned",
        it: "un diamante del calore di 1.000 mo o più, che l'incantesimo consuma, e un contenitore sigillabile del valore di 2.000 mo o più, abbastanza grande da contenere la creatura da clonare",
      },
      name: {
        en: "Clone",
        it: "Clone",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 251,
      },
      text: {
        base: {
          en: "You touch a creature or at least 1 cubic inch of its flesh. An inert duplicate of that creature forms inside the vessel used in the spell's casting and finishes growing after 120 days; you choose whether the finished clone is the same age as the creature or younger. The clone remains inert and endures indefinitely while its vessel remains undisturbed.If the original creature dies after the clone finishes forming, the creature's soul transfers to the clone if the soul is free and willing to return. The clone is physically identical to the original and has the same personality, memories, and abilities, but none of the original's equipment. The creature's original remains, if any, become inert and can't be revived, since the creature's soul is elsewhere.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: false,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/True Strike",
      level: 0,
      materials: {
        en: "a weapon with which you have proficiency and that is worth 1+ CP",
      },
      name: {
        en: "True Strike",
        it: "Colpo Accurato",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 336,
      },
      text: {
        base: {
          en: "Guided by a flash of magical insight, you make one attack with the weapon used in the spell's casting. The attack uses your spellcasting ability for the attack and damage rolls instead of using Strength or Dexterity. If the attack deals damage, it can be Radiant damage or the weapon's normal damage type (your choice).",
          it: "Guidato da un lampo di intuizione magica, l'incantatore effettua un attacco con l'arma utilizzata per lanciare l'incantesimo. Per determinare il tiro per colpire e il tiro per i danni, l'incantatore utilizza la sua caratteristica da incantatore invece che la Forza o la Destrezza. Se l'attacco infligge danni, possono essere danni radiosi o danni normali inflitti dall'arma (a scelta dell'incantatore).",
        },
        upgrade: {
          en: "Whether you deal Radiant damage or the weapon's normal damage type, the attack deals extra Radiant damage when you reach levels 5 (1d6), 11 (2d6), and 17 (3d6).",
          it: "A prescindere dal tipo di danni che l'incantatore sceglie (danni radiosi o danni normali dell'arma), l'attacco infligge danni radiosi extra quando l'incantatore raggiunge il 5˚ livello (1d6), l'11˚ livello (2d6) e il 17˚ livello (3d6).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Flame Strike",
      level: 5,
      materials: {
        en: "a pinch of sulfur",
        it: "un pizzico di zolfo",
      },
      name: {
        en: "Flame Strike",
        it: "Colpo Infuocato",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 275,
      },
      text: {
        base: {
          en: "A vertical column of brilliant fire roars down from above. Each creature in a 10-foot-radius, 40-foot-high Cylinder centered on a point within range makes a Dexterity saving throw, taking 5d6 Fire damage and 5d6 Radiant damage on a failed save or half as much damage on a successful one.",
        },
        upgrade: {
          en: "The Fire damage and the Radiant damage increase by 1d6 for each spell slot level above 5.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["ranger"],
      concentration: true,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Ensnaring Strike",
      level: 1,
      name: {
        en: "Ensnaring Strike",
        it: "Colpo Intrappolante",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 268,
      },
      text: {
        base: {
          en: "As you hit the target, grasping vines appear on it, and it makes a Strength saving throw. A Large or larger creature has Advantage on this save. On a failed save, the target has the Restrained condition until the spell ends. On a successful save, the vines shrivel away, and the spell ends.\nWhile Restrained, the target takes 1d6 Piercing damage at the start of each of its turns. The target or a creature within reach of it can take an action to make a Strength (Athletics) check against your spell save DC. On a success, the spell ends.",
          it: "Quando l'incantatore colpisce il bersaglio, su di esso appare un groviglio di rampicanti. Il bersaglio effettua un tiro salvezza su Forza, disponendo di vantaggio a questo tiro se è una creatura di taglia Grande o superiore. Se lo fallisce, il bersaglio è trattenuto fino al termine dell'incantesimo. Se lo supera, i rampicanti si ritraggono e avvizziscono. Ponendo fine all'incantesimo.\nFinché è trattenuto, il bersaglio subisce 1d6 danni perforanti all'inizio di ogni suo turno. Il bersaglio o una creatura alla sua portata può usare un'azione per effettuare una prova di Forza (Atletica) contro la CD del tiro salvezza sull'incantesimo. In caso di successo, l'incantesimo termina.",
        },
        upgrade: {
          en: "The damage increases by 1d6 for each spell slot level above 1.",
          it: "I danni aumentano di 1d6 per ogni slot di livello superiore al 1˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: false,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Ice Knife",
      level: 1,
      materials: {
        en: "a drop of water or a piece of ice",
        it: "una goccia d'acqua o un frammento di ghisccio",
      },
      name: {
        en: "Ice Knife",
        it: "Coltello di Ghiaccio",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 287,
      },
      text: {
        base: {
          en: "You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 Piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of it must succeed on a Dexterity saving throw or take 2d6 Cold damage.",
        },
        upgrade: {
          en: "The Cold damage increases by 1d6 for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "cleric", "paladin"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Command",
      level: 1,
      name: {
        en: "Command",
        it: "Comando",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 251,
      },
      text: {
        base: {
          en: "You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. Choose the command from these options:Approach. The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you.Drop. The target drops whatever it is holding and then ends its turn.Flee. The target spends its turn moving away from you by the fastest available means.Grovel. The target has the Prone condition and then ends its turn.Halt. On its turn, the target doesn't move and takes no action or Bonus Action.",
        },
        upgrade: {
          en: "You can affect one additional creature for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Comprehend Languages",
      level: 1,
      materials: {
        en: "a pinch of soot and salt",
        it: "un pizzico di fuliggine e di sale",
      },
      name: {
        en: "Comprehend Languages",
        it: "Comprensione dei Linguaggi",
      },
      range: {
        type: "self",
      },
      ritual: true,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 252,
      },
      text: {
        base: {
          en: "For the duration, you understand the literal meaning of any language that you hear or see signed. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text. This spell doesn't decode symbols or secret messages.",
          it: "Per la durata dell'incantesimo, l'incantatore comprende il significato letterale di qualsiasi linguaggio che è in grado di sentire o vedere tramite segni. Comprende inoltre ogni linguaggio scritto che è in grado di vedere, ma deve toccare la superficie su cui sono scritte le parole. È necessario circa 1 minuto per leggere una pagina di testo. Questo incantesimo non decodifica simboli o messaggi segreti.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Compulsion",
      level: 4,
      name: {
        en: "Compulsion",
        it: "Compulsione",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 252,
      },
      text: {
        base: {
          en: "Each creature of your choice that you can see within range must succeed on a Wisdom saving throw or have the Charmed condition until the spell ends.For the duration, you can take a Bonus Action to designate a direction that is horizontal to you. Each Charmed target must use as much of its movement as possible to move in that direction on its next turn, taking the safest route. After moving in this way, a target repeats the save, ending the spell on itself on a success.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["cleric"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Commune",
      level: 5,
      materials: {
        en: "incense",
        it: "incenso",
      },
      name: {
        en: "Commune",
        it: "Comunione",
      },
      range: {
        type: "self",
      },
      ritual: true,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 251,
      },
      text: {
        base: {
          en: "You contact a deity or a divine proxy and ask up to three questions that can be answered with yes or no. You must ask your questions before the spell ends. You receive a correct answer for each question.Divine beings aren't necessarily omniscient, so you might receive \"unclear\" as an answer if a question pertains to information that lies beyond the deity's knowledge. In a case where a one-word answer could be misleading or contrary to the deity's interests, the DM might offer a short phrase as an answer instead.If you cast the spell more than once before finishing a Long Rest, there is a cumulative 25 percent chance for each casting after the first that you get no answer.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["druid", "ranger"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Commune with Nature",
      level: 5,
      name: {
        en: "Commune with Nature",
        it: "Comunione con la Natura",
      },
      range: {
        type: "self",
      },
      ritual: true,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 252,
      },
      text: {
        base: {
          en: "You commune with nature spirits and gain knowledge of the surrounding area. In the outdoors, the spell gives you knowledge of the area within 3 miles of you. In caves and other natural underground settings, the radius is limited to 300 feet. The spell doesn't function where nature has been replaced by construction, such as in castles and settlements.\nChoose three of the following facts; you learn those facts as they pertain to the spell's area:\n- Locations of settlements\n- Locations of portals to other planes of existence\n- Location of one Challenge Rating 10+ creature (DM's choice) that is a Celestial, an Elemental, a Fey, a Fiend, or an Undead\n- The most prevalent kind of plant, mineral, or Beast (you choose which to learn)\n- Locations of bodies of water\nFor example, you could determine the location of a powerful monster in the area, the locations of bodies of water, and the locations of any towns.",
          it: "L'incantatore entra in comunione con gli spiriti della natura e acquisisce conoscenza dell'area circostante. All'aperto, l'incantesimo fornisce all'incantatore la conoscenza dell'area entro un raggio di 4,5 chilometri. Nelle caverne e in altri ambienti naturali sotterranei, il raggio è limitato a 90 metri. L'incantesimo non funziona nei luoghi in cui la natura è stata sostituita da costruzioni, come castelli e insediamenti.\nScegli tre dei seguenti fatti; l'incantatore apprende i fatti che riguardano l'area dell'incantesimo:\n- Luoghi di insediamento\n- Ubicazione dei portali che conducono verso altri piani di esistenza\n- Ubicazione di una creatura con grado di sfida pari o superiore a 10 (a scelta del DM) che sia celestiale, un elementale, un folletto, un immondo o un non morto\n- Il tipo di pianta, minerale o bestia più diffuso (l'incantatore sceglie quale apprendere)\n- Ubicazione di distese d'acqua\nAd esempio, l'incantatore può determinare l'ubicazione di un potente mostro situato in quell'area, l'ubicazione delle distese d'acqua e l'ubicazione di eventuali cittadine.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "druid", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Confusion",
      level: 4,
      materials: {
        en: "three nut shells",
        it: "tre gusci di noce",
      },
      name: {
        en: "Confusion",
        it: "Confusione",
      },
      range: {
        type: "distance",
        imperial: {
          value: 90,
          unit: "ft",
        },
        metric: {
          value: 27,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 253,
      },
      text: {
        base: {
          en: "Each creature in a 10-foot-radius Sphere centered on a point you choose within range must succeed on a Wisdom saving throw, or that target can't take Bonus Actions or Reactions and must roll 1d10 at the start of each of its turns to determine its behavior for that turn, consulting the table below.1d10Behavior for the Turn1The target doesn't take an action, and it uses all its movement to move. Roll 1d4 for the direction: 1, north; 2, east; 3, south; or 4, west.2-6The target doesn't move or take actions.7-8The target doesn't move, and it takes the Attack action to make one melee attack against a random creature within reach. If none are within reach, the target takes no action.9-10The target chooses its behavior.At the end of each of its turns, an affected target repeats the save, ending the spell on itself on a success.",
        },
        upgrade: {
          en: "The Sphere's radius increases by 5 feet for each spell slot level above 4.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Cone of Cold",
      level: 5,
      materials: {
        en: "a small crystal or glass cone",
        it: "un piccolo cono di cristallo o vetro",
      },
      name: {
        en: "Cone of Cold",
        it: "Cono di Freddo",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 253,
      },
      text: {
        base: {
          en: "You unleash a blast of cold air. Each creature in a 60-foot Cone originating from you makes a Constitution saving throw, taking 8d8 Cold damage on a failed save or half as much damage on a successful one. A creature killed by this spell becomes a frozen statue until it thaws.",
        },
        upgrade: {
          en: "The damage increases by 1d8 for each spell slot level above 5.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 10,
        unit: "minute",
      },
      classes: ["bard", "cleric", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Legend Lore",
      level: 5,
      materials: {
        en: "incense worth 250+ GP, which the spell consumes, and four ivory strips worth 50+ GP each",
        it: "incenso del valore di 250 mo o più, che l'incantesimo consuma, e quattro bastoncini d'avorio del valore di 50 mo o più ciascuno",
      },
      name: {
        en: "Legend Lore",
        it: "Conoscenza delle Leggende",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 290,
      },
      text: {
        base: {
          en: "Name or describe a famous person, place, or object. The spell brings to your mind a brief summary of the significant lore about that famous thing, as described by the DM.The lore might consist of important details, amusing revelations, or even secret lore that has never been widely known. The more information you already know about the thing, the more precise and detailed the information you receive is. That information is accurate but might be couched in figurative language or poetry, as determined by the DM.If the famous thing you chose isn't actually famous, you hear sad musical notes played on a trombone, and the spell fails.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "druid"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 7,
        unit: "day",
        upTo: false,
      },
      id: "PHB'24/Contagion",
      level: 5,
      name: {
        en: "Contagion",
        it: "Contagio",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 256,
      },
      text: {
        base: {
          en: "Your touch inflicts a magical contagion. The target must succeed on a Constitution saving throw or take 11d8 Necrotic damage and have the Poisoned condition. Also, choose one ability when you cast the spell. While Poisoned, the target has Disadvantage on saving throws made with the chosen ability.The target must repeat the saving throw at the end of each of its turns until it gets three successes or failures. If the target succeeds on three of these saves, the spell ends on the target. If the target fails three of the saves, the spell lasts for 7 days on it.Whenever the Poisoned target receives an effect that would end the Poisoned condition, the target must succeed on a Constitution saving throw, or the Poisoned condition doesn't end on it.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Contact Other Plane",
      level: 5,
      name: {
        en: "Contact Other Plane",
        it: "Contattare Altri Piani",
      },
      range: {
        type: "self",
      },
      ritual: true,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 255,
      },
      text: {
        base: {
          en: 'You mentally contact a demigod, the spirit of a long-dead sage, or some other knowledgeable entity from another plane. Contacting this otherworldly intelligence can break your mind. When you cast this spell, make a DC 15 Intelligence saving throw. On a successful save, you can ask the entity up to five questions. You must ask your questions before the spell ends. The DM answers each question with one word, such as "yes," "no," "maybe," "never," "irrelevant," or "unclear" (if the entity doesn\'t know the answer to the question). If a one-word answer would be misleading, the DM might instead offer a short phrase as an answer.\nOn a failed save, you take 6d6 Psychic damage and have the Incapacitated condition until you finish a Long Rest. A Greater Restoration spell cast on you ends this effect.',
          it: 'L\'incantatore contatta mentalmente un semidio, lo spirito di un sapiente defunto da tempo o qualche altra entità saggia appartenente a un altro piano. Contattare questa intelligenza ultraterrena può sconvolgere la sua mente: quando l\'incantatore lancia questo incantesimo, deve effettuare un tiro salvezza su Intelligenza con CD 15. In caso di successo, l\'incantatore lancia questo incantesimo, deve effettuare un tiro salvezza su Intelligenza con CD 15. In caso di successo, l\'incantatore può porre all\'entità un massimo di cinque domande prima del termine dell\'incantesimo. Il DM risponde a ogni domanda con una parola, ad esempio "sì", "no", "forse", "mai", "irrilevante" o "ignoto" (se l\'entità non conosce la risposta alla domanda). Nel caso in cui una risposta di una parola sola possa rivelarsi fuorviante, il DM può fornire come risposta una breve frase.\nIn caso di fallimento, l\'incantatore subisce 6d6 danni psichici ed è incapacitato finché non completa un riposo lungo. Un incantesimo _ristorare superiore_ fa svanire questo effetto.',
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 10,
        unit: "minute",
      },
      classes: ["wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "day",
        upTo: false,
      },
      id: "PHB'24/Contingency",
      level: 6,
      materials: {
        en: "a gem-encrusted statuette of yourself worth 1,500+ GP",
        it: "una statuetta dell'incantatore tempestata di gemme, del valore di 1.500 mo o più",
      },
      name: {
        en: "Contingency",
        it: "Contingenza",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 256,
      },
      text: {
        base: {
          en: "Choose a spell of level 5 or lower that you can cast, that has a casting time of an action, and that can target you. You cast that spell—called the contingent spell—as part of casting Contingency, expending spell slots for both, but the contingent spell doesn't come into effect. Instead, it takes effect when a certain trigger occurs. You describe that trigger when you cast the two spells. For example, a Contingency cast with Water Breathing might stipulate that Water Breathing comes into effect when you are engulfed in water or a similar liquid.The contingent spell takes effect immediately after the trigger occurs for the first time, whether or not you want it to, and then Contingency ends.The contingent spell takes effect only on you, even if it can normally target others. You can use only one Contingency spell at a time. If you cast this spell again, the effect of another Contingency spell on you ends. Also, Contingency ends on you if its material component is ever not on your person.",
        },
      },
    },
    {
      castingTime: {
        type: "reaction",
      },
      classes: ["sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: false,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Counterspell",
      level: 3,
      name: {
        en: "Counterspell",
        it: "Controincantesimo",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 258,
      },
      text: {
        base: {
          en: "You attempt to interrupt a creature in the process of casting a spell. The creature makes a Constitution saving throw. On a failed save, the spell dissipates with no effect, and the action, Bonus Action, or Reaction used to cast it is wasted. If that spell was cast with a spell slot, the slot isn't expended.",
          it: "L'incantatore tenta di interrompere una creatura nell'atto di lanciare un incantesimo. La creatura effettua un tiro salvezza su Costituzione. Se lo fallisce, l'incantesimo si dissolve senza alcun effetto e l'azione, azione bonus o reazione utilizzata per lanciarlo viene sprecata. Se l'incantesimo è stato lanciato usando uno slot incantesimo, lo slot non viene consumato.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "druid", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Control Water",
      level: 4,
      materials: {
        en: "a mixture of water and dust",
        it: "una miscela di acqua e polvere",
      },
      name: {
        en: "Control Water",
        it: "Controllare l'Acqua",
      },
      range: {
        type: "distance",
        imperial: {
          value: 300,
          unit: "ft",
        },
        metric: {
          value: 90,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 256,
      },
      text: {
        base: {
          en: "Until the spell ends, you control any water inside an area you choose that is a Cube up to 100 feet on a side, using one of the following effects. As a Magic action on your later turns, you can repeat the same effect or choose a different one. Flood. You cause the water level of all standing water in the area to rise by as much as 20 feet. If you choose an area in a large body of water, you instead create a 20-foot tall wave that travels from one side of the area to the other and then crashes. Any Huge or smaller vehicles in the wave's path are carried with it to the other side. Any Huge or smaller vehicles struck by the wave have a 25 percent chance of capsizing.The water level remains elevated until the spell ends or you choose a different effect. If this effect produced a wave, the wave repeats on the start of your next turn while the flood effect lasts. Part Water. You part water in the area and create a trench. The trench extends across the spell's area, and the separated water forms a wall to either side. The trench remains until the spell ends or you choose a different effect. The water then slowly fills in the trench over the course of the next round until the normal water level is restored. Redirect Flow. You cause flowing water in the area to move in a direction you choose, even if the water has to flow over obstacles, up walls, or in other unlikely directions. The water in the area moves as you direct it, but once it moves beyond the spell's area, it resumes its flow based on the terrain. The water continues to move in the direction you chose until the spell ends or you choose a different effect. Whirlpool. You cause a whirlpool to form in the center of the area, which must be at least 50 feet square and 25 feet deep. The whirlpool lasts until you choose a different effect or the spell ends. The whirlpool is 5 feet wide at the base, up to 50 feet wide at the top, and 25 feet tall. Any creature in the water and within 25 feet of the whirlpool is pulled 10 feet toward it. When a creature enters the whirlpool for the first time on a turn or ends its turn there, it makes a Strength saving throw. On a failed save, the creature takes 2d8 Bludgeoning damage. On a successful save, the creature takes half as much damage. A creature can swim away from the whirlpool only if it first takes an action to pull away and succeeds on a Strength (Athletics) check against your spell save DC.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 10,
        unit: "minute",
      },
      classes: ["cleric", "druid", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 8,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Control Weather",
      level: 8,
      materials: {
        en: "burning incense",
        it: "incenso bruciato",
      },
      name: {
        en: "Control Weather",
        it: "Controllare Tempo Atmosferico",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 257,
      },
      text: {
        base: {
          en: "You take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell, and it ends early if you go indoors.When you cast the spell, you change the current weather conditions, which are determined by the DM. You can change precipitation, temperature, and wind. It takes 1d4 × 10 minutes for the new conditions to take effect. Once they do so, you can change the conditions again. When the spell ends, the weather gradually returns to normal.When you change the weather conditions, find a current condition on the following tables and change its stage by one, up or down. When changing the wind, you can change its direction.PrecipitationStageCondition1Clear2Light clouds3Overcast or ground fog4Rain, hail, or snow5Torrential rain, driving hail, or blizzardTemperatureStageCondition1Heat wave2Hot3Warm4Cool5Cold6FreezingWindStageCondition1Calm2Moderate wind3Strong wind4Gale5Storm",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["ranger"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 8,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Cordon of Arrows",
      level: 2,
      materials: {
        en: "four or more arrows or bolts",
        it: "una treccia ornamentale",
      },
      name: {
        en: "Cordon of Arrows",
        it: "Cordone di Frecce",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 258,
      },
      text: {
        base: {
          en: "You touch up to four nonmagical Arrows or Bolts and plant them in the ground in your space. Until the spell ends, the ammunition can't be physically uprooted, and whenever a creature other than you enters a space within 30 feet of the ammunition for the first time on a turn or ends its turn there, one piece of ammunition flies up to strike it. The creature must succeed on a Dexterity saving throw or take 2d4 Piercing damage. The piece of ammunition is then destroyed. The spell ends when none of the ammunition remains planted in the ground.\nWhen you cast this spell, you can designate any creatures you choose, and the spell ignores them.",
          it: "L'incantatore tocca fino a quatro frecce o dardi non magici e li conficca nel terreno nel suo spazio. Fino al termine dell'incantesimo, le munizioni non possono essere estrattefisicamente, e ogni volta che una creatura diversa dall'incantatore entra in uno spazio entro 9 metri dalle munizioni per la prima volta in un turno o se termina il suo turno entro quella distanza, una delle munizioni sfreccia in volo per colpirla. La creatura deve superare un tiro salvezza su Destrezza, altrimenti subisce 2d4 danni perforanti. La munizione viene distrutta. L'incantesimo termina quando non rimangono più munizioni nel terreno.\nQuando l'incantatore lancia questo incantesimo, può indicare un qualsiasi numero di creature a sua scelta che saranno ignorate dall'incantesimo.",
        },
        upgrade: {
          en: "The amount of ammunition that can be affected increases by two for each spell slot level above 2.",
          it: "La quantità di munizioni che possono essere influenzate aumenta di due per ogni slot di livello superiore al 2˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Crown of Madness",
      level: 2,
      name: {
        en: "Crown of Madness",
        it: "Corona di Follia",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 259,
      },
      text: {
        base: {
          en: "One creature that you can see within range must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The creature succeeds automatically if it isn't Humanoid.\nA spectral crown appears on the Charmed target's head, and it must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no creature or if no creature is within its reach. The target repeats the save at the end of each of its turns, ending the spell on itself on a success.\nOn your later turns, you must take the Magic action to maintain control of the target, or the spell ends.",
          it: "Una creatura entro gittata e che l'incantatore è in grado di vedere deve superare un tiro salvezza su Saggezza, altrimenti diventa affascinato per la durata dell'incantesimo. La creatura supera automaticamente il tiro se non è un umanoide.\nUna corona spettrale appare sulla testa del bersaglio affascinato, che deve usare la sua azione prima di muoversi in ognuno dei suoi turni per effettuare un attacco in mischia contro una creatura diversa da se stesso e scelta mentalmente dall'incantatore. Il bersaglio può agire normalmente nel suo turno se l'incantatore non sceglie alcuna creatura o se nessuna creatura si trova entro la sua portata, e ripeterà il tiro salvezza alla fine di ogni suo turno. Se lo supera, l'incantesimo svanisce.\nNei turni successivi, l'incantatore deve effettuare l'azione di Magia per manterene il controllo sul bersaglio, o l'incantesimo termina.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["bard", "cleric", "druid", "paladin", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 30,
        unit: "day",
        upTo: false,
      },
      id: "PHB'24/Geas",
      level: 5,
      name: {
        en: "Geas",
        it: "Costrizione",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 278,
      },
      text: {
        base: {
          en: "You give a verbal command to a creature that you can see within range, ordering it to carry out some service or refrain from an action or a course of activity as you decide. The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target automatically succeeds if it can't understand your command.While Charmed, the creature takes 5d10 Psychic damage if it acts in a manner directly counter to your command. It takes this damage no more than once each day.You can issue any command you choose, short of an activity that would result in certain death. Should you issue a suicidal command, the spell ends.A Remove Curse, Greater Restoration, or Wish spell ends this spell.",
        },
        upgrade: {
          en: "If you use a level 7 or 8 spell slot, the duration is 365 days. If you use a level 9 spell slot, the spell lasts until it is ended by one of the spells mentioned above.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "cleric", "paladin"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Create Food and Water",
      level: 3,
      name: {
        en: "Create Food and Water",
        it: "Creare Cibo e Acqua",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 258,
      },
      text: {
        base: {
          en: "You create 45 pounds of food and 30 gallons of fresh water on the ground or in containers within range—both useful in fending off the hazards of malnutrition and dehydration. The food is bland but nourishing and looks like a food of your choice, and the water is clean. The food spoils after 24 hours if uneaten.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["cleric", "warlock", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Create Undead",
      level: 6,
      materials: {
        en: "one 150+ GP black onyx stone for each corpse",
        it: "una pietra onice nera del valore di 150 mo o più per ogni cadavere",
      },
      name: {
        en: "Create Undead",
        it: "Creare Non Morti",
      },
      range: {
        type: "distance",
        imperial: {
          value: 10,
          unit: "ft",
        },
        metric: {
          value: 3,
          unit: "m",
        },
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 258,
      },
      text: {
        base: {
          en: "You can cast this spell only at night. Choose up to three corpses of Medium or Small Humanoids within range. Each one becomes a **Ghoul** under your control (see the _Monster Manual_ for its stat block).\nAs a Bonus Action on each of your turns, you can mentally command any creature you animated with this spell if the creature is within 120 feet of you (if you control multiple creatures, you can command any of them at the same time, issuing the same command to them). You decide what action the creature will take and where it will move on its next turn, or you can issue a general command, such as to guard a particular place. If you issue no commands, the creature takes the Dodge action and moves only to avoid harm. Once given an order, the creature continues to follow the order until its task is complete.\nThe creature is under your control for 24 hours, after which it stops obeying any command you've given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature before the current 24-hour period ends. This use of the spell reasserts your control over up to three creatures you have animated with this spell rather than animating new ones.",
          it: "L'incantatore può lanciare questo incantesimo di notte, scegliendo fino a tre cadaveri umanoidi di taglia Media o Piccola entro gittata. Ognuno di loro diventa un **ghoul** sotto il controllo dell'incantatore (vedi il _Manuale dei Mostri_ per la scheda delle statistiche).\nCome azione bonus a ogni turno, l'incantatore può comandare mentalmente qualsiasi creatura animata con questo incantesimo, a patto che la creatura si trovi entro 36 metri da lui (se controlla varie creature, l'incantatore può comandarne più di una allo stesso momento, impartendo lo stesso comando a ciascuna di loro). L'incantatore decide quale azione effettuerà la creatura e dove si muoverà nel suo turno successivo, oppure può impartirle un comando generale, come restare di a guardia di un determinato luogo. Se invece non impartisce alcun comando, la creatura effettua l'azione Schivata e si sposta solo per evitare di subire danni. Una volta ricevuto l'ordine, la creatura continua a eseguirlo finché non ha portato a termine il compito.\nLa creatura rimane sotto il controllo dell'incantatore per 24 ore, passate le quali smette di obbedire a qualsiasi comando ulteriore. Per mantenere il controllo sulla creatura per altre 24 ore, l'incantatore deve lanciare questo incantesimo su di essa prima che l'attuale periodo di 24 termini. Questo uso dell'incantesimo gli permette di ristabilire il controllo su un massimo di tre creature da lui animate tramite questo incantesimo, anziché animarne di nuove.",
        },
        upgrade: {
          en: "If you use a level 7 spell slot, you can animate or reassert control over four **Ghouls**. If you use a level 8 spell slot, you can animate or reassert control over five **Ghouls** or two **Ghasts** or **Wights**. If you use a level 9 spell slot, you can animate or reassert control over six **Ghouls**, three **Ghasts** or **Wights**, or two **Mummies**. See the _Monster Manual_ for these stat blocks.",
          it: "Se l'incantatore usa uno slot incantesimo di 7˚ livello, può animare o ristabilire il controllo su quattro **ghoul**. Se l'incantatore usa uno slot incantesimo di 8˚ livello, può animare o ristabilire il controllo su cinque **ghoul**, o due **ghast** **wight**. Se l'incantatore usa uno slot incantesimo di 9˚ livello, può animare o ristabilire il controllo su sei **ghoul**, tre **ghast** o **wight**, o due **mummie**. Vedi il _Manuale dei Mostri_ per le schede delle statistiche.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "druid"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Create or Destroy Water",
      level: 1,
      materials: {
        en: "a mix of water and sand",
        it: "una miscela di acqua e sabbia",
      },
      name: {
        en: "Create or Destroy Water",
        it: "Creare o Distruggere Acqua",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 258,
      },
      text: {
        base: {
          en: "You do one of the following:Create Water. You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot Cube within range, extinguishing exposed flames there.Destroy Water. You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 30-foot Cube within range.",
        },
        upgrade: {
          en: "You create or destroy 10 additional gallons of water, or the size of the Cube increases by 5 feet, for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["artificer", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "special",
      },
      id: "PHB'24/Creation",
      level: 5,
      materials: {
        en: "a paintbrush",
        it: "un pennello",
      },
      name: {
        en: "Creation",
        it: "Creazione",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 259,
      },
      text: {
        base: {
          en: "You pull wisps of shadow material from the Shadowfell to create an object within range. It is either an object of vegetable matter (soft goods, rope, wood, and the like) or mineral matter (stone, crystal, metal, and the like). The object must be no larger than a 5-foot Cube, and the object must be of a form and material that you have seen.The spell's duration depends on the object's material, as shown in the Materials table. If the object is composed of multiple materials, use the shortest duration. Using any object created by this spell as another spell's Material component causes the other spell to fail.MaterialsMaterialDurationVegetable matter24 hoursStone or crystal12 hoursPrecious metals1 hourGems10 minutesAdamantine or mithral1 minute",
        },
        upgrade: {
          en: "The Cube increases by 5 feet for each spell slot level above 5.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "ranger"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Spike Growth",
      level: 2,
      materials: {
        en: "seven thorns",
        it: "sette spine",
      },
      name: {
        en: "Spike Growth",
        it: "Crescita di Spine",
      },
      range: {
        type: "distance",
        imperial: {
          value: 150,
          unit: "ft",
        },
        metric: {
          value: 45,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 319,
      },
      text: {
        base: {
          en: "The ground in a 20-foot-radius Sphere centered on a point within range sprouts hard spikes and thorns. The area becomes Difficult Terrain for the duration. When a creature moves into or within the area, it takes 2d4 Piercing damage for every 5 feet it travels.\nThe transformation of the ground is camouflaged to look natural. Any creature that can't see the area when the spell is cast must take a Search action and succeed on a Wisdom (Perception or Survival) check against your spell save DC to recognize the terrain as hazardous before entering it.",
          it: "Spine e spuntoni nascono dal terreno in una sfera del raggio di 6 metri, centrata su un punto entro gittata. Per la durata dell'incantesimo, l'area diventa terreno difficile. Quando una creatura nell'area o si muove al suo interno, subisce 2d4 danni perforanti ogni 1,5 metri di movimento.\nLa trasformazione del terreno è mimetizzata in modo da sembrare naturale. Qualsiasi creatura che non stesse osservando l'area al momento del lancio dell'incantesimo deve effettuare un'azione di Ricerca e una prova di Saggezza (Percezione o Sopravvivenza) contro la CD del tiro salvezza sull'incantesimo per riconoscere la pericolosità del terreno prima di entrarvi.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "druid", "ranger"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Plant Growth",
      level: 3,
      name: {
        en: "Plant Growth",
        it: "Crescita Vegetale",
      },
      range: {
        type: "distance",
        imperial: {
          value: 150,
          unit: "ft",
        },
        metric: {
          value: 45,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 305,
      },
      text: {
        base: {
          en: "This spell channels vitality into plants. The casting time you use determines whether the spell has the Overgrowth or the Enrichment effect below.\n**Overgrowth.** Choose a point within range. All normal plants in a 100-foot-radius Sphere centered on that point become thick and overgrown. A creature moving through that area must spend 4 feet of movement for every 1 foot it moves. You can exclude one or more areas of any size within the spell's area from being affected.\n**Enrichment.** All plants in a half-mile radius centered on a point within range become enriched for 365 days. The plants yield twice the normal amount of food when harvested. They can benefit from only one Plant Growth per year.",
          it: "Questo incantesimo incanala vitalità nei vegetali. Il tempo di lancio utilizzato determina l'effetto che ha l'incantesimo tra i due descritti di seguito: Groviglio o Fertilità.\n**Groviglio.** L'incantatore sceglie un punto entro gittata e tutti i vegetali normali entro una sfera del raggio di 30 metri centrata su quel punto crescono rigogliosamente fino a formare un groviglio. Una creatura che si muove attraverso quell'area deve usare 1,2 metri di movimento per ogni 30 centimetri di cui si muove. L'incantatore può escludere dall'influenza dell'incantesimo una o più aree di qualsiasi dimensione all'interno dell'area scelta.\n**Fertilità.** Tutti i vegetali in un raggio di 750 metri centrato in un punto entro gittata cresceranno rigogliosamente per 365 giorni e al momento del raccolto produrranno il doppio del cibo normale. I vegetali possono beneficiare di _crescita vegetale_ solo una volta all'anno.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "bard", "cleric", "druid", "paladin", "ranger"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Cure Wounds",
      level: 1,
      name: {
        en: "Cure Wounds",
        it: "Cura Ferite",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 259,
      },
      text: {
        base: {
          en: "A creature you touch regains a number of Hit Points equal to 2d8 plus your spellcasting ability modifier.",
          it: "Una creatura toccata dall'incantatore recupera un numero di punti ferita pari a 2d8 più il modificatore di caratteristica da incantatore dell'incantatore.",
        },
        upgrade: {
          en: "The healing increases by 2d8 for each spell slot level above 1.",
          it: "La guarigione aumenta di 2d8 per ogni slot di livello superiore al 1˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "cleric", "druid"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Mass Cure Wounds",
      level: 5,
      name: {
        en: "Mass Cure Wounds",
        it: "Cura Ferite di Massa",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 296,
      },
      text: {
        base: {
          en: "A wave of healing energy washes out from a point you can see within range. Choose up to six creatures in a 30-foot-radius Sphere centered on that point. Each target regains Hit Points equal to 5d8 plus your spellcasting ability modifier.",
        },
        upgrade: {
          en: "The healing increases by 1d8 for each spell slot level above 5.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Otto's Irresistible Dance",
      level: 6,
      name: {
        en: "Otto's Irresistible Dance",
        it: "Danza Irresistibile di Otto",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 303,
      },
      text: {
        base: {
          en: "One creature that you can see within range must make a Wisdom saving throw. On a successful save, the target dances comically until the end of its next turn, during which it must spend all its movement to dance in place.On a failed save, the target has the Charmed condition for the duration. While Charmed, the target dances comically, must use all its movement to dance in place, and has Disadvantage on Dexterity saving throws and attack rolls, and other creatures have Advantage on attack rolls against it. On each of its turns, the target can take an action to collect itself and repeat the save, ending the spell on itself on a success.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Fire Bolt",
      level: 0,
      name: {
        en: "Fire Bolt",
        it: "Dardo di Fuoco",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 274,
      },
      text: {
        base: {
          en: "You hurl a mote of fire at a creature or an object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 Fire damage. A flammable object hit by this spell starts burning if it isn't being worn or carried.",
        },
        upgrade: {
          en: "The damage increases by 1d10 when you reach levels 5 (2d10), 11 (3d10), and 17 (4d10).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Magic Missile",
      level: 1,
      name: {
        en: "Magic Missile",
        it: "Dardo Incantato",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 295,
      },
      text: {
        base: {
          en: "You create three glowing darts of magical force. Each dart strikes a creature of your choice that you can see within range. A dart deals 1d4 + 1 Force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.",
        },
        upgrade: {
          en: "The spell creates one more dart for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Witch Bolt",
      level: 1,
      materials: {
        en: "a twig struck by lightning",
        it: "un ramoscello colpito da un fulmine",
      },
      name: {
        en: "Witch Bolt",
        it: "Dardo Stregato",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 343,
      },
      text: {
        base: {
          en: "A beam of crackling energy lances toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against it. On a hit, the target takes 2d12 Lightning damage.\nOn each of your subsequent turns, you can take a Bonus Action to deal 1d12 Lightning damage to the target automatically, even if the first attack missed.\nThe spell ends if the target is ever outside the spell's range or if it has Total Cover from you.",
          it: "Un raggio di energia crepitante sfreccia verso una creatura entro gittata, formando una scarica di fulmini prolungata che intercorre tra l'incantatore e il bersaglio, effettuando un attacco a distanza con incantesimo contro di esso. Se lo colpisce, il bersaglio subisce 2d12 danni da fulmine.\nIn ciascuno dei suoi turni successivi, l'incantatore può usare un'azione bonus per infliggere automaticamente 1d12 danni da fulmine al bersaglio, anche se il primo attacco non è andato a segno.\nL'incantesimo termina se il bersaglio si porta al di fuori della sua gittata o se beneficia di copertura totale rispetto all'incantatore.",
        },
        upgrade: {
          en: "The initial damage increases by 1d12 for each spell slot level above 1.",
          it: "I danni iniziali aumentano di 1d12 per ogni slot di livello superiore al 1˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "round",
        upTo: false,
      },
      id: "PHB'24/Guiding Bolt",
      level: 1,
      name: {
        en: "Guiding Bolt",
        it: "Dardo Tracciante",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 282,
      },
      text: {
        base: {
          en: "You hurl a bolt of light toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 4d6 Radiant damage, and the next attack roll made against it before the end of your next turn has Advantage.",
        },
        upgrade: {
          en: "The damage increases by 1d6 for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["warlock"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Eldritch Blast",
      level: 0,
      name: {
        en: "Eldritch Blast",
        it: "Deflagrazione Occulta",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 267,
      },
      text: {
        base: {
          en: "You hurl a beam of crackling energy. Make a ranged spell attack against one creature or object in range. On a hit, the target takes 1d10 Force damage.",
          it: "L'incantatore scaglia un raggio di energia crepitante, effettuando un attacco a distanza con incantesimo contro una creatura o un oggetto entro gittata. Se il colpo va a segno, il bersaglio subisce 1d10 danni da forza.",
        },
        upgrade: {
          en: "The spell creates two beams at level 5, three beams at level 11, and four beams at level 17. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.",
          it: "L'incantesimo crea due raggi al 5˚ livello, tre raggi all'11˚ livello e quattro raggi al 17˚ livello. L'incantatore può indirizzare i raggi contro lo stesso bersaglio o contro bersagli differenti, effettuando un tiro per colpire separato per ogni bersaglio.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Wish",
      level: 9,
      name: {
        en: "Wish",
        it: "Desiderio",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 341,
      },
      text: {
        base: {
          en: "Wish is the mightiest spell a mortal can cast. By simply speaking aloud, you can alter reality itself.The basic use of this spell is to duplicate any other spell of level 8 or lower. If you use it this way, you don't need to meet any requirements to cast that spell, including costly components. The spell simply takes effect.Alternatively, you can create one of the following effects of your choice:Object Creation. You create one object of up to 25,000 GP in value that isn't a magic item. The object can be no more than 300 feet in any dimension, and it appears in an unoccupied space that you can see on the ground.Instant Health. You allow yourself and up to twenty creatures that you can see to regain all Hit Points, and you end all effects on them listed in the Greater Restoration spell.Resistance. You grant up to ten creatures that you can see Resistance to one damage type that you choose. This Resistance is permanent.Spell Immunity. You grant up to ten creatures you can see immunity to a single spell or other magical effect for 8 hours.Sudden Learning. You replace one of your feats with another feat for which you are eligible. You lose all the benefits of the old feat and gain the benefits of the new one. You can't replace a feat that is a prerequisite for any of your other feats or features.Roll Redo. You undo a single recent event by forcing a reroll of any die roll made within the last round (including your last turn). Reality reshapes itself to accommodate the new result. For example, a Wish spell could undo an ally's failed saving throw or a foe's Critical Hit. You can force the reroll to be made with Advantage or Disadvantage, and you choose whether to use the reroll or the original roll.Reshape Reality. You may wish for something not included in any of the other effects. To do so, state your wish to the DM as precisely as possible. The DM has great latitude in ruling what occurs in such an instance; the greater the wish, the greater the likelihood that something goes wrong. This spell might simply fail, the effect you desire might be achieved only in part, or you might suffer an unforeseen consequence as a result of how you worded the wish. For example, wishing that a villain were dead might propel you forward in time to a period when that villain is no longer alive, effectively removing you from the game. Similarly, wishing for a Legendary magic item or an Artifact might instantly transport you to the presence of the item's current owner. If your wish is granted and its effects have consequences for a whole community, region, or world, you are likely to attract powerful foes. If your wish would affect a god, the god's divine servants might instantly intervene to prevent it or to encourage you to craft the wish in a particular way. If your wish would undo the multiverse itself, threaten the City of Sigil, or affect the Lady of Pain in any way, you see an image of her in your mind for a moment; she shakes her head, and your wish fails.The stress of casting Wish to produce any effect other than duplicating another spell weakens you. After enduring that stress, each time you cast a spell until you finish a Long Rest, you take 1d10 Necrotic damage per level of that spell. This damage can't be reduced or prevented in any way. In addition, your Strength score becomes 3 for 2d4 days. For each of those days that you spend resting and doing nothing more than light activity, your remaining recovery time decreases by 2 days. Finally, there is a 33 percent chance that you are unable to cast Wish ever again if you suffer this stress.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Phantom Steed",
      level: 3,
      name: {
        en: "Phantom Steed",
        it: "Destriero Fantomatico",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: true,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 304,
      },
      text: {
        base: {
          en: "A Large, quasi-real, horselike creature appears on the ground in an unoccupied space of your choice within range. You decide the creature's appearance, and it is equipped with a saddle, bit, and bridle. Any of the equipment created by the spell vanishes in a puff of smoke if it is carried more than 10 feet away from the steed.For the duration, you or a creature you choose can ride the steed. The steed uses the Riding Horse stat block, except it has a Speed of 100 feet and can travel 13 miles in an hour. When the spell ends, the steed gradually fades, giving the rider 1 minute to dismount. The spell ends early if the steed takes any damage.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Tenser's Floating Disk",
      level: 1,
      materials: {
        en: "a drop of mercury",
        it: "una goccia di mercurio",
      },
      name: {
        en: "Tenser's Floating Disk",
        it: "Disco Fluttuante di Tenser",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: true,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 332,
      },
      text: {
        base: {
          en: "This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground.The disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. It can move across uneven terrain, up or down stairs, slopes and the like, but it can't cross an elevation change of 10 feet or more. For example, the disk can't move across a 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom.If you move more than 100 feet from the disk (typically because it can't move around an obstacle to follow you), the spell ends.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Disintegrate",
      level: 6,
      materials: {
        en: "a lodestone and dust",
        it: "una calamita e della polvere",
      },
      name: {
        en: "Disintegrate",
        it: "Disintegrazione",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 263,
      },
      text: {
        base: {
          en: "You launch a green ray at a target you can see within range. The target can be a creature, a nonmagical object, or a creation of magical force, such as the wall created by Wall of Force.A creature targeted by this spell makes a Dexterity saving throw. On a failed save, the target takes 10d6 + 40 Force damage. If this damage reduces it to 0 Hit Points, it and everything nonmagical it is wearing and carrying are disintegrated into gray dust. The target can be revived only by a True Resurrection or a Wish spell.This spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force. If such a target is Huge or larger, this spell disintegrates a 10-foot-Cube portion of it.",
        },
        upgrade: {
          en: "The damage increases by 3d6 for each spell slot level above 6.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "druid", "warlock", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Befuddlement",
      level: 8,
      materials: {
        en: "a key ring with no keys",
        it: "un portachiavi senza chiavi",
      },
      name: {
        en: "Befuddlement",
        it: "Disorientare",
      },
      range: {
        type: "distance",
        imperial: {
          value: 150,
          unit: "ft",
        },
        metric: {
          value: 45,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 245,
      },
      text: {
        base: {
          en: "You blast the mind of a creature that you can see within range. The target makes an Intelligence saving throw.\nOn a failed save, the target takes 10d12 Psychic damage and can't cast spells or take the Magic action. At the end of every 30 days, the target repeats the save, ending the effect on a success. The effect can also be ended by the Greater Restoration, Heal, or Wish spell.\nOn a successful save, the target takes half as much damage only.",
          it: "L'incantatore assale la mente di una creatura entro gittata che è in grado di vedere. Il bersagli effettua un tiro salvezza su Intelligenza.\nSe lo fallisce, il bersaglio subisce 10d12 danni psichici e non può lanciare incantesimi o eseguire l'azione di Magia. Alla fine di ogni 30 giorni, il bersaglio ripete il turo salvezza e, se lo supera, l'effetto svanisce. L'effetto può essere dissolto anche tramite gli incantesimi _ristorare superiore_, _guarigione_ o _desiderio_.\nSe invece lo supera, il bersaglio subisce soltanto la metà di quei danni.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "paladin"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Dispel Evil and Good",
      level: 5,
      materials: {
        en: "powdered silver and iron",
        it: "polvere d'argento e ferro",
      },
      name: {
        en: "Dispel Evil and Good",
        it: "Dissolvi il bene e il male",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 263,
      },
      text: {
        base: {
          en: "For the duration, Celestials, Elementals, Fey, Fiends, and Undead have Disadvantage on attack rolls against you. You can end the spell early by using either of the following special functions. Break Enchantment. As a Magic action, you touch a creature that is possessed by or has the Charmed or Frightened condition from one or more creatures of the types above. The target is no longer possessed, Charmed, or Frightened by such creatures. Dismissal. As a Magic action, you target one creature you can see within 5 feet of you that has one of the creature types above. The target must succeed on a Charisma saving throw or be sent back to its home plane if it isn't there already. If they aren't on their home plane, Undead are sent to the Shadowfell, and Fey are sent to the Feywild.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: [
        "artificer",
        "bard",
        "cleric",
        "druid",
        "paladin",
        "ranger",
        "sorcerer",
        "warlock",
        "wizard",
      ],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Dispel Magic",
      level: 3,
      name: {
        en: "Dispel Magic",
        it: "Dissolvi Magie",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 264,
      },
      text: {
        base: {
          en: "Choose one creature, object, or magical effect within range. Any ongoing spell of level 3 or lower on the target ends. For each ongoing spell of level 4 or higher on the target, make an ability check using your spellcasting ability (DC 10 plus that spell's level). On a successful check, the spell ends.",
          it: "L'incantatore sceglie una creatura, un oggetto o un effetto magico situato entro gittata. Ogni incantesimo di 3˚ livello o inferiore presente sul bersaglio termina. Per ogni incantesimo di 4˚ livello o superiore presente sul bersaglio, l'incantatore effettua una prova di caratteristica usando la propria caratteristica da incantatore (CD 10 più il livello di quell'incantesimo). Se la prova viene superata, l'incantesimo termina.",
        },
        upgrade: {
          en: "You automatically end a spell on the target if the spell's level is equal to or less than the level of the spell slot you use.",
          it: "L'incantesimo termina automaticamente un incantesimo sul bersaglio se il livello di quell'incantesimo è pari o inferiore al livello dello slot incantesimo usato dall'incantatore.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Finger of Death",
      level: 7,
      name: {
        en: "Finger of Death",
        it: "Dito della Morte",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 273,
      },
      text: {
        base: {
          en: "You unleash negative energy toward a creature you can see within range. The target makes a Constitution saving throw, taking 7d8 + 30 Necrotic damage on a failed save or half as much damage on a successful one.\nA Humanoid killed by this spell rises at the start of your next turn as a **Zombie** that follows your verbal orders.",
          it: "L'incantatore scatena un'ondata di energia negativa contro una creatura entro gittata che è in grado di vedere. Il bersaglio effettua un tiro salvezza su Costituzione, subendo 7d8 + 30 danni necrotici in caso di fallimento, o la metà dei danni in caso di successo.\nAll'inizio del turno successivo dell'incantatore, un umanoide ucciso da questo incantesimo si rianima come uno **zombi** (vedi appendice B) che segue gli ordini verbali dell'incantatore.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "druid", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Divination",
      level: 4,
      materials: {
        en: "incense worth 25+ GP, which the spell consumes",
        it: "incenso del valore di 25 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Divination",
        it: "Divinazione",
      },
      range: {
        type: "self",
      },
      ritual: true,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 264,
      },
      text: {
        base: {
          en: "This spell puts you in contact with a god or a god's servants. You ask one question about a specific goal, event, or activity to occur within 7 days. The DM offers a truthful reply, which might be a short phrase or cryptic rhyme. The spell doesn't account for circumstances that might change the answer, such as the casting of other spells.If you cast the spell more than once before finishing a Long Rest, there is a cumulative 25 percent chance for each casting after the first that you get no answer.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "ranger", "sorcerer"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Dominate Beast",
      level: 4,
      name: {
        en: "Dominate Beast",
        it: "Dominare Bestie",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 265,
      },
      text: {
        base: {
          en: 'One Beast you can see within range must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target has Advantage on the save if you or your allies are fighting it. Whenever the target takes damage, it repeats the save, ending the spell on itself on a success.\nYou have a telepathic link with the Charmed target while the two of you are on the same plane of existence. On your turn, you can use this link to issue commands to the target (no action required), such as "Attack that creature," "Move over there," or "Fetch that object." The target does its best to obey on its turn. If it completes an order and doesn\'t receive further direction from you, it acts and moves as it likes, focusing on protecting itself.\nYou can command the target to take a Reaction but must take your own Reaction to do so.',
          it: "Una bestia entro gittata che l'incantatore è in grado di vedere deve superare un tiro salvezza su Saggezza, altrimenti diventa affascinata per la durata dell'incantesimo. Il bersaglio dispone di vantaggio al tiro salvezza se l'incantatore o i suoi alleati stanno combattendo contro di essa. Ogni volta che il bersaglio subisce danni, ripete il tiro salvezza: se lo supera, l'effetto svanisce.\nL'incantatore ha un legame telepatico con il bersaglio affascinato mentre i due si trovano sullo stesso piano di esistenza. Nel proprio turno, l'incantatore può utilizzare questo legame per impartire comandi al bersaflio (nessuna azione richiesta), come ad esempio \"attacca quella creatura\", \"spostati lì\", o \"recupera quell'oggetto\". Il bersaglio fa del suo meglio per obbedire nel suo turno. Se porta a termine un ordine e non riceve ulteriori istruzioni dall'incantatore, agisce e si muove a suo piacimento, concentrandosi sulla propria incolumità.\nL'incantatore può comandare al bersaglio di effettuare una reazione, ma per farlo dovrà utilizzare la propria reazione.",
        },
        upgrade: {
          en: "Your Concentration can last longer with a spell slot of level 5 (up to 10 minutes), 6 (up to 1 hour), or 7+ (up to 8 hours).",
          it: "La concentrazione dell'incantesimo può durare più a lungo utilizzando uno slot incantesimo di 5˚ livello (fino a 10 minuti), di 6˚ livello (fino a 1 ora) o di 7˚ livello o superiore (fino a 8 ore).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Dominate Monster",
      level: 8,
      name: {
        en: "Dominate Monster",
        it: "Dominare Mostri",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 265,
      },
      text: {
        base: {
          en: 'One creature you can see within range must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target has Advantage on the save if you or your allies are fighting it. Whenever the target takes damage, it repeats the save, ending the spell on itself on a success.You have a telepathic link with the Charmed target while the two of you are on the same plane of existence. On your turn, you can use this link to issue commands to the target (no action required), such as "Attack that creature," "Move over there," or "Fetch that object." The target does its best to obey on its turn. If it completes an order and doesn\'t receive further direction from you, it acts and moves as it likes, focusing on protecting itself.You can command the target to take a Reaction but must take your own Reaction to do so.',
          it: "Una creatura entro gittata che l'incantatore è in grado di vedere deve superare un tiro salvezza su Saggezza, altrimenti diventa affascinata per la durata dell'incantesimo. Il bersaglio dispone di vantaggio al tiro salvezza se l'incantatore o i suoi alleati stanno combattendo contro di essa. Ogni volta che il bersaglio subisce danni, ripete il tiro salvezza: se lo supera, l'effetto svanisce.\nL'incantatore ha un legame telepatico con il bersaglio affascinato mentre i due si trovano sullo stesso piano di esistenza. Nel proprio turno, l'incantatore può utilizzare questo legame per impartire comandi al bersaflio (nessuna azione richiesta), come ad esempio \"attacca quella creatura\", \"spostati lì\", o \"recupera quell'oggetto\". Il bersaglio fa del suo meglio per obbedire nel suo turno. Se porta a termine un ordine e non riceve ulteriori istruzioni dall'incantatore, agisce e si muove a suo piacimento, concentrandosi sulla propria incolumità.\nL'incantatore può comandare al bersaglio di effettuare una reazione, ma per farlo dovrà utilizzare la propria reazione.",
        },
        upgrade: {
          en: "Your Concentration can last longer with a level 9 spell slot (up to 8 hours).",
          it: "La concentrazione dell'incantesimo può durare più a lungo utilizzando uno slot incantesimo di 5˚ livello (fino a 10 minuti), di 6˚ livello (fino a 1 ora) o di 7˚ livello o superiore (fino a 8 ore).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Dominate Person",
      level: 5,
      name: {
        en: "Dominate Person",
        it: "Dominare Persone",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 266,
      },
      text: {
        base: {
          en: 'One Humanoid you can see within range must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target has Advantage on the save if you or your allies are fighting it. Whenever the target takes damage, it repeats the save, ending the spell on itself on a success.You have a telepathic link with the Charmed target while the two of you are on the same plane of existence. On your turn, you can use this link to issue commands to the target (no action required), such as "Attack that creature," "Move over there," or "Fetch that object." The target does its best to obey on its turn. If it completes an order and doesn\'t receive further direction from you, it acts and moves as it likes, focusing on protecting itself.You can command the target to take a Reaction but must take your own Reaction to do so.',
          it: "Un umanoide entro gittata che l'incantatore è in grado di vedere deve superare un tiro salvezza su Saggezza, altrimenti diventa affascinata per la durata dell'incantesimo. Il bersaglio dispone di vantaggio al tiro salvezza se l'incantatore o i suoi alleati stanno combattendo contro di essa. Ogni volta che il bersaglio subisce danni, ripete il tiro salvezza: se lo supera, l'effetto svanisce.\nL'incantatore ha un legame telepatico con il bersaglio affascinato mentre i due si trovano sullo stesso piano di esistenza. Nel proprio turno, l'incantatore può utilizzare questo legame per impartire comandi al bersaflio (nessuna azione richiesta), come ad esempio \"attacca quella creatura\", \"spostati lì\", o \"recupera quell'oggetto\". Il bersaglio fa del suo meglio per obbedire nel suo turno. Se porta a termine un ordine e non riceve ulteriori istruzioni dall'incantatore, agisce e si muove a suo piacimento, concentrandosi sulla propria incolumità.\nL'incantatore può comandare al bersaglio di effettuare una reazione, ma per farlo dovrà utilizzare la propria reazione.",
        },
        upgrade: {
          en: "Your Concentration can last longer with a spell slot of level 6 (up to 10 minutes), 7 (up to 1 hour), or 8+ (up to 8 hours).",
          it: "La concentrazione dell'incantesimo può durare più a lungo utilizzando uno slot incantesimo di 5˚ livello (fino a 10 minuti), di 6˚ livello (fino a 1 ora) o di 7˚ livello o superiore (fino a 8 ore).",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["paladin"],
      concentration: true,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Compelled Duel",
      level: 1,
      name: {
        en: "Compelled Duel",
        it: "Duello Obbligato",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 252,
      },
      text: {
        base: {
          en: "You try to compel a creature into a duel. One creature that you can see within range makes a Wisdom saving throw. On a failed save, the target has Disadvantage on attack rolls against creatures other than you, and it can't willingly move to a space that is more than 30 feet away from you.The spell ends if you make an attack roll against a creature other than the target, if you cast a spell on an enemy other than the target, if an ally of yours damages the target, or if you end your turn more than 30 feet away from the target.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Elementalism",
      level: 0,
      name: {
        en: "Elementalism",
        it: "Elementalismo",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 267,
      },
      text: {
        base: {
          en: "You exert control over the elements, creating one of the following effects within range. Beckon Air. You create a breeze strong enough to ripple cloth, stir dust, rustle leaves, and close open doors and shutters, all in a 5-foot Cube. Doors and shutters being held open by someone or something aren't affected. Beckon Earth. You create a thin shroud of dust or sand that covers surfaces in a 5-foot-square area, or you cause a single word to appear in your handwriting in a patch of dirt or sand. Beckon Fire. You create a thin cloud of harmless embers and colored, scented smoke in a 5-foot Cube. You choose the color and scent, and the embers can light candles, torches, or lamps in that area. The smoke's scent lingers for 1 minute. Beckon Water. You create a spray of cool mist that lightly dampens creatures and objects in a 5-foot Cube. Alternatively, you create 1 cup of clean water either in an open container or on a surface, and the water evaporates in 1 minute. Sculpt Element. You cause dirt, sand, fire, smoke, mist, or water that can fit in a 1-foot Cube to assume a crude shape (such as that of a creature) for 1 hour.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "paladin"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Heroism",
      level: 1,
      name: {
        en: "Heroism",
        it: "Eroismo",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 285,
      },
      text: {
        base: {
          en: "A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to the Frightened condition and gains Temporary Hit Points equal to your spellcasting ability modifier at the start of each of its turns.",
        },
        upgrade: {
          en: "You can target one additional creature for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "paladin", "sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Banishment",
      level: 4,
      materials: {
        en: "a pentacle",
        it: "un pentacolo",
      },
      name: {
        en: "Banishment",
        it: "Esilio",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 245,
      },
      text: {
        base: {
          en: "One creature that you can see within range must succeed on a Charisma saving throw or be transported to a harmless demiplane for the duration. While there, the target has the Incapacitated condition. When the spell ends, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.\nIf the target is an Aberration, a Celestial, an Elemental, a Fey, or a Fiend, the target doesn't return if the spell lasts for 1 minute. The target is instead transported to a random location on a plane (DM's choice) associated with its creature type.",
          it: "Una creatura entro gittata che l'incantatore è in grado di vedere deve superare un tiro salvezza su Carisma o essere trasportata in un semipiano sicuro per la durata dell'incantesimo. Mentre si trova lì, il bersaglio è incapacitato. Al termine dell'incantesimo, il bersaglio riappare nello stesso spazio in cui si trovava prima del lancio o, se è occupato nello spazio libero più vicino.\nL'incantesimo sul bersaglio dura 1 minuto, il bersaglio non fa ritorno se è un'aberrazione, un celestiale, un elementale, un folletto o un immondo. In questo caso, viene trasportato in un luogo casuale di un piano (a scelta del DM) associato al tipo di creatura di cui fa parte.",
        },
        upgrade: {
          en: "You can target one additional creature for each spell slot level above 4.",
          it: "L'incantatore può bersagliare una creatura aggiuntiva per ogni slot di livello superiore al 4˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "druid", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Sunburst",
      level: 8,
      materials: {
        en: "a piece of sunstone",
        it: "un frammento di pietra di sole",
      },
      name: {
        en: "Sunburst",
        it: "Esplosione Solare",
      },
      range: {
        type: "distance",
        imperial: {
          value: 150,
          unit: "ft",
        },
        metric: {
          value: 45,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 329,
      },
      text: {
        base: {
          en: "Brilliant sunlight flashes in a 60-foot-radius Sphere centered on a point you choose within range. Each creature in the Sphere makes a Constitution saving throw. On a failed save, a creature takes 12d6 Radiant damage and has the Blinded condition for 1 minute. On a successful save, it takes half as much damage only.A creature Blinded by this spell makes another Constitution saving throw at the end of each of its turns, ending the effect on itself on a success.This spell dispels Darkness in its area that was created by any spell.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "warlock"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Enthrall",
      level: 2,
      name: {
        en: "Enthrall",
        it: "Estasiare",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 269,
      },
      text: {
        base: {
          en: "You weave a distracting string of words, causing creatures of your choice that you can see within range to make a Wisdom saving throw. Any creature you or your companions are fighting automatically succeeds on this save. On a failed save, a target has a -10 penalty to Wisdom (Perception) checks and Passive Perception until the spell ends.",
          it: "L'incantatore pronuncia una sequenza di parole disorientante, costringendo le creature da lui scelte entro gittata e che è in grado di vedere a effettuare un tiro salvezza su Saggezza. Se l'incantatore o i suoi compagni stanno combattendo contro una creatura, quella supera automaticamente questo tiro salvezza. In caso di fallimento, il bersaglio subisce una penalità di -10 alle prove di Saggezza (Percezione) e alla Percezione passiva fino al termine dell'incantesimo.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "ranger"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Conjure Animals",
      level: 3,
      name: {
        en: "Conjure Animals",
        it: "Evoca Animali",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 254,
      },
      text: {
        base: {
          en: "You conjure nature spirits that appear as a Large pack of spectral, intangible animals in an unoccupied space you can see within range. The pack lasts for the duration, and you choose the spirits' animal form, such as wolves, serpents, or birds.\nYou have Advantage on Strength saving throws while you're within 5 feet of the pack, and when you move on your turn, you can also move the pack up to 30 feet to an unoccupied space you can see.\nWhenever the pack moves within 10 feet of a creature you can see and whenever a creature you can see enters a space within 10 feet of the pack or ends its turn there, you can force that creature to make a Dexterity saving throw. On a failed save, the creature takes 3d10 Slashing damage. A creature makes this save only once per turn.",
          it: "L'incantatore evoca degli spiriti della natura che appaiono come un Grande branco di animali spettrali e intangibili in uno spazio libero entro gittata che l'incantatore è in grado di vedere. Il branco permane per la durata dell'incantesimo e l'incantatore può scegliere la forma animale assunta dagli spiriti, per esempio lupi, serpenti o uccelli.\nMentre si trova entro 1,5 metri dal branco, l'incantatore dispone di vantaggio ai tiri salvezza su Forza e, quando si muove nel suo turno, può spostare anche il branco fino a 9 metri in uno spazio libero che è in grado di vedere.\nOgni volta che il branco si muove entro 3 metri da una creatura che l'incantatore è in grado di vedere e ogni volta che una creatura che una creatura che l'incantatore è in grado di vedere entra in uno spazio entro 3 metri dal branco o vi termina il suo turno, l'incantatore può costringerla a effettuare un tiro salvezza su Destrezza. In caso di fallimento, subisce 3d10 danni taglienti. Un creatura effettua questo tiro salvezza solo una volta per turno.",
        },
        upgrade: {
          en: "The damage increases by 1d10 for each spell slot level above 3.",
          it: "I danni aumentano di 1d10 per ogni slot di livello superiore al 3˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Conjure Celestial",
      level: 7,
      name: {
        en: "Conjure Celestial",
        it: "Evoca Celestiale",
      },
      range: {
        type: "distance",
        imperial: {
          value: 90,
          unit: "ft",
        },
        metric: {
          value: 27,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 254,
      },
      text: {
        base: {
          en: "You conjure a spirit from the Upper Planes, which manifests as a pillar of light in a 10-foot-radius, 40-foot-high Cylinder centered on a point within range. For each creature you can see in the Cylinder, choose which of these lights shines on it:Healing Light. The target regains Hit Points equal to 4d12 plus your spellcasting ability modifier.Searing Light. The target makes a Dexterity saving throw, taking 6d12 Radiant damage on a failed save or half as much damage on a successful one.Until the spell ends, Bright Light fills the Cylinder, and when you move on your turn, you can also move the Cylinder up to 30 feet.Whenever the Cylinder moves into the space of a creature you can see and whenever a creature you can see enters the Cylinder or ends its turn there, you can bathe it in one of the lights. A creature can be affected by this spell only once per turn.",
        },
        upgrade: {
          en: "The healing and damage increase by 1d12 for each spell slot level above 7.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "ranger"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Conjure Woodland Beings",
      level: 4,
      name: {
        en: "Conjure Woodland Beings",
        it: "Evoca Creature Boschive",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 255,
      },
      text: {
        base: {
          en: "You conjure nature spirits that flit around you in a 10-foot Emanation for the duration. Whenever the Emanation enters the space of a creature you can see and whenever a creature you can see enters the Emanation or ends its turn there, you can force that creature to make a Wisdom saving throw. The creature takes 5d8 Force damage on a failed save or half as much damage on a successful one. A creature makes this save only once per turn.\nIn addition, you can take the Disengage action as a Bonus Action for the spell's duration.",
          it: "L'incantatore evoca degli spiriti della natura che gli fluttuano attorno in un'emanazione di 3 metri per la durata dell'incantesimo. Ogni volta che l'emanazione entra nello spazio di una creatura che l'incantatore è in grado di vedere e ogni volta che una creatura che l'incantatore è in grado di vedere entra nell'emanazione o vi termina il suo turno, l'incantatore può costringerla a effettuare un tiro salvezza su Saggezza. In caso di fallimento, subisce 5d8 danni da forza, o la metà dei danni in caso di successo. Una creatura effettua questo tiro salvezza solo una volta per turno.\nInoltre, per la durata dell'incantesimo, l'incantatore può effettuare l'azione di Disimpegno come azione bonus.",
        },
        upgrade: {
          en: "The damage increases by 1d8 for each spell slot level above 4.",
          it: "I danni aumentano di 1d8 per ogni slot di livello superiore al 4˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Conjure Elemental",
      level: 5,
      name: {
        en: "Conjure Elemental",
        it: "Evoca Elementale",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 254,
      },
      text: {
        base: {
          en: "You conjure a Large, intangible spirit from the Elemental Planes that appears in an unoccupied space within range. Choose the spirit's element, which determines its damage type: air (Lightning), earth (Thunder), fire (Fire), or water (Cold). The spirit lasts for the duration.Whenever a creature you can see enters the spirit's space or starts its turn within 5 feet of the spirit, you can force that creature to make a Dexterity saving throw if the spirit has no creature Restrained. On failed save, the target takes 8d8 damage of the spirit's type, and the target has the Restrained condition until the spell ends. At the start of each of its turns, the Restrained target repeats the save. On a failed save, the target takes 4d8 damage of the spirit's type. On a successful save, the target isn't Restrained by the spirit.",
        },
        upgrade: {
          en: "The damage increases by 1d8 for each spell slot level above 5.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Conjure Minor Elementals",
      level: 4,
      name: {
        en: "Conjure Minor Elementals",
        it: "Evoca Elementali Minori",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 255,
      },
      text: {
        base: {
          en: "You conjure spirits from the Elemental Planes that flit around you in a 15-foot Emanation for the duration. Until the spell ends, any attack you make deals an extra 2d8 damage when you hit a creature in the Emanation. This damage is Acid, Cold, Fire, or Lightning (your choice when you make the attack).In addition, the ground in the Emanation is Difficult Terrain for your enemies.",
        },
        upgrade: {
          en: "The damage increases by 1d8 for each spell slot level above 4.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Conjure Fey",
      level: 6,
      name: {
        en: "Conjure Fey",
        it: "Evoca Folletto",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 255,
      },
      text: {
        base: {
          en: "You conjure a Medium spirit from the Feywild in an unoccupied space you can see within range. The spirit lasts for the duration, and it looks like a Fey creature of your choice. When the spirit appears, you can make one melee spell attack against a creature within 5 feet of it. On a hit, the target takes Psychic damage equal to 3d12 plus your spellcasting ability modifier, and the target has the Frightened condition until the start of your next turn, with both you and the spirit as the source of the fear.As a Bonus Action on your later turns, you can teleport the spirit to an unoccupied space you can see within 30 feet of the space it left and make the attack against a creature within 5 feet of it.",
        },
        upgrade: {
          en: "The damage increases by 1d12 for each spell slot level above 6.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["ranger"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Conjure Volley",
      level: 5,
      materials: {
        en: "a Melee or Ranged weapon worth at least 1 CP",
        it: "un'arma da mischia o a distanza del valore di almeno 1 mr",
      },
      name: {
        en: "Conjure Volley",
        it: "Evoca Pioggia di Armi",
      },
      range: {
        type: "distance",
        imperial: {
          value: 150,
          unit: "ft",
        },
        metric: {
          value: 45,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 255,
      },
      text: {
        base: {
          en: "You brandish the weapon used to cast the spell and choose a point within range. Hundreds of similar spectral weapons (or ammunition appropriate to the weapon) fall in a volley and then disappear. Each creature of your choice that you can see in a 40-foot-radius, 20-foot-high Cylinder centered on that point makes a Dexterity saving throw. A creature takes 8d8 Force damage on a failed save or half as much damage on a successful one.",
          it: "L'incantatore brandisce l'arma usata per lanciare l'incantesimo e sceglie un punto entro gittata. Centinaia di armi spettrali simili (o munizioni adatte all'arma) ricadono a raffica e poi scompaiono. Ogni creatura scelta dall'incantatore, e che l'incantatore è in grado di vedere in un cilindro del raggio di 12 metri e dell'altezza di 6 metri, centrato su un punto, effettua un tiro salvezza su Destrezza. La creatura subisce 8d8 danni da forza in caso di fallimento, o la metà dei danni in caso di successo.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["ranger"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Conjure Barrage",
      level: 3,
      materials: {
        en: "a Melee or Ranged weapon worth at least 1 CP",
        it: "un'arma da mischia o a distanza del valore di almeno 1 mr",
      },
      name: {
        en: "Conjure Barrage",
        it: "Evoca Raffica",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 254,
      },
      text: {
        base: {
          en: "You brandish the weapon used to cast the spell and conjure similar spectral weapons (or ammunition appropriate to the weapon) that launch forward and then disappear. Each creature of your choice that you can see in a 60-foot Cone makes a Dexterity saving throw, taking 5d8 Force damage on a failed save or half as much damage on a successful one.",
          it: "L'incantatore brandisce l'arma usata per lanciare l'incantesimo ed evoca armi spettrali simili (o munizioni adatte all'arma) che schizzano in avanti e poi spariscono. Ogni creatura scelta dall'incantatore, e che l'incantatore è in grado di vedere entro un cono di 18 metri, effettua un tiro salvezza su Destrezza, subendo 5d8 danni da forza in caso di fallimento, o la metà dei danni in caso di successo.",
        },
        upgrade: {
          en: "The damage increases by 1d8 for each spell slot level above 3.",
          it: "I danni aumentano di 1d8 per ogni slot di livello superiore al 3˚.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "until_dispelled",
      },
      id: "PHB'24/Drawmij's Instant Summons",
      level: 6,
      materials: {
        en: "a sapphire worth 1,000+ GP",
        it: "uno zaffiro del valore di 1.000 mo o più",
      },
      name: {
        en: "Drawmij's Instant Summons",
        it: "Evocazioni Istantanee di Drawmij",
      },
      range: {
        type: "touch",
      },
      ritual: true,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 266,
      },
      text: {
        base: {
          en: "You touch the sapphire used in the casting and an object weighing 10 pounds or less whose longest dimension is 6 feet or less. The spell leaves an Invisible mark on that object and invisibly inscribes the object's name on the sapphire. Each time you cast this spell, you must use a different sapphire.Thereafter, you can take a Magic action to speak the object's name and crush the sapphire. The object instantly appears in your hand regardless of physical or planar distances, and the spell ends.If another creature is holding or carrying the object, crushing the sapphire doesn't transport it, but instead you learn who that creature is and where that creature is currently located.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 10,
        unit: "minute",
      },
      classes: ["artificer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Fabricate",
      level: 4,
      name: {
        en: "Fabricate",
        it: "Fabbricare",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 271,
      },
      text: {
        base: {
          en: "You convert raw materials into products of the same material. For example, you can fabricate a wooden bridge from a clump of trees, a rope from a patch of hemp, or clothes from flax or wool.Choose raw materials that you can see within range. You can fabricate a Large or smaller object (contained within a 10-foot Cube or eight connected 5-foot Cubes) given a sufficient quantity of material. If you're working with metal, stone, or another mineral substance, however, the fabricated object can be no larger than Medium (contained within a 5-foot Cube). The quality of any fabricated objects is based on the quality of the raw materials.Creatures and magic items can't be created by this spell. You also can't use it to create items that require a high degree of skill—such as weapons and armor—unless you have proficiency with the type of Artisan's Tools used to craft such objects.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["warlock"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Hunger of Hadar",
      level: 3,
      materials: {
        en: "a pickled tentacle",
        it: "un tentacolo in salamoia",
      },
      name: {
        en: "Hunger of Hadar",
        it: "Fame di Hadar",
      },
      range: {
        type: "distance",
        imperial: {
          value: 150,
          unit: "ft",
        },
        metric: {
          value: 45,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 286,
      },
      text: {
        base: {
          en: "You open a gateway to the Far Realm, a region infested with unspeakable horrors. A 20-foot-radius Sphere of Darkness appears, centered on a point with range and lasting for the duration. The Sphere is Difficult Terrain, and it is filled with strange whispers and slurping noises, which can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within it have the Blinded condition.\nAny creature that starts its turn in the area takes 2d6 Cold damage. Any creature that ends its turn there must succeed on a Dexterity saving throw or take 2d6 Acid damage from otherworldly tentacles.",
          it: "L'incantatore apre un portale per il Reame Remoto, una regione infestatada orrori indicibili. Appare una sfera di oscurità del raggio di 6 metri, centrata su un punto entro gittata, che permane per la durata dell'incantesimo. Lo spazio all'interno della sfera è considerato terreno difficile e in quel vuoto echeggiano sussurri grotteschi e fauci biascicanti, udibili fino a 9 metri di distanza. Nessuna luce, magica o di altro tipo, può illuminare l'area e le creature che si trovano completamente al suo interno sono accecate.\nOgni creatura che inizia il suo turno nell'area subisce 2d6 danni da freddo. Ogni creatura che termina il suo turno qui deve superare un tiro salvezza su Destrezza, altrimenti subisce 2d6 danni da acido inferti da brulicanti tentacoli ultraterreni.",
        },
        upgrade: {
          en: "The Cold or Acid damage (your choice) increases by 1d6 for each spell slot level above 3.",
          it: "I danni da acido o da freddo (a scelta dell'incantatore) aumentano di 1d6 per ogni slot di livello superiore al 3˚.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["ranger"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Swift Quiver",
      level: 5,
      materials: {
        en: "a Quiver worth 1+ GP",
        it: "una faretra dal valore di 1 mo o più",
      },
      name: {
        en: "Swift Quiver",
        it: "Faretra Rapida",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 329,
      },
      text: {
        base: {
          en: "When you cast the spell and as a Bonus Action until it ends, you can make two attacks with a weapon that fires Arrows or Bolts, such as a Longbow or a Light Crossbow. The spell magically creates the ammunition needed for each attack. Each Arrow or Bolt created by the spell deals damage like a nonmagical piece of ammunition of its kind and disintegrates immediately after it hits or misses.",
          it: "Quando lancia l'incantesimo e come azione bonus fino al suo termine, l'incantatore può effettuare due attacchi con un'arma che spara frecce o quadrelli, come un arco lungo o una balestra leggera. L'incantesimo crea magicamente le munizioni necessarie per ogni attacco. Frecce e quadrelli creati dall'incantesimo infliggono danni come se fossero munizioni non magiche di quel tipo e si disintegrano subito dopo aver centrato o mancato il bersaglio.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Beacon of Hope",
      level: 3,
      name: {
        en: "Beacon of Hope",
        it: "Faro di Speranza",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 245,
      },
      text: {
        base: {
          en: "Choose any number of creatures within range. For the duration, each target has Advantage on Wisdom saving throws and Death Saving Throws and regains the maximum number of Hit Points possible from any healing.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["warlock", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Weird",
      level: 9,
      name: {
        en: "Weird",
        it: "Fatale",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 341,
      },
      text: {
        base: {
          en: "You try to create illusory terrors in others' minds. Each creature of your choice in a 30-foot-radius Sphere centered on a point within range makes a Wisdom saving throw. On a failed save, a target takes 10d10 Psychic damage and has the Frightened condition for the duration. On a successful save, a target takes half as much damage only.\nA Frightened target makes a Wisdom saving throw at the end of each of its turns. On a failed save, it takes 5d10 Psychic damage. On a successful save, the spell ends on that target.",
          it: "L'incantatore tenta di creare orrori illusori nella mente degli avversari. Ogni creatura a sua scelta all'interno di una sfera con raggio di 9 metri, centrata su un punto entro gittata, effettua un tiro salvezza su Saggezza. In caso di fallimento, il bersaglio subisce 10d10 danni psichici ed è spaventato per la durata dell'incantesimo. Se invece lo supera, subisce soltanto la metà di quei danni.\nUn bersaglio spaventato effettua un tiro salvezza su Saggezza alla fine del suo turno. In caso di fallimento, subisce 5d10 danni psichici, mentre in caso di successo l'incantesimo termina.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["paladin"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Divine Favor",
      level: 1,
      name: {
        en: "Divine Favor",
        it: "Favore Divino",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 265,
      },
      text: {
        base: {
          en: "Until the spell ends, your attacks with weapons deal an extra 1d4 Radiant damage on a hit.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Harm",
      level: 6,
      name: {
        en: "Harm",
        it: "Ferire",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 283,
      },
      text: {
        base: {
          en: "You unleash virulent magic on a creature you can see within range. The target makes a Constitution saving throw. On a failed save, it takes 14d6 Necrotic damage, and its Hit Point maximum is reduced by an amount equal to the Necrotic damage it took. On a successful save, it takes half as much damage only. This spell can't reduce a target's Hit Point maximum below 1.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Time Stop",
      level: 9,
      name: {
        en: "Time Stop",
        it: "Fermare il Tempo",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 334,
      },
      text: {
        base: {
          en: "You briefly stop the flow of time for everyone but yourself. No time passes for other creatures, while you take 1d4 + 1 turns in a row, during which you can use actions and move as normal.This spell ends if one of the actions you use during this period, or any effects that you create during it, affects a creature other than you or an object being worn or carried by someone other than you. In addition, the spell ends if you move to a place more than 1,000 feet from the location where you cast it.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "cleric", "druid", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "until_dispelled",
      },
      id: "PHB'24/Continual Flame",
      level: 2,
      materials: {
        en: "ruby dust worth 50+ GP, which the spell consumes",
        it: "polvere di rubino del valore di 50 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Continual Flame",
        it: "Fiamma Perenne",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 256,
      },
      text: {
        base: {
          en: "A flame springs from an object that you touch. The effect casts Bright Light in a 20-foot radius and Dim Light for an additional 20 feet. It looks like a regular flame, but it creates no heat and consumes no fuel. The flame can be covered or hidden but not smothered or quenched.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Sacred Flame",
      level: 0,
      name: {
        en: "Sacred Flame",
        it: "Fiamma Sacra",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 313,
      },
      text: {
        base: {
          en: "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 Radiant damage. The target gains no benefit from Half Cover or Three-Quarters Cover for this save.",
        },
        upgrade: {
          en: "The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Acid Splash",
      level: 0,
      name: {
        en: "Acid Splash",
        it: "Fiotto Acido",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 239,
      },
      text: {
        base: {
          en: "You create an acidic bubble at a point within range, where it explodes in a 5-foot-radius Sphere. Each creature in that Sphere must succeed on a Dexterity saving throw or take 1d6 Acid damage.",
        },
        upgrade: {
          en: "The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "ranger", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Gust of Wind",
      level: 2,
      materials: {
        en: "a legume seed",
        it: "un seme di legume",
      },
      name: {
        en: "Gust of Wind",
        it: "Folata di Vento",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 282,
      },
      text: {
        base: {
          en: "A Line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the duration. Each creature in the Line must succeed on a Strength saving throw or be pushed 15 feet away from you in a direction following the Line. A creature that ends its turn in the Line must make the same save.\nAny creature in the Line must spend 2 feet of movement for every 1 foot it moves when moving closer to you.\nThe gust disperses gas or vapor, and it extinguishes candles and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them.\nAs a Bonus Action on your later turns, you can change the direction in which the Line blasts from you.",
          it: "Una linea di vento forte lunga 18 metri e ampia 3 metri viene indirizzata dall'incantatore in una direzione a sua scelta per la durata dell'incantesimo. Ogni creatura sulla linea deve superare un tiro salvezza su Forza, altrimenti viene spinta per 4,5 metri lontano dall'incantatore nella direzione della linea. Una creatura che termina il suo turno sulla linea deve effettuare lo stesso tiro salvezza.\nQualsiasi creatura sulla linea deve usare 60 centimetri di movimento per ogni 30 centimetri percorsi per avvicinarsi all'incantatore.\nLa folata può disperdere gas o vapore e spegne candele e simili fiamme non protette nell'area. Le fiamme protette, come quelle delle lanterne, tremolano e hanno il 50% di possibilità di spegnersi.\nCome azione bonus nei suoi turni successivi, l'incantatore può modificare la direzione in cui indirizzare la linea.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "druid", "ranger"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 8,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Meld into Stone",
      level: 3,
      name: {
        en: "Meld into Stone",
        it: "Fondersi nella pietra",
      },
      range: {
        type: "touch",
      },
      ritual: true,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 296,
      },
      text: {
        base: {
          en: "You step into a stone object or surface large enough to fully contain your body, merging yourself and your equipment with the stone for the duration. You must touch the stone to do so. Nothing of your presence remains visible or otherwise detectable by nonmagical senses.\nWhile merged with the stone, you can't see what occurs outside it, and any Wisdom (Perception) checks you make to hear sounds outside it are made with Disadvantage. You remain aware of the passage of time and can cast spells on yourself while merged in the stone. You can use 5 feet of movement to leave the stone where you entered it, which ends the spell. You otherwise can't move.\nMinor physical damage to the stone doesn't harm you, but its partial destruction or a change in its shape (to the extent that you no longer fit within it) expels you and deals 6d6 Force damage to you. The stone's complete destruction (or transmutation into a different substance) expels you and deals 50 Force damage to you. If expelled, you move into an unoccupied space closest to where you first entered and have the Prone condition.",
          it: "L'incantatore entra in un oggetto o in una superficie di pietra sufficientemente grande da contenere il suo corpo, fondendosi con esso insieme al suo equipaggiamento per la durata dell'incantesimo. Per farlo, l'incantatore deve toccare la pietra, e nulla della sua presenza rimane visibile o individuabile da qualsiasi senso non magico.\nMentre è fuso nella pietra, l'incantatore non può vedere ciò che accade al di fuori e subisce svantaggio in qualsiasi prova di Saggezza (Percezione) effettuata per udire i suoni all'esterno. Rimane tuttavia cosciente del passare del tempo e può lanciare incantesimi su di sé. L'incantatore può usare 1,5 metri del suo movimento per uscire dalla pietra nel punto in cui è entrato, ponendo fine all'incantesimo; altrimenti, non può muoversi.\nEventuali danni fisici minori inflitti alla pietra non danneggiano l'incantatore, ma una distruzione parziale o un'alterazione nella forma (al punto da non contenerne più il corpo) provoca l'espulsione dell'incantatore, infliggendogli 6d6 danni da forza. La completa distruzione della pietra (o la sua trasmutazione in una sostanza differente) provoca l'espulsione dell'incantatore e gli infligge 50 danni da forza. Se l'incantatore viene espulso, cade a terra prono nello spazio libero più vicino al punto in cui era entrato.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "druid"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Fount of Moonlight",
      level: 4,
      name: {
        en: "Fount of Moonlight",
        it: "Fonte di Luce Lunare",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 277,
      },
      text: {
        base: {
          en: "A cool light wreathes your body for the duration, emitting Bright Light in a 20-foot radius and Dim Light for an additional 20 feet.Until the spell ends, you have Resistance to Radiant damage, and your melee attacks deal an extra 2d6 Radiant damage on a hit.In addition, immediately after you take damage from a creature you can see within 60 feet of yourself, you can take a Reaction to force the creature to make a Constitution saving throw. On a failed save, the creature has the Blinded condition until the end of your next turn.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "cleric", "sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 8,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Etherealness",
      level: 7,
      name: {
        en: "Etherealness",
        it: "Forma Eterea",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 269,
      },
      text: {
        base: {
          en: "You step into the border regions of the Ethereal Plane, where it overlaps with your current plane. You remain in the Border Ethereal for the duration. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. You can perceive the plane you left, which looks gray, and you can't see anything there more than 60 feet away.\nWhile on the Ethereal Plane, you can affect and be affected only by creatures, objects, and effects on that plane. Creatures that aren't on the Ethereal Plane can't perceive or interact with you unless a feature gives them the ability to do so.\nWhen the spell ends, you return to the plane you left in the spot that corresponds to your space in the Border Ethereal. If you appear in an occupied space, you are shunted to the nearest unoccupied space and take Force damage equal to twice the number of feet you are moved.\nThis spell ends instantly if you cast it while you are on the Ethereal Plane or a plane that doesn't border it, such as one of the Outer Planes.",
          it: "L'incantatore mette piede nelle regioni di confine in cui il Piano Etereo si sovrappopne al suo piano attuale. Rimane nel Confine Etereo per la durata dell'incantesimo. Durante questo periodo, l'incantatore può muoversi in ogni direzione. Muovendosi su o giù, ogni 30 cm di movimento gli costano 30 cm extra. L'incantatore può percepire il piano da cui proviene, che appare in scala di grigi ed è visibile solo fino a una distanza di 18 metri.\nMentre si trova sul Piano Etereo, l'incantatore può influenzare ed essere influenzato solo dalle creature, gli oggetti e gli effetti che si trovano su quel piano. Le creature che non sono presenti sul Piano Etereo non possono percepire o interagire con l'incantatore, a meno che un privilegio non dia loro la capacità per farlo.\nAl termine dell'incantesimo, l'incantatore torna sul piano da cui proviene, sul punto che corrisponde al suo spazio nel Confine Etereo. Se l'incantatore appare in uno spazio occupato, viene sbalzato nello spazio libero più vicino e subisce una quantità di danni da forza pari al doppio del numero di metri di cui si è mosso.\nQuesto incantesimo termina all'istante se l'incantatore lo lancia mentre si trova su Piano Etereo o su un piano non confinante, come uno dei Piani Esterni.",
        },
        upgrade: {
          en: "You can target up to three willing creatures (including yourself) for each spell slot level above 7. The creatures must be within 10 feet of you when you cast the spell.",
          it: "L'incantatore può bersagliare fino a un massimo di tre creature consenzienti (incluso sé stesso) per ogni slot di livello superiore al 7˚. Al momento del lancio dell'incantesimo, le creature non devono trovarsi a più di 3 metri dall'incantatore.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Gaseous Form",
      level: 3,
      materials: {
        en: "a bit of gauze",
        it: "un pezzo di garza",
      },
      name: {
        en: "Gaseous Form",
        it: "Forma Gassosa",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 277,
      },
      text: {
        base: {
          en: "A willing creature you touch shape-shifts, along with everything it's wearing and carrying, into a misty cloud for the duration. The spell ends on the target if it drops to 0 Hit Points or if it takes a Magic action to end the spell on itself.\nWhile in this form, the target's only method of movement is a Fly Speed of 10 feet, and it can hover. The target can enter and occupy the space of another creature. The target has Resistance to Bludgeoning, Piercing, and Slashing damage; it has Immunity to the Prone condition; and it has Advantage on Strength, Dexterity, and Constitution saving throws. The target can pass through narrow openings, but it treats liquids as though they were solid surfaces.\nThe target can't talk or manipulate objects, and any objects it was carrying or holding can't be dropped, used, or otherwise interacted with. Finally, the target can't attack or cast spells.",
          it: "Una creatura consenziente, toccata dall'incantatore, muta forma, insieme a tutto ciò che indossa o trasporta, trasformandosi in una nube fosca per la durata dell'incantesimo. L'effetto svanisce se il bersaglio scende a 0 punti ferita o se effettua un'azione di Magia per terminare l'incantesimo su di sé.\nMentre si trova in questa forma, una velocità di volo di 3 metri è l'unico metodo di movimento del bersaglio, che può fluttuare e può entrare nello spazio di un'altra creatura e occuparlo. Il bersaglio è resistente ai danni contundenti, perforanti e taglienti; è immune alla condizione di prono; dispone di vantaggio ai tiri salvezza su Forza, Destrezza e Costituzione. Il bersaglio può passare attraverso aperture strette, tuttavia tratta i liquidi come fossero superfici solide.\nIl bersaglio non può parlare o manipolare oggetti e quelli che trasporta o impugna non possono essere lasciati cadere, usati o manipolati in alcun modo. Infine, il bersaglio non può attaccare o lanciare incantesimi.",
        },
        upgrade: {
          en: "You can target one additional creature for each spell slot level above 3.",
          it: "L'incantatore può bersagliare una creatura aggiuntiva per ogni slot di livello superiore al 3˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 24,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Animal Shapes",
      level: 8,
      name: {
        en: "Animal Shapes",
        it: "Forme Animali",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 240,
      },
      text: {
        base: {
          en: "Choose any number of willing creatures that you can see within range. Each target shape-shifts into a Large or smaller Beast of your choice that has a Challenge Rating of 4 or lower. You can choose a different form for each target. On later turns, you can take a Magic action to transform the targets again.A target's game statistics are replaced by the chosen Beast's statistics, but the target retains its creature type; Hit Points; Hit Point Dice; alignment; ability to communicate; and Intelligence, Wisdom, and Charisma scores. The target's actions are limited by the Beast form's anatomy, and it can't cast spells. The target's equipment melds into the new form, and the target can't use any of that equipment while in that form.The target gains a number of Temporary Hit Points equal to the Hit Points of the first form into which it shape-shifts. These Temporary Hit Points vanish if any remain when the spell ends. The transformation lasts for the duration or until the target ends it as a Bonus Action.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Shatter",
      level: 2,
      materials: {
        en: "a chip of mica",
        it: "un frammento di mica",
      },
      name: {
        en: "Shatter",
        it: "Frantumare",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 316,
      },
      text: {
        base: {
          en: "A loud noise erupts from a point of your choice within range. Each creature in a 10-foot-radius Sphere centered there makes a Constitution saving throw, taking 3d8 Thunder damage on a failed save or half as much damage on a successful one. A Construct has Disadvantage on the save.A nonmagical object that isn't being worn or carried also takes the damage if it's in the spell's area.",
        },
        upgrade: {
          en: "The damage increases by 1d8 for each spell slot level above 2.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Melf's Acid Arrow",
      level: 2,
      materials: {
        en: "powdered rhubarb leaf",
        it: "foglia di rabarbaro in polvere",
      },
      name: {
        en: "Melf's Acid Arrow",
        it: "Freccia Acida di Melf",
      },
      range: {
        type: "distance",
        imperial: {
          value: 90,
          unit: "ft",
        },
        metric: {
          value: 27,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 297,
      },
      text: {
        base: {
          en: "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 Acid damage and 2d4 Acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage only.",
        },
        upgrade: {
          en: "The damage (both initial and later) increases by 1d4 for each spell slot level above 2.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["ranger"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Lightning Arrow",
      level: 3,
      name: {
        en: "Lightning Arrow",
        it: "Freccia Folgorante",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 292,
      },
      text: {
        base: {
          en: "As your attack hits or misses the target, the weapon or ammunition you're using transforms into a lightning bolt. Instead of taking any damage or other effects from the attack, the target takes 4d8 Lightning damage on a hit or half as much damage on a miss. Each creature within 10 feet of the target then makes a Dexterity saving throw, taking 2d8 Lightning damage on a failed save or half as much damage on a successful one.The weapon or ammunition then returns to its normal form.",
          it: "Quando l'attacco dell'incantatore colpisce o manca il bersaglio, l'arma o la munizione che sta utilizzando si trasforma in un fulmine. Invece di subire danni o altri effetti dall'attacco, il bersaglio subisce 4d8 danni da fulmine se il colpo va a segno, o la metà dei danni se il colpo manca. Ogni creatura entro un raggio di 3 metri dal bersaglio effettua un tiro salvezza su Destrezza; se lo fallisce, subisce 2d8 danni da fulmine, mentre se lo supera subisce la metà dei danni.\nL'arma o la munizione torna poi alla sua forma originaria.",
        },
        upgrade: {
          en: "The damage for both effects of the spell increases by 1d8 for each spell slot level above 3.",
          it: "I danni di entrambi gli effetti dell'incantesimo aumentano di 1d8 per ogni slot di livello superiore al 3˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "druid"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Thorn Whip",
      level: 0,
      materials: {
        en: "the stem of a plant with thorns",
        it: "il gambo di una pianta spinata",
      },
      name: {
        en: "Thorn Whip",
        it: "Frusta di Spine",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 333,
      },
      text: {
        base: {
          en: "You create a vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. On a hit, the target takes 1d6 Piercing damage, and if it is Large or smaller, you can pull it up to 10 feet closer to you.",
        },
        upgrade: {
          en: "The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Lightning Bolt",
      level: 3,
      materials: {
        en: "a bit of fur and a crystal rod",
        it: "un ciuffo di pelo e una verga di cristallo",
      },
      name: {
        en: "Lightning Bolt",
        it: "Fulmine",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 292,
      },
      text: {
        base: {
          en: "A stroke of lightning forming a 100-foot-long, 5-foot-wide Line blasts out from you in a direction you choose. Each creature in the Line makes a Dexterity saving throw, taking 8d6 Lightning damage on a failed save or half as much damage on a successful one.",
        },
        upgrade: {
          en: "The damage increases by 1d6 for each spell slot level above 3.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "warlock", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: false,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Mislead",
      level: 5,
      name: {
        en: "Mislead",
        it: "Fuorviare",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 299,
      },
      text: {
        base: {
          en: "You gain the Invisible condition at the same time that an illusory double of you appears where you are standing. The double lasts for the duration, but the invisibility ends immediately after you make an attack roll, deal damage, or cast a spell.\nAs a Magic action, you can move the illusory double up to twice your Speed and make it gesture, speak, and behave in whatever way you choose. It is intangible and invulnerable.\nYou can see through its eyes and hear through its ears as if you were located where it is.",
          it: "L'incantatore diventa invisibile nello stesso momento in cui un suo sosia illusorio appare nel punto in cui si trova. Il sosia permane per la durata dell'incantesimo, ma l'invisibilità termina se non appena l'incantatore effettua un tiro per colpire, infligge danni o lancia un incantesimo.\nCome azione di Magia, l'incantatore può muovere il sosia illusorio fino al doppio della sua velocità e farlo gesticolare, parlare e comportare nel modo che ritiene più opportuno. Il sosia è intangibile e invulnerabile.\nInoltre, l'incantatore può vedere e sentire attraverso il sosia, come se si trovasse nello stesso punto.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Forcecage",
      level: 7,
      materials: {
        en: "ruby dust worth 1,500+ GP, which the spell consumes",
        it: "polvere di rubino del valore di 1.500 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Forcecage",
        it: "Gabbia di Forza",
      },
      range: {
        type: "distance",
        imperial: {
          value: 100,
          unit: "ft",
        },
        metric: {
          value: 30,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 276,
      },
      text: {
        base: {
          en: "An immobile, Invisible, Cube-shaped prison composed of magical force springs into existence around an area you choose within range. The prison can be a cage or a solid box, as you choose.\nA prison in the shape of a cage can be up to 20 feet on a side and is made from 1/2-inch diameter bars spaced 1/2 inch apart. A prison in the shape of a box can be up to 10 feet on a side, creating a solid barrier that prevents any matter from passing through it and blocking any spells cast into or out from the area.\nWhen you cast the spell, any creature that is completely inside the cage's area is trapped. Creatures only partially within the area, or those too large to fit inside it, are pushed away from the center of the area until they are completely outside it.\nA creature inside the cage can't leave it by nonmagical means. If the creature tries to use teleportation or interplanar travel to leave, it must first make a Charisma saving throw. On a successful save, the creature can use that magic to exit the cage. On a failed save, the creature doesn't exit the cage and wastes the spell or effect. The cage also extends into the Ethereal Plane, blocking ethereal travel.\nThis spell can't be dispelled by Dispel Magic.",
          it: "Una prigione cubica di forza magica invisibile e immobile si materializza intorno a un'area entro gittata scelta dall'incantatore. La prigione può essere una gabbia o una struttura solida a sua scelta.\nUna prigione a forma di gabbia può misurare fino a 6 metri per lato ed essere composta da sbarre di 1,25 centimetri di diametro disposte a 1,25 centimetri di distanza. Una prigione a forma di scatola chiusa può misurare fino a 3 metri per lato e crea una barriera compatta che impedisce a ogni tipo di materia di passarle attraverso e blocca qualsiasi incantesimo lanciato verso l'interno o l'esterno dell'area.\nAl momento del lancio dell'incantesimo, ogni creatura completamente all'interno dell'area della gabbia è intrappolata, Le creature situate solo parzialmente all'interno dell'area o quelle di dimensioni troppo grandi per essere contenute al suo interno sono spinte lontano dal centro dell'area finché non ne fuoriescono completamente.\nUna creatura all'interno della gabbia non può uscirne tramite mezzi non magici. Se la creatura prova a utilizzare il teletrasporto o il viaggio interplanare, deve prima effettuare un tiro salvezza su Carisma. Se lo supera, la creatura può usare quella magia per uscire dalla gabbia, mentre se lo fallisce, non può uscire dalla gabbia e spreca un uso di quell'incantesimo o effetto. La gabbia si estende anche sul Piano Etereo, bloccando viaggi eterei.\nQuesto incantesimo non può essere dissolto con _dissolvi magie_.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "until_dispelled",
      },
      id: "PHB'24/Magic Jar",
      level: 6,
      materials: {
        en: "a gem, crystal, or reliquary worth 500+ GP",
        it: "una gemma, un cristallo o un reliquiario del valore di 500 mo o più",
      },
      name: {
        en: "Magic Jar",
        it: "Giara Magica",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 294,
      },
      text: {
        base: {
          en: "Your body falls into a catatonic state as your soul leaves it and enters the container you used for the spell's Material component. While your soul inhabits the container, you are aware of your surroundings as if you were in the container's space. You can't move or take Reactions. The only action you can take is to project your soul up to 100 feet out of the container, either returning to your living body (and ending the spell) or attempting to possess a Humanoid's body.You can attempt to possess any Humanoid within 100 feet of you that you can see (creatures warded by a Protection from Evil and Good or Magic Circle spell can't be possessed). The target makes a Charisma saving throw. On a failed save, your soul enters the target's body, and the target's soul becomes trapped in the container. On a successful save, the target resists your efforts to possess it, and you can't attempt to possess it again for 24 hours.Once you possess a creature's body, you control it. Your Hit Points, Hit Point Dice, Strength, Dexterity, Constitution, Speed, and senses are replaced by the creature's. You otherwise keep your game statistics.Meanwhile, the possessed creature's soul can perceive from the container using its own senses, but it can't move and it is Incapacitated.While possessing a body, you can take a Magic action to return from the host body to the container if it is within 100 feet of you, returning the host creature's soul to its body. If the host body dies while you're in it, the creature dies, and you make a Charisma saving throw against your own spellcasting DC. On a success, you return to the container if it is within 100 feet of you. Otherwise, you die.If the container is destroyed or the spell ends, your soul returns to your body. If your body is more than 100 feet away from you or if your body is dead, you die. If another creature's soul is in the container when it is destroyed, the creature's soul returns to its body if the body is alive and within 100 feet. Otherwise, that creature dies.When the spell ends, the container is destroyed.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "hour",
      },
      classes: ["artificer", "bard", "cleric", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "until_dispelled",
      },
      id: "PHB'24/Glyph of Warding",
      level: 3,
      materials: {
        en: "powdered diamond worth 200+ GP, which the spell consumes",
        it: "polvere di diamante del valore di 200 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Glyph of Warding",
        it: "Glifo di Interdizione",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 279,
      },
      text: {
        base: {
          en: "You inscribe a glyph that later unleashes a magical effect. You inscribe it either on a surface (such as a table or a section of floor) or within an object that can be closed (such as a book or chest) to conceal the glyph. The glyph can cover an area no larger than 10 feet in diameter. If the surface or object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.The glyph is nearly imperceptible and requires a successful Wisdom (Perception) check against your spell save DC to notice.When you inscribe the glyph, you set its trigger and choose whether it's an explosive rune or a spell glyph, as explained below. Set the Trigger. You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, common triggers include touching or stepping on the glyph, removing another object covering it, or approaching within a certain distance of it. For glyphs inscribed within an object, common triggers include opening that object or seeing the glyph. Once a glyph is triggered, this spell ends.You can refine the trigger so that only creatures of certain types activate it (for example, the glyph could be set to affect Aberrations). You can also set conditions for creatures that don't trigger the glyph, such as those who say a certain password. Explosive Rune. When triggered, the glyph erupts with magical energy in a 20-foot-radius Sphere centered on the glyph. Each creature in the area makes a Dexterity saving throw. A creature takes 5d8 Acid, Cold, Fire, Lightning, or Thunder damage (your choice when you create the glyph) on a failed save or half as much damage on a successful one. Spell Glyph. You can store a prepared spell of level 3 or lower in the glyph by casting it as part of creating the glyph. The spell must target a single creature or an area. The spell being stored has no immediate effect when cast in this way.When the glyph is triggered, the stored spell takes effect. If the spell has a target, it targets the creature that triggered the glyph. If the spell affects an area, the area is centered on that creature. If the spell summons Hostile creatures or creates harmful objects or traps, they appear as close as possible to the intruder and attack it. If the spell requires Concentration, it lasts until the end of its full duration.",
        },
        upgrade: {
          en: "The damage of an explosive rune increases by 1d8 for each spell slot level above 3. If you create a spell glyph, you can store any spell of up to the same level as the spell slot you use for the Glyph of Warding.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Chromatic Orb",
      level: 1,
      materials: {
        en: "a diamond worth 50+ GP",
        it: "un diamante del valore di 50 mo o più",
      },
      name: {
        en: "Chromatic Orb",
        it: "Globo Cromatico",
      },
      range: {
        type: "distance",
        imperial: {
          value: 90,
          unit: "ft",
        },
        metric: {
          value: 27,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 249,
      },
      text: {
        base: {
          en: "You hurl an orb of energy at a target within range. Choose Acid, Cold, Fire, Lightning, Poison, or Thunder for the type of orb you create, and then make a ranged spell attack against the target. On a hit, the target takes 3d8 damage of the chosen type.If you roll the same number on two or more of the d8s, the orb leaps to a different target of your choice within 30 feet of the target. Make an attack roll against the new target, and make a new damage roll. The orb can't leap again unless you cast the spell with a level 2+ spell slot.",
        },
        upgrade: {
          en: "The damage increases by 1d8 for each spell slot level above 1. The orb can leap a maximum number of times equal to the level of the slot expended, and a creature can be targeted only once by each casting of this spell.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Globe of Invulnerability",
      level: 6,
      materials: {
        en: "a glass bead",
        it: "una perla di vetro",
      },
      name: {
        en: "Globe of Invulnerability",
        it: "Globo di Invulnerabilità",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 279,
      },
      text: {
        base: {
          en: "An immobile, shimmering barrier appears in a 10-foot Emanation around you and remains for the duration.Any spell of level 5 or lower cast from outside the barrier can't affect anything within it. Such a spell can target creatures and objects within the barrier, but the spell has no effect on them. Similarly, the area within the barrier is excluded from areas of effect created by such spells.",
        },
        upgrade: {
          en: "The barrier blocks spells of 1 level higher for each spell slot level above 6.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Spirit Guardians",
      level: 3,
      materials: {
        en: "a prayer scroll",
        it: "una pergamenta con una preghiera",
      },
      name: {
        en: "Spirit Guardians",
        it: "Guardiani Spirituali",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 319,
      },
      text: {
        base: {
          en: "Protective spirits flit around you in a 15-foot Emanation for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish.When you cast this spell, you can designate creatures to be unaffected by it. Any other creature's Speed is halved in the Emanation, and whenever the Emanation enters a creature's space and whenever a creature enters the Emanation or ends its turn there, the creature must make a Wisdom saving throw. On a failed save, the creature takes 3d8 Radiant damage (if you are good or neutral) or 3d8 Necrotic damage (if you are evil). On a successful save, the creature takes half as much damage. A creature makes this save only once per turn.",
        },
        upgrade: {
          en: "The damage increases by 1d8 for each spell slot level above 3.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 8,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Guardian of Faith",
      level: 4,
      name: {
        en: "Guardian of Faith",
        it: "Guardiano della Fede",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 281,
      },
      text: {
        base: {
          en: "A Large spectral guardian appears and hovers for the duration in an unoccupied space that you can see within range. The guardian occupies that space and is invulnerable, and it appears in a form appropriate for your deity or pantheon.Any enemy that moves to a space within 10 feet of the guardian for the first time on a turn or starts its turn there makes a Dexterity saving throw, taking 20 Radiant damage on a failed save or half as much damage on a successful one. The guardian vanishes when it has dealt a total of 60 damage.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "druid"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Heal",
      level: 6,
      name: {
        en: "Heal",
        it: "Guarigione",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 284,
      },
      text: {
        base: {
          en: "Choose a creature that you can see within range. Positive energy washes through the target, restoring 70 Hit Points. This spell also ends the Blinded, Deafened, and Poisoned conditions on the target.",
        },
        upgrade: {
          en: "The healing increases by 10 for each spell slot level above 6.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Mass Heal",
      level: 9,
      name: {
        en: "Mass Heal",
        it: "Guarigione di Massa",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 296,
      },
      text: {
        base: {
          en: "A flood of healing energy flows from you into creatures around you. You restore up to 700 Hit Points, divided as you choose among any number of creatures that you can see within range. Creatures healed by this spell also have the Blinded, Deafened, and Poisoned conditions removed from them.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "cleric", "druid"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Guidance",
      level: 0,
      name: {
        en: "Guidance",
        it: "Guida",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 282,
      },
      text: {
        base: {
          en: "You touch a willing creature and choose a skill. Until the spell ends, the creature adds 1d4 to any ability check using the chosen skill.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Antilife Shell",
      level: 5,
      name: {
        en: "Antilife Shell",
        it: "Guscio Anti-vita",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 241,
      },
      text: {
        base: {
          en: "An aura extends from you in a 10-foot Emanation for the duration. The aura prevents creatures other than Constructs and Undead from passing or reaching through it. An affected creature can cast spells or make attacks with Ranged or Reach weapons through the barrier.If you move so that an affected creature is forced to pass through the barrier, the spell ends.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["artificer", "bard", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Identify",
      level: 1,
      materials: {
        en: "a pearl worth 100+ GP",
        it: "una perla del valore di 100 mo o più",
      },
      name: {
        en: "Identify",
        it: "Identificare",
      },
      range: {
        type: "touch",
      },
      ritual: true,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 287,
      },
      text: {
        base: {
          en: "You touch an object throughout the spell's casting. If the object is a magic item or some other magical object, you learn its properties and how to use them, whether it requires Attunement, and how many charges it has, if any. You learn whether any ongoing spells are affecting the item and what they are. If the item was created by a spell, you learn that spell's name.If you instead touch a creature throughout the casting, you learn which ongoing spells, if any, are currently affecting it.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: false,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Minor Illusion",
      level: 0,
      materials: {
        en: "a bit of fleece",
        it: "un ciuffo di lana",
      },
      name: {
        en: "Minor Illusion",
        it: "Illusione Minore",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 298,
      },
      text: {
        base: {
          en: "You create a sound or an image of an object within range that lasts for the duration. See the descriptions below for the effects of each. The illusion ends if you cast this spell again.\nIf a creature takes a Study action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.\n**Sound.** If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.\n**Image.** If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot Cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, since things can pass through it.",
          it: "L'incantatore crea un suono o un'immagine di un oggetto entro gittata che permane per la durata dell'incantesimo. Di seguito sono descritti gli effetti di ciascuno di essi. L'illusione termina se l'incantatore lancia nuovamente l'incantesimo.\nSe una creatura effettua l'azione di Studio per esaminare il suono o l'immagine, può determinare che si tratta di un'illusione superando una prova di Intelligenza (Indagare) contro la CD del tiro salvezza sull'incantesimo. Se una creatura riconosce l'illusione per ciò che è, l'illusione risulta attenuata per quella creatura.\n**Suono**. Se l'incantatore crea un suono, la sua intensità può variare da quella di un sussurro a quella di un urlo. Può trattarsi della voce dell'incantatore o di altri, del ruggito di un leone, di un rullo di tamburi o di un qualsiasi altro suono a sua scelta. Il suono può echeggiare ininterrottamente per tutta la durata dell'incantesimo, oppure l'incantatore può emettere dei suoni separati in momenti diversi prima che l'incantesimo termini.\n**Immagine.** Se l'incantatore crea l'immagine di un oggetto (come per esempio una sedia, una serie di impronte nel fango o uno scrigno), quell'oggetto non deve essere più grande di un cubo con spigolo di 1,5 metri. L'illusione non può emettere suoni, luci, odori o qualsiasi altro effetto sensoriale e può essere rivelata da un'interazione fisica, poiche gli oggetti possono attraversarla.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "until_dispelled",
      },
      id: "PHB'24/Programmed Illusion",
      level: 6,
      materials: {
        en: "jade dust worth 25+ GP",
        it: "polvere di giada del valore di 25 mo o più",
      },
      name: {
        en: "Programmed Illusion",
        it: "Illusione Programmata",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 309,
      },
      text: {
        base: {
          en: "You create an illusion of an object, a creature, or some other visible phenomenon within range that activates when a specific trigger occurs. The illusion is imperceptible until then. It must be no larger than a 30-foot Cube, and you decide when you cast the spell how the illusion behaves and what sounds it makes. This scripted performance can last up to 5 minutes.When the trigger you specify occurs, the illusion springs into existence and performs in the manner you described. Once the illusion finishes performing, it disappears and remains dormant for 10 minutes, after which the illusion can be activated again.The trigger can be as general or as detailed as you like, though it must be based on visual or audible phenomena that occur within 30 feet of the area. For example, you could create an illusion of yourself to appear and warn off others who attempt to open a trapped door.Physical interaction with the image reveals it to be illusory, since things can pass through it. A creature that takes the Study action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Major Image",
      level: 3,
      materials: {
        en: "a bit of fleece",
        it: "un ciuffo di lana",
      },
      name: {
        en: "Major Image",
        it: "Immagine Maggiore",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 295,
      },
      text: {
        base: {
          en: "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot Cube. The image appears at a spot that you can see within range and lasts for the duration. It seems real, including sounds, smells, and temperature appropriate to the thing depicted, but it can't deal damage or cause conditions.\nIf you are within range of the illusion, you can take a Magic action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illusion to make different sounds at different times, even making it carry on a conversation, for example.\nPhysical interaction with the image reveals it to be an illusion, for things can pass through it. A creature that takes a Study action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature.",
          it: "L'incantatore crea l'immagine di un oggetto, una creatura, o qualche altro fenomeno visibile che non sia più grande di un cubo con spigolo di 6 metri. L'immagine, apparendo in un punto situato entro gittata e che l'incantatore è in grado di vedere, permane per la durata dell'incantesimo. L'immagine sembra reale e include temperature, suoni e odori appropriati all'elemento raffigurato, ma non può infliggere danni o causare condizioni.\nSe l'incantatore si trova entro gittata dell'immagine illusoria, può effettuare la sua azione di Magia per fare in modo che l'immagine si muova fino a un qualsiasi altro punto entro gittata. Mentre l'immagine è in movimento, l'incantatore può alternarne l'aspetto in modo che i movimenti risultino naturali. As esempio, se l'incantatore crea l'immagine di una creatura e decide di farla muovere, può alterare l'immagine in modo da simulare che stia camminando. Analogamente, può fare in modo che l'illusione generi suoni diversi in momenti diversi, in modo da, per esempio, farle persino sostenere una conversazione.\nL'illusione può essere rivelata da un'interazione fisica, poiché è possibile passarle attraverso. Una creatura che effettua l'azione di Studio per esaminare l'immagine può determinare che si tratta di un'illusione superando una prova di Intelligenza (Indagare) contro la CD del tiro salvezza sull'incantesimo. Se una creatura riconosce l'illusione per ciò che è, riesce a vedere attraverso l'immagine, di cui si attenuano le altre caratteristiche sensoriali.",
        },
        upgrade: {
          en: "The spell lasts until dispelled, without requiring Concentration, if cast with a level 4+ spell slot.",
          it: "L'incantesimo dura finché non viene dissolto, e non necessita di concentrazione, se viene lanciato con uno slot di 4˚ livello o superiore.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "day",
        upTo: true,
      },
      id: "PHB'24/Project Image",
      level: 7,
      materials: {
        en: "a statuette of yourself worth 5+ GP",
        it: "una statuetta dell'incantatore del valore di 5 mo o più",
      },
      name: {
        en: "Project Image",
        it: "Immagine Proiettata",
      },
      range: {
        type: "distance",
        imperial: {
          value: 500,
          unit: "mi",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 309,
      },
      text: {
        base: {
          en: "You create an illusory copy of yourself that lasts for the duration. The copy can appear at any location within range that you have seen before, regardless of intervening obstacles. The illusion looks and sounds like you, but it is intangible. If the illusion takes any damage, it disappears, and the spell ends.You can see through the illusion's eyes and hear through its ears as if you were in its space. As a Magic action, you can move it up to 60 feet and make it gesture, speak, and behave in whatever way you choose. It mimics your mannerisms perfectly.Physical interaction with the image reveals it to be illusory, since things can pass through it. A creature that takes the Study action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Silent Image",
      level: 1,
      materials: {
        en: "a bit of fleece",
        it: "un ciuffo di lana",
      },
      name: {
        en: "Silent Image",
        it: "Immagine Silenziosa",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 317,
      },
      text: {
        base: {
          en: "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot Cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn't accompanied by sound, smell, or other sensory effects.As a Magic action, you can cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.Physical interaction with the image reveals it to be an illusion, since things can pass through it. A creature that takes a Study action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Mirror Image",
      level: 2,
      name: {
        en: "Mirror Image",
        it: "Immagine Speculare",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 299,
      },
      text: {
        base: {
          en: "Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting position so it's impossible to track which image is real.\nEach time a creature hits you with an attack roll during the spell's duration, roll a d6 for each of your remaining duplicates. If any of the d6s rolls a 3 or higher, one of the duplicates is hit instead of you, and the duplicate is destroyed. The duplicates otherwise ignore all other damage and effects. The spell ends when all three duplicates are destroyed.\nA creature is unaffected by this spell if it has the Blinded condition, Blindsight, or Truesight.",
          it: "Tre duplicati illusori dell'incantatore appaiono nel suo spazio. Fino al termine dell'incantesimo, i duplicati si muovono con l'incantatore e imitano le sue azioni, cambiando posizione in modo che sia impossibile individuare quale sia l'immagine reale.\nOgni volta che una creatura colpisce l'incantatore con tiro per colpire nel corso della durata dell'incantesimo, l'incantatore tira un d6 per ognuno dei duplicati rimasti. Se uno qualsiasi dei risultati che ottiene è pari o superiore a 3, uno dei duplicati subisce il colpo al posto dell'incantatore, e poi viene distrutto. Altrimenti, i duplicati ignorano tutti gli altri danni o effetti. L'incantesimo termina quando tutti e tre i duplicati vengono distrutti.\nUna creatura non è influenzata da questo incantesimo se è accecata o se ha vista cieca o vista pura.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["warlock", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "until_dispelled",
      },
      id: "PHB'24/Imprisonment",
      level: 9,
      materials: {
        en: "a statuette of the target worth 5,000+ GP",
        it: "una statuetta del bersaglio del valore di 5.000 mo o più",
      },
      name: {
        en: "Imprisonment",
        it: "Imprigionare",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 288,
      },
      text: {
        base: {
          en: "You create a magical restraint to hold a creature that you can see within range. The target must make a Wisdom saving throw. On a successful save, the target is unaffected, and it is immune to this spell for the next 24 hours. On a failed save, the target is imprisoned. While imprisoned, the target doesn't need to breathe, eat, or drink, and it doesn't age. Divination spells can't locate or perceive the imprisoned target, and the target can't teleport.\nUntil the spell ends, the target is also affected by one of the following effects of your choice:Burial. The target is entombed beneath the earth in a hollow globe of magical force that is just large enough to contain the target. Nothing can pass into or out of the globe.\n**Chaining.** Chains firmly rooted in the ground hold the target in place. The target has the Restrained condition and can't be moved by any means.\n**Hedged Prison.** The target is trapped in a demiplane that is warded against teleportation and planar travel. The demiplane is your choice of a labyrinth, a cage, a tower, or the like.\n**Minimus Containment.** The target becomes 1 inch tall and is trapped inside an indestructible gemstone or a similar object. Light can pass through the gemstone (allowing the target to see out and other creatures to see in), but nothing else can pass through by any means.\n**Slumber.** The target has the Unconscious condition and can't be awoken.\n**Ending the Spell.** When you cast the spell, specify a trigger that will end it. The trigger can be as simple or as elaborate as you choose, but the DM must agree that it has a high likelihood of happening within the next decade. The trigger must be an observable action, such as someone making a particular offering at the temple of your god, saving your true love, or defeating a specific monster.\nA _Dispel Magic_ spell can end the spell only if it is cast with a level 9 spell slot, targeting either the prison or the component used to create it.",
          it: "L'incantatore crea una costrizione magica per trattenere una creatura entro gittata che è in grado di vedere. Il bersaglio deve effettuare un tiro salvezza su Saggezza. In caso di successo, il bersaglio non viene influenzato ed è immune a questo incantesimo per le 24 ore successive. In caso di fallimento, il bersaglio è imprigionato. Mentre è imprigionato, il bersaglio non ha bisogno di respirare, mangiare o bere, e non invecchia. Gli incantesimi di divinazione non possono localizzare il bersaglio imprigionato e questo non può teletrasportarsi.\nInoltre, fino al termine dell'incantesimo il bersaglio subisce uno dei seguenti effetti a scelta dell'incantatore:\n**Ceppi.** Il bersaglio è bloccato da una serie di catene saldamente ancorate nel terreno. Il bersaglio è trattenuto e non può essere spostato in alcun modo.\n**Prigione protetta.** Il bersaglio è intrappolato in un semipiano protetto da teletrasporto e viaggi planari. Il semipiano può essere un labirinto, una gabbia, una torre o una struttura simile, a scelta dell'incantatore.\n**Prigionia ridotta.** Il bersaglio viene rimpicciolito fino all'altezza di 2,5 centimetri ed è intrappolato in una gemma indistruttibile o un oggetto simile. La luce passa attraverso la gemma (permettendo al bersaglio di guardare all'esterno e alle altre creature di guardare all'interno), ma nient'altro può attraversarla in alcun modo.\n**Sepoltura.** Il bersaglio viene sepolto nelle viscere della terra in un globo di forza magica sufficientemente ampio da contenerlo. Nulla può entrare o uscire dal globo.\n**Sonno.** Il bersaglio è privo di sensi e non può essere risvegliato.\n**Porre fine all'incantesimo.** Quando lancia l'incantesimo, l'incantatore specifica un innesco che porrà fine all'incantesimo. L'innesco può essere tanto semplice quanto complesso, in base alla scelta dell'incantatore, ma il DM deve ritenere che abbia una certa probabilità di verificarsi entro i dieci anni successivi. L'innesco deve essere un'azione osservabile, ad esempio: una persona che fa un'offerta particolare al tempio della divinità dell'incantatore, il salvataggio del vero amore dell'incantatore, o la sconfitta di un mostro specifico.\n_Dissolvi magie_ può porre fine a questo incantesimo solo se viene lanciato con uno slot incantesimo di 9˚ livello, bersagliando la prigione o la componente usata per crearla.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Blight",
      level: 4,
      name: {
        en: "Blight",
        it: "Inaridire",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 247,
      },
      text: {
        base: {
          en: "A creature that you can see within range makes a Constitution saving throw, taking 8d8 Necrotic damage on a failed save or half as much damage on a successful one. A Plant creature automatically fails the save.\nAlternatively, target a nonmagical plant that isn't a creature, such as a tree or shrub. It doesn't make a save; it simply withers and dies.",
          it: "Una creatura entro gittata che l'incantatore è in grado di vedere effettua un tiro salvezza su Costituzione, subendo 8d8 danni necrotici in caso di fallimento, o la metà dei danni in caso di successo. Una creatura vegetale fallisce automaticamente il tiro salvezza.\nIn alternativa, l'incantatore bersaglia un vegetale non magico che non sia una creatura, come un albero o un arbusto. Il vegetale non effettua il tiro salvezza, semplicemente appassisce e muore.",
        },
        upgrade: {
          en: "The damage increases by 1d8 for each spell slot level above 4.",
          it: "I danni aumentano di 1d8 per ogni slot di livello superiore al 4˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Detect Thoughts",
      level: 2,
      materials: {
        en: "1 CP",
        it: "1 pezzo di rame",
      },
      name: {
        en: "Detect Thoughts",
        it: "Individuazione dei Pensieri",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 262,
      },
      text: {
        base: {
          en: "You activate one of the effects below. Until the spell ends, you can activate either effect as a Magic action on your later turns. Sense Thoughts. You sense the presence of thoughts within 30 feet of yourself that belong to creatures that know languages or are telepathic. You don't read the thoughts, but you know that a thinking creature is present.The spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead. Read Thoughts. Target one creature you can see within 30 feet of yourself or one creature within 30 feet of yourself that you detected with the Sense Thoughts option. You learn what is most on the target's mind right now. If the target doesn't know any languages and isn't telepathic, you learn nothing.As a Magic action on your next turn, you can try to probe deeper into the target's mind. If you probe deeper, the target makes a Wisdom saving throw. On a failed save, you discern the target's reasoning, emotions, and something that looms large in its mind (such as a worry, love, or hate). On a successful save, the spell ends. Either way, the target knows that you are probing into its mind, and until you shift your attention away from the target's mind, the target can take an action on its turn to make an Intelligence (Arcana) check against your spell save DC, ending the spell on a success.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "paladin"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Detect Evil and Good",
      level: 1,
      name: {
        en: "Detect Evil and Good",
        it: "Individuazione del Bene e del Male",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 261,
      },
      text: {
        base: {
          en: "For the duration, you sense the location of any Aberration, Celestial, Elemental, Fey, Fiend, or Undead within 30 feet of yourself. You also sense whether the Hallow spell is active there and, if so, where.The spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: [
        "artificer",
        "bard",
        "cleric",
        "druid",
        "paladin",
        "ranger",
        "sorcerer",
        "warlock",
        "wizard",
      ],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Detect Magic",
      level: 1,
      name: {
        en: "Detect Magic",
        it: "Individuazione del Magico",
      },
      range: {
        type: "self",
      },
      ritual: true,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 262,
      },
      text: {
        base: {
          en: "For the duration, you sense the presence of magical effects within 30 feet of yourself. If you sense such effects, you can take the Magic action to see a faint aura around any visible creature or object in the area that bears the magic, and if an effect was created by a spell, you learn the spell's school of magic.\nThe spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.",
          it: "Per la durata dell'incantesimo, l'incantatore percepisce la presenza di effetti magici entro 9 metri da sé. Se percepisce tali effetti, può eseguire un'azione di Magia per vedere una debole aura attorno a ogni creatura o oggetto visibile nell'area che contenga magia e apprende di che scuola di magia si tratta, se ne esiste una.\nL'incantesimo viene bloccato da 30 centimetri di pietra, terriccio o legno, 2,5 centimetri di metallo o una sottile lamina di piombo.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "druid", "paladin", "ranger"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Detect Poison and Disease",
      level: 1,
      materials: {
        en: "a yew leaf",
        it: "una foglia di tasso",
      },
      name: {
        en: "Detect Poison and Disease",
        it: "Individuazione delle Malattie e dei Veleni",
      },
      range: {
        type: "self",
      },
      ritual: true,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 262,
      },
      text: {
        base: {
          en: "For the duration, you sense the location of poisons, poisonous or venomous creatures, and magical contagions within 30 feet of yourself. You sense the kind of poison, creature, or contagion in each case.\nThe spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.",
          it: "Per la durata dell'incantesimo, l'incantatore percepisce l'ubicazione di veleni, creature velenose e contagi magici entro 9 metri da sé. Inoltre, in ciascun caso può identificare il tipo di veleno, di creatura velenosa o di malattia.\nL'incantesimo viene bloccato da 30 centimetri di pietra, terriccio o legno, 2,5 centimetri di metallo o una sottile lamina di piombo.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Inflict Wounds",
      level: 1,
      name: {
        en: "Inflict Wounds",
        it: "Infliggi Ferite",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 288,
      },
      text: {
        base: {
          en: "A creature you touch makes a Constitution saving throw, taking 2d10 Necrotic damage on a failed save or half as much damage on a successful one.",
        },
        upgrade: {
          en: "The damage increases by 1d10 for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "bard", "druid", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Enlarge/Reduce",
      level: 2,
      materials: {
        en: "a pinch of powdered iron",
        it: "un pizzico di polvere di ferro",
      },
      name: {
        en: "Enlarge/Reduce",
        it: "Ingrandire/Ridurre",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 268,
      },
      text: {
        base: {
          en: "For the duration, the spell enlarges or reduces a creature or an object you can see within range (see the chosen effect below). A targeted object must be neither worn nor carried. If the target is an unwilling creature, it can make a Constitution saving throw. On a successful save, the spell has no effect.Everything that a targeted creature is wearing and carrying changes size with it. Any item it drops returns to normal size at once. A thrown weapon or piece of ammunition returns to normal size immediately after it hits or misses a target. Enlarge. The target's size increases by one category—from Medium to Large, for example. The target also has Advantage on Strength checks and Strength saving throws. The target's attacks with its enlarged weapons or Unarmed Strikes deal an extra 1d4 damage on a hit. Reduce. The target's size decreases by one category—from Medium to Small, for example. The target also has Disadvantage on Strength checks and Strength saving throws. The target's attacks with its reduced weapons or Unarmed Strikes deal 1d4 less damage on a hit (this can't reduce the damage below 1).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Giant Insect",
      level: 4,
      name: {
        en: "Giant Insect",
        it: "Insetto Gigante",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 279,
      },
      text: {
        base: {
          en: "You summon a giant centipede, spider, or wasp (chosen when you cast the spell). It manifests in an unoccupied space you can see within range and uses the Giant Insect stat block. The form you choose determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
        },
        upgrade: {
          en: "Use the spell slot's level for the spell's level in the stat block.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "paladin"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 8,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Death Ward",
      level: 4,
      name: {
        en: "Death Ward",
        it: "Interdizione della Morte",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 261,
      },
      text: {
        base: {
          en: "You touch a creature and grant it a measure of protection from death. The first time the target would drop to 0 Hit Points before the spell ends, the target instead drops to 1 Hit Point, and the spell ends.If the spell is still in effect when the target is subjected to an effect that would kill it instantly without dealing damage, that effect is negated against the target, and the spell ends.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Blade Ward",
      level: 0,
      name: {
        en: "Blade Ward",
        it: "Interdizione delle Lame",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 247,
      },
      text: {
        base: {
          en: "Whenever a creature makes an attack roll against you before the spell ends, the attacker subtracts 1d4 from the attack roll.",
          it: "Ogni volta che una creatura effettua un tiro per colpire contro l'incantatore prima del termine dell'incantesimo, l'attaccante sottrae 1d4 dal tiro per colpire.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Blink",
      level: 3,
      name: {
        en: "Blink",
        it: "Intermittenza",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 248,
      },
      text: {
        base: {
          en: "Roll 1d6 at the end of each of your turns for the duration. On a roll of 4-6, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell ends instantly if you are already on that plane). While on the Ethereal Plane, you can perceive the plane you left, which is cast in shades of gray, but you can't see anything there more than 60 feet away. You can affect and be affected only by other creatures on the Ethereal Plane, and creatures on the other plane can't perceive you unless they have a special ability that lets them perceive things on the Ethereal Plane.You return to the other plane at the start of your next turn and when the spell ends if you are on the Ethereal Plane. You return to an unoccupied space of your choice that you can see within 10 feet of the space you left. If no unoccupied space is available within that range, you appear in the nearest unoccupied space.",
        },
      },
    },
    {
      castingTime: {
        type: "reaction",
      },
      classes: ["warlock"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Hellish Rebuke",
      level: 1,
      name: {
        en: "Hellish Rebuke",
        it: "Intimorire Infernale",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 284,
      },
      text: {
        base: {
          en: "The creature that damaged you is momentarily surrounded by green flames. It makes a Dexterity saving throw, taking 2d10 Fire damage on a failed save or half as much damage on a successful one.",
          it: "La creatura che ha inflitto danni all'incantatore viene temporaneamente avviluppata da fiamme verdi. La creatura effettua un tiro salvezza su Destrezza, subendo 2d10 danni da fuoco in caso di fallimento, o la metà dei danni in caso di successo.",
        },
        upgrade: {
          en: "The damage increases by 1d10 for each spell slot level above 1.",
          it: "I danni aumentano di 1d10 per ogni slot di livello superiore al 1˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "ranger"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Entangle",
      level: 1,
      name: {
        en: "Entangle",
        it: "Intralciare",
      },
      range: {
        type: "distance",
        imperial: {
          value: 90,
          unit: "ft",
        },
        metric: {
          value: 27,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 268,
      },
      text: {
        base: {
          en: "Grasping plants sprout from the ground in a 20-foot square within range. For the duration, these plants turn the ground in the area into Difficult Terrain. They disappear when the spell ends.\nEach creature (other than you) in the area when you cast the spell must succeed on a Strength saving throw or have the Restrained condition until the spell ends. A Restrained creature can take an action to make a Strength (Athletics) check against your spell save DC. On a success, it frees itself from the grasping plants and is no longer Restrained by them.",
          it: "Dei vegetali afferranti spuntano dal terreno in un quadrato di 6 metri per lato in un punto situato entro gittata. Per la durata dell'incantesimo, i vegetali trasformano quell'area in un terreno difficile. I vegetali scompaiono al termine dell'incantesimo.\nQuando viene lanciato l'incantesimo, ogni creatura diversa dall'incantatore all'interno dell'area deve superare un tiro salvezza su Forza, altrimenti è trattenuta fino al termine dell'incantesimo. Le creature trattenute possono usare un'azione per effettuare una prova di Forza (Atletica) contro la CD del tiro salvezza sull'incantesimo. In caso di successo, si liberano dai vegetali afferranti e non sono più trattenute.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Reverse Gravity",
      level: 7,
      materials: {
        en: "a lodestone and iron filings",
        it: "una calamita e limatura di ferro",
      },
      name: {
        en: "Reverse Gravity",
        it: "Inversione della Gravità",
      },
      range: {
        type: "distance",
        imperial: {
          value: 100,
          unit: "ft",
        },
        metric: {
          value: 30,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 312,
      },
      text: {
        base: {
          en: "This spell reverses gravity in a 50-foot-radius, 100-foot high Cylinder centered on a point within range. All creatures and objects in that area that aren't anchored to the ground fall upward and reach the top of the Cylinder. A creature can make a Dexterity saving throw to grab a fixed object it can reach, thus avoiding the fall upward.If a ceiling or an anchored object is encountered in this upward fall, creatures and objects strike it just as they would during a downward fall. If an affected creature or object reaches the Cylinder's top without striking anything, it hovers there for the duration. When the spell ends, affected objects and creatures fall downward.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "cleric", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Sending",
      level: 3,
      materials: {
        en: "a copper wire",
        it: "un filo di rame",
      },
      name: {
        en: "Sending",
        it: "Inviare",
      },
      range: {
        type: "unlimited",
      },
      ritual: false,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 314,
      },
      text: {
        base: {
          en: "You send a short message of 25 words or fewer to a creature you have met or a creature described to you by someone who has met it. The target hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately. The spell enables targets to understand the meaning of your message.You can send the message across any distance and even to other planes of existence, but if the target is on a different plane than you, there is a 5 percent chance that the message doesn't arrive. You know if the delivery fails.Upon receiving your message, a creature can block your ability to reach it again with this spell for 8 hours. If you try to send another message during that time, you learn that you are blocked, and the spell fails.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "bard", "sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Invisibility",
      level: 2,
      materials: {
        en: "an eyelash in gum arabic",
        it: "un ciglio in uno strato di resina",
      },
      name: {
        en: "Invisibility",
        it: "Invisibilità",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 289,
      },
      text: {
        base: {
          en: "A creature you touch has the Invisible condition until the spell ends. The spell ends early immediately after the target makes an attack roll, deals damage, or casts a spell.",
          it: "Una creatura toccata dall'incantatore diventa invisibile fino al termine dell'incantesimo. L'incantesimo termina immediatamente quando il bersaglio effettua un tiro per colpire, infligge danni o lancia un incantesimo.",
        },
        upgrade: {
          en: "You can target one additional creature for each spell slot level above 2.",
          it: "L'incantatore può bersagliare una creatura aggiuntiva per ogni slot di livello superiore al 2˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Greater Invisibility",
      level: 4,
      name: {
        en: "Greater Invisibility",
        it: "Invisibilità Superiore",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 281,
      },
      text: {
        base: {
          en: "A creature you touch has the Invisible condition until the spell ends.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Call Lightning",
      level: 3,
      name: {
        en: "Call Lightning",
        it: "Invocare il Fulmine",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 248,
      },
      text: {
        base: {
          en: "A storm cloud appears at a point within range that you can see above yourself. It takes the shape of a Cylinder that is 10 feet tall with a 60-foot radius.When you cast the spell, choose a point you can see under the cloud. A lightning bolt shoots from the cloud to that point. Each creature within 5 feet of that point makes a Dexterity saving throw, taking 3d10 Lightning damage on a failed save or half as much damage on a successful one.Until the spell ends, you can take a Magic action to call down lightning in that way again, targeting the same point or a different one.If you're outdoors in a storm when you cast this spell, the spell gives you control over that storm instead of creating a new one. Under such conditions, the spell's damage increases by 1d10.",
        },
        upgrade: {
          en: "The damage increases by 1d10 for each spell slot level above 3.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Maze",
      level: 8,
      name: {
        en: "Maze",
        it: "Labirinto",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 296,
      },
      text: {
        base: {
          en: "You banish a creature that you can see within range into a labyrinthine demiplane. The target remains there for the duration or until it escapes the maze.The target can take a Study action to try to escape. When it does so, it makes a DC 20 Intelligence (Investigation) check. If it succeeds, it escapes, and the spell ends.When the spell ends, the target reappears in the space it left or, if that space is occupied, in the nearest unoccupied space.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["druid", "sorcerer"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Flame Blade",
      level: 2,
      materials: {
        en: "a sumac leaf",
        it: "una foglia di sommacco",
      },
      name: {
        en: "Flame Blade",
        it: "Lama Infuocata",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 275,
      },
      text: {
        base: {
          en: "You evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke it again as a Bonus Action.As a Magic action, you can make a melee spell attack with the fiery blade. On a hit, the target takes Fire damage equal to 3d6 plus your spellcasting ability modifier.The flaming blade sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet.",
        },
        upgrade: {
          en: "The damage increases by 1d6 for each spell slot level above 2.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "hour",
      },
      classes: ["bard", "cleric", "druid", "warlock", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 24,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Planar Binding",
      level: 5,
      materials: {
        en: "a jewel worth 1,000+ GP, which the spell consumes",
        it: "un gioiello del valore di 1.000 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Planar Binding",
        it: "Legame Planare",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 305,
      },
      text: {
        base: {
          en: "You attempt to bind a Celestial, an Elemental, a Fey, or a Fiend to your service. The creature must be within range for the entire casting of the spell. (Typically, the creature is first summoned into the center of the inverted version of the Magic Circle spell to trap it while this spell is cast.) At the completion of the casting, the target must succeed on a Charisma saving throw or be bound to serve you for the duration. If the creature was summoned or created by another spell, that spell's duration is extended to match the duration of this spell.\nA bound creature must follow your commands to the best of its ability. You might command the creature to accompany you on an adventure, to guard a location, or to deliver a message. If the creature is Hostile, it strives to twist your commands to achieve its own objectives. If the creature carries out your commands completely before the spell ends, it travels to you to report this fact if you are on the same plane of existence. If you are on a different plane, it returns to the place where you bound it and remains there until the spell ends.",
          it: "L'incantatore tenta di vincolare un celestiale, un elementale, un folletto o un immondo al suo servizio. La creatura deve trovarsi entro gittata per l'intera durata del lancio dell'incantesimo (in genere, la creatura viene prima evocata al centro di una versione invertita dell'incantesio _cerchio magico_ per tenerla intrappolata mentre questo incantesimo viene lanciato). Completato il lancio dell'incantesimo, il bersaglio deve superare un tiro salvezza su Carisma, altrimenti è obbligato a servire l'incantatore per la durata dell'incantesimo. Se la creatura è stata evocata o creata da un altro incantesimo, la durata di quell'incantesimo viene estesa per corrispondere alla durata di questo.\nUna creatura vincolata deve eseguire gli ordini al meglio delle sue capacità. L'incantatore potrebbe ordinarle di accompagnarlo in un'avventura, di proteggere un luogo o di consegnare un messaggio. Se la creatura è ostile, cercherà in tutti i modi di distorcere gli ordini dell'incantatore per perseguire i suoi obiettivi personali. Se la creatura porta a termine gli ordini dell'incantatore prima del termine dell'incantesimo, si reca da lui per riferirglielo, ma solo se si trovano sullo stesso piano di esistenza. Se l'incantatore si trova su un piano diverso, la creatura ritorna nel luogo in cui è stata vincolata e vi rimane fino al termine dell'incantesimo.",
        },
        upgrade: {
          en: "The duration increases with a spell slot of level 6 (10 days), 7 (30 days), 8 (180 days), and 9 (366 days).",
          it: "La durata aumenta con uno slot incantesimo di 6˚ livello (10 giorni), di 7˚ livello (30 giorni), di 8˚ livello (180 giorni) e di 9˚ livello (366 giorni).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Rary's Telepathic Bond",
      level: 5,
      materials: {
        en: "two eggs",
        it: "due uova",
      },
      name: {
        en: "Rary's Telepathic Bond",
        it: "Legame Telepatico di Rary",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: true,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 311,
      },
      text: {
        base: {
          en: "You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures that can't communicate in any languages aren't affected by this spell.Until the spell ends, the targets can communicate telepathically through the bond whether or not they share a language. The communication is possible over any distance, though it can't extend to other planes of existence.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Slow",
      level: 3,
      materials: {
        en: "a drop of molasses",
        it: "una goccia di melassa",
      },
      name: {
        en: "Slow",
        it: "Lentezza",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 318,
      },
      text: {
        base: {
          en: "You alter time around up to six creatures of your choice in a 40-foot Cube within range. Each target must succeed on a Wisdom saving throw or be affected by this spell for the duration.An affected target's Speed is halved, it takes a -2 penalty to AC and Dexterity saving throws, and it can't take Reactions. On its turns, it can take either an action or a Bonus Action, not both, and it can make only one attack if it takes the Attack action. If it casts a spell with a Somatic component, there is a 25 percent chance the spell fails as a result of the target making the spell's gestures too slowly.An affected target repeats the save at the end of each of its turns, ending the spell on itself on a success.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Levitate",
      level: 2,
      materials: {
        en: "a metal spring",
        it: "una molla di metallo",
      },
      name: {
        en: "Levitate",
        it: "Levitazione",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 291,
      },
      text: {
        base: {
          en: "One creature or loose object of your choice that you can see within range rises vertically up to 20 feet and remains suspended there for the duration. The spell can levitate an object that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected.The target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. You can change the target's altitude by up to 20 feet in either direction on your turn. If you are the target, you can move up or down as part of your move. Otherwise, you can take a Magic action to move the target, which must remain within the spell's range.When the spell ends, the target floats gently to the ground if it is still aloft.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "bard", "cleric", "druid", "ranger"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Freedom of Movement",
      level: 4,
      materials: {
        en: "a leather strap",
        it: "una cinghia di cuoio",
      },
      name: {
        en: "Freedom of Movement",
        it: "Libertà di Movimento",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 277,
      },
      text: {
        base: {
          en: "You touch a willing creature. For the duration, the target's movement is unaffected by Difficult Terrain, and spells and other magical effects can neither reduce the target's Speed nor cause the target to have the Paralyzed or Restrained conditions. The target also has a Swim Speed equal to its Speed.\nIn addition, the target can spend 5 feet of movement to automatically escape from nonmagical restraints, such as manacles or a creature imposing the Grappled condition on it.",
          it: "L'incantatore tocca una creatura consenziente. Per la durata dell'incantesimo, il movimento del bersaglio non è influenzato dal terreno difficile, inoltre incantesimi e altri effetti magici non possono né ridurne la velocità né trattenerlo o renderlo paralizzato. Il bersaglio dispone anche di una velocità di nuoto pari alla sua velocità.\nInoltre, il bersaglio può usare 1,5 metri di movimento per sfuggire automaticamente alle restrizioni non magiche, come un paio di manette o la presa di una creatura che lo afferra.",
        },
        upgrade: {
          en: "You can target one additional creature for each spell slot level above 4.",
          it: "L'incantatore può bersagliare una creatura aggiuntiva per ogni slot di livello superiore al 4˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "cleric", "sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Tongues",
      level: 3,
      materials: {
        en: "a miniature ziggurat",
        it: "una ziggurat in miniatura",
      },
      name: {
        en: "Tongues",
        it: "Linguaggi",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 334,
      },
      text: {
        base: {
          en: "This spell grants the creature you touch the ability to understand any spoken or signed language that it hears or sees. Moreover, when the target communicates by speaking or signing, any creature that knows at least one language can understand it if that creature can hear the speech or see the signing.",
          it: "Questo incantesimo concede alla creatura toccata dall'incantatore l'abilità di comprendere qualsiasi lingua (parlata o non) che sente o vede. Inoltre, quando comunica con parole o gesti, qualsiasi creatura che conosce almeno una lingua può comprenderla se è in grado di sentire ciò che dice o vedere i suoi gesti.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "druid", "ranger"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Locate Animals or Plants",
      level: 2,
      materials: {
        en: "fur from a bloodhound",
        it: "un ciuffo di peli di segugio",
      },
      name: {
        en: "Locate Animals or Plants",
        it: "Localizza Animali o Vegetali",
      },
      range: {
        type: "self",
      },
      ritual: true,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 292,
      },
      text: {
        base: {
          en: "Describe or name a specific kind of Beast, Plant creature, or nonmagical plant. You learn the direction and distance to the closest creature or plant of that kind within 5 miles, if any are present.",
          it: "L'incantatore descrive o nomina un tipo specifico di bestia o creatura vegetale, oppure un vegetale non magico. Apprende la direzione e la distanza fino alla creatura o al vegetale di quel tipo più vicino entro 7,5 chilometri, se ne è presente uno.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "cleric", "druid", "paladin", "ranger", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Locate Creature",
      level: 4,
      materials: {
        en: "fur from a bloodhound",
        it: "un ciuffo di peli di segugio",
      },
      name: {
        en: "Locate Creature",
        it: "Localizza Creatura",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 292,
      },
      text: {
        base: {
          en: "Describe or name a creature that is familiar to you. You sense the direction to the creature's location if that creature is within 1,000 feet of you. If the creature is moving, you know the direction of its movement.\nThe spell can locate a specific creature known to you or the nearest creature of a specific kind (such as a human or a unicorn) if you have seen such a creature up close—within 30 feet—at least once. If the creature you described or named is in a different form, such as under the effects of a _Flesh to Stone_ or _Polymorph_ spell, this spell doesn't locate the creature.\nThis spell can't locate a creature if any thickness of lead blocks a direct path between you and the creature.",
          it: "L'incantatore descrive o nomina una creatura a lui familiare, percependo la direzione della sua ubicazione se la creatura si trova entro 300 metri da lui. Se la creatura è in movimento, l'incantatore apprende verso quale direzione si sta dirigendo.\nL'incantesimo può localizzare una creatura specifica nota all'incantatore o una creatura di un tipo specifico più vicina (come un umano o un unicorno), purché l'incantatore abbia visto tale creatura da vicino (entro 9 metri) almeno una volta. Se la creatura descritta o nominata ha una forma diversa, per esempio se si trova sotto l'effetto di un incantesimo _carne in pietra_ o _metamorfosi_, questo incantesimo non riesce a localizzarla.\nQuesto incantesimo non può localizzare una creatura se uno strato di piombo blocca il percorso diretto tra essa e l'incantatore.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "cleric", "druid", "paladin", "ranger", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Locate Object",
      level: 2,
      materials: {
        en: "a forked twig",
        it: "un ramoscello biforcuto",
      },
      name: {
        en: "Locate Object",
        it: "Localizza Oggetto",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 293,
      },
      text: {
        base: {
          en: "Describe or name an object that is familiar to you. You sense the direction to the object's location if that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement.\nThe spell can locate a specific object known to you if you have seen it up close—within 30 feet—at least once. Alternatively, the spell can locate the nearest object of a particular kind, such as a certain kind of apparel, jewelry, furniture, tool, or weapon.\nThis spell can't locate an object if any thickness of lead blocks a direct path between you and the object.",
          it: "L'incantatore describe o nomina un oggetto a lui familiare, percependo la direzione della sua ubicazione se l'oggetto si trova entro 300 metri da lui. Se l'oggetto è in movimento, l'incantatore apprende verso quale direzione si sta dirigendo.\nL'incantesimo può localizzare un oggetto specifico noto all'incantatore, purché l'abbia visto da vicino (entro 9 metri) almeno una volta. In alternativa, può localizzare l'oggetto di un tipo particolare più vicino, come per esempio un certo tipo di veste, gioiello, mobile, strumento o arma.\nQuesto incantesimo non può localizzare un oggetto se uno strato di piombo blocca il percorso diretto tra esso e l'incantatore.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "warlock"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Glibness",
      level: 8,
      name: {
        en: "Glibness",
        it: "Loquacità",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 279,
      },
      text: {
        base: {
          en: "Until the spell ends, when you make a Charisma check, you can replace the number you roll with a 15. Additionally, no matter what you say, magic that would determine if you are telling the truth indicates that you are being truthful.",
          it: "Fino al termine dell'incantesimo, quando l'incantatore effettua una prova di Carisma, può sostituire il risultato del tiro con un 15. Inoltre, a prescindere da ciò che dice, le magie in grado di determinare se un bersaglio stia dicendo o meno la verità indicano che l'incantatore è sincero.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "bard", "cleric", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Light",
      level: 0,
      materials: {
        en: "a firefly or phosphorescent moss",
        it: "un lucciola o del muschio fosforescente",
      },
      name: {
        en: "Light",
        it: "Luce",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 292,
      },
      text: {
        base: {
          en: "You touch one Large or smaller object that isn't being worn or carried by someone else. Until the spell ends, the object sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet. The light can be colored as you like.Covering the object with something opaque blocks the light. The spell ends if you cast it again.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "druid", "paladin", "ranger", "sorcerer"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Daylight",
      level: 3,
      name: {
        en: "Daylight",
        it: "Luce Diurna",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 260,
      },
      text: {
        base: {
          en: "For the duration, sunlight spreads from a point within range and fills a 60-foot-radius Sphere. The sunlight's area is Bright Light and sheds Dim Light for an additional 60 feet.\nAlternatively, you cast the spell on an object that isn't being worn or carried, causing the sunlight to fill a 60-foot Emanation originating from that object. Covering that object with something opaque, such as a bowl or helm, blocks the sunlight.\nIf any of this spell's area overlaps with an area of Darkness created by a spell of level 3 or lower, that other spell is dispelled.",
          it: "Per la durata dell'incantesimo, un fascio di luce solare si sprigiona da un puntro entro gittata e riempie una sfera del raggio di 18 metri. L'area della luce solare emette luce intensa e poi luce fioca per ulteriori 18 metri.\nIn alternativa, l'incantatore lancia l'incantesimo su un oggetto che non sia indossato o trasportato, facendo sì che la luce solare riempia un'emanazione di 18 metri di cui l'oggetto è il punto di origine. Coprire l'oggetto con qualcosa di opaco, come una ciotola o un elmo, blocca la luce solare.\nSe una parte dell'area di questo incantesimo si sovrappone a un'area di oscurità creata da un incantesimo di 3˚ livello o inferiore, l'incantesimo che ha creato l'oscurità viene dissolto.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "druid"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Starry Wisp",
      level: 0,
      name: {
        en: "Starry Wisp",
        it: "Luce Splendente",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 320,
      },
      text: {
        base: {
          en: "You launch a mote of light at one creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 Radiant damage, and until the end of your next turn, it emits Dim Light in a 10-foot radius and can't benefit from the Invisible condition.",
        },
        upgrade: {
          en: "The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "bard", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Dancing Lights",
      level: 0,
      materials: {
        en: "a bit of phosphorus",
        it: "un frammento di fosforo",
      },
      name: {
        en: "Dancing Lights",
        it: "Luci Danzanti",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 259,
      },
      text: {
        base: {
          en: "You create up to four torch-size lights within range, making them appear as torches, lanterns, or glowing orbs that hover for the duration. Alternatively, you combine the four lights into one glowing Medium form that is vaguely humanlike. Whichever form you choose, each light sheds Dim Light in a 10-foot radius.As a Bonus Action, you can move the lights up to 60 feet to a space within range. A light must be within 20 feet of another light created by this spell, and a light vanishes if it exceeds the spell's range.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "bard", "druid"],
      concentration: true,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Faerie Fire",
      level: 1,
      name: {
        en: "Faerie Fire",
        it: "Luminescenza",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 271,
      },
      text: {
        base: {
          en: "Objects in a 20-foot Cube within range are outlined in blue, green, or violet light (your choice). Each creature in the Cube is also outlined if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed Dim Light in a 10-foot radius and can't benefit from the Invisible condition.Attack rolls against an affected creature or object have Advantage if the attacker can see it.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Burning Hands",
      level: 1,
      name: {
        en: "Burning Hands",
        it: "Mani Brucianti",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 248,
      },
      text: {
        base: {
          en: "A thin sheet of flames shoots forth from you. Each creature in a 15-foot Cone makes a Dexterity saving throw, taking 3d6 Fire damage on a failed save or half as much damage on a successful one.Flammable objects in the Cone that aren't being worn or carried start burning.",
        },
        upgrade: {
          en: "The damage increases by 1d6 for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Bigby's Hand",
      level: 5,
      materials: {
        en: "an eggshell and a glove",
        it: "un guscio d'uovo e un guanto",
      },
      name: {
        en: "Bigby's Hand",
        it: "Mano di Bigby",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 246,
      },
      text: {
        base: {
          en: "You create a Large hand of shimmering magical energy in an unoccupied space that you can see within range. The hand lasts for the duration, and it moves at your command, mimicking the movements of your own hand.The hand is an object that has AC 20 and Hit Points equal to your Hit Point maximum. If it drops to 0 Hit Points, the spell ends. The hand doesn't occupy its space.When you cast the spell and as a Bonus Action on your later turns, you can move the hand up to 60 feet and then cause one of the following effects:Clenched Fist. The hand strikes a target within 5 feet of it. Make a melee spell attack. On a hit, the target takes 5d8 Force damage.Forceful Hand. The hand attempts to push a Huge or smaller creature within 5 feet of it. The target must succeed on a Strength saving throw, or the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target, remaining within 5 feet of it.Grasping Hand. The hand attempts to grapple a Huge or smaller creature within 5 feet of it. The target must succeed on a Dexterity saving throw, or the target has the Grappled condition, with an escape DC equal to your spell save DC. While the hand grapples the target, you can take a Bonus Action to cause the hand to crush it, dealing Bludgeoning damage to the target equal to 4d6 plus your spellcasting ability modifier.Interposing Hand. The hand grants you Half Cover against attacks and other effects that originate from its space or that pass through it. In addition, its space counts as Difficult Terrain for your enemies.",
        },
        upgrade: {
          en: "The damage of the Clenched Fist increases by 2d8 and the damage of the Grasping Hand increases by 2d6 for each spell slot level above 5.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "bard", "sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Mage Hand",
      level: 0,
      name: {
        en: "Mage Hand",
        it: "Mano Magica",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 293,
      },
      text: {
        base: {
          en: "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.When you cast the spell, you can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial.As a Magic action on your later turns, you can control the hand thus again. As part of that action, you can move the hand up to 30 feet.The hand can't attack, activate magic items, or carry more than 10 pounds.",
          it: "Una mano spettrale fluttuante compare in un punto a scelta dell'incantatore situato entro gittata. La mano permane per la durata dell'incantesimo e svanisce se si trova a più di 9 metri dall'incantatore o se quest'ultimo lancia nuovamente l'incantesimo.\nQuando lancia l'incantesimo, l'incantatore può usare la mano per maneggiare un oggetto, aprire una porta o un contenitore che non siano chiusi a chiave, riporre o estrarre un oggetto da un contenitore aperto o versare il contenuto di una fiala.\nCome azione di Magia nei suoi turni successivi, l'incantatore può controllare nuovamente la mano. Come parte di quell'azione, può muoverla fino a 9 metri.\nLa mano non può attaccare, attivare oggetti magici o trasportare più di 5 chili.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["paladin"],
      concentration: true,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Crusader's Mantle",
      level: 3,
      name: {
        en: "Crusader's Mantle",
        it: "Manto del Crociato",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 259,
      },
      text: {
        base: {
          en: "You radiate a magical aura in a 30-foot Emanation. While in the aura, you and your allies each deal an extra 1d4 Radiant damage when hitting with a weapon or an Unarmed Strike.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["ranger"],
      concentration: true,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Hunter's Mark",
      level: 1,
      name: {
        en: "Hunter's Mark",
        it: "Marchio del Cacciatore",
      },
      range: {
        type: "distance",
        imperial: {
          value: 90,
          unit: "ft",
        },
        metric: {
          value: 27,
          unit: "m",
        },
      },
      ritual: false,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 287,
      },
      text: {
        base: {
          en: "You magically mark one creature you can see within range as your quarry. Until the spell ends, you deal an extra 1d6 Force damage to the target whenever you hit it with an attack roll. You also have Advantage on any Wisdom (Perception or Survival) check you make to find it.\nIf the target drops to 0 Hit Points before this spell ends, you can take a Bonus Action to move the mark to a new creature you can see within range.",
          it: "L'incantatore marchia magicamente come sua preda una creatura entro gittata che è in grado di vedere. Fino al termine dell'incantesimo, l'incantatore infligge 1d6 danni da forza extra al bersaglio ogni volta che lo colpisce con un tiro per colpire. Inoltre, l'incantatore dispone di vantaggio a qualsiasi prova di Saggezza (Percezione o Sopravvivenza) che effettua per trovare il bersaglio.\nSe il bersaglio scende a 0 punti ferita prima del termine dell'incantesimo, l'incantatore può effettuare un'azione bonus per spostare il marchio su un'altra creatura entro gittata che è in grado di vedere.",
        },
        upgrade: {
          en: "Your Concentration can last longer with a spell slot of level 3-4 (up to 8 hours) or 5+ (up to 24 hours).",
          it: "La concentrazione dell'incantatore può durare di più utilizzando uno slot incantesimo di 3˚ o 4˚ livello (fino a 8 ore) o di 5˚ livello o superiore (fino a 24 ore).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "bard", "druid", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: false,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "round",
        upTo: false,
      },
      id: "PHB'24/Message",
      level: 0,
      materials: {
        en: "a copper wire",
        it: "un filo di rame",
      },
      name: {
        en: "Message",
        it: "Messaggio",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 298,
      },
      text: {
        base: {
          en: "You point toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence; 1 foot of stone, metal, or wood; or a thin sheet of lead blocks the spell.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "druid", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Polymorph",
      level: 4,
      materials: {
        en: "a caterpillar cocoon",
        it: "il bozzolo di un bruco",
      },
      name: {
        en: "Polymorph",
        it: "Metamorforsi",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 306,
      },
      text: {
        base: {
          en: "You attempt to transform a creature that you can see within range into a Beast. The target must succeed on a Wisdom saving throw or shape-shift into Beast form for the duration. That form can be any Beast you choose that has a Challenge Rating equal to or less than the target's (or the target's level if it doesn't have a Challenge Rating). The target's game statistics are replaced by the stat block of the chosen Beast, but the target retains its alignment, personality, creature type, Hit Points, and Hit Point Dice.The target gains a number of Temporary Hit Points equal to the Hit Points of the Beast form. These Temporary Hit Points vanish if any remain when the spell ends. The spell ends early on the target if it has no Temporary Hit Points left.The target is limited in the actions it can perform by the anatomy of its new form, and it can't speak or cast spells.The target's gear melds into the new form. The creature can't use or otherwise benefit from any of that equipment.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/True Polymorph",
      level: 9,
      materials: {
        en: "a drop of mercury, a dollop of gum arabic, and a wisp of smoke",
        it: "una goccia di mercurio, una piccola quantità di resina e uno sbuffo di fumo",
      },
      name: {
        en: "True Polymorph",
        it: "Metamorfosi Pura",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 335,
      },
      text: {
        base: {
          en: "Choose one creature or nonmagical object that you can see within range. The creature shape-shifts into a different creature or a nonmagical object, or the object shape-shifts into a creature (the object must be neither worn nor carried). The transformation lasts for the duration or until the target dies or is destroyed, but if you maintain Concentration on this spell for the full duration, the spell lasts until dispelled.An unwilling creature can make a Wisdom saving throw, and if it succeeds, it isn't affected by this spell.\n**Creature into Creature.** If you turn a creature into another kind of creature, the new form can be any kind you choose that has a Challenge Rating equal to or less than the target's Challenge Rating or level. The target's game statistics are replaced by the stat block of the new form, but it retains its Hit Points, Hit Point Dice, alignment, and personality.\nThe target gains a number of Temporary Hit Points equal to the Hit Points of the new form. These Temporary Hit Points vanish if any remain when the spell ends. The spell ends early on the target if it has no Temporary Hit Points left.\nThe target is limited in the actions it can perform by the anatomy of its new form, and it can't speak or cast spells.\nThe target's gear melds into the new form. The creature can't use or otherwise benefit from any of that equipment.\n**Object into Creature.** You can turn an object into any kind of creature, as long as the creature's size is no larger than the object's size and the creature has a Challenge Rating of 9 or lower. The creature is Friendly to you and your allies. In combat, it takes its turns immediately after yours, and it obeys your commands.\nIf the spell lasts more than an hour, you no longer control the creature. It might remain Friendly to you, depending on how you have treated it.\n**Creature into Object.** If you turn a creature into an object, it transforms along with whatever it is wearing and carrying into that form, as long as the object's size is no larger than the creature's size. The creature's statistics become those of the object, and the creature has no memory of time spent in this form after the spell ends and it returns to normal.",
          it: "L'incantatore sceglie una creatura o un oggetto non magico entro gittata che è in grado di vedere. La prima si trasforma in un'altra creatura o oggetto non magico, metre il secondo diventa una creatura (l'oggetto non deve essere né indossato né trasportato). La trasformazione permane per la durata dell'incantesimo, o finché il bersaglio non muore o viene distrutto. Tuttavia, se l'incantatore mantiene la concentrazione per l'intera durata, l'incantesimo ha efficacia finché non viene dissolto o una creatura non consenziente supera un tiro salvezza su Saggezza.\n**Creatura in creatura.** Se l'incantatore trasforma una creatura in un altro tipo di creatura, la nuova forma può essere di qualsiasi tipo, purché il suo grado di sfida sia pari o inferiore a quello del bersaglio (o al suo livello). Le sue statistiche di gioco sono sostituite dalla scheda delle statistiche della nuova forma, mantenendo punti ferita, Dadi Vita, allineamento e personalità.\nIl bersaglio guadagna un numero di punti ferita temporanei pari ai punti ferita della nuova forma. Questi punti ferita temporanei svaniscono quando l'incantesimo termina.\nIl bersaglio è limitato alle azioni che può effettuare in base all'anatomia della sua nuova forma e non può parlare o lanciare incantesimi.\nL'attrezzatura del bersaglio si fonde nella sua nuova forma e la creatura non può utilizzare il suo equipaggiamento o beneficiarne in alcun modo.\n**Oggetto in creatura**. L'incantatore può trasformare un oggetto in un qualsiasi tipo di creatura, purché la sua taglia non sia superiore a quella dell'oggetto e il suo grado di sfida sia pari o inferiore a 9. La creatura è amichevole nei confronti dell'incantatore e dei suoi compagni e, in combattimento, obbedisce ai suoi comandi e svolge il suo turno subito dopo di lui.\nTuttavia, se l'incantesimo dura per più di un'ora, l'incantatore perde il controllo su di essa. Potrebbe rimanere amichevole o meno nei suoi confronti, in base a come è stata trattata.\n**Creatura in oggetto.** Se l'incantatore trasforma una creatura in un oggetto, tutto ciò che essa indossa o trasporta si fonde nella nuova forma, purché la taglia dell'oggetto non sia superiore a quella della creatura. Le statistiche della creatura diventano quelle dell'oggetto e, una volta terminato l'incantesimo e tornata nella sua forma normale, essa non ricorderà nulla del tempo trascorso in quella forma.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 10,
        unit: "minute",
      },
      classes: ["bard", "druid", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "day",
        upTo: false,
      },
      id: "PHB'24/Mirage Arcane",
      level: 7,
      name: {
        en: "Mirage Arcane",
        it: "Miraggio Arcano",
      },
      range: {
        type: "sight",
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 299,
      },
      text: {
        base: {
          en: "You make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain. Open fields or a road could be made to resemble a swamp, hill, crevasse, or some other rough or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road.Similarly, you can alter the appearance of structures or add them where none are present. The spell doesn't disguise, conceal, or add creatures.The illusion includes audible, visual, tactile, and olfactory elements, so it can turn clear ground into Difficult Terrain (or vice versa) or otherwise impede movement through the area. Any piece of the illusory terrain (such as a rock or stick) that is removed from the spell's area disappears immediately.Creatures with Truesight can see through the illusion to the terrain's true form; however, all other elements of the illusion remain, so while the creature is aware of the illusion's presence, the creature can still physically interact with the illusion.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Modify Memory",
      level: 5,
      name: {
        en: "Modify Memory",
        it: "Modificare Memoria",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 299,
      },
      text: {
        base: {
          en: "You attempt to reshape another creature's memories. One creature that you can see within range makes a Wisdom saving throw. If you are fighting the creature, it has Advantage on the save. On a failed save, the target has the Charmed condition for the duration. While Charmed in this way, the target also has the Incapacitated condition and is unaware of its surroundings, though it can hear you. If it takes any damage or is targeted by another spell, this spell ends, and no memories are modified.While this charm lasts, you can affect the target's memory of an event that it experienced within the last 24 hours and that lasted no more than 10 minutes. You can permanently eliminate all memory of the event, allow the target to recall the event with perfect clarity, change its memory of the event's details, or create a memory of some other event.You must speak to the target to describe how its memories are affected, and it must be able to understand your language for the modified memories to take root. Its mind fills in any gaps in the details of your description. If the spell ends before you finish describing the modified memories, the creature's memory isn't altered. Otherwise, the modified memories take hold when the spell ends.A modified memory doesn't necessarily affect how a creature behaves, particularly if the memory contradicts the creature's natural inclinations, alignment, or beliefs. An illogical modified memory, such as a false memory of how much the creature enjoyed swimming in acid, is dismissed as a bad dream. The DM might deem a modified memory too nonsensical to affect a creature.A Remove Curse or Greater Restoration spell cast on the target restores the creature's true memory.",
        },
        upgrade: {
          en: "You can alter the target's memories of an event that took place up to 7 days ago (level 6 spell slot), 30 days ago (level 7 spell slot), 365 days ago (level 8 spell slot), or any time in the creature's past (level 9 spell slot).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "cleric", "druid", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Feign Death",
      level: 3,
      materials: {
        en: "a pinch of graveyard dirt",
        it: "un pizzico di terriccio prelevato da un cimitero",
      },
      name: {
        en: "Feign Death",
        it: "Morte Apparente",
      },
      range: {
        type: "touch",
      },
      ritual: true,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 271,
      },
      text: {
        base: {
          en: "You touch a willing creature and put it into a cataleptic state that is indistinguishable from death.For the duration, the target appears dead to outward inspection and to spells used to determine the target's status. The target has the Blinded and Incapacitated conditions, and its Speed is 0.The target also has Resistance to all damage except Psychic damage, and it has Immunity to the Poisoned condition.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Spider Climb",
      level: 2,
      materials: {
        en: "a drop of bitumen and a spider",
        it: "una goccia di bitume e un ragno",
      },
      name: {
        en: "Spider Climb",
        it: "Movimenti del Ragno",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 319,
      },
      text: {
        base: {
          en: "Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and along ceilings, while leaving its hands free. The target also gains a Climb Speed equal to its Speed.",
          it: "Fino al termine dell'incantesimo, una creatura consenziente toccata dall'incantatore ottiene la capacità di muoversi verticalmente e orizontalmente su pareti e soffitti, mantenendo le mani libere. Il bersaglio ottiene anche una velocità di scalata pari alla sua velocità.",
        },
        upgrade: {
          en: "You can target one additional creature for each spell slot level above 2.",
          it: "L'incantatore può bersagliare una creatura aggiuntiva per ogni slot di livello superiore al 2˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 2,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Move Earth",
      level: 6,
      materials: {
        en: "a miniature shovel",
        it: "una pala in miniatura",
      },
      name: {
        en: "Move Earth",
        it: "Muovere il Terreno",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 302,
      },
      text: {
        base: {
          en: "Choose an area of terrain no larger than 40 feet on a side within range. You can reshape dirt, sand, or clay in the area in any manner you choose for the duration. You can raise or lower the area's elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can't exceed half the area's largest dimension. For example, if you affect a 40-foot square, you can create a pillar up to 20 feet high, raise or lower the square's elevation by up to 20 feet, dig a trench up to 20 feet deep, and so on. It takes 10 minutes for these changes to complete. Because the terrain's transformation occurs slowly, creatures in the area can't usually be trapped or injured by the ground's movement.At the end of every 10 minutes you spend Concentrating on the spell, you can choose a new area of terrain to affect within range.This spell can't manipulate natural stone or stone construction. Rocks and structures shift to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse.Similarly, this spell doesn't directly affect plant growth. The moved earth carries any plants along with it.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Wall of Force",
      level: 5,
      materials: {
        en: "a shard of glass",
        it: "un frammento di vetro",
      },
      name: {
        en: "Wall of Force",
        it: "Muro di Forza",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 338,
      },
      text: {
        base: {
          en: "An Invisible wall of force springs into existence at a point you choose within range. The wall appears in any orientation you choose, as a horizontal or vertical barrier or at an angle. It can be free floating or resting on a solid surface. You can form it into a hemispherical dome or a globe with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-by-10-foot panels. Each panel must be contiguous with another panel. In any form, the wall is 1/4 inch thick and lasts for the duration. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (you choose which side).Nothing can physically pass through the wall. It is immune to all damage and can't be dispelled by Dispel Magic. A Disintegrate spell destroys the wall instantly, however. The wall also extends into the Ethereal Plane and blocks ethereal travel through the wall.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Wall of Fire",
      level: 4,
      materials: {
        en: "a piece of charcoal",
        it: "un pezzo di carbone",
      },
      name: {
        en: "Wall of Fire",
        it: "Muro di Fuoco",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 338,
      },
      text: {
        base: {
          en: "You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration.When the wall appears, each creature in its area makes a Dexterity saving throw, taking 5d8 Fire damage on a failed save or half as much damage on a successful one.One side of the wall, selected by you when you cast this spell, deals 5d8 Fire damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage.",
        },
        upgrade: {
          en: "The damage increases by 1d8 for each spell slot level above 4.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Wall of Ice",
      level: 6,
      materials: {
        en: "a piece of quartz",
        it: "un pezzo di quarzo",
      },
      name: {
        en: "Wall of Ice",
        it: "Muro di Ghiaccio",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 339,
      },
      text: {
        base: {
          en: "You create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a globe with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-square panels. Each panel must be contiguous with another panel. In any form, the wall is 1 foot thick and lasts for the duration.If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (you choose which side) and makes a Dexterity saving throw, taking 10d6 Cold damage on a failed save or half as much damage on a successful one.The wall is an object that can be damaged and thus breached. It has AC 12 and 30 Hit Points per 10-foot section, and it has Immunity to Cold, Poison, and Psychic damage and Vulnerability to Fire damage. Reducing a 10-foot section of wall to 0 Hit Points destroys it and leaves behind a sheet of frigid air in the space the wall occupied.A creature moving through the sheet of frigid air for the first time on a turn makes a Constitution saving throw, taking 5d6 Cold damage on a failed save or half as much damage on a successful one.",
        },
        upgrade: {
          en: "The damage the wall deals when it appears increases by 2d6 and the damage from passing through the sheet of frigid air increases by 1d6 for each spell slot level above 6.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "druid", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Wall of Stone",
      level: 5,
      materials: {
        en: "a cube of granite",
        it: "un cubo di granito",
      },
      name: {
        en: "Wall of Stone",
        it: "Muro di Pietra",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 339,
      },
      text: {
        base: {
          en: "A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with another panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick.If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (you choose which side). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its Reaction to move up to its Speed so that it is no longer enclosed by the wall.The wall can have any shape you desire, though it can't occupy the same space as a creature or object. The wall doesn't need to be vertical or rest on a firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus, you can use this spell to bridge a chasm or create a ramp.If you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create battlements and the like.The wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 Hit Points per inch of thickness, and it has Immunity to Poison and Psychic damage. Reducing a panel to 0 Hit Points destroys it and might cause connected panels to collapse at the DM's discretion.If you maintain your Concentration on this spell for its full duration, the wall becomes permanent and can't be dispelled. Otherwise, the wall disappears when the spell ends.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Wall of Thorns",
      level: 6,
      materials: {
        en: "a handful of thorns",
        it: "una manciata di spine",
      },
      name: {
        en: "Wall of Thorns",
        it: "Muro di Spine",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 339,
      },
      text: {
        base: {
          en: "You create a wall of tangled brush bristling with needle-sharp thorns. The wall appears within range on a solid surface and lasts for the duration. You choose to make the wall up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20-foot diameter and is up to 20 feet high and 5 feet thick. The wall blocks line of sight.When the wall appears, each creature in its area makes a Dexterity saving throw, taking 7d8 Piercing damage on a failed save or half as much damage on a successful one.A creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature moves through the wall, it must spend 4 feet of movement. Furthermore, the first time a creature enters a space in the wall on a turn or ends its turn there, the creature makes a Dexterity saving throw, taking 7d8 Slashing damage on a failed save or half as much damage on a successful one. A creature makes this save only once per turn.",
        },
        upgrade: {
          en: "Both types of damage increase by 1d8 for each spell slot level above 6.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "ranger"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Wind Wall",
      level: 3,
      materials: {
        en: "a fan and a feather",
        it: "un ventaglio e una piuma",
      },
      name: {
        en: "Wind Wall",
        it: "Muro di Vento",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 341,
      },
      text: {
        base: {
          en: "A wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 50 feet long, 15 feet high, and 1 foot thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration.\nWhen the wall appears, each creature in its area makes a Strength saving throw, taking 4d8 Bludgeoning damage on a failed save or half as much damage on a successful one.\nThe strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects can't pass through the wall. Loose, lightweight materials brought into the wall fly upward. Arrows, bolts, and other ordinary projectiles launched at targets behind the wall are deflected upward and miss automatically. Boulders hurled by Giants or siege engines, and similar projectiles, are unaffected. Creatures in gaseous form can't pass through it.",
          it: "Un muro di vento forte si solleva dal terreno in un punto a scelta dell'incantatore situato entro gittata. Il muro può essere lungo fino a 15 metri, alto4,5 metri e spesso 30 centimetri. L'incantatore può modellarlo nel modo che preferisce, purché formi un percorso continuo lungo il terreno. Il muro permane per tutta la durata dell'incantesimo.\nQuando appare, ogni creatura nell'area effettua un tiro salvezza su Forza, subendo 4d8 danni contundenti in caso di fallimento o la metà dei danni in caso di successo.\nIl vento forte tiene lontani fumo, nebbia e altri gas. Le creature o gli oggetti volanti di taglia Piccola o inferiore non possono passare attraverso il muro e i materiali leggeri, non fissati in qualche modo, volano verso l'alto una volta portati al suo interno. Frecce, quadrelli e altri proiettili ordinari lanciati contro bersagli dietro il muro vengono deviati verso l'alto e mancano automaticamente il bersaglio (i macigni scagliati dai giganti o dalle macchine d'assedio e altri proiettili simili non sono influenzati dal muro). Inoltre, le creature in forma gassosa non possono attraversarlo.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Prismatic Wall",
      level: 9,
      name: {
        en: "Prismatic Wall",
        it: "Muro Prismatico",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 308,
      },
      text: {
        base: {
          en: "A shimmering, multicolored plane of light forms a vertical opaque wall—up to 90 feet long, 30 feet high, and 1 inch thick—centered on a point within range. Alternatively, you shape the wall into a globe up to 30 feet in diameter centered on a point within range. The wall lasts for the duration. If you position the wall in a space occupied by a creature, the spell ends instantly without effect.The wall sheds Bright Light within 100 feet and Dim Light for an additional 100 feet. You and creatures you designate when you cast the spell can pass through and be near the wall without harm. If another creature that can see the wall moves within 20 feet of it or starts its turn there, the creature must succeed on a Constitution saving throw or have the Blinded condition for 1 minute.The wall consists of seven layers, each with a different color. When a creature reaches into or passes through the wall, it does so one layer at a time through all the layers. Each layer forces the creature to make a Dexterity saving throw or be affected by that layer's properties as described in the Prismatic Layers table.The wall, which has AC 10, can be destroyed one layer at a time, in order from red to violet, by means specific to each layer. If a layer is destroyed, it is gone for the duration. Antimagic Field has no effect on the wall, and Dispel Magic can affect only the violet layer.Prismatic LayersOrderEffects1Red. Failed Save: 12d6 Fire damage. Successful Save: Half as much damage. Additional Effects: Nonmagical ranged attacks can't pass through this layer, which is destroyed if it takes at least 25 Cold damage.2Orange. Failed Save: 12d6 Acid damage. Successful Save: Half as much damage. Additional Effects: Magical ranged attacks can't pass through this layer, which is destroyed by a strong wind (such as the one created by Gust of Wind).3Yellow. Failed Save: 12d6 Lightning damage. Successful Save: Half as much damage. Additional Effects: The layer is destroyed if it takes at least 60 Force damage.4Green. Failed Save: 12d6 Poison damage. Successful Save: Half as much damage. Additional Effects: A Passwall spell, or another spell of equal or greater level that can open a portal on a solid surface, destroys this layer.5Blue. Failed Save: 12d6 Cold damage. Successful Save: Half as much damage. Additional Effects: The layer is destroyed if it takes at least 25 Fire damage.6Indigo. Failed Save: The target has the Restrained condition and makes a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the condition ends. If it fails three times, it has the Petrified condition until it is freed by an effect like the Greater Restoration spell. The successes and failures needn't be consecutive; keep track of both until the target collects three of a kind. Additional Effects: Spells can't be cast through this layer, which is destroyed by Bright Light shed by the Daylight spell.7Violet. Failed Save: The target has the Blinded condition and makes a Wisdom saving throw at the start of your next turn. On a successful save, the condition ends. On a failed save, the condition ends, and the creature teleports to another plane of existence (DM's choice). Additional Effects: This layer is destroyed by Dispel Magic.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "ranger", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Fog Cloud",
      level: 1,
      name: {
        en: "Fog Cloud",
        it: "Nube di Nebbia",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 276,
      },
      text: {
        base: {
          en: "You create a 20-foot-radius Sphere of fog centered on a point within range. The Sphere is Heavily Obscured. It lasts for the duration or until a strong wind (such as one created by Gust of Wind) disperses it.",
          it: "L'incantatore genera una sfera di nebbia del raggio di 6 metri centrata su un punto entro gittata. La sfera è pesantemente oscurata e permane per la durata dell'incantesimo o finché un vento forte (come quello creato da _folata di vento_) non la disperde.",
        },
        upgrade: {
          en: "The fog's radius increases by 20 feet for each spell slot level above 1.",
          it: "Il raggio della sfera di nebbia aumenta di 6 metri per ogni slot di livello superiore al 1˚.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Cloud of Daggers",
      level: 2,
      materials: {
        en: "a sliver of glass",
        it: "una scheggia di vetro",
      },
      name: {
        en: "Cloud of Daggers",
        it: "Nube di Pugnali",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 251,
      },
      text: {
        base: {
          en: "You conjure spinning daggers in a 5-foot Cube centered on a point within range. Each creature in that area takes 4d4 Slashing damage. A creature also takes this damage if it enters the Cube or ends its turn there or if the Cube moves into its space. A creature takes this damage only once per turn.On your later turns, you can take a Magic action to teleport the Cube up to 30 feet.",
        },
        upgrade: {
          en: "The damage increases by 2d4 for each spell slot level above 2.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Incendiary Cloud",
      level: 8,
      name: {
        en: "Incendiary Cloud",
        it: "Nube Incendiaria",
      },
      range: {
        type: "distance",
        imperial: {
          value: 150,
          unit: "ft",
        },
        metric: {
          value: 45,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 288,
      },
      text: {
        base: {
          en: "A swirling cloud of embers and smoke fills a 20-foot-radius Sphere centered on a point within range. The cloud's area is Heavily Obscured. It lasts for the duration or until a strong wind (like that created by Gust of Wind) disperses it.When the cloud appears, each creature in it makes a Dexterity saving throw, taking 10d8 Fire damage on a failed save or half as much damage on a successful one. A creature must also make this save when the Sphere moves into its space and when it enters the Sphere or ends its turn there. A creature makes this save only once per turn.The cloud moves 10 feet away from you in a direction you choose at the start of each of your turns.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Stinking Cloud",
      level: 3,
      materials: {
        en: "a rotten egg",
        it: "un uovo marcio",
      },
      name: {
        en: "Stinking Cloud",
        it: "Nube Maleodorante",
      },
      range: {
        type: "distance",
        imperial: {
          value: 90,
          unit: "ft",
        },
        metric: {
          value: 27,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 321,
      },
      text: {
        base: {
          en: "You create a 20-foot-radius Sphere of yellow, nauseating gas centered on a point within range. The cloud is Heavily Obscured. The cloud lingers in the air for the duration or until a strong wind (such as the one created by Gust of Wind) disperses it.Each creature that starts its turn in the Sphere must succeed on a Constitution saving throw or have the Poisoned condition until the end of the current turn. While Poisoned in this way, the creature can't take an action or a Bonus Action.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Cloudkill",
      level: 5,
      name: {
        en: "Cloudkill",
        it: "Nube Mortale",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 251,
      },
      text: {
        base: {
          en: "You create a 20-foot-radius Sphere of yellow-green fog centered on a point within range. The fog lasts for the duration or until strong wind (such as the one created by Gust of Wind) disperses it, ending the spell. Its area is Heavily Obscured.Each creature in the Sphere makes a Constitution saving throw, taking 5d8 Poison damage on a failed save or half as much damage on a successful one. A creature must also make this save when the Sphere moves into its space and when it enters the Sphere or ends its turn there. A creature makes this save only once per turn.The Sphere moves 10 feet away from you at the start of each of your turns.",
        },
        upgrade: {
          en: "The damage increases by 1d8 for each spell slot level above 5.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Arcane Eye",
      level: 4,
      materials: {
        en: "a bit of bat fur",
        it: "un ciuffo di peli di pipistrello",
      },
      name: {
        en: "Arcane Eye",
        it: "Occhio Arcano",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 242,
      },
      text: {
        base: {
          en: "You create an Invisible, invulnerable eye within range that hovers for the duration. You mentally receive visual information from the eye, which can see in every direction. It also has Darkvision with a range of 30 feet.As a Bonus Action, you can move the eye up to 30 feet in any direction. A solid barrier blocks the eye's movement, but the eye can pass through an opening as small as 1 inch in diameter.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["paladin"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Destructive Wave",
      level: 5,
      name: {
        en: "Destructive Wave",
        it: "Onda Distruttiva",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 261,
      },
      text: {
        base: {
          en: "Destructive energy ripples outward from you in a 30-foot Emanation. Each creature you choose in the Emanation makes a Constitution saving throw. On a failed save, a target takes 5d6 Thunder damage and 5d6 Radiant or Necrotic damage (your choice) and has the Prone condition. On a successful save, a target takes half as much damage only.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "druid", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Thunderwave",
      level: 1,
      name: {
        en: "Thunderwave",
        it: "Onda Tonante",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 334,
      },
      text: {
        base: {
          en: "You unleash a wave of thunderous energy. Each creature in a 15-foot Cube originating from you makes a Constitution saving throw. On a failed save, a creature takes 2d8 Thunder damage and is pushed 10 feet away from you. On a successful save, a creature takes half as much damage only.In addition, unsecured objects that are entirely within the Cube are pushed 10 feet away from you, and a thunderous boom is audible within 300 feet.",
        },
        upgrade: {
          en: "The damage increases by 1d8 for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Darkness",
      level: 2,
      materials: {
        en: "bat fur and a piece of coal",
        it: "pelo di pipistrello e un pezzo di carbone",
      },
      name: {
        en: "Darkness",
        it: "Oscurità",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 260,
      },
      text: {
        base: {
          en: "For the duration, magical Darkness spreads from a point within range and fills a 15-foot-radius Sphere. Darkvision can't see through it, and nonmagical light can't illuminate it.Alternatively, you cast the spell on an object that isn't being worn or carried, causing the Darkness to fill a 15-foot Emanation originating from that object. Covering that object with something opaque, such as a bowl or helm, blocks the Darkness.If any of this spell's area overlaps with an area of Bright Light or Dim Light created by a spell of level 2 or lower, that other spell is dispelled.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Fireball",
      level: 3,
      materials: {
        en: "a ball of bat guano and sulfur",
        it: "una pallina di guano di pipistrello e zolfo",
      },
      name: {
        en: "Fireball",
        it: "Palla di Fuoco",
      },
      range: {
        type: "distance",
        imperial: {
          value: 150,
          unit: "ft",
        },
        metric: {
          value: 45,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 274,
      },
      text: {
        base: {
          en: "A bright streak flashes from you to a point you choose within range and then blossoms with a low roar into a fiery explosion. Each creature in a 20-foot-radius Sphere centered on that point makes a Dexterity saving throw, taking 8d6 Fire damage on a failed save or half as much damage on a successful one.Flammable objects in the area that aren't being worn or carried start burning.",
        },
        upgrade: {
          en: "The damage increases by 1d6 for each spell slot level above 3.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Delayed Blast Fireball",
      level: 7,
      materials: {
        en: "a ball of bat guano and sulfur",
        it: "una pallina di guano di pipistrello e zolfo",
      },
      name: {
        en: "Delayed Blast Fireball",
        it: "Palla di Fuoco Ritardata",
      },
      range: {
        type: "distance",
        imperial: {
          value: 150,
          unit: "ft",
        },
        metric: {
          value: 45,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 261,
      },
      text: {
        base: {
          en: "A beam of yellow light flashes from you, then condenses at a chosen point within range as a glowing bead for the duration. When the spell ends, the bead explodes, and each creature in a 20-foot-radius Sphere centered on that point makes a Dexterity saving throw. A creature takes Fire damage equal to the total accumulated damage on a failed save or half as much damage on a successful one.The spell's base damage is 12d6, and the damage increases by 1d6 whenever your turn ends and the spell hasn't ended.If a creature touches the glowing bead before the spell ends, that creature makes a Dexterity saving throw. On a failed save, the spell ends, causing the bead to explode. On a successful save, the creature can throw the bead up to 40 feet. If the thrown bead enters a creature's space or collides with a solid object, the spell ends, and the bead explodes.When the bead explodes, flammable objects in the explosion that aren't being worn or carried start burning.",
        },
        upgrade: {
          en: "The base damage increases by 1d6 for each spell slot level above 7.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "druid", "ranger", "warlock"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Speak with Animals",
      level: 1,
      name: {
        en: "Speak with Animals",
        it: "Parlare con gli Animali",
      },
      range: {
        type: "self",
      },
      ritual: true,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 318,
      },
      text: {
        base: {
          en: "For the duration, you can comprehend and verbally communicate with Beasts, and you can use any of the Influence action's skill options with them.Most Beasts have little to say about topics that don't pertain to survival or companionship, but at minimum, a Beast can give you information about nearby locations and monsters, including whatever it has perceived within the past day.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "cleric", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Speak with Dead",
      level: 3,
      materials: {
        en: "burning incense",
        it: "incenso bruciato",
      },
      name: {
        en: "Speak with Dead",
        it: "Parlare con i Morti",
      },
      range: {
        type: "distance",
        imperial: {
          value: 10,
          unit: "ft",
        },
        metric: {
          value: 3,
          unit: "m",
        },
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 318,
      },
      text: {
        base: {
          en: "You grant the semblance of life to a corpse of your choice within range, allowing it to answer questions you pose. The corpse must have a mouth, and this spell fails if the deceased creature was Undead when it died. The spell also fails if the corpse was the target of this spell within the past 10 days.Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are antagonistic toward it or it recognizes you as an enemy. This spell doesn't return the creature's soul to its body, only its animating spirit. Thus, the corpse can't learn new information, doesn't comprehend anything that has happened since it died, and can't speculate about future events.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "druid", "ranger"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Speak with Plants",
      level: 3,
      name: {
        en: "Speak with Plants",
        it: "Parlare con i Vegetali",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 319,
      },
      text: {
        base: {
          en: "You imbue plants in an immobile 30-foot Emanation with limited sentience and animation, giving them the ability to communicate with you and follow your simple commands. You can question plants about events in the spell's area within the past day, gaining information about creatures that have passed, weather, and other circumstances.You can also turn Difficult Terrain caused by plant growth (such as thickets and undergrowth) into ordinary terrain that lasts for the duration. Or you can turn ordinary terrain where plants are present into Difficult Terrain that lasts for the duration.The spell doesn't enable plants to uproot themselves and move about, but they can move their branches, tendrils, and stalks for you.If a Plant creature is in the area, you can communicate with it as if you shared a common language.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "cleric"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Power Word Fortify",
      level: 7,
      name: {
        en: "Power Word Fortify",
        it: "Parola del Potere Fortificare",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 306,
      },
      text: {
        base: {
          en: "You fortify up to six creatures you can see within range. The spell bestows 120 Temporary Hit Points, which you divide among the spell's recipients.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "cleric"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Power Word Heal",
      level: 9,
      name: {
        en: "Power Word Heal",
        it: "Parola del Potere Guarire",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 306,
      },
      text: {
        base: {
          en: "A wave of healing energy washes over one creature you can see within range. The target regains all its Hit Points. If the creature has the Charmed, Frightened, Paralyzed, Poisoned, or Stunned condition, the condition ends. If the creature has the Prone condition, it can use its Reaction to stand up.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Power Word Stun",
      level: 8,
      name: {
        en: "Power Word Stun",
        it: "Parola del Potere Stordire",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 306,
      },
      text: {
        base: {
          en: "You overwhelm the mind of one creature you can see within range. If the target has 150 Hit Points or fewer, it has the Stunned condition. Otherwise, its Speed is 0 until the start of your next turn.The Stunned target makes a Constitution saving throw at the end of each of its turns, ending the condition on itself on a success.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Power Word Kill",
      level: 9,
      name: {
        en: "Power Word Kill",
        it: "Parola del Potere Uccidere",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 306,
      },
      text: {
        base: {
          en: "You compel one creature you can see within range to die. If the target has 100 Hit Points or fewer, it dies. Otherwise, it takes 12d12 Psychic damage.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Word of Recall",
      level: 6,
      name: {
        en: "Word of Recall",
        it: "Parola del Ritiro",
      },
      range: {
        type: "distance",
        imperial: {
          value: 5,
          unit: "ft",
        },
        metric: {
          value: 1.5,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 343,
      },
      text: {
        base: {
          en: "You and up to five willing creatures within 5 feet of you instantly teleport to a previously designated sanctuary. You and any creatures that teleport with you appear in the nearest unoccupied space to the spot you designated when you prepared your sanctuary (see below). If you cast this spell without first preparing a sanctuary, the spell has no effect.You must designate a location, such as a temple, as a sanctuary by casting this spell there.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["cleric"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Divine Word",
      level: 7,
      name: {
        en: "Divine Word",
        it: "Parola Divina",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 265,
      },
      text: {
        base: {
          en: "You utter a word imbued with power from the Upper Planes. Each creature of your choice in range makes a Charisma saving throw. On a failed save, a target that has 50 Hit Points or fewer suffers an effect based on its current Hit Points, as shown in the Divine Word Effects table. Regardless of its Hit Points, a Celestial, an Elemental, a Fey, or a Fiend target that fails its save is forced back to its plane of origin (if it isn't there already) and can't return to the current plane for 24 hours by any means short of a Wish spell.Divine Word EffectsHit PointsEffect0-20The target dies.21-30The target has the Blinded, Deafened, and Stunned conditions for 1 hour.31-40The target has the Blinded and Deafened conditions for 10 minutes.41-50The target has the Deafened condition for 1 minute.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["bard", "cleric", "druid"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Healing Word",
      level: 1,
      name: {
        en: "Healing Word",
        it: "Parola Guaritrice",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 284,
      },
      text: {
        base: {
          en: "A creature of your choice that you can see within range regains Hit Points equal to 2d4 plus your spellcasting ability modifier.",
        },
        upgrade: {
          en: "The healing increases by 2d4 for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["bard", "cleric"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Mass Healing Word",
      level: 3,
      name: {
        en: "Mass Healing Word",
        it: "Parola Guaritrice di Massa",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 296,
      },
      text: {
        base: {
          en: "Up to six creatures of your choice that you can see within range regain Hit Points equal to 2d4 plus your spellcasting ability modifier.",
        },
        upgrade: {
          en: "The healing increases by 1d4 for each spell slot level above 3.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric"],
      concentration: false,
      components: {
        m: true,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Word of Radiance",
      level: 0,
      materials: {
        en: "a sunburst token",
        it: "un gettone di esplosione solare",
      },
      name: {
        en: "Word of Radiance",
        it: "Parola Radiosa",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 343,
      },
      text: {
        base: {
          en: "Burning radiance erupts from you in a 5-foot Emanation. Each creature of your choice that you can see in it must succeed on a Constitution saving throw or take 1d6 Radiant damage.",
        },
        upgrade: {
          en: "The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Passwall",
      level: 5,
      materials: {
        en: "a pinch of sesame seeds",
        it: "un pizzico di semi di sesamo",
      },
      name: {
        en: "Passwall",
        it: "Passapareti",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 304,
      },
      text: {
        base: {
          en: "A passage appears at a point that you can see on a wooden, plaster, or stone surface (such as a wall, ceiling, or floor) within range and lasts for the duration. You choose the opening's dimensions: up to 5 feet wide, 8 feet tall, and 20 feet deep. The passage creates no instability in a structure surrounding it.When the opening disappears, any creatures or objects still in the passage created by the spell are safely ejected to an unoccupied space nearest to the surface on which you cast the spell.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "ranger"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Pass without Trace",
      level: 2,
      materials: {
        en: "ashes from burned mistletoe",
        it: "ceneri di vischio bruciato",
      },
      name: {
        en: "Pass without Trace",
        it: "Passare Senza Tracce",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 303,
      },
      text: {
        base: {
          en: "You radiate a concealing aura in a 30-foot Emanation for the duration. While in the aura, you and each creature you choose have a +10 bonus to Dexterity (Stealth) checks and leave no tracks.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Misty Step",
      level: 2,
      name: {
        en: "Misty Step",
        it: "Passo Velato",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 299,
      },
      text: {
        base: {
          en: "Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space you can see.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "bard", "druid", "ranger", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Longstrider",
      level: 1,
      materials: {
        en: "a pinch of dirt",
        it: "un pizzico di terriccio",
      },
      name: {
        en: "Longstrider",
        it: "Passo Veloce",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 293,
      },
      text: {
        base: {
          en: "You touch a creature. The target's Speed increases by 10 feet until the spell ends.",
        },
        upgrade: {
          en: "You can target one additional creature for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Fear",
      level: 3,
      materials: {
        en: "a white feather",
        it: "una piuma bianca",
      },
      name: {
        en: "Fear",
        it: "Paura",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 271,
      },
      text: {
        base: {
          en: "Each creature in a 30-foot Cone must succeed on a Wisdom saving throw or drop whatever it is holding and have the Frightened condition for the duration.A Frightened creature takes the Dash action and moves away from you by the safest route on each of its turns unless there is nowhere to move. If the creature ends its turn in a space where it doesn't have line of sight to you, the creature makes a Wisdom saving throw. On a successful save, the spell ends on that creature.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["druid", "ranger"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Barkskin",
      level: 2,
      materials: {
        en: "a handful of oak bark",
        it: "un pezzo di corteccia",
      },
      name: {
        en: "Barkskin",
        it: "Pelle Coriacea",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 245,
      },
      text: {
        base: {
          en: "You touch a willing creature. Until the spell ends, the target's skin assumes a bark-like appearance, and the target has an Armor Class of 17 if its AC is lower than that.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "druid", "ranger", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Stoneskin",
      level: 4,
      materials: {
        en: "diamond dust worth 100+ GP, which the spell consumes",
        it: "polvere di diamante del valore di 100 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Stoneskin",
        it: "Pelle di Pietra",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 321,
      },
      text: {
        base: {
          en: "Until the spell ends, one willing creature you touch has Resistance to Bludgeoning, Piercing, and Slashing damage.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "ranger"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: false,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Beast Sense",
      level: 2,
      name: {
        en: "Beast Sense",
        it: "Percezione delle Bestie",
      },
      range: {
        type: "touch",
      },
      ritual: true,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 245,
      },
      text: {
        base: {
          en: "You touch a willing Beast. For the duration, you can perceive through the Beast's senses as well as your own. When perceiving through the Beast's senses, you benefit from any special senses it has.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "druid", "sorcerer"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Insect Plague",
      level: 5,
      materials: {
        en: "a locust",
        it: "una locusta",
      },
      name: {
        en: "Insect Plague",
        it: "Piaga degli Insetti",
      },
      range: {
        type: "distance",
        imperial: {
          value: 300,
          unit: "ft",
        },
        metric: {
          value: 90,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 289,
      },
      text: {
        base: {
          en: "Swarming locusts fill a 20-foot-radius Sphere centered on a point you choose within range. The Sphere remains for the duration, and its area is Lightly Obscured and Difficult Terrain.When the swarm appears, each creature in it makes a Constitution saving throw, taking 4d10 Piercing damage on a failed save or half as much damage on a successful one. A creature also makes this save when it enters the spell's area for the first time on a turn or ends its turn there. A creature makes this save only once per turn.",
        },
        upgrade: {
          en: "The damage increases by 1d10 for each spell slot level above 5.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Dimension Door",
      level: 4,
      name: {
        en: "Dimension Door",
        it: "Porta Dimensionale",
      },
      range: {
        type: "distance",
        imperial: {
          value: 500,
          unit: "ft",
        },
        metric: {
          value: 150,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 262,
      },
      text: {
        base: {
          en: 'You teleport to a location within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as "200 feet straight downward" or "300 feet upward to the northwest at a 45-degree angle."You can also teleport one willing creature. The creature must be within 5 feet of you when you teleport, and it teleports to a space within 5 feet of your destination space.If you, the other creature, or both would arrive in a space occupied by a creature or completely filled by one or more objects, you and any creature traveling with you each take 4d6 Force damage, and the teleportation fails.',
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Gate",
      level: 9,
      materials: {
        en: "a diamond worth 5,000+ GP",
        it: "un diamante del valore di 5.000 mo o più",
      },
      name: {
        en: "Gate",
        it: "Portale",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 277,
      },
      text: {
        base: {
          en: "You conjure a portal linking an unoccupied space you can see within range to a precise location on a different plane of existence. The portal is a circular opening, which you can make 5 to 20 feet in diameter. You can orient the portal in any direction you choose. The portal lasts for the duration, and the portal's destination is visible through it.The portal has a front and a back on each plane where it appears. Travel through the portal is possible only by moving through its front. Anything that does so is instantly transported to the other plane, appearing in the unoccupied space nearest to the portal.Deities and other planar rulers can prevent portals created by this spell from opening in their presence or anywhere within their domains.When you cast this spell, you can speak the name of a specific creature (a pseudonym, title, or nickname doesn't work). If that creature is on a plane other than the one you are on, the portal opens next to the named creature and transports it to the nearest unoccupied space on your side of the portal. You gain no special power over the creature, and it is free to act as the DM deems appropriate. It might leave, attack you, or help you.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Arcane Gate",
      level: 6,
      name: {
        en: "Arcane Gate",
        it: "Portale Arcano",
      },
      range: {
        type: "distance",
        imperial: {
          value: 500,
          unit: "ft",
        },
        metric: {
          value: 150,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 242,
      },
      text: {
        base: {
          en: "You create linked teleportation portals. Choose two Large, unoccupied spaces on the ground that you can see, one space within range and the other one within 10 feet of you. A circular portal opens in each of those spaces and remains for the duration.The portals are two-dimensional glowing rings filled with mist that blocks sight. They hover inches from the ground and are perpendicular to it.A portal is open on only one side (you choose which). Anything entering the open side of a portal exits from the open side of the other portal as if the two were adjacent to each other. As a Bonus Action, you can change the facing of the open sides.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 10,
        unit: "minute",
      },
      classes: ["cleric", "paladin"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Prayer of Healing",
      level: 2,
      name: {
        en: "Prayer of Healing",
        it: "Preghiera di Guarigione",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 307,
      },
      text: {
        base: {
          en: "Up to five creatures of your choice who remain within range for the spell's entire casting gain the benefits of a Short Rest and also regain 2d8 Hit Points. A creature can't be affected by this spell again until that creature finishes a Long Rest.",
        },
        upgrade: {
          en: "The healing increases by 1d8 for each spell slot level above 2.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["cleric", "druid", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Augury",
      level: 2,
      materials: {
        en: "specially marked sticks, bones, cards, or other divinatory tokens worth 25+ GP",
        it: "bastoncini, ossa, carte o altri oggetti da divinazione dotati di contrassegni speciali, del valore di 25 mo o più",
      },
      name: {
        en: "Augury",
        it: "Presagio",
      },
      range: {
        type: "self",
      },
      ritual: true,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 244,
      },
      text: {
        base: {
          en: "You receive an omen from an otherworldly entity about the results of a course of action that you plan to take within the next 30 minutes. The DM chooses the omen from the Omens table.OmensOmenFor Results That Will Be...WealGoodWoeBadWeal and woeGood and badIndifferenceNeither good nor badThe spell doesn't account for circumstances, such as other spells, that might change the results.If you cast the spell more than once before finishing a Long Rest, there is a cumulative 25 percent chance for each casting after the first that you get no answer.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Yolande's Regal Presence",
      level: 5,
      materials: {
        en: "a miniature tiara",
        it: "una tiara in miniatura",
      },
      name: {
        en: "Yolande's Regal Presence",
        it: "Presenza Regale di Yolande",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 343,
      },
      text: {
        base: {
          en: "You surround yourself with unearthly majesty in a 10-foot Emanation. Whenever the Emanation enters the space of a creature you can see and whenever a creature you can see enters the Emanation or ends its turn there, you can force that creature to make a Wisdom saving throw. On a failed save, the target takes 4d6 Psychic damage and has the Prone condition, and you can push it up to 10 feet away. On a successful save, the target takes half as much damage only. A creature makes this save only once per turn.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "bard", "sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Prestidigitation",
      level: 0,
      name: {
        en: "Prestidigitation",
        it: "Prestidigitazione",
      },
      range: {
        type: "distance",
        imperial: {
          value: 10,
          unit: "ft",
        },
        metric: {
          value: 3,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 307,
      },
      text: {
        base: {
          en: "You create a magical effect within range. Choose the effect from the options below. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time. Sensory Effect. You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor. Fire Play. You instantaneously light or snuff out a candle, a torch, or a small campfire. Clean or Soil. You instantaneously clean or soil an object no larger than 1 cubic foot. Minor Sensation. You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour. Magic Mark. You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour. Minor Creation. You create a nonmagical trinket or an illusory image that can fit in your hand. It lasts until the end of your next turn. A trinket can deal no damage and has no monetary worth.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["bard", "druid", "warlock", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 8,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Foresight",
      level: 9,
      materials: {
        en: "a hummingbird feather",
        it: "una piuma di colibrì",
      },
      name: {
        en: "Foresight",
        it: "Previsione",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 276,
      },
      text: {
        base: {
          en: "You touch a willing creature and bestow a limited ability to see into the immediate future. For the duration, the target has Advantage on D20 Tests, and other creatures have Disadvantage on attack rolls against it. The spell ends early if you cast it again.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["druid"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Produce Flame",
      level: 0,
      name: {
        en: "Produce Flame",
        it: "Produrre Fiamma",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 308,
      },
      text: {
        base: {
          en: "A flickering flame appears in your hand and remains there for the duration. While there, the flame emits no heat and ignites nothing, and it sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet. The spell ends if you cast it again.Until the spell ends, you can take a Magic action to hurl fire at a creature or an object within 60 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 Fire damage.",
        },
        upgrade: {
          en: "The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 10,
        unit: "minute",
      },
      classes: ["cleric"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "day",
        upTo: false,
      },
      id: "PHB'24/Forbiddance",
      level: 6,
      materials: {
        en: "ruby dust worth 1,000+ GP",
        it: "polvere di rubino del valore di 1.000 mo o più",
      },
      name: {
        en: "Forbiddance",
        it: "Proibizione",
      },
      range: {
        type: "touch",
      },
      ritual: true,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 276,
      },
      text: {
        base: {
          en: "You create a ward against magical travel that protects up to 40,000 square feet of floor space to a height of 30 feet above the floor. For the duration, creatures can't teleport into the area or use portals, such as those created by the Gate spell, to enter the area. The spell proofs the area against planar travel, and therefore prevents creatures from accessing the area by way of the Astral Plane, the Ethereal Plane, the Feywild, the Shadowfell, or the Plane Shift spell.In addition, the spell damages types of creatures that you choose when you cast it. Choose one or more of the following: Aberrations, Celestials, Elementals, Fey, Fiends, and Undead. When a creature of a chosen type enters the spell's area for the first time on a turn or ends its turn there, the creature takes 5d10 Radiant or Necrotic damage (your choice when you cast this spell).You can designate a password when you cast the spell. A creature that speaks the password as it enters the area takes no damage from the spell.The spell's area can't overlap with the area of another Forbiddance spell. If you cast Forbiddance every day for 30 days in the same location, the spell lasts until it is dispelled, and the Material components are consumed on the last casting.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "hour",
      },
      classes: ["cleric", "warlock", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "until_dispelled",
      },
      id: "PHB'24/Astral Projection",
      level: 9,
      materials: {
        en: "for each of the spell's targets, one jacinth worth 1,000+ GP and one silver bar worth 100+ GP, all of which the spell consumes",
        it: "per ogni bersaglio dell'incantesimo, l'incantatore deve possedere un giacinto del valore di 1.000 mo o più e un lingotto d'argento del valore di 100 mo o più; l'incantesimo consuma entrambi",
      },
      name: {
        en: "Astral Projection",
        it: "Proiezione Astrale",
      },
      range: {
        type: "distance",
        imperial: {
          value: 10,
          unit: "ft",
        },
        metric: {
          value: 3,
          unit: "m",
        },
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 243,
      },
      text: {
        base: {
          en: "You and up to eight willing creatures within range project your astral bodies into the Astral Plane (the spell ends instantly if you are already on that plane). Each target's body is left behind in a state of suspended animation; it has the Unconscious condition, doesn't need food or air, and doesn't age.A target's astral form resembles its body in almost every way, replicating its game statistics and possessions. The principal difference is the addition of a silvery cord that trails from between the shoulder blades of the astral form. The cord fades from view after 1 foot. If the cord is cut—which happens only when an effect states that it does so—the target's body and astral form both die.A target's astral form can travel through the Astral Plane. The moment an astral form leaves that plane, the target's body and possessions travel along the silver cord, causing the target to re-enter its body on the new plane.Any damage or other effects that apply to an astral form have no effect on the target's body and vice versa. If a target's body or astral form drops to 0 Hit Points, the spell ends for that target. The spell ends for all the targets if you take a Magic action to dismiss it.When the spell ends for a target who isn't dead, the target reappears in its body and exits the state of suspended animation.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "cleric", "druid", "paladin", "ranger"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Protection from Poison",
      level: 2,
      name: {
        en: "Protection from Poison",
        it: "Protezione dai Veleni",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 310,
      },
      text: {
        base: {
          en: "You touch a creature and end the Poisoned condition on it. For the duration, the target has Advantage on saving throws to avoid or end the Poisoned condition, and it has Resistance to Poison damage.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "druid", "paladin", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Protection from Evil and Good",
      level: 1,
      materials: {
        en: "a flask of Holy Water worth 25+ GP, which the spell consumes",
        it: "un'ampolla di acqua santa del valore di 25 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Protection from Evil and Good",
        it: "Protezione dal Bene e dal Male",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 309,
      },
      text: {
        base: {
          en: "Until the spell ends, one willing creature you touch is protected against creatures that are Aberrations, Celestials, Elementals, Fey, Fiends, or Undead. The protection grants several benefits. Creatures of those types have Disadvantage on attack rolls against the target. The target also can't be possessed by or gain the Charmed or Frightened conditions from them. If the target is already possessed, Charmed, or Frightened by such a creature, the target has Advantage on any new saving throw against the relevant effect.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "cleric", "druid", "ranger", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Protection from Energy",
      level: 3,
      name: {
        en: "Protection from Energy",
        it: "Protezione dall'Energia",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 309,
      },
      text: {
        base: {
          en: "For the duration, the willing creature you touch has Resistance to one damage type of your choice: Acid, Cold, Fire, Lightning, or Thunder.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["paladin"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Blinding Smite",
      level: 3,
      name: {
        en: "Blinding Smite",
        it: "Punizione Accecante",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 247,
      },
      text: {
        base: {
          en: "The target hit by the strike takes an extra 3d8 Radiant damage from the attack, and the target has the Blinded condition until the spell ends. At the end of each of its turns, the Blinded target makes a Constitution saving throw, ending the spell on itself on a success.",
        },
        upgrade: {
          en: "The extra damage increases by 1d8 for each spell slot level above 3.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["paladin"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Wrathful Smite",
      level: 1,
      name: {
        en: "Wrathful Smite",
        it: "Punizione Collerica",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 343,
      },
      text: {
        base: {
          en: "The target takes an extra 1d6 Necrotic damage from the attack, and it must succeed on a Wisdom saving throw or have the Frightened condition until the spell ends. At the end of each of its turns, the Frightened target repeats the save, ending the spell on itself on a success.",
        },
        upgrade: {
          en: "The damage increases by 1d6 for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["paladin"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Staggering Smite",
      level: 4,
      name: {
        en: "Staggering Smite",
        it: "Punizione Demoralizzante",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 320,
      },
      text: {
        base: {
          en: "The target takes an extra 4d6 Psychic damage from the attack, and the target must succeed on a Wisdom saving throw or have the Stunned condition until the end of your next turn.",
        },
        upgrade: {
          en: "The extra damage increases by 1d6 for each spell slot level above 4.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["paladin"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Divine Smite",
      level: 1,
      name: {
        en: "Divine Smite",
        it: "Punizione Divina",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 265,
      },
      text: {
        base: {
          en: "The target takes an extra 2d8 Radiant damage from the attack. The damage increases by 1d8 if the target is a Fiend or an Undead.",
        },
        upgrade: {
          en: "The damage increases by 1d8 for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["paladin"],
      concentration: true,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Banishing Smite",
      level: 5,
      name: {
        en: "Banishing Smite",
        it: "Punizione Esiliante",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 245,
      },
      text: {
        base: {
          en: "The target hit by the attack roll takes an extra 5d10 Force damage from the attack. If the attack reduces the target to 50 Hit Points or fewer, the target must succeed on a Charisma saving throw or be transported to a harmless demiplane for the duration. While there, the target has the Incapacitated condition. When the spell ends, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["paladin"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Searing Smite",
      level: 1,
      name: {
        en: "Searing Smite",
        it: "Punizione Incandescente",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 314,
      },
      text: {
        base: {
          en: "As you hit the target, it takes an extra 1d6 Fire damage from the attack. At the start of each of its turns until the spell ends, the target takes 1d6 Fire damage and then makes a Constitution saving throw. On a failed save, the spell continues. On a successful save, the spell ends.",
        },
        upgrade: {
          en: "All the damage increases by 1d6 for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["paladin"],
      concentration: true,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Shining Smite",
      level: 2,
      name: {
        en: "Shining Smite",
        it: "Punizione Splendente",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 316,
      },
      text: {
        base: {
          en: "The target hit by the strike takes an extra 2d6 Radiant damage from the attack. Until the spell ends, the target sheds Bright Light in a 5-foot radius, attack rolls against it have Advantage, and it can't benefit from the Invisible condition.",
        },
        upgrade: {
          en: "The damage increases by 1d6 for each spell slot level above 2.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["paladin"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Thunderous Smite",
      level: 1,
      name: {
        en: "Thunderous Smite",
        it: "Punizione Tonante",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 334,
      },
      text: {
        base: {
          en: "Your strike rings with thunder that is audible within 300 feet of you, and the target takes an extra 2d6 Thunder damage from the attack. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and have the Prone condition.",
        },
        upgrade: {
          en: "The damage increases by 1d6 for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "cleric", "druid", "paladin"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Purify Food and Drink",
      level: 1,
      name: {
        en: "Purify Food and Drink",
        it: "Purificare Cibo e Bevande",
      },
      range: {
        type: "distance",
        imperial: {
          value: 10,
          unit: "ft",
        },
        metric: {
          value: 3,
          unit: "m",
        },
      },
      ritual: true,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 310,
      },
      text: {
        base: {
          en: "You remove poison and rot from nonmagical food and drink in a 5-foot-radius Sphere centered on a point within range.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["ranger"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Hail of Thorns",
      level: 1,
      name: {
        en: "Hail of Thorns",
        it: "Raffica di Spine",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 283,
      },
      text: {
        base: {
          en: "As you hit the creature, this spell creates a rain of thorns that sprouts from your Ranged weapon or ammunition. The target of the attack and each creature within 5 feet of it make a Dexterity saving throw, taking 1d10 Piercing damage on a failed save or half as much damage on a successful one.",
        },
        upgrade: {
          en: "The damage increases by 1d10 for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["warlock", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Ray of Enfeeblement",
      level: 2,
      name: {
        en: "Ray of Enfeeblement",
        it: "Raggio di Affaticamento",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 311,
      },
      text: {
        base: {
          en: "A beam of enervating energy shoots from you toward a creature within range. The target must make a Constitution saving throw. On a successful save, the target has Disadvantage on the next attack roll it makes until the start of your next turn.On a failed save, the target has Disadvantage on Strength-based D20 Tests for the duration. During that time, it also subtracts 1d8 from all its damage rolls. The target repeats the save at the end of each of its turns, ending the spell on a success.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Ray of Frost",
      level: 0,
      name: {
        en: "Ray of Frost",
        it: "Raggio di Gelo",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 311,
      },
      text: {
        base: {
          en: "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 Cold damage, and its Speed is reduced by 10 feet until the start of your next turn.",
        },
        upgrade: {
          en: "The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Ray of Sickness",
      level: 1,
      name: {
        en: "Ray of Sickness",
        it: "Raggio di Infermità",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 311,
      },
      text: {
        base: {
          en: "You shoot a greenish ray at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 Poison damage and has the Poisoned condition until the end of your next turn.",
        },
        upgrade: {
          en: "The damage increases by 1d8 for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Scorching Ray",
      level: 2,
      name: {
        en: "Scorching Ray",
        it: "Raggio Rovente",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 313,
      },
      text: {
        base: {
          en: "You hurl three fiery rays. You can hurl them at one target within range or at several. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 Fire damage.",
        },
        upgrade: {
          en: "You create one additional ray for each spell slot level above 2.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Web",
      level: 2,
      materials: {
        en: "a bit of spiderweb",
        it: "un frammento di ragnatela comune",
      },
      name: {
        en: "Web",
        it: "Ragnatela",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 340,
      },
      text: {
        base: {
          en: "You conjure a mass of sticky webbing at a point within range. The webs fill a 20-foot Cube there for the duration. The webs are Difficult Terrain, and the area within them is Lightly Obscured.If the webs aren't anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet.The first time a creature enters the webs on a turn or starts its turn there, it must succeed on a Dexterity saving throw or have the Restrained condition while in the webs or until it breaks free.A creature Restrained by the webs can take an action to make a Strength (Athletics) check against your spell save DC. If it succeeds, it is no longer Restrained.The webs are flammable. Any 5-foot Cube of webs exposed to fire burns away in 1 round, dealing 2d4 Fire damage to any creature that starts its turn in the fire.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["druid", "ranger"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Grasping Vine",
      level: 4,
      name: {
        en: "Grasping Vine",
        it: "Rampicante Afferrante",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 280,
      },
      text: {
        base: {
          en: "You conjure a vine that sprouts from a surface in an unoccupied space that you can see within range. The vine lasts for the duration.Make a melee spell attack against a creature within 30 feet of the vine. On a hit, the target takes 4d8 Bludgeoning damage and is pulled up to 30 feet toward the vine; if the target is Huge or smaller, it has the Grappled condition (escape DC equal to your spell save DC). The vine can grapple only one creature at a time, and you can cause the vine to release a Grappled creature (no action required).As a Bonus Action on your later turns, you can repeat the attack against a creature within 30 feet of the vine.",
        },
        upgrade: {
          en: "The number of creatures the vine can grapple increases by one for each spell slot level above 4.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["druid"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Shillelagh",
      level: 0,
      materials: {
        en: "mistletoe",
      },
      name: {
        en: "Shillelagh",
        it: "Randello Incantato",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 316,
      },
      text: {
        base: {
          en: "A Club or Quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. If the attack deals damage, it can be Force damage or the weapon's normal damage type (your choice).The spell ends early if you cast it again or if you let go of the weapon.",
        },
        upgrade: {
          en: "The damage die changes when you reach levels 5 (d10), 11 (d12), and 17 (2d6).",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["bard", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 24,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Mordenkainen's Magnificent Mansion",
      level: 7,
      materials: {
        en: "a miniature door worth 15+ GP",
        it: "una miniatura di una porta del valore di 15 mo o più",
      },
      name: {
        en: "Mordenkainen's Magnificent Mansion",
        it: "Reggia Meravigliosa di Mordekainen",
      },
      range: {
        type: "distance",
        imperial: {
          value: 300,
          unit: "ft",
        },
        metric: {
          value: 90,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 300,
      },
      text: {
        base: {
          en: "You conjure a shimmering door in range that lasts for the duration. The door leads to an extradimensional dwelling and is 5 feet wide and 10 feet tall. You and any creature you designate when you cast the spell can enter the extradimensional dwelling as long as the door remains open. You can open or close it (no action required) if you are within 30 feet of it. While closed, the door is imperceptible.Beyond the door is a magnificent foyer with numerous chambers beyond. The dwelling's atmosphere is clean, fresh, and warm.You can create any floor plan you like for the dwelling, but it can't exceed 50 contiguous 10-foot Cubes. The place is furnished and decorated as you choose. It contains sufficient food to serve a nine-course banquet for up to 100 people. Furnishings and other objects created by this spell dissipate into smoke if removed from it.A staff of 100 near-transparent servants attends all who enter. You determine the appearance of these servants and their attire. They are invulnerable and obey your commands. Each servant can perform tasks that a human could perform, but they can't attack or take any action that would directly harm another creature. Thus the servants can fetch things, clean, mend, fold clothes, light fires, serve food, pour wine, and so on. The servants can't leave the dwelling.When the spell ends, any creatures or objects left inside the extradimensional space are expelled into the unoccupied spaces nearest to the entrance.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "hour",
      },
      classes: ["druid"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Reincarnate",
      level: 5,
      materials: {
        en: "rare oils worth 1,000+ GP, which the spell consumes",
        it: "oli rari del valore di 1.000 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Reincarnate",
        it: "Reincarnazione",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 311,
      },
      text: {
        base: {
          en: "You touch a dead Humanoid or a piece of one. If the creature has been dead no longer than 10 days, the spell forms a new body for it and calls the soul to enter that body. Roll 1d10 and consult the table below to determine the body's species, or the DM chooses another playable species.1d10Species1Aasimar2Dragonborn3Dwarf4Elf5Gnome6Goliath7Halfling8Human9Orc10TieflingThe reincarnated creature makes any choices that a species' description offers, and the creature recalls its former life. It retains the capabilities it had in its original form, except it loses the traits of its previous species and gains the traits of its new one.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "cleric", "druid"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Resistance",
      level: 0,
      name: {
        en: "Resistance",
        it: "Resistenza",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 312,
      },
      text: {
        base: {
          en: "You touch a willing creature and choose a damage type: Acid, Bludgeoning, Cold, Fire, Lightning, Necrotic, Piercing, Poison, Radiant, Slashing, or Thunder. When the creature takes damage of the chosen type before the spell ends, the creature reduces the total damage taken by 1d4. A creature can benefit from this spell only once per turn.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "druid", "ranger", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 24,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Water Breathing",
      level: 3,
      materials: {
        en: "a short reed",
      },
      name: {
        en: "Water Breathing",
        it: "Respirare sott'Acqua",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: true,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 340,
      },
      text: {
        base: {
          en: "This spell grants up to ten willing creatures of your choice within range the ability to breathe underwater until the spell ends. Affected creatures also retain their normal mode of respiration.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "hour",
      },
      classes: ["bard", "cleric"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Resurrection",
      level: 7,
      materials: {
        en: "a diamond worth 1,000+ GP, which the spell consumes",
        it: "un diamante del valore di 1.000 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Resurrection",
        it: "Resurrezione",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 312,
      },
      text: {
        base: {
          en: "With a touch, you revive a dead creature that has been dead for no more than a century, didn't die of old age, and wasn't Undead when it died.The creature returns to life with all its Hit Points. This spell also neutralizes any poisons that affected the creature at the time of death. This spell closes all mortal wounds and restores any missing body parts.Coming back from the dead is an ordeal. The target takes a -4 penalty to D20 Tests. Every time the target finishes a Long Rest, the penalty is reduced by 1 until it becomes 0.Casting this spell to revive a creature that has been dead for 365 days or longer taxes you. Until you finish a Long Rest, you can't cast spells again, and you have Disadvantage on D20 Tests.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "hour",
      },
      classes: ["cleric", "druid"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/True Resurrection",
      level: 9,
      materials: {
        en: "diamonds worth 25,000+ GP, which the spell consumes",
        it: " diamanti del valore di 25.000 mo o più, che vengono consumati dall'incantesimo",
      },
      name: {
        en: "True Resurrection",
        it: "Resurrezione Pura",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 336,
      },
      text: {
        base: {
          en: "You touch a creature that has been dead for no longer than 200 years and that died for any reason except old age. The creature is revived with all its Hit Points.This spell closes all wounds, neutralizes any poison, cures all magical contagions, and lifts any curses affecting the creature when it died. The spell replaces damaged or missing organs and limbs. If the creature was Undead, it is restored to its non-Undead form.The spell can provide a new body if the original no longer exists, in which case you must speak the creature's name. The creature then appears in an unoccupied space you choose within 10 feet of you.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "hour",
      },
      classes: ["bard", "cleric", "paladin"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Raise Dead",
      level: 5,
      materials: {
        en: "a diamond worth 500+ GP, which the spell consumes",
        it: "un diamante del valore di 500 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Raise Dead",
        it: "Rianimare Morti",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 310,
      },
      text: {
        base: {
          en: "With a touch, you revive a dead creature if it has been dead no longer than 10 days and it wasn't Undead when it died.The creature returns to life with 1 Hit Point. This spell also neutralizes any poisons that affected the creature at the time of death.This spell closes all mortal wounds, but it doesn't restore missing body parts. If the creature is lacking body parts or organs integral for its survival—its head, for instance—the spell automatically fails.Coming back from the dead is an ordeal. The target takes a -4 penalty to D20 Tests. Every time the target finishes a Long Rest, the penalty is reduced by 1 until it becomes 0.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Summon Aberration",
      level: 4,
      materials: {
        en: "a pickled tentacle and an eyeball in a platinum-inlaid vial worth 400+ GP",
        it: "un tentacolo in salamoia e un bulbo oculare in una fiala intarsiata di platino del valore di 400 mo o più",
      },
      name: {
        en: "Summon Aberration",
        it: "Richiama Aberrazione",
      },
      range: {
        type: "distance",
        imperial: {
          value: 90,
          unit: "ft",
        },
        metric: {
          value: 27,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 322,
      },
      text: {
        base: {
          en: "You call forth an aberrant spirit. It manifests in an unoccupied space that you can see within range and uses the Aberrant Spirit stat block. When you cast the spell, choose Beholderkin, Mind Flayer, or Slaad. The creature resembles an Aberration of that kind, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.The creature is an ally to you and your allies. In combat, it shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
        },
        upgrade: {
          en: "Use the spell slot's level for the spell's level in the stat block.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "ranger"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Summon Beast",
      level: 2,
      materials: {
        en: "a feather, tuft of fur, and fish tail inside a gilded acorn worth 200+ GP",
        it: "una piuma, un ciuffo di peli e una coda di pesce all'interno di una ghianda dorata del valore di 200 mo o più",
      },
      name: {
        en: "Summon Beast",
        it: "Richiama Bestia",
      },
      range: {
        type: "distance",
        imperial: {
          value: 90,
          unit: "ft",
        },
        metric: {
          value: 27,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 322,
      },
      text: {
        base: {
          en: "You call forth a bestial spirit. It manifests in an unoccupied space that you can see within range and uses the Bestial Spirit stat block. When you cast the spell, choose an environment: Air, Land, or Water. The creature resembles an animal of your choice that is native to the chosen environment, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
        },
        upgrade: {
          en: "Use the spell slot's level for the spell's level in the stat block.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "paladin"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Summon Celestial",
      level: 5,
      materials: {
        en: "a reliquary worth 500+ GP",
        it: "un reliquiario del valore di 500 mo o più",
      },
      name: {
        en: "Summon Celestial",
        it: "Richiama Celestiale",
      },
      range: {
        type: "distance",
        imperial: {
          value: 90,
          unit: "ft",
        },
        metric: {
          value: 27,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 323,
      },
      text: {
        base: {
          en: "You call forth a Celestial spirit. It manifests in an angelic form in an unoccupied space that you can see within range and uses the Celestial Spirit stat block. When you cast the spell, choose Avenger or Defender. Your choice determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
        },
        upgrade: {
          en: "Use the spell slot's level for the spell's level in the stat block.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Summon Construct",
      level: 4,
      materials: {
        en: "a lockbox worth 400+ GP",
        it: "una cassaforte del valore di 400 mo o più",
      },
      name: {
        en: "Summon Construct",
        it: "Richiama Costrutto",
      },
      range: {
        type: "distance",
        imperial: {
          value: 90,
          unit: "ft",
        },
        metric: {
          value: 27,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 324,
      },
      text: {
        base: {
          en: "You call forth the spirit of a Construct. It manifests in an unoccupied space that you can see within range and uses the Construct Spirit stat block. When you cast the spell, choose a material: Clay, Metal, or Stone. The creature resembles an animate statue (you determine the appearance) made of the chosen material, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
        },
        upgrade: {
          en: "Use the spell slot's level for the spell's level in the stat block.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Summon Dragon",
      level: 5,
      materials: {
        en: "an object with the image of a dragon engraved on it worth 500+ GP",
        it: "un oggetto su cui è incisa l'immagine di un drago, del valore di 500 mo o più",
      },
      name: {
        en: "Summon Dragon",
        it: "Richiama Drago",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 324,
      },
      text: {
        base: {
          en: "You call forth a Dragon spirit. It manifests in an unoccupied space that you can see within range and uses the Draconic Spirit stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
        },
        upgrade: {
          en: "Use the spell slot's level for the spell's level in the stat block.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "ranger", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Summon Elemental",
      level: 4,
      materials: {
        en: "air, a pebble, ash, and water inside a gold-inlaid vial worth 400+ GP",
        it: "aria, un sassolino, cenere e acqua all'interno di una fiala intarsiata d'oro del valore di 400 mo o più",
      },
      name: {
        en: "Summon Elemental",
        it: "Richiama Elementale",
      },
      range: {
        type: "distance",
        imperial: {
          value: 90,
          unit: "ft",
        },
        metric: {
          value: 27,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 325,
      },
      text: {
        base: {
          en: "You call forth an Elemental spirit. It manifests in an unoccupied space that you can see within range and uses the Elemental Spirit stat block. When you cast the spell, choose an element: Air, Earth, Fire, or Water. The creature resembles a bipedal form wreathed in the chosen element, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
        },
        upgrade: {
          en: "Use the spell slot's level for the spell's level in the stat block.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "ranger", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Summon Fey",
      level: 3,
      materials: {
        en: "a gilded flower worth 300+ GP",
        it: "un fiore dorato del valore di 300 mo o più",
      },
      name: {
        en: "Summon Fey",
        it: "Richiama Folletto",
      },
      range: {
        type: "distance",
        imperial: {
          value: 90,
          unit: "ft",
        },
        metric: {
          value: 27,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 326,
      },
      text: {
        base: {
          en: "You call forth a Fey spirit. It manifests in an unoccupied space that you can see within range and uses the Fey Spirit stat block. When you cast the spell, choose a mood: Fuming, Mirthful, or Tricksy. The creature resembles a Fey creature of your choice marked by the chosen mood, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
        },
        upgrade: {
          en: "Use the spell slot's level for the spell's level in the stat block.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Summon Fiend",
      level: 6,
      materials: {
        en: "a bloody vial worth 600+ GP",
        it: "una fiala di sangue del valore di 600 mo o più",
      },
      name: {
        en: "Summon Fiend",
        it: "Richiama Immondo",
      },
      range: {
        type: "distance",
        imperial: {
          value: 90,
          unit: "ft",
        },
        metric: {
          value: 27,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 326,
      },
      text: {
        base: {
          en: "You call forth a fiendish spirit. It manifests in an unoccupied space that you can see within range and uses the Fiendish Spirit stat block. When you cast the spell, choose Demon, Devil, or Yugoloth. The creature resembles a Fiend of the chosen type, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
        },
        upgrade: {
          en: "Use the spell slot's level for the spell's level in the stat block.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Summon Undead",
      level: 3,
      materials: {
        en: "a gilded skull worth 300+ GP",
        it: "un teschio dorato del valore di 300 mo o più",
      },
      name: {
        en: "Summon Undead",
        it: "Richiama Non Morto",
      },
      range: {
        type: "distance",
        imperial: {
          value: 90,
          unit: "ft",
        },
        metric: {
          value: 27,
          unit: "m",
        },
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 328,
      },
      text: {
        base: {
          en: "You call forth an Undead spirit. It manifests in an unoccupied space that you can see within range and uses the Undead Spirit stat block. When you cast the spell, choose the creature's form: Ghostly, Putrid, or Skeletal. The spirit resembles an Undead creature with the chosen form, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
        },
        upgrade: {
          en: "Use the spell slot's level for the spell's level in the stat block.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["bard", "cleric", "druid"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Regenerate",
      level: 7,
      materials: {
        en: "a prayer wheel",
        it: "una ruota della preghiera",
      },
      name: {
        en: "Regenerate",
        it: "Rigenerazione",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 311,
      },
      text: {
        base: {
          en: "A creature you touch regains 4d8 + 15 Hit Points. For the duration, the target regains 1 Hit Point at the start of each of its turns, and any severed body parts regrow after 2 minutes.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "paladin", "warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Remove Curse",
      level: 3,
      name: {
        en: "Remove Curse",
        it: "Rimuovi Maledizione",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 312,
      },
      text: {
        base: {
          en: "At your touch, all curses affecting one creature or object end. If the object is a cursed magic item, its curse remains, but the spell breaks its owner's Attunement to the object so it can be removed or discarded.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "cleric", "druid", "paladin", "ranger"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Revivify",
      level: 3,
      materials: {
        en: "a diamond worth 300+ GP, which the spell consumes",
        it: "un diamante del valore di 300 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Revivify",
        it: "Rinascita",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 312,
      },
      text: {
        base: {
          en: "You touch a creature that has died within the last minute. That creature revives with 1 Hit Point. This spell can't revive a creature that has died of old age, nor does it restore any missing body parts.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Toll the Dead",
      level: 0,
      name: {
        en: "Toll the Dead",
        it: "Rintocco dei Morti",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 334,
      },
      text: {
        base: {
          en: "You point at one creature you can see within range, and the single chime of a dolorous bell is audible within 10 feet of the target. The target must succeed on a Wisdom saving throw or take 1d8 Necrotic damage. If the target is missing any of its Hit Points, it instead takes 1d12 Necrotic damage.",
        },
        upgrade: {
          en: "The damage increases by one die when you reach levels 5 (2d8 or 2d12), 11 (3d8 or 3d12), and 17 (4d8 or 4d12).",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["artificer", "bard", "cleric", "druid", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Mending",
      level: 0,
      materials: {
        en: "two lodestones",
        it: "due calamite",
      },
      name: {
        en: "Mending",
        it: "Riparare",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 297,
      },
      text: {
        base: {
          en: "This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage.This spell can physically repair a magic item, but it can't restore magic to such an object.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "paladin", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "day",
        upTo: false,
      },
      id: "PHB'24/Gentle Repose",
      level: 2,
      materials: {
        en: "2 Copper Pieces, which the spell consumes",
        it: "2 mr, che l'incantesimo consuma",
      },
      name: {
        en: "Gentle Repose",
        it: "Riposo Inviolato",
      },
      range: {
        type: "touch",
      },
      ritual: true,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 278,
      },
      text: {
        base: {
          en: "You touch a corpse or other remains. For the duration, the target is protected from decay and can't become Undead.The spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell don't count against the time limit of spells such as Raise Dead.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Tasha's Hideous Laughter",
      level: 1,
      materials: {
        en: "a tart and a feather",
        it: "una crostata e una piuma",
      },
      name: {
        en: "Tasha's Hideous Laughter",
        it: "Risata Incontenibile di Tasha",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 331,
      },
      text: {
        base: {
          en: "One creature of your choice that you can see within range makes a Wisdom saving throw. On a failed save, it has the Prone and Incapacitated conditions for the duration. During that time, it laughs uncontrollably if it's capable of laughter, and it can't end the Prone condition on itself.At the end of each of its turns and each time it takes damage, it makes another Wisdom saving throw. The target has Advantage on the save if the save is triggered by damage. On a successful save, the spell ends.",
        },
        upgrade: {
          en: "You can target one additional creature for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "bard", "druid"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Heat Metal",
      level: 2,
      materials: {
        en: "a piece of iron and a flame",
        it: "un pezzo di ferro e una fiamma",
      },
      name: {
        en: "Heat Metal",
        it: "Riscaldare il Metallo",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 284,
      },
      text: {
        base: {
          en: "Choose a manufactured metal object, such as a metal weapon or a suit of Heavy or Medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 Fire damage when you cast the spell. Until the spell ends, you can take a Bonus Action on each of your later turns to deal this damage again if the object is within range.If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can. If it doesn't drop the object, it has Disadvantage on attack rolls and ability checks until the start of your next turn.",
        },
        upgrade: {
          en: "The damage increases by 1d8 for each spell slot level above 2.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["artificer", "bard", "cleric", "druid", "paladin", "ranger"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Lesser Restoration",
      level: 2,
      name: {
        en: "Lesser Restoration",
        it: "Ristorare Inferiore",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 291,
      },
      text: {
        base: {
          en: "You touch a creature and end one condition on it: Blinded, Deafened, Paralyzed, or Poisoned.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "bard", "cleric", "druid", "paladin", "ranger"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Greater Restoration",
      level: 5,
      materials: {
        en: "diamond dust worth 100+ GP, which the spell consumes",
        it: "polvere di diamante del valore di 100 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Greater Restoration",
        it: "Ristorare Superiore",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 281,
      },
      text: {
        base: {
          en: "You touch a creature and magically remove one of the following effects from it:1 Exhaustion levelThe Charmed or Petrified conditionA curse, including the target's Attunement to a cursed magic itemAny reduction to one of the target's ability scoresAny reduction to the target's Hit Point maximum",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 8,
        unit: "hour",
      },
      classes: ["bard", "druid"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Awaken",
      level: 5,
      materials: {
        en: "an agate worth 1,000+ GP, which the spell consumes",
        it: "un'agata del valore di 1.000 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Awaken",
        it: "Risveglio",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 244,
      },
      text: {
        base: {
          en: "You spend the casting time tracing magical pathways within a precious gemstone, and then touch the target. The target must be either a Beast or Plant creature with an Intelligence of 3 or less or a natural plant that isn't a creature. The target gains an Intelligence of 10 and the ability to speak one language you know. If the target is a natural plant, it becomes a Plant creature and gains the ability to move its limbs, roots, vines, creepers, and so forth, and it gains senses similar to a human's. The DM chooses statistics appropriate for the awakened Plant, such as the statistics for the Awakened Shrub or Awakened Tree in the Monster Manual.The awakened target has the Charmed condition for 30 days or until you or your allies deal damage to it. When that condition ends, the awakened creature chooses its attitude toward you.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["artificer", "sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Expeditious Retreat",
      level: 1,
      name: {
        en: "Expeditious Retreat",
        it: "Ritirata Rapida",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 270,
      },
      text: {
        base: {
          en: "You take the Dash action, and until the spell ends, you can take that action again as a Bonus Action.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "bard", "druid", "sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: false,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Thunderclap",
      level: 0,
      name: {
        en: "Thunderclap",
        it: "Rombo di Tuono",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 333,
      },
      text: {
        base: {
          en: "Each creature in a 5-foot Emanation originating from you must succeed on a Constitution saving throw or take 1d6 Thunder damage. The spell's thunderous sound can be heard up to 100 feet away.",
        },
        upgrade: {
          en: "The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["artificer", "druid", "ranger", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Jump",
      level: 1,
      materials: {
        en: "a grasshopper's hind leg",
        it: "la zampa posteriore di una cavalletta",
      },
      name: {
        en: "Jump",
        it: "Saltare",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 290,
      },
      text: {
        base: {
          en: "You touch a willing creature. Once on each of its turns until the spell ends, that creature can jump up to 30 feet by spending 10 feet of movement.",
        },
        upgrade: {
          en: "You can target one additional creature for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "cleric", "druid"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Spare the Dying",
      level: 0,
      name: {
        en: "Spare the Dying",
        it: "Salvare i Morenti",
      },
      range: {
        type: "distance",
        imperial: {
          value: 15,
          unit: "ft",
        },
        metric: {
          value: 4.5,
          unit: "m",
        },
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 318,
      },
      text: {
        base: {
          en: "Choose a creature within range that has 0 Hit Points and isn't dead. The creature becomes Stable.",
        },
        upgrade: {
          en: "The range doubles when you reach levels 5 (30 feet), 11 (60 feet), and 17 (120 feet).",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 24,
        unit: "hour",
      },
      classes: ["cleric"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "until_dispelled",
      },
      id: "PHB'24/Hallow",
      level: 5,
      materials: {
        en: "incense worth 1,000+ GP, which the spell consumes",
        it: "incenso del valore di 1.000 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Hallow",
        it: "Santificare",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 283,
      },
      text: {
        base: {
          en: "You touch a point and infuse an area around it with holy or unholy power. The area can have a radius up to 60 feet, and the spell fails if the radius includes an area already under the effect of Hallow. The affected area has the following effects. Hallowed Ward. Choose any of these creature types: Aberration, Celestial, Elemental, Fey, Fiend, or Undead. Creatures of the chosen types can't willingly enter the area, and any creature that is possessed by or that has the Charmed or Frightened condition from such creatures isn't possessed, Charmed, or Frightened by them while in the area. Extra Effect. You bind an extra effect to the area from the list below:Courage. Creatures of any types you choose can't gain the Frightened condition while in the area.Darkness. Darkness fills the area. Normal light, as well as magical light created by spells of a level lower than this spell, can't illuminate the area.Daylight. Bright light fills the area. Magical Darkness created by spells of a level lower than this spell can't extinguish the light.Peaceful Rest. Dead bodies interred in the area can't be turned into Undead.Extradimensional Interference. Creatures of any types you choose can't enter or exit the area using teleportation or interplanar travel.Fear. Creatures of any types you choose have the Frightened condition while in the area.Resistance. Creatures of any types you choose have Resistance to one damage type of your choice while in the area.Silence. No sound can emanate from within the area, and no sound can reach into it.Tongues. Creatures of any types you choose can communicate with any other creature in the area even if they don't share a common language.Vulnerability. Creatures of any types you choose have Vulnerability to one damage type of your choice while in the area.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["artificer", "cleric"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Sanctuary",
      level: 1,
      materials: {
        en: "a shard of glass from a mirror",
        it: "un frammento di vetro di uno specchio",
      },
      name: {
        en: "Sanctuary",
        it: "Santuario",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 313,
      },
      text: {
        base: {
          en: "You ward a creature within range. Until the spell ends, any creature who targets the warded creature with an attack roll or a damaging spell must succeed on a Wisdom saving throw or either choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from areas of effect.The spell ends if the warded creature makes an attack roll, casts a spell, or deals damage.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 10,
        unit: "minute",
      },
      classes: ["artificer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 24,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Mordenkainen's Private Sanctum",
      level: 4,
      materials: {
        en: "a thin sheet of lead",
        it: "una sottile lamina di piombo",
      },
      name: {
        en: "Mordenkainen's Private Sanctum",
        it: "Santuario Privato di Mordekainen",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 301,
      },
      text: {
        base: {
          en: "You make an area within range magically secure. The area is a Cube that can be as small as 5 feet to as large as 100 feet on each side. The spell lasts for the duration.When you cast the spell, you decide what sort of security the spell provides, choosing any of the following properties:Sound can't pass through the barrier at the edge of the warded area.The barrier of the warded area appears dark and foggy, preventing vision (including Darkvision) through it.Sensors created by Divination spells can't appear inside the protected area or pass through the barrier at its perimeter.Creatures in the area can't be targeted by Divination spells.Nothing can teleport into or out of the warded area.Planar travel is blocked within the warded area.Casting this spell on the same spot every day for 365 days makes the spell last until dispelled.",
        },
        upgrade: {
          en: "You can increase the size of the Cube by 100 feet for each spell slot level above 4.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "cleric", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Bestow Curse",
      level: 3,
      name: {
        en: "Bestow Curse",
        it: "Scagliare Maledizione",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 246,
      },
      text: {
        base: {
          en: "You touch a creature, which must succeed on a Wisdom saving throw or become cursed for the duration. Until the curse ends, the target suffers one of the following effects of your choice:Choose one ability. The target has Disadvantage on ability checks and saving throws made with that ability.The target has Disadvantage on attack rolls against you.In combat, the target must succeed on a Wisdom saving throw at the start of each of its turns or be forced to take the Dodge action on that turn.If you deal damage to the target with an attack roll or a spell, the target takes an extra 1d8 Necrotic damage.",
        },
        upgrade: {
          en: "If you cast this spell using a level 4 spell slot, you can maintain Concentration on it for up to 10 minutes. If you use a level 5+ spell slot, the spell doesn't require Concentration, and the duration becomes 8 hours (level 5-6 slot) or 24 hours (level 7-8 slot). If you use a level 9 spell slot, the spell lasts until dispelled.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Knock",
      level: 2,
      name: {
        en: "Knock",
        it: "Scassinare",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 290,
      },
      text: {
        base: {
          en: "Choose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access.A target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, only one of them is unlocked.If the target is held shut by Arcane Lock, that spell is suppressed for 10 minutes, during which time the target can be opened and closed.When you cast the spell, a loud knock, audible up to 300 feet away, emanates from the target.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Mind Sliver",
      level: 0,
      name: {
        en: "Mind Sliver",
        it: "Scheggia della Mente",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 298,
      },
      text: {
        base: {
          en: "You try to temporarily sliver the mind of one creature you can see within range. The target must succeed on an Intelligence saving throw or take 1d6 Psychic damage and subtract 1d4 from the next saving throw it makes before the end of your next turn.",
        },
        upgrade: {
          en: "The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Meteor Swarm",
      level: 9,
      name: {
        en: "Meteor Swarm",
        it: "Sciame di Meteore",
      },
      range: {
        type: "distance",
        imperial: {
          value: 1,
          unit: "mi",
        },
        metric: {
          value: 1.5,
          unit: "km",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 298,
      },
      text: {
        base: {
          en: "Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius Sphere centered on each of those points makes a Dexterity saving throw. A creature takes 20d6 Fire damage and 20d6 Bludgeoning damage on a failed save or half as much damage on a successful one. A creature in the area of more than one fiery Sphere is affected only once.A nonmagical object that isn't being worn or carried also takes the damage if it's in the spell's area, and the object starts burning if it's flammable.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "cleric", "druid", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Stone Shape",
      level: 4,
      materials: {
        en: "soft clay",
        it: "argilla morbida",
      },
      name: {
        en: "Stone Shape",
        it: "Scolpire Pietra",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 321,
      },
      text: {
        base: {
          en: "You touch a stone object of Medium size or smaller or a section of stone no more than 5 feet in any dimension and form it into any shape you like. For example, you could shape a large rock into a weapon, statue, or coffer, or you could make a small passage through a wall that is 5 feet thick. You could also shape a stone door or its frame to seal the door shut. The object you create can have up to two hinges and a latch, but finer mechanical detail isn't possible.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["bard", "cleric", "druid"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "day",
        upTo: true,
      },
      id: "PHB'24/Find the Path",
      level: 6,
      materials: {
        en: "a set of divination tools—such as cards or runes—worth 100+ GP",
        it: "un set di strumenti di divinazione, come carte o rune, del valore di 100 mo o più",
      },
      name: {
        en: "Find the Path",
        it: "Scopri il Percorso",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 273,
      },
      text: {
        base: {
          en: 'You magically sense the most direct physical route to a location you name. You must be familiar with the location, and the spell fails if you name a destination on another plane of existence, a moving destination (such as a mobile fortress), or an unspecific destination (such as "a green dragon\'s lair").For the duration, as long as you are on the same plane of existence as the destination, you know how far it is and in what direction it lies. Whenever you face a choice of paths along the way there, you know which path is the most direct.',
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "druid", "ranger"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Find Traps",
      level: 2,
      name: {
        en: "Find Traps",
        it: "Scopri Trappole",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 273,
      },
      text: {
        base: {
          en: "You sense any trap within range that is within line of sight. A trap, for the purpose of this spell, includes any object or mechanism that was created to cause damage or other danger. Thus, the spell would sense the Alarm or Glyph of Warding spell or a mechanical pit trap, but it wouldn't reveal a natural weakness in the floor, an unstable ceiling, or a hidden sinkhole.This spell reveals that a trap is present but not its location. You do learn the general nature of the danger posed by a trap you sense.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Synaptic Static",
      level: 5,
      name: {
        en: "Synaptic Static",
        it: "Scossa Sinaptica",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 330,
      },
      text: {
        base: {
          en: "You cause psychic energy to erupt at a point within range. Each creature in a 20-foot-radius Sphere centered on that point makes an Intelligence saving throw, taking 8d6 Psychic damage on a failed save or half as much damage on a successful one.On a failed save, a target also has muddled thoughts for 1 minute. During that time, it subtracts 1d6 from all its attack rolls and ability checks, as well as any Constitution saving throws to maintain Concentration. The target makes an Intelligence saving throw at the end of each of its turns, ending the effect on itself on a success.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "until_dispelled",
      },
      id: "PHB'24/Leomund's Secret Chest",
      level: 4,
      materials: {
        en: "a chest, 3 feet by 2 feet by 2 feet, constructed from rare materials worth 5,000+ GP, and a Tiny replica of the chest made from the same materials worth 50+ GP",
        it: "una scrigno che misura 90 x 60 x 60 centimetri, realizzato con materiali rari del valore di 5.000 mo o più e una riproduzione minuscola dello scrigno fatta degli stessi materiali del valore di 50 mo o più",
      },
      name: {
        en: "Leomund's Secret Chest",
        it: "Scrigno Segreto di Leomund",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 290,
      },
      text: {
        base: {
          en: "You hide a chest and all its contents on the Ethereal Plane. You must touch the chest and the miniature replica that serve as Material components for the spell. The chest can contain up to 12 cubic feet of nonliving material (3 feet by 2 feet by 2 feet).While the chest remains on the Ethereal Plane, you can take a Magic action and touch the replica to recall the chest. It appears in an unoccupied space on the ground within 5 feet of you. You can send the chest back to the Ethereal Plane by taking a Magic action to touch the chest and the replica.After 60 days, there is a cumulative 5 percent chance at the end of each day that the spell ends. The spell also ends if you cast this spell again or if the Tiny replica chest is destroyed. If the spell ends and the larger chest is on the Ethereal Plane, the chest remains there for you or someone else to find.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["bard", "warlock", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: false,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "day",
        upTo: false,
      },
      id: "PHB'24/Illusory Script",
      level: 1,
      materials: {
        en: "ink worth 10+ GP, which the spell consumes",
        it: "inchiostro del valore di 10 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Illusory Script",
        it: "Scritto Illusorio",
      },
      range: {
        type: "touch",
      },
      ritual: true,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 288,
      },
      text: {
        base: {
          en: "You write on parchment, paper, or another suitable material and imbue it with an illusion that lasts for the duration. To you and any creatures you designate when you cast the spell, the writing appears normal, seems to be written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, the illusion can alter the meaning, handwriting, and language of the text, though the language must be one you know.If the spell is dispelled, the original script and the illusion both disappear.A creature that has Truesight can read the hidden message.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 10,
        unit: "minute",
      },
      classes: ["bard", "cleric", "druid", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Scrying",
      level: 5,
      materials: {
        en: "a focus worth 1,000+ GP, such as a crystal ball, mirror, or water-filled font",
        it: "un focus del valore di 1.000 mo o più, come una sfera di cristallo, uno specchio o una fonte d'acqua",
      },
      name: {
        en: "Scrying",
        it: "Scrutare",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 313,
      },
      text: {
        base: {
          en: "You can see and hear a creature you choose that is on the same plane of existence as you. The target makes a Wisdom saving throw, which is modified (see the tables below) by how well you know the target and the sort of physical connection you have to it. The target doesn't know what it is making the save against, only that it feels uneasy.Your Knowledge of the Target Is...Save ModifierSecondhand (heard of the target)+5Firsthand (met the target)+0Extensive (know the target well)-5You Have the Target's...Save ModifierPicture or other likeness-2Garment or other possession-4Body part, lock of hair, or bit of nail-10On a successful save, the target isn't affected, and you can't use this spell on it again for 24 hours.On a failed save, the spell creates an Invisible, intangible sensor within 10 feet of the target. You can see and hear through the sensor as if you were there. The sensor moves with the target, remaining within 10 feet of it for the duration. If something can see the sensor, it appears as a luminous orb about the size of your fist.Instead of targeting a creature, you can target a location you have seen. When you do so, the sensor appears at that location and doesn't move.",
        },
      },
    },
    {
      castingTime: {
        type: "reaction",
      },
      classes: ["sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "round",
        upTo: false,
      },
      id: "PHB'24/Shield",
      level: 1,
      name: {
        en: "Shield",
        it: "Scudo",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 316,
      },
      text: {
        base: {
          en: "An imperceptible barrier of magical force protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from Magic Missile.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["cleric", "paladin"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Shield of Faith",
      level: 1,
      materials: {
        en: "a prayer scroll",
        it: "una pergamena con una preghiera",
      },
      name: {
        en: "Shield of Faith",
        it: "Scudo della Fede",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 316,
      },
      text: {
        base: {
          en: "A shimmering field surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Fire Shield",
      level: 4,
      materials: {
        en: "a bit of phosphorus or a firefly",
        it: "un frammento di fosforo o una lucciola",
      },
      name: {
        en: "Fire Shield",
        it: "Scudo di Fuoco",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 274,
      },
      text: {
        base: {
          en: "Wispy flames wreathe your body for the duration, shedding Bright Light in a 10-foot radius and Dim Light for an additional 10 feet.The flames provide you with a warm shield or a chill shield, as you choose. The warm shield grants you Resistance to Cold damage, and the chill shield grants you Resistance to Fire damage.In addition, whenever a creature within 5 feet of you hits you with a melee attack roll, the shield erupts with flame. The attacker takes 2d8 Fire damage from a warm shield or 2d8 Cold damage from a chill shield.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "druid", "ranger", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 8,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Darkvision",
      level: 2,
      materials: {
        en: "a dried carrot",
        it: "una carota essiccata",
      },
      name: {
        en: "Darkvision",
        it: "Scurovisione",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 260,
      },
      text: {
        base: {
          en: "For the duration, a willing creature you touch has Darkvision with a range of 150 feet.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 8,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Mordenkainen's Faithful Hound",
      level: 4,
      materials: {
        en: "a silver whistle",
        it: "un fischietto d'argento",
      },
      name: {
        en: "Mordenkainen's Faithful Hound",
        it: "Segugio Fedele di Mordekainen",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 300,
      },
      text: {
        base: {
          en: "You conjure a phantom watchdog in an unoccupied space that you can see within range. The hound remains for the duration or until the two of you are more than 300 feet apart from each other.No one but you can see the hound, and it is intangible and invulnerable. When a Small or larger creature comes within 30 feet of it without first speaking the password that you specify when you cast this spell, the hound starts barking loudly. The hound has Truesight with a range of 30 feet.At the start of each of your turns, the hound attempts to bite one enemy within 5 feet of it. That enemy must succeed on a Dexterity saving throw or take 4d8 Force damage.On your later turns, you can take a Magic action to move the hound up to 30 feet.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 8,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Seeming",
      level: 5,
      name: {
        en: "Seeming",
        it: "Sembrare",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 314,
      },
      text: {
        base: {
          en: "You give an illusory appearance to each creature of your choice that you can see within range. An unwilling target can make a Charisma saving throw, and if it succeeds, it is unaffected by this spell.You can give the same appearance or different ones to the targets. The spell can change the appearance of the targets' bodies and equipment. You can make each creature seem 1 foot shorter or taller and appear heavier or lighter. A target's new appearance must have the same basic arrangement of limbs as the target, but the extent of the illusion is otherwise up to you. The spell lasts for the duration.The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to a creature's outfit, objects pass through the hat.A creature that takes the Study action to examine a target can make an Intelligence (Investigation) check against your spell save DC. If it succeeds, it becomes aware that the target is disguised.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: false,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Demiplane",
      level: 8,
      name: {
        en: "Demiplane",
        it: "Semipiano",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 261,
      },
      text: {
        base: {
          en: "You create a shadowy Medium door on a flat solid surface that you can see within range. This door can be opened and closed, and it leads to a demiplane that is an empty room 30 feet in each dimension, made of wood or stone (your choice).When the spell ends, the door vanishes, and any objects inside the demiplane remain there. Any creatures inside also remain unless they opt to be shunted through the door as it vanishes, landing with the Prone condition in the unoccupied spaces closest to the door's former space.Each time you cast this spell, you can create a new demiplane or connect the shadowy door to a demiplane you created with a previous casting of this spell. Additionally, if you know the nature and contents of a demiplane created by a casting of this spell by another creature, you can connect the shadowy door to that demiplane instead.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "until_dispelled",
      },
      id: "PHB'24/Arcane Lock",
      level: 2,
      materials: {
        en: "gold dust worth 25+ GP, which the spell consumes",
        it: "polvere d'oro del valore di 25 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Arcane Lock",
        it: "Serratura Arcana",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 242,
      },
      text: {
        base: {
          en: "You touch a closed door, window, gate, container, or hatch and magically lock it for the duration. This lock can't be unlocked by any nonmagical means. You and any creatures you designate when you cast the spell can open and close the object despite the lock. You can also set a password that, when spoken within 5 feet of the object, unlocks it for 1 minute.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "warlock", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Unseen Servant",
      level: 1,
      materials: {
        en: "a bit of string and of wood",
        it: "un pezzo di spago e di legno",
      },
      name: {
        en: "Unseen Servant",
        it: "Servitore Inosservato",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: true,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 336,
      },
      text: {
        base: {
          en: "This spell creates an Invisible, mindless, shapeless, Medium force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 Hit Point, and a Strength of 2, and it can't attack. If it drops to 0 Hit Points, the spell ends.Once on each of your turns as a Bonus Action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring drinks. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command.If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Vitriolic Sphere",
      level: 4,
      materials: {
        en: "a drop of bile",
        it: "una goccia di bile",
      },
      name: {
        en: "Vitriolic Sphere",
        it: "Sfera al Vetriolo",
      },
      range: {
        type: "distance",
        imperial: {
          value: 150,
          unit: "ft",
        },
        metric: {
          value: 45,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 337,
      },
      text: {
        base: {
          en: "You point at a location within range, and a glowing, 1-foot-diameter ball of acid streaks there and explodes in a 20-foot-radius Sphere. Each creature in that area makes a Dexterity saving throw. On a failed save, a creature takes 10d4 Acid damage and another 5d4 Acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage only.",
        },
        upgrade: {
          en: "The initial damage increases by 2d4 for each spell slot level above 4.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Otiluke's Freezing Sphere",
      level: 6,
      materials: {
        en: "a miniature crystal sphere",
        it: "una sfera di scristallo in miniatura",
      },
      name: {
        en: "Otiluke's Freezing Sphere",
        it: "Sfera Congelante di Otiluke",
      },
      range: {
        type: "distance",
        imperial: {
          value: 300,
          unit: "ft",
        },
        metric: {
          value: 90,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 302,
      },
      text: {
        base: {
          en: "A frigid globe streaks from you to a point of your choice within range, where it explodes in a 60-foot-radius Sphere. Each creature in that area makes a Constitution saving throw, taking 10d6 Cold damage on failed save or half as much damage on a successful one.If the globe strikes a body of water, it freezes the water to a depth of 6 inches over an area 30 feet square. This ice lasts for 1 minute. Creatures that were swimming on the surface of frozen water are trapped in the ice and have the Restrained condition. A trapped creature can take an action to make a Strength (Athletics) check against your spell save DC to break free.You can refrain from firing the globe after completing the spell's casting. If you do so, a globe about the size of a sling bullet, cool to the touch, appears in your hand. At any time, you or a creature you give the globe to can throw the globe (to a range of 40 feet) or hurl it with a sling (to the sling's normal range). It shatters on impact, with the same effect as a normal casting of the spell. You can also set the globe down without shattering it. After 1 minute, if the globe hasn't already shattered, it explodes.",
        },
        upgrade: {
          en: "The damage increases by 1d6 for each spell slot level above 6.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Otiluke's Resilient Sphere",
      level: 4,
      materials: {
        en: "a glass sphere",
        it: "una sfera di vetro",
      },
      name: {
        en: "Otiluke's Resilient Sphere",
        it: "Sfera Elastica di Otiluke",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 303,
      },
      text: {
        base: {
          en: "A shimmering sphere encloses a Large or smaller creature or object within range. An unwilling creature must succeed on a Dexterity saving throw or be enclosed for the duration.Nothing—not physical objects, energy, or other spell effects—can pass through the barrier, in or out, though a creature in the sphere can breathe there. The sphere is immune to all damage, and a creature or object inside can't be damaged by attacks or effects originating from outside, nor can a creature inside the sphere damage anything outside it.The sphere is weightless and just large enough to contain the creature or object inside. An enclosed creature can take an action to push against the sphere's walls and thus roll the sphere at up to half the creature's Speed. Similarly, the globe can be picked up and moved by other creatures.A Disintegrate spell targeting the globe destroys it without harming anything inside.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Flaming Sphere",
      level: 2,
      materials: {
        en: "a ball of wax",
        it: "una pallina di cera",
      },
      name: {
        en: "Flaming Sphere",
        it: "Sfera Infuocata",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 275,
      },
      text: {
        base: {
          en: "You create a 5-foot-diameter sphere of fire in an unoccupied space on the ground within range. It lasts for the duration. Any creature that ends its turn within 5 feet of the sphere makes a Dexterity saving throw, taking 2d6 Fire damage on a failed save or half as much damage on a successful one.As a Bonus Action, you can move the sphere up to 30 feet, rolling it along the ground. If you move the sphere into a creature's space, that creature makes the save against the sphere, and the sphere stops moving for the turn.When you move the sphere, you can direct it over barriers up to 5 feet tall and jump it across pits up to 10 feet wide. Flammable objects that aren't being worn or carried start burning if touched by the sphere, and it sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet.",
        },
        upgrade: {
          en: "The damage increases by 1d6 for each spell slot level above 2.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Blur",
      level: 2,
      name: {
        en: "Blur",
        it: "Sfocatura",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 248,
      },
      text: {
        base: {
          en: "Your body becomes blurred. For the duration, any creature has Disadvantage on attack rolls against you. An attacker is immune to this effect if it perceives you with Blindsight or Truesight.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Eyebite",
      level: 6,
      name: {
        en: "Eyebite",
        it: "Sguardo Penetrante",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 270,
      },
      text: {
        base: {
          en: "For the duration, your eyes become an inky void. One creature of your choice within 60 feet of you that you can see must succeed on a Wisdom saving throw or be affected by one of the following effects of your choice for the duration.On each of your turns until the spell ends, you can take a Magic action to target another creature but can't target a creature again if it has succeeded on a save against this casting of the spell. Asleep. The target has the Unconscious condition. It wakes up if it takes any damage or if another creature takes an action to shake it awake. Panicked. The target has the Frightened condition. On each of its turns, the Frightened target must take the Dash action and move away from you by the safest and shortest route available. If the target moves to a space at least 60 feet away from you where it can't see you, this effect ends. Sickened. The target has the Poisoned condition.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "cleric", "ranger"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Silence",
      level: 2,
      name: {
        en: "Silence",
        it: "Silenzio",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: true,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 316,
      },
      text: {
        base: {
          en: "For the duration, no sound can be created within or pass through a 20-foot-radius Sphere centered on a point you choose within range. Any creature or object entirely inside the Sphere has Immunity to Thunder damage, and creatures have the Deafened condition while entirely inside it. Casting a spell that includes a Verbal component is impossible there.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["bard", "cleric", "druid", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "until_dispelled",
      },
      id: "PHB'24/Symbol",
      level: 7,
      materials: {
        en: "powdered diamond worth 1,000+ GP, which the spell consumes",
        it: "polvere di diamante del valore di 1.000 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Symbol",
        it: "Simbolo",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 329,
      },
      text: {
        base: {
          en: "You inscribe a harmful glyph either on a surface (such as a section of floor or wall) or within an object that can be closed (such as a book or chest). The glyph can cover an area no larger than 10 feet in diameter. If you choose an object, it must remain in place; if it is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.The glyph is nearly imperceptible and requires a successful Wisdom (Perception) check against your spell save DC to notice.When you inscribe the glyph, you set its trigger and choose which effect the symbol bears: Death, Discord, Fear, Pain, Sleep, or Stunning. Each one is explained below. Set the Trigger. You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, common triggers include touching or stepping on the glyph, removing another object covering it, or approaching within a certain distance of it. For glyphs inscribed within an object, common triggers include opening that object or seeing the glyph.You can refine the trigger so that only creatures of certain types activate it (for example, the glyph could be set to affect Aberrations). You can also set conditions for creatures that don't trigger the glyph, such as those who say a certain password.Once triggered, the glyph glows, filling a 60-foot-radius Sphere with Dim Light for 10 minutes, after which time the spell ends. Each creature in the Sphere when the glyph activates is targeted by its effect, as is a creature that enters the Sphere for the first time on a turn or ends its turn there. A creature is targeted only once per turn. Death. Each target makes a Constitution saving throw, taking 10d10 Necrotic damage on a failed save or half as much damage on a successful save. Discord. Each target makes a Wisdom saving throw. On a failed save, a target argues with other creatures for 1 minute. During this time, it is incapable of meaningful communication and has Disadvantage on attack rolls and ability checks. Fear. Each target must succeed on a Wisdom saving throw or have the Frightened condition for 1 minute. While Frightened, the target must move at least 30 feet away from the glyph on each of its turns, if able. Pain. Each target must succeed on a Constitution saving throw or have the Incapacitated condition for 1 minute. Sleep. Each target must succeed on a Wisdom saving throw or have the Unconscious condition for 10 minutes. A creature awakens if it takes damage or if someone takes an action to shake it awake. Stunning. Each target must succeed on a Wisdom saving throw or have the Stunned condition for 1 minute.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 12,
        unit: "hour",
      },
      classes: ["wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "until_dispelled",
      },
      id: "PHB'24/Simulacrum",
      level: 7,
      materials: {
        en: "powdered ruby worth 1,500+ GP, which the spell consumes",
        it: "polvere di rubino del valore di 1.500 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Simulacrum",
        it: "Simulacro",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 317,
      },
      text: {
        base: {
          en: "You create a simulacrum of one Beast or Humanoid that is within 10 feet of you for the entire casting of the spell. You finish the casting by touching both the creature and a pile of ice or snow that is the same size as that creature, and the pile turns into the simulacrum, which is a creature. It uses the game statistics of the original creature at the time of casting, except it is a Construct, its Hit Point maximum is half as much, and it can't cast this spell.The simulacrum is Friendly to you and creatures you designate. It obeys your commands and acts on your turn in combat. The simulacrum can't gain levels, and it can't take Short or Long Rests.If the simulacrum takes damage, the only way to restore its Hit Points is to repair it as you take a Long Rest, during which you expend components worth 100 GP per Hit Point restored. The simulacrum must stay within 5 feet of you for the repair.The simulacrum lasts until it drops to 0 Hit Points, at which point it reverts to snow and melts away. If you cast this spell again, any simulacrum you created with this spell is instantly destroyed.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Dragon's Breath",
      level: 2,
      materials: {
        en: "a hot pepper",
        it: "un peperoncino",
      },
      name: {
        en: "Dragon's Breath",
        it: "Soffio del Drago",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 266,
      },
      text: {
        base: {
          en: "You touch one willing creature, and choose Acid, Cold, Fire, Lightning, or Poison. Until the spell ends, the target can take a Magic action to exhale a 15-foot Cone. Each creature in that area makes a Dexterity saving throw, taking 3d6 damage of the chosen type on a failed save or half as much damage on a successful one.",
        },
        upgrade: {
          en: "The damage increases by 1d6 for each spell slot level above 2.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["bard", "warlock", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 8,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Dream",
      level: 5,
      materials: {
        en: "a handful of sand",
        it: "una manciata di sabbia",
      },
      name: {
        en: "Dream",
        it: "Sogno",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 266,
      },
      text: {
        base: {
          en: "You target a creature you know on the same plane of existence. You or a willing creature you touch enters a trance state to act as a dream messenger. While in the trance, the messenger is Incapacitated and has a Speed of 0.If the target is asleep, the messenger appears in the target's dreams and can converse with the target as long as it remains asleep, through the spell's duration. The messenger can also shape the dream's environment, creating landscapes, objects, and other images. The messenger can emerge from the trance at any time, ending the spell. The target recalls the dream perfectly upon waking.If the target is awake when you cast the spell, the messenger knows it and can either end the trance (and the spell) or wait for the target to sleep, at which point the messenger enters its dreams.You can make the messenger terrifying to the target. If you do so, the messenger can deliver a message of no more than ten words, and then the target makes a Wisdom saving throw. On a failed save, the target gains no benefit from its rest, and it takes 3d6 Psychic damage when it wakes up.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Sleep",
      level: 1,
      materials: {
        en: "a pinch of sand or rose petals",
        it: "un pizzico di sabbia o dei petali di rosa",
      },
      name: {
        en: "Sleep",
        it: "Sonno",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 317,
      },
      text: {
        base: {
          en: "Each creature of your choice in a 5-foot-radius Sphere centered on a point within range must succeed on a Wisdom saving throw or have the Incapacitated condition until the end of its next turn, at which point it must repeat the save. If the target fails the second save, the target has the Unconscious condition for the duration. The spell ends on a target if it takes damage or someone within 5 feet of it takes an action to shake it out of the spell's effect.Creatures that don't sleep, such as elves, or that have Immunity to the Exhaustion condition automatically succeed on saves against this spell.",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["warlock"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Hex",
      level: 1,
      materials: {
        en: "the petrified eye of a newt",
        it: "l'occhio pietrificato di un tritone",
      },
      name: {
        en: "Hex",
        it: "Sortilegio",
      },
      range: {
        type: "distance",
        imperial: {
          value: 90,
          unit: "ft",
        },
        metric: {
          value: 27,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 285,
      },
      text: {
        base: {
          en: "You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 Necrotic damage to the target whenever you hit it with an attack roll. Also, choose one ability when you cast the spell. The target has Disadvantage on ability checks made with the chosen ability.If the target drops to 0 Hit Points before this spell ends, you can take a Bonus Action on a later turn to curse a new creature.",
        },
        upgrade: {
          en: "Your Concentration can last longer with a spell slot of level 2 (up to 4 hours), 3-4 (up to 8 hours), or 5+ (24 hours).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Mordenkainen's Sword",
      level: 7,
      materials: {
        en: "a miniature sword worth 250+ GP",
        it: "una spada in miniatura del valore di 250 mo o più",
      },
      name: {
        en: "Mordenkainen's Sword",
        it: "Spada di Mordekainen",
      },
      range: {
        type: "distance",
        imperial: {
          value: 90,
          unit: "ft",
        },
        metric: {
          value: 27,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 302,
      },
      text: {
        base: {
          en: "You create a spectral sword that hovers within range. It lasts for the duration.When the sword appears, you make a melee spell attack against a target within 5 feet of the sword. On a hit, the target takes Force damage equal to 4d12 plus your spellcasting ability modifier.On your later turns, you can take a Bonus Action to move the sword up to 30 feet to a spot you can see and repeat the attack against the same target or a different one.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "druid", "sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Plane Shift",
      level: 7,
      materials: {
        en: "a forked, metal rod worth 250+ GP and attuned to a plane of existence",
        it: "una verga di metallo biforcuta del valore di 250 mo o più e in sintonia con un piano di esistenza",
      },
      name: {
        en: "Plane Shift",
        it: "Spostamento Planare",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 305,
      },
      text: {
        base: {
          en: "You and up to eight willing creatures who link hands in a circle are transported to a different plane of existence. You can specify a target destination in general terms, such as the City of Brass on the Elemental Plane of Fire or the palace of Dispater on the second level of the Nine Hells, and you appear in or near that destination, as determined by the DM.Alternatively, if you know the sigil sequence of a teleportation circle on another plane of existence, this spell can take you to that circle. If the teleportation circle is too small to hold all the creatures you transported, they appear in the closest unoccupied spaces next to the circle.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Color Spray",
      level: 1,
      materials: {
        en: "a pinch of colorful sand",
        it: "un pizzico di sabbia colorata",
      },
      name: {
        en: "Color Spray",
        it: "Spruzzo Colorato",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 251,
      },
      text: {
        base: {
          en: "You launch a dazzling array of flashing, colorful light. Each creature in a 15-foot Cone originating from you must succeed on a Constitution saving throw or have the Blinded condition until the end of your next turn.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Prismatic Spray",
      level: 7,
      name: {
        en: "Prismatic Spray",
        it: "Spruzzo Prismatico",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 307,
      },
      text: {
        base: {
          en: "Eight rays of light flash from you in a 60-foot Cone. Each creature in the Cone makes a Dexterity saving throw. For each target, roll 1d8 to determine which color ray affects it, consulting the Prismatic Rays table.Prismatic Rays1d8Ray1Red. Failed Save: 12d6 Fire damage. Successful Save: Half as much damage.2Orange. Failed Save: 12d6 Acid damage. Successful Save: Half as much damage.3Yellow. Failed Save: 12d6 Lightning damage. Successful Save: Half as much damage.4Green. Failed Save: 12d6 Poison damage. Successful Save: Half as much damage.5Blue. Failed Save: 12d6 Cold damage. Successful Save: Half as much damage.6Indigo. Failed Save: The target has the Restrained condition and makes a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the condition ends. If it fails three times, it has the Petrified condition until it is freed by an effect like the Greater Restoration spell. The successes and failures needn't be consecutive; keep track of both until the target collects three of a kind.7Violet. Failed Save: The target has the Blinded condition and makes a Wisdom saving throw at the start of your next turn. On a successful save, the condition ends. On a failed save, the condition ends, and the creature teleports to another plane of existence (DM's choice).8Special. The target is struck by two rays. Roll twice, rerolling any 8.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "druid", "sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Poison Spray",
      level: 0,
      name: {
        en: "Poison Spray",
        it: "Spruzzo Velenoso",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 306,
      },
      text: {
        base: {
          en: "You spray toxic mist at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d12 Poison damage.",
        },
        upgrade: {
          en: "The damage increases by 1d12 when you reach levels 5 (2d12), 11 (3d12), and 17 (4d12).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Sorcerous Burst",
      level: 0,
      name: {
        en: "Sorcerous Burst",
        it: "Stregoneria Esplosiva",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 318,
      },
      text: {
        base: {
          en: "You cast sorcerous energy at one creature or object within range. Make a ranged attack roll against the target. On a hit, the target takes 1d8 damage of a type you choose: Acid, Cold, Fire, Lightning, Poison, Psychic, or Thunder.If you roll an 8 on a d8 for this spell, you can roll another d8, and add it to the damage. When you cast this spell, the maximum number of these d8s you can add to the spell's damage equals your spellcasting ability modifier.",
        },
        upgrade: {
          en: "The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Shocking Grasp",
      level: 0,
      name: {
        en: "Shocking Grasp",
        it: "Stretta Folgorante",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 316,
      },
      text: {
        base: {
          en: "Lightning springs from you to a creature that you try to touch. Make a melee spell attack against the target. On a hit, the target takes 1d8 Lightning damage, and it can't make Opportunity Attacks until the start of its next turn.",
        },
        upgrade: {
          en: "The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 8,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Suggestion",
      level: 2,
      materials: {
        en: "a drop of honey",
        it: "una goccia di miele",
      },
      name: {
        en: "Suggestion",
        it: "Suggestione",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 321,
      },
      text: {
        base: {
          en: 'You suggest a course of activity—described in no more than 25 words—to one creature you can see within range that can hear and understand you. The suggestion must sound achievable and not involve anything that would obviously deal damage to the target or its allies. For example, you could say, "Fetch the key to the cult\'s treasure vault, and give the key to me." Or you could say, "Stop fighting, leave this library peacefully, and don\'t return."The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration or until you or your allies deal damage to the target. The Charmed target pursues the suggestion to the best of its ability. The suggested activity can continue for the entire duration, but if the suggested activity can be completed in a shorter time, the spell ends for the target upon completing it.',
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 24,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Mass Suggestion",
      level: 6,
      materials: {
        en: "a snake's tongue",
        it: "una lingua di serpente",
      },
      name: {
        en: "Mass Suggestion",
        it: "Suggestione di Massa",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 296,
      },
      text: {
        base: {
          en: 'You suggest a course of activity—described in no more than 25 words—to twelve or fewer creatures you can see within range that can hear and understand you. The suggestion must sound achievable and not involve anything that would obviously deal damage to any of the targets or their allies. For example, you could say, "Walk to the village down that road, and help the villagers there harvest crops until sunset." Or you could say, "Now is not the time for violence. Drop your weapons, and dance! Stop in an hour."Each target must succeed on a Wisdom saving throw or have the Charmed condition for the duration or until you or your allies deal damage to the target. Each Charmed target pursues the suggestion to the best of its ability. The suggested activity can continue for the entire duration, but if the suggested activity can be completed in a shorter time, the spell ends for a target upon completing it.',
        },
        upgrade: {
          en: "The duration is longer with a spell slot of level 7 (10 days), 8 (30 days), or 9 (366 days).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Dissonant Whispers",
      level: 1,
      name: {
        en: "Dissonant Whispers",
        it: "Sussurri Dissonanti",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 264,
      },
      text: {
        base: {
          en: "One creature of your choice that you can see within range hears a discordant melody in its mind. The target makes a Wisdom saving throw. On a failed save, it takes 3d6 Psychic damage and must immediately use its Reaction, if available, to move as far away from you as it can, using the safest route. On a successful save, the target takes half as much damage only.",
        },
        upgrade: {
          en: "The damage increases by 1d6 for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Thaumaturgy",
      level: 0,
      name: {
        en: "Thaumaturgy",
        it: "Taumaturgia",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 333,
      },
      text: {
        base: {
          en: "You manifest a minor wonder within range. You create one of the effects below within range. If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time. Altered Eyes. You alter the appearance of your eyes for 1 minute. Booming Voice. Your voice booms up to three times as loud as normal for 1 minute. For the duration, you have Advantage on Charisma (Intimidation) checks. Fire Play. You cause flames to flicker, brighten, dim, or change color for 1 minute. Invisible Hand. You instantaneously cause an unlocked door or window to fly open or slam shut. Phantom Sound. You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers. Tremors. You cause harmless tremors in the ground for 1 minute.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Telekinesis",
      level: 5,
      name: {
        en: "Telekinesis",
        it: "Telecinesi",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 331,
      },
      text: {
        base: {
          en: "You gain the ability to move or manipulate creatures or objects by thought. When you cast the spell and as a Magic action on your later turns before the spell ends, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell. Creature. You can try to move a Huge or smaller creature. The target must succeed on a Strength saving throw, or you move it up to 30 feet in any direction within the spell's range. Until the end of your next turn, the creature has the Restrained condition, and if you lift it into the air, it is suspended there. It falls at the end of your next turn unless you use this option on it again and it fails the save. Object. You can try to move a Huge or smaller object. If the object isn't being worn or carried, you automatically move it up to 30 feet in any direction within the spell's range.If the object is worn or carried by a creature, that creature must succeed on a Strength saving throw, or you pull the object away and move it up to 30 feet in any direction within the spell's range.You can exert fine control on objects with your telekinetic grip, such as manipulating a simple tool, opening a door or a container, stowing or retrieving an item from an open container, or pouring the contents from a vial.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 24,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Telepathy",
      level: 8,
      materials: {
        en: "a pair of linked silver rings",
        it: "un paio di anelli d'argento concatenati",
      },
      name: {
        en: "Telepathy",
        it: "Telepatia",
      },
      range: {
        type: "unlimited",
      },
      ritual: false,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 331,
      },
      text: {
        base: {
          en: "You create a telepathic link between yourself and a willing creature with which you are familiar. The creature can be anywhere on the same plane of existence as you. The spell ends if you or the target are no longer on the same plane.Until the spell ends, you and the target can instantly share words, images, sounds, and other sensory messages with each other through the link, and the target recognizes you as the creature it is communicating with. The spell enables a creature to understand the meaning of your words and any sensory messages you send to it.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: false,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Teleport",
      level: 7,
      name: {
        en: "Teleport",
        it: "Teletrasporto",
      },
      range: {
        type: "distance",
        imperial: {
          value: 10,
          unit: "ft",
        },
        metric: {
          value: 3,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 331,
      },
      text: {
        base: {
          en: 'This spell instantly transports you and up to eight willing creatures that you can see within range, or a single object that you can see within range, to a destination you select. If you target an object, it must be Large or smaller, and it can\'t be held or carried by an unwilling creature.The destination you choose must be known to you, and it must be on the same plane of existence as you. Your familiarity with the destination determines whether you arrive there successfully. The DM rolls 1d100 and consults the Teleportation Outcome table and the explanations after it.Teleportation OutcomeFamiliarityMishapSimilar AreaOff TargetOn TargetPermanent circle———01-00Linked object———01-00Very familiar01-0506-1314-2425-00Seen casually01-3334-4344-5354-00Viewed once or described01-4344-5354-7374-00False destination01-5051-00—— Familiarity. Here are the meanings of the terms in the table\'s Familiarity column:"Permanent circle" means a permanent teleportation circle whose sigil sequence you know."Linked object" means you possess an object taken from the desired destination within the last six months, such as a book from a wizard\'s library."Very familiar" is a place you have visited often, a place you have carefully studied, or a place you can see when you cast the spell."Seen casually" is a place you have seen more than once but with which you aren\'t very familiar."Viewed once or described" is a place you have seen once, possibly using magic, or a place you know through someone else\'s description, perhaps from a map."False destination" is a place that doesn\'t exist. Perhaps you tried to scry an enemy\'s sanctum but instead viewed an illusion, or you are attempting to teleport to a location that no longer exists. Mishap. The spell\'s unpredictable magic results in a difficult journey. Each teleporting creature (or the target object) takes 3d10 Force damage, and the DM rerolls on the table to see where you wind up (multiple mishaps can occur, dealing damage each time). Similar Area. You and your group (or the target object) appear in a different area that\'s visually or thematically similar to the target area. You appear in the closest similar place. If you are heading for your home laboratory, for example, you might appear in another person\'s laboratory in the same city. Off Target. You and your group (or the target object) appear 2d12 miles away from the destination in a random direction. Roll 1d8 for the direction: 1, east; 2, southeast; 3, south; 4, southwest; 5, west; 6, northwest; 7, north; or 8, northeast. On Target. You and your group (or the target object) appear where you intended.',
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "druid", "sorcerer"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Fire Storm",
      level: 7,
      name: {
        en: "Fire Storm",
        it: "Tempesta di Fuoco",
      },
      range: {
        type: "distance",
        imperial: {
          value: 150,
          unit: "ft",
        },
        metric: {
          value: 45,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 275,
      },
      text: {
        base: {
          en: "A storm of fire appears within range. The area of the storm consists of up to ten 10-foot Cubes, which you arrange as you like. Each Cube must be contiguous with at least one other Cube. Each creature in the area makes a Dexterity saving throw, taking 7d10 Fire damage on a failed save or half as much damage on a successful one.Flammable objects in the area that aren't being worn or carried start burning.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Ice Storm",
      level: 4,
      materials: {
        en: "a mitten",
        it: "una muffola",
      },
      name: {
        en: "Ice Storm",
        it: "Tempesta di Ghiaccio",
      },
      range: {
        type: "distance",
        imperial: {
          value: 300,
          unit: "ft",
        },
        metric: {
          value: 90,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 287,
      },
      text: {
        base: {
          en: "Hail falls in a 20-foot-radius, 40-foot-high Cylinder centered on a point within range. Each creature in the Cylinder makes a Dexterity saving throw. A creature takes 2d10 Bludgeoning damage and 4d6 Cold damage on a failed save or half as much damage on a successful one.Hailstones turn ground in the Cylinder into Difficult Terrain until the end of your next turn.",
        },
        upgrade: {
          en: "The Bludgeoning damage increases by 1d10 for each spell slot level above 4.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Sleet Storm",
      level: 3,
      materials: {
        en: "a miniature umbrella",
        it: "un ombrello in miniatura",
      },
      name: {
        en: "Sleet Storm",
        it: "Tempesta di Nevischio",
      },
      range: {
        type: "distance",
        imperial: {
          value: 150,
          unit: "ft",
        },
        metric: {
          value: 45,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 317,
      },
      text: {
        base: {
          en: "Until the spell ends, sleet falls in a 40-foot-tall, 20-foot-radius Cylinder centered on a point you choose within range. The area is Heavily Obscured, and exposed flames in the area are doused.Ground in the Cylinder is Difficult Terrain. When a creature enters the Cylinder for the first time on a turn or starts its turn there, it must succeed on a Dexterity saving throw or have the Prone condition and lose Concentration.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Storm of Vengeance",
      level: 9,
      name: {
        en: "Storm of Vengeance",
        it: "Tempesta di Vendetta",
      },
      range: {
        type: "distance",
        imperial: {
          value: 1,
          unit: "mi",
        },
        metric: {
          value: 1.5,
          unit: "km",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 321,
      },
      text: {
        base: {
          en: "A churning storm cloud forms for the duration, centered on a point within range and spreading to a radius of 300 feet. Each creature under the cloud when it appears must succeed on a Constitution saving throw or take 2d6 Thunder damage and have the Deafened condition for the duration.At the start of each of your later turns, the storm produces different effects, as detailed below. Turn 2. Acidic rain falls. Each creature and object under the cloud takes 4d6 Acid damage. Turn 3. You call six bolts of lightning from the cloud to strike six different creatures or objects beneath it. Each target makes a Dexterity saving throw, taking 10d6 Lightning damage on a failed save or half as much damage on a successful one. Turn 4. Hailstones rain down. Each creature under the cloud takes 2d6 Bludgeoning damage. Turns 5-10. Gusts and freezing rain assail the area under the cloud. Each creature there takes 1d6 Cold damage. Until the spell ends, the area is Difficult Terrain and Heavily Obscured, ranged attacks with weapons are impossible there, and strong wind blows through the area.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Jallarzi's Storm of Radiance",
      level: 5,
      materials: {
        en: "a pinch of phosphorus",
        it: "un pizzico di fosforo",
      },
      name: {
        en: "Jallarzi's Storm of Radiance",
        it: "Tempesta Radiosa di Jallarzi",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "evocation",
      source: {
        book: "PHB'24",
        page: 289,
      },
      text: {
        base: {
          en: "You unleash a storm of flashing light and raging thunder in a 10-foot-radius, 40-foot-high Cylinder centered on a point you can see within range. While in this area, creatures have the Blinded and Deafened conditions, and they can't cast spells with a Verbal component.When the storm appears, each creature in it makes a Constitution saving throw, taking 2d10 Radiant damage and 2d10 Thunder damage on a failed save or half as much damage on a successful one. A creature also makes this save when it enters the spell's area for the first time on a turn or ends its turn there. A creature makes this save only once per turn.",
        },
        upgrade: {
          en: "The Radiant and Thunder damage increase by 1d10 for each spell slot level above 5.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Evard's Black Tentacles",
      level: 4,
      materials: {
        en: "a tentacle",
        it: "un tentacolo",
      },
      name: {
        en: "Evard's Black Tentacles",
        it: "Tentacoli Neri di Evard",
      },
      range: {
        type: "distance",
        imperial: {
          value: 90,
          unit: "ft",
        },
        metric: {
          value: 27,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 270,
      },
      text: {
        base: {
          en: "Squirming, ebony tentacles fill a 20-foot square on ground that you can see within range. For the duration, these tentacles turn the ground in that area into Difficult Terrain.Each creature in that area makes a Strength saving throw. On a failed save, it takes 3d6 Bludgeoning damage, and it has the Restrained condition until the spell ends. A creature also makes that save if it enters the area or ends it turn there. A creature makes that save only once per turn.A Restrained creature can take an action to make a Strength (Athletics) check against your spell save DC, ending the condition on itself on a success.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "druid", "sorcerer"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Earthquake",
      level: 8,
      materials: {
        en: "a fractured rock",
        it: "una roccia fratturata",
      },
      name: {
        en: "Earthquake",
        it: "Terremoto",
      },
      range: {
        type: "distance",
        imperial: {
          value: 500,
          unit: "ft",
        },
        metric: {
          value: 150,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 267,
      },
      text: {
        base: {
          en: "Choose a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot-radius circle centered on that point. The ground there is Difficult Terrain.When you cast this spell and at the end of each of your turns for the duration, each creature on the ground in the area makes a Dexterity saving throw. On a failed save, a creature has the Prone condition, and its Concentration is broken.You can also cause the effects below. Fissures. A total of 1d6 fissures open in the spell's area at the end of the turn you cast it. You choose the fissures' locations, which can't be under structures. Each fissure is 1d10 × 10 feet deep and 10 feet wide, and it extends from one edge of the spell's area to another edge. A creature in the same space as a fissure must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure's edge as it opens. Structures. The tremor deals 50 Bludgeoning damage to any structure in contact with the ground in the area when you cast the spell and at the end of each of your turns until the spell ends. If a structure drops to 0 Hit Points, it collapses.A creature within a distance from a collapsing structure equal to half the structure's height makes a Dexterity saving throw. On a failed save, the creature takes 12d6 Bludgeoning damage, has the Prone condition, and is buried in the rubble, requiring a DC 20 Strength (Athletics) check as an action to escape. On a successful save, the creature takes half as much damage only.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 10,
        unit: "minute",
      },
      classes: ["bard", "druid", "warlock", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 24,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Hallucinatory Terrain",
      level: 4,
      materials: {
        en: "a mushroom",
        it: "un fungo",
      },
      name: {
        en: "Hallucinatory Terrain",
        it: "Terreno Illusorio",
      },
      range: {
        type: "distance",
        imperial: {
          value: 300,
          unit: "ft",
        },
        metric: {
          value: 90,
          unit: "m",
        },
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 283,
      },
      text: {
        base: {
          en: "You make natural terrain in a 150-foot Cube in range look, sound, and smell like another sort of natural terrain. Thus, open fields or a road can be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Manufactured structures, equipment, and creatures within the area aren't changed.The tactile characteristics of the terrain are unchanged, so creatures entering the area are likely to notice the illusion. If the difference isn't obvious by touch, a creature examining the illusion can take the Study action to make an Intelligence (Investigation) check against your spell save DC to disbelieve it. If a creature discerns that the terrain is illusory, the creature sees a vague image superimposed on the real terrain.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Vampiric Touch",
      level: 3,
      name: {
        en: "Vampiric Touch",
        it: "Tocco del Vampiro",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 337,
      },
      text: {
        base: {
          en: "The touch of your shadow-wreathed hand can siphon life force from others to heal your wounds. Make a melee spell attack against one creature within reach. On a hit, the target takes 3d6 Necrotic damage, and you regain Hit Points equal to half the amount of Necrotic damage dealt.Until the spell ends, you can make the attack again on each of your turns as a Magic action, targeting the same creature or a different one.",
        },
        upgrade: {
          en: "The damage increases by 1d6 for each spell slot level above 3.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Chill Touch",
      level: 0,
      name: {
        en: "Chill Touch",
        it: "Tocco Gelido",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 249,
      },
      text: {
        base: {
          en: "Channeling the chill of the grave, make a melee spell attack against a target within reach. On a hit, the target takes 1d10 Necrotic damage, and it can't regain Hit Points until the end of your next turn.",
        },
        upgrade: {
          en: "The damage increases by 1d10 when you reach levels 5 (2d10), 11 (3d10), and 17 (4d10).",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: false,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Hypnotic Pattern",
      level: 3,
      materials: {
        en: "a pinch of confetti",
        it: "una manciata di coriandoli",
      },
      name: {
        en: "Hypnotic Pattern",
        it: "Trama Ipnotica",
      },
      range: {
        type: "distance",
        imperial: {
          value: 120,
          unit: "ft",
        },
        metric: {
          value: 36,
          unit: "m",
        },
      },
      ritual: false,
      school: "illusion",
      source: {
        book: "PHB'24",
        page: 287,
      },
      text: {
        base: {
          en: "You create a twisting pattern of colors in a 30-foot Cube within range. The pattern appears for a moment and vanishes. Each creature in the area who can see the pattern must succeed on a Wisdom saving throw or have the Charmed condition for the duration. While Charmed, the creature has the Incapacitated condition and a Speed of 0.The spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: true,
      },
      id: "PHB'24/Shapechange",
      level: 9,
      materials: {
        en: "a jade circlet worth 1,500+ GP",
        it: "un diadema di giada del valore di 1.500 mo o più",
      },
      name: {
        en: "Shapechange",
        it: "Trasformazione",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 315,
      },
      text: {
        base: {
          en: "You shape-shift into another creature for the duration or until you take a Magic action to shape-shift into a different eligible form. The new form must be of a creature that has a Challenge Rating no higher than your level or Challenge Rating. You must have seen the sort of creature before, and it can't be a Construct or an Undead.When you cast the spell, you gain a number of Temporary Hit Points equal to the Hit Points of the first form into which you shape-shift. These Temporary Hit Points vanish if any remain when the spell ends.Your game statistics are replaced by the stat block of the chosen form, but you retain your creature type; alignment; personality; Intelligence, Wisdom, and Charisma scores; Hit Points; Hit Point Dice; proficiencies; and ability to communicate. If you have the Spellcasting feature, you retain it too.Upon shape-shifting, you determine whether your equipment drops to the ground or changes in size and shape to fit the new form while you're in it.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid", "ranger"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Tree Stride",
      level: 5,
      name: {
        en: "Tree Stride",
        it: "Traslazione Arborea",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 335,
      },
      text: {
        base: {
          en: "You gain the ability to enter a tree and move from inside it to inside another tree of the same kind within 500 feet. Both trees must be living and at least the same size as you. You must use 5 feet of movement to enter a tree. You instantly know the location of all other trees of the same kind within 500 feet and, as part of the move used to enter the tree, can either pass into one of those trees or step out of the tree you're in. You appear in a spot of your choice within 5 feet of the destination tree, using another 5 feet of movement. If you have no movement left, you appear within 5 feet of the tree you entered.You can use this transportation ability only once on each of your turns. You must end each turn outside a tree.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["druid"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "round",
        upTo: false,
      },
      id: "PHB'24/Transport via Plants",
      level: 6,
      name: {
        en: "Transport via Plants",
        it: "Trasporto Vegetale",
      },
      range: {
        type: "distance",
        imperial: {
          value: 10,
          unit: "ft",
        },
        metric: {
          value: 3,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 334,
      },
      text: {
        base: {
          en: "This spell creates a magical link between a Large or larger inanimate plant within range and another plant, at any distance, on the same plane of existence. You must have seen or touched the destination plant at least once before. For the duration, any creature can step into the target plant and exit from the destination plant by using 5 feet of movement.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["paladin"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Find Steed",
      level: 2,
      name: {
        en: "Find Steed",
        it: "Trova Cavalcatura",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 272,
      },
      text: {
        base: {
          en: "You summon an otherworldly being that appears as a loyal steed in an unoccupied space of your choice within range. This creature uses the Otherworldly Steed stat block. If you already have a steed from this spell, the steed is replaced by the new one.The steed resembles a Large, rideable animal of your choice, such as a horse, a camel, a dire wolf, or an elk. Whenever you cast the spell, choose the steed's creature type—Celestial, Fey, or Fiend—which determines certain traits in the stat block. Combat. The steed is an ally to you and your allies. In combat, it shares your Initiative count, and it functions as a controlled mount while you ride it (as defined in the rules on mounted combat). If you have the Incapacitated condition, the steed takes its turn immediately after yours and acts independently, focusing on protecting you. Disappearance of the Steed. The steed disappears if it drops to 0 Hit Points or if you die. When it disappears, it leaves behind anything it was wearing or carrying. If you cast this spell again, you decide whether you summon the steed that disappeared or a different one.",
        },
        upgrade: {
          en: "Use the spell slot's level for the spell's level in the stat block.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "hour",
      },
      classes: ["wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Find Familiar",
      level: 1,
      materials: {
        en: "burning incense worth 10+ GP, which the spell consumes",
        it: "incenso bruciato del valore di 10 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "Find Familiar",
        it: "Trova Famiglio",
      },
      range: {
        type: "distance",
        imperial: {
          value: 10,
          unit: "ft",
        },
        metric: {
          value: 3,
          unit: "m",
        },
      },
      ritual: true,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 272,
      },
      text: {
        base: {
          en: "You gain the service of a familiar, a spirit that takes an animal form you choose: Bat, Cat, Frog, Hawk, Lizard, Octopus, Owl, Rat, Raven, Spider, Weasel, or another Beast that has a Challenge Rating of 0. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a Celestial, Fey, or Fiend (your choice) instead of a Beast. Your familiar acts independently of you, but it obeys your commands. Telepathic Connection. While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as a Bonus Action, you can see through the familiar's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses it has.Finally, when you cast a spell with a range of touch, your familiar can deliver the touch. Your familiar must be within 100 feet of you, and it must take a Reaction to deliver the touch when you cast the spell. Combat. The familiar is an ally to you and your allies. It rolls its own Initiative and acts on its own turn. A familiar can't attack, but it can take other actions as normal. Disappearance of the Familiar. When the familiar drops to 0 Hit Points, it disappears. It reappears after you cast this spell again. As a Magic action, you can temporarily dismiss the familiar to a pocket dimension. Alternatively, you can dismiss it forever. As a Magic action while it is temporarily dismissed, you can cause it to reappear in an unoccupied space within 30 feet of you. Whenever the familiar drops to 0 Hit Points or disappears into the pocket dimension, it leaves behind in its space anything it was wearing or carrying. One Familiar Only. You can't have more than one familiar at a time. If you cast this spell while you have a familiar, you instead cause it to adopt a new eligible form.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Rope Trick",
      level: 2,
      materials: {
        en: "a segment of rope",
        it: "un pezzo di corda",
      },
      name: {
        en: "Rope Trick",
        it: "Trucco della Corda",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 312,
      },
      text: {
        base: {
          en: "You touch a rope. One end of it hovers upward until the rope hangs perpendicular to the ground or the rope reaches a ceiling. At the rope's upper end, an Invisible 3-foot-by-5-foot portal opens to an extradimensional space that lasts until the spell ends. That space can be reached by climbing the rope, which can be pulled into or dropped out of it.The space can hold up to eight Medium or smaller creatures. Attacks, spells, and other effects can't pass into or out of the space, but creatures inside it can see through the portal. Anything inside the space drops out when the spell ends.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "minute",
      },
      classes: ["druid"],
      concentration: true,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 6,
        unit: "round",
        upTo: true,
      },
      id: "PHB'24/Tsunami",
      level: 8,
      name: {
        en: "Tsunami",
        it: "Tsunami",
      },
      range: {
        type: "distance",
        imperial: {
          value: 1,
          unit: "mi",
        },
        metric: {
          value: 1.5,
          unit: "km",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 336,
      },
      text: {
        base: {
          en: "A wall of water springs into existence at a point you choose within range. You can make the wall up to 300 feet long, 300 feet high, and 50 feet thick. The wall lasts for the duration.When the wall appears, each creature in its area makes a Strength saving throw, taking 6d10 Bludgeoning damage on a failed save or half as much damage on a successful one.At the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 50 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take 5d10 Bludgeoning damage. A creature can take this damage only once per round. At the end of the turn, the wall's height is reduced by 50 feet, and the damage the wall deals on later rounds is reduced by 1d10. When the wall reaches 0 feet in height, the spell ends.A creature caught in the wall can move by swimming. Because of the wave's force, though, the creature must succeed on a Strength (Athletics) check against your spell save DC to move at all. If it fails the check, it can't move. A creature that moves out of the wall falls to the ground.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["ranger", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: false,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Steel Wind Strike",
      level: 5,
      materials: {
        en: "a Melee weapon worth 1+ SP",
        it: "un'arma da mischia dal valore di 1 ma o più",
      },
      name: {
        en: "Steel Wind Strike",
        it: "Turbine Implacabile",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 320,
      },
      text: {
        base: {
          en: "You flourish the weapon used in the casting and then vanish to strike like the wind. Choose up to five creatures you can see within range. Make a melee spell attack against each target. On a hit, a target takes 6d10 Force damage.You then teleport to an unoccupied space you can see within 5 feet of one of the targets.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Grease",
      level: 1,
      materials: {
        en: "a bit of pork rind or butter",
        it: "un pezzo di cotenna di maiale o burro",
      },
      name: {
        en: "Grease",
        it: "Unto",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "conjuration",
      source: {
        book: "PHB'24",
        page: 280,
      },
      text: {
        base: {
          en: "Nonflammable grease covers the ground in a 10-foot square centered on a point within range and turns it into Difficult Terrain for the duration.When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or have the Prone condition. A creature that enters the area or ends its turn there must also succeed on that save or fall Prone.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "bard", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/See Invisibility",
      level: 2,
      materials: {
        en: "a pinch of talc",
        it: "un pizzico di talco",
      },
      name: {
        en: "See Invisibility",
        it: "Vedere Invisibilità",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 314,
      },
      text: {
        base: {
          en: "For the duration, you see creatures and objects that have the Invisible condition as if they were visible, and you can see into the Ethereal Plane. Creatures and objects there appear ghostly.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "sorcerer", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Haste",
      level: 3,
      materials: {
        en: "a shaving of licorice root",
        it: "una scaglia di radice di liquirizia",
      },
      name: {
        en: "Haste",
        it: "Velocità",
      },
      range: {
        type: "distance",
        imperial: {
          value: 30,
          unit: "ft",
        },
        metric: {
          value: 9,
          unit: "m",
        },
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 284,
      },
      text: {
        base: {
          en: "Choose a willing creature that you can see within range. Until the spell ends, the target's Speed is doubled, it gains a +2 bonus to Armor Class, it has Advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used to take only the Attack (one attack only), Dash, Disengage, Hide, or Utilize action.When the spell ends, the target is Incapacitated and has a Speed of 0 until the end of its next turn, as a wave of lethargy washes over it.",
        },
      },
    },
    {
      castingTime: {
        type: "time",
        value: 1,
        unit: "hour",
      },
      classes: ["bard", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 24,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Guards and Wards",
      level: 6,
      materials: {
        en: "a silver rod worth 10+ GP",
        it: "una verga d'argento del valore di 10 mo o più",
      },
      name: {
        en: "Guards and Wards",
        it: "Vigilanza e Interdizione",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 282,
      },
      text: {
        base: {
          en: "You create a ward that protects up to 2,500 square feet of floor space. The warded area can be up to 20 feet tall, and you shape it as one 50-foot square, one hundred 5-foot squares that are contiguous, or twenty-five 10-foot squares that are contiguous.When you cast this spell, you can specify individuals that are unaffected by the spell's effects. You can also specify a password that, when spoken aloud within 5 feet of the warded area, makes the speaker immune to its effects.The spell creates the effects below within the warded area. Dispel Magic has no effect on Guards and Wards itself, but each of the following effects can be dispelled. If all four are dispelled, Guards and Wards ends. If you cast the spell every day for 365 days on the same area, the spell thereafter lasts until all its effects are dispelled. Corridors. Fog fills all the warded corridors, making them Heavily Obscured. In addition, at each intersection or branching passage offering a choice of direction, there is a 50 percent chance that a creature other than you believes it is going in the opposite direction from the one it chooses. Doors. All doors in the warded area are magically locked, as if sealed by the Arcane Lock spell. In addition, you can cover up to ten doors with an illusion to make them appear as plain sections of wall. Stairs. Webs fill all stairs in the warded area from top to bottom, as in the Web spell. These strands regrow in 10 minutes if they are destroyed while Guards and Wards lasts. Other Spell Effect. Place one of the following magical effects within the warded area:Dancing Lights in four corridors, with a simple program that the lights repeat as long as Guards and Wards lastsMagic Mouth in two locationsStinking Cloud in two locations (the vapors return within 10 minutes if dispersed while Guards and Wards lasts)Gust of Wind in one corridor or room (the wind blows continuously while the spell lasts)Suggestion in one 5-foot square; any creature that enters that square receives the suggestion mentally",
        },
      },
    },
    {
      castingTime: {
        type: "bonus_action",
      },
      classes: ["sorcerer", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/Arcane Vigor",
      level: 2,
      name: {
        en: "Arcane Vigor",
        it: "Vigore Arcano",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 242,
      },
      text: {
        base: {
          en: "You tap into your life force to heal yourself. Roll one or two of your unexpended Hit Point Dice, and regain a number of Hit Points equal to the roll's total plus your spellcasting ability modifier. Those dice are then expended.",
        },
        upgrade: {
          en: "The number of unexpended Hit Dice you can roll increases by one for each spell slot level above 2.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["cleric", "paladin"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Warding Bond",
      level: 2,
      materials: {
        en: "a pair of platinum rings worth 50+ GP each, which you and the target must wear for the duration",
        it: "un paio di anelli di platino del valore di 50 mo o più, che l'incantatore e il bersaglio devono indossare per la durata dell'incantesimo",
      },
      name: {
        en: "Warding Bond",
        it: "Vincolo di Interdizione",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 340,
      },
      text: {
        base: {
          en: "You touch another creature that is willing and create a mystic connection between you and the target until the spell ends. While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has Resistance to all damage. Also, each time it takes damage, you take the same amount of damage.The spell ends if you drop to 0 Hit Points or if you and the target become separated by more than 60 feet. It also ends if the spell is cast again on either of the connected creatures.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "cleric", "sorcerer", "warlock", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 1,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/True Seeing",
      level: 6,
      materials: {
        en: "mushroom powder worth 25+ GP, which the spell consumes",
        it: "polvere di funghi del valore di 25 mo o più, che l'incantesimo consuma",
      },
      name: {
        en: "True Seeing",
        it: "Visione del Vero",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "divination",
      source: {
        book: "PHB'24",
        page: 336,
      },
      text: {
        base: {
          en: "For the duration, the willing creature you touch has Truesight with a range of 120 feet.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "sorcerer", "wizard"],
      concentration: false,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "instantaneous",
      },
      id: "PHB'24/False Life",
      level: 1,
      materials: {
        en: "a drop of alcohol",
        it: "una goccia di alcol",
      },
      name: {
        en: "False Life",
        it: "Vita Falsata",
      },
      range: {
        type: "self",
      },
      ritual: false,
      school: "necromancy",
      source: {
        book: "PHB'24",
        page: 271,
      },
      text: {
        base: {
          en: "You gain 2d4 + 4 Temporary Hit Points.",
        },
        upgrade: {
          en: "You gain 5 additional Temporary Hit Points for each spell slot level above 1.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["artificer", "sorcerer", "warlock", "wizard"],
      concentration: true,
      components: {
        m: true,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: true,
      },
      id: "PHB'24/Fly",
      level: 3,
      materials: {
        en: "a feather",
        it: "una piuma",
      },
      name: {
        en: "Fly",
        it: "Volare",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "transmutation",
      source: {
        book: "PHB'24",
        page: 276,
      },
      text: {
        base: {
          en: "You touch a willing creature. For the duration, the target gains a Fly Speed of 60 feet and can hover. When the spell ends, the target falls if it is still aloft unless it can stop the fall.",
        },
        upgrade: {
          en: "You can target one additional creature for each spell slot level above 3.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "wizard"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 24,
        unit: "hour",
        upTo: false,
      },
      id: "PHB'24/Mind Blank",
      level: 8,
      name: {
        en: "Mind Blank",
        it: "Vuoto Mentale",
      },
      range: {
        type: "touch",
      },
      ritual: false,
      school: "abjuration",
      source: {
        book: "PHB'24",
        page: 298,
      },
      text: {
        base: {
          en: "Until the spell ends, one willing creature you touch has Immunity to Psychic damage and the Charmed condition. The target is also unaffected by anything that would sense its emotions or alignment, read its thoughts, or magically detect its location, and no spell—not even Wish—can gather information about the target, observe it remotely, or control its mind.",
        },
      },
    },
    {
      castingTime: {
        type: "action",
      },
      classes: ["bard", "cleric", "paladin"],
      concentration: false,
      components: {
        m: false,
        s: true,
        v: true,
      },
      duration: {
        type: "time",
        value: 10,
        unit: "minute",
        upTo: false,
      },
      id: "PHB'24/Zone of Truth",
      level: 2,
      name: {
        en: "Zone of Truth",
        it: "Zona di Verità",
      },
      range: {
        type: "distance",
        imperial: {
          value: 60,
          unit: "ft",
        },
        metric: {
          value: 18,
          unit: "m",
        },
      },
      ritual: false,
      school: "enchantment",
      source: {
        book: "PHB'24",
        page: 343,
      },
      text: {
        base: {
          en: "You create a magical zone that guards against deception in a 15-foot-radius Sphere centered on a point within range. Until the spell ends, a creature that enters the spell's area for the first time on a turn or starts its turn there makes a Charisma saving throw. On a failed save, a creature can't speak a deliberate lie while in the radius. You know whether a creature succeeds or fails on this save.An affected creature is aware of the spell and can avoid answering questions to which it would normally respond with a lie. Such a creature can be evasive yet must be truthful.",
        },
      },
    },
  ],
  (spell) => spell.id,
);

export default dndSpells;
