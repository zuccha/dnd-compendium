import { Center, Flex } from "@chakra-ui/react";
import DndSpellCard from "./dnd-spell-card";
import type { DndSpell } from "../../models/dnd";
import { memo } from "react";

export type DnnSpellsListProps = {
  spells: DndSpell[];
  view: number;
  zoom: number;
};

function DndSpellsList({ spells, view, zoom }: DnnSpellsListProps) {
  return (
    <Flex maxW="64em" w="100%" justifyContent="center" py={4}>
      {spells.length === 0 ? (
        <Center mt="25%">No spells found</Center>
      ) : (
        <Flex
          wrap="wrap"
          gap="1em"
          w="100%"
          alignItems="start"
          justifyContent="center"
          fontSize={`${zoom}em`}
        >
          {spells.map((spell) => (
            <DndSpellCard key={spell.name.en} spell={spell} view={view} />
          ))}
        </Flex>
      )}
    </Flex>
  );
}

export default memo(DndSpellsList);
