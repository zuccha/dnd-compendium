import { Box, Flex } from "@chakra-ui/react";
import { memo } from "react";
import DndSpellsListCards from "./dnd-spells-list-cards";
import DndSpellsListTable from "./dnd-spells-list-table";
import { useDndSpellsOptionsView } from "./dnd-spells-store";
import { dndSpellsOptionsView } from "./dnd-spells-types";

export default memo(function DndSpellsList() {
  const [view] = useDndSpellsOptionsView();

  return (
    <Flex flex={1} justifyContent="center" overflow="auto" w="100%">
      <Box maxW="64em" pt={4} w="100%">
        {view === dndSpellsOptionsView.table ? (
          <DndSpellsListTable />
        ) : (
          <DndSpellsListCards />
        )}

        <Box h={4} />
      </Box>
    </Flex>
  );
});
