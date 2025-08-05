import { Box, Flex } from "@chakra-ui/react";
import { memo } from "react";
import DndSpellsListCards from "./dnd-spells-list-cards";
import DndSpellsListTable from "./dnd-spells-list-table";
import { useDndSpellsView } from "./dnd-spells-store";

export default memo(function DndSpellsList() {
  const [view] = useDndSpellsView();

  return (
    <Flex flex={1} justifyContent="center" overflow="auto" w="100%">
      <Box maxW="64em" pt={4} w="100%">
        {view.type === "table" ? (
          <DndSpellsListTable />
        ) : (
          <DndSpellsListCards />
        )}
        <Box h={4} />
      </Box>
    </Flex>
  );
});
