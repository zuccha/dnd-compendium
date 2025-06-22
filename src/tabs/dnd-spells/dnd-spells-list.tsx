import { Center, Flex } from "@chakra-ui/react";
import { memo } from "react";
import { type DndSpell, dndSpellsView } from "../../models/dnd";
import DndSpellCard from "./dnd-spell-card";
import DndSpellsTable from "./dnd-spells-table";

export type DnnSpellsListProps = {
  spells: DndSpell[];
  view: number;
  zoom: number;
};

function DndSpellsList({ spells, view, zoom }: DnnSpellsListProps) {
  return (
    <Flex justifyContent="center" maxW="64em" py={4} w="100%">
      {spells.length === 0 ? (
        <Center mt="25%">No spells found</Center>
      ) : view === dndSpellsView.table ? (
        <DndSpellsTable spells={spells} />
      ) : (
        <Flex
          alignItems="start"
          fontSize={`${zoom}em`}
          gap="1em"
          justifyContent="center"
          w="100%"
          wrap="wrap"
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
