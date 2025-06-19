import { Box, Center, Heading, HStack, Tabs, VStack } from "@chakra-ui/react";
import { ColorModeButton } from "./components/ui/color-mode";
import ComboTab from "./tabs/combo-tab";

function App() {
  return (
    <Center>
      <VStack maxW="64em" w="100%">
        <HStack w="100%" px={4} py={2} justifyContent="space-between">
          <Heading>MTG combos</Heading>
          <ColorModeButton />
        </HStack>

        <Tabs.Root w="100%" defaultValue="combos">
          <Tabs.List>
            <Tabs.Trigger value="combos">Combos</Tabs.Trigger>
            <Tabs.Trigger value="results">Results</Tabs.Trigger>
            <Tabs.Trigger value="payoffs">Payoffs</Tabs.Trigger>
          </Tabs.List>
          <Box px={4}>
            <Tabs.Content value="combos">
              <ComboTab />
            </Tabs.Content>
            <Tabs.Content value="results">Results</Tabs.Content>
            <Tabs.Content value="payoffs">Payoffs</Tabs.Content>
          </Box>
        </Tabs.Root>
      </VStack>
    </Center>
  );
}

export default App;
