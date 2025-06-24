import { Flex } from "@chakra-ui/react";
import { memo } from "react";
import DndSpellsListCards from "./dnd-spells-list-cards";
import DndSpellsListTable from "./dnd-spells-list-table";
import { useDndSpellsOptionsView } from "./dnd-spells-store";
import { dndSpellsOptionsView } from "./dnd-spells-types";

export default memo(function DndSpellsList() {
  const [view] = useDndSpellsOptionsView();

  return (
    <Flex justifyContent="center" maxW="64em" py={4} w="100%">
      {view === dndSpellsOptionsView.table ? (
        <DndSpellsListTable />
      ) : (
        <DndSpellsListCards />
      )}
    </Flex>
  );
});
