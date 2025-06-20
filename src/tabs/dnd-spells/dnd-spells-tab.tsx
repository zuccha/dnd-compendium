import { HStack } from "@chakra-ui/react";
import DndSpellList from "./dnd-spell-list";

export default function DndSpellsTab() {
  return (
    <HStack w="100%">
      <DndSpellList />
    </HStack>
  );
}
