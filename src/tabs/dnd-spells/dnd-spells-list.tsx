import { Center, Flex } from "@chakra-ui/react";
import { memo } from "react";
import { type DndSpell, dndSpellsView } from "../../models/dnd";
import DndSpellCard, { type DndSpellCardProps } from "./dnd-spell-card";
import {
  useDndSpellsSelectionSelected,
  useDndSpellsSelectionToggle,
} from "./dnd-spells-selection";
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
            <DndSpellCard1 key={spell.id} spell={spell} view={view} />
          ))}
        </Flex>
      )}
    </Flex>
  );
}

export default memo(DndSpellsList);

type DndSpellCard1Props = Omit<DndSpellCardProps, "onClickSpell" | "selected">;

function DndSpellCard1(props: DndSpellCard1Props) {
  const toggle = useDndSpellsSelectionToggle(props.spell.id);
  const selected = useDndSpellsSelectionSelected(props.spell.id);

  return <DndSpellCard {...props} onClickSpell={toggle} selected={selected} />;
}
