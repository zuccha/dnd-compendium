import { Flex } from "@chakra-ui/react";
import { useMemo } from "react";
import dndSpells from "../../data/dnd-spells";
// import { dndSpellsRaw } from "../../data/dnd-spells-raw";
// import dndSpellsRawToDndSpells from "../../utils/dnd-spells-raw-to-dnd-spells";
import DndSpellCard from "./dnd-spell-card";

export default function DndSpellList() {
  const filteredDnDSpells = useMemo(() => {
    // console.log(
    //   dndSpellsRawToDndSpells(dndSpellsRaw).sort((s1, s2) => {
    //     if (s1.name.en < s2.name.en) return -1;
    //     if (s1.name.en > s2.name.en) return 1;
    //     return 0;
    //   })
    // );
    return dndSpells;
  }, []);

  return (
    <Flex wrap="wrap" gap={4} w="100%" justifyContent="center">
      {filteredDnDSpells.map((spell) => (
        <DndSpellCard key={spell.name.en} spell={spell} />
      ))}
    </Flex>
  );
}
