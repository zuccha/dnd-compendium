import { VStack } from "@chakra-ui/react";
import DndSpellsHeader from "./dnd-spells-header";
import DndSpellsList from "./dnd-spells-list";

export default function DndSpellsTab() {
  return (
    <VStack gap={0} h="100vh" w="100%">
      <DndSpellsHeader />
      <DndSpellsList />
    </VStack>
  );
}
