import { Center, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import AppContent from "./app-content";
import AppHeader from "./app-header";
import { fetchDndSpells } from "./dnd/dnd-spells/dnd-spells-store";
import { dndTabs, useSelectedDndTabId } from "./dnd/dnd-tabs";
import useAsyncLayoutEffect from "./hooks/use-async-layout-effect";

type AppState = "initial" | "loading" | "success" | "failure";

function App() {
  const [state, setState] = useState<AppState>("initial");
  const [selectedTabId] = useSelectedDndTabId();

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

  const { Content, Header } = dndTabs[selectedTabId];

  return (
    <VStack gap={0} h="100vh" w="100%">
      <AppHeader>
        <Header />
      </AppHeader>
      <AppContent>
        <Content />
      </AppContent>
    </VStack>
  );
}

export default App;
