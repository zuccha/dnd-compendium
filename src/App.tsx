import { Center, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import AppContent from "./app-content";
import AppHeader from "./app-header";
import DndSpellsHeader from "./dnd/dnd-spells/dnd-spells-header";
import DndSpellsList from "./dnd/dnd-spells/dnd-spells-list";
import { fetchDndSpells } from "./dnd/dnd-spells/dnd-spells-store";
import useAsyncLayoutEffect from "./hooks/use-async-layout-effect";

type AppState = "initial" | "loading" | "success" | "failure";

function App() {
  const [state, setState] = useState<AppState>("initial");

  useAsyncLayoutEffect(async () => {
    setState("loading");
    try {
      await fetchDndSpells();
      setState("success");
    } catch {
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

  return (
    <VStack gap={0} h="100vh" w="100%">
      <AppHeader>
        <DndSpellsHeader />
      </AppHeader>
      <AppContent>
        <DndSpellsList />
      </AppContent>
    </VStack>
  );
}

export default App;
