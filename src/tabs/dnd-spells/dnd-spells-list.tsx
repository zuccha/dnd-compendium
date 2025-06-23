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

export default memo(function DndSpellsList({
  spells,
  view,
  zoom,
}: DnnSpellsListProps) {
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
            <DndSpellsListItem key={spell.id} spell={spell} view={view} />
          ))}
        </Flex>
      )}
    </Flex>
  );
});

function DndSpellsListItem(
  props: Omit<DndSpellCardProps, "onClickSpell" | "selected">,
) {
  const toggle = useDndSpellsSelectionToggle(props.spell.id);
  const selected = useDndSpellsSelectionSelected(props.spell.id);

  return <DndSpellCard {...props} onClickSpell={toggle} selected={selected} />;
}
