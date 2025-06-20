import { Center, Heading, HStack, VStack } from "@chakra-ui/react";
import { ColorModeButton } from "./components/ui/color-mode";
import DndSpellsTab from "./tabs/dnd-spells/dnd-spells-tab";

function App() {
  return (
    <Center>
      <VStack maxW="64em" w="100%">
        <HStack w="100%" px={4} py={2} justifyContent="space-between">
          <Heading>DnD spells</Heading>
          <ColorModeButton />
        </HStack>

        <DndSpellsTab />
      </VStack>
    </Center>
  );
}

export default App;
