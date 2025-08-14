import { Center, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import AppCart from "./app-cart";
import AppContent from "./app-content";
import AppHeader from "./app-header";
import dndSpellsStore from "./dnd/dnd-spells/dnd-spells-store";
import { dndTabs, useSelectedDndTabId } from "./dnd/dnd-tabs";
import dndWeaponsStore from "./dnd/dnd-weapons/dnd-weapons-store";
import useAsyncLayoutEffect from "./hooks/use-async-layout-effect";

type AppState = "initial" | "loading" | "success" | "failure";

function App() {
  const [state, setState] = useState<AppState>("initial");
  const [selectedTabId] = useSelectedDndTabId();

  useAsyncLayoutEffect(async () => {
    setState("loading");
    try {
      await Promise.all([
        dndSpellsStore.fetchDataset(),
        dndWeaponsStore.fetchDataset(),
      ]);
      setState("success");
    } catch (e) {
      console.error(e);
      setState("failure");
    }
  }, []);

  if (state === "initial" || state === "loading") {
    return null;
  }

  if (state === "failure") {
    return (
      <Center h="100vh">
        <Text>An error occurred, please reload the page.</Text>
      </Center>
    );
  }

  const { Cart, Content, Header } = dndTabs[selectedTabId];

  return (
    <VStack gap={0} h="100vh" position="relative" w="100%">
      <AppHeader>
        <Header />
      </AppHeader>
      <AppContent>
        <Content />
      </AppContent>
      <AppCart>
        <Cart />
      </AppCart>
    </VStack>
  );
}

export default App;
