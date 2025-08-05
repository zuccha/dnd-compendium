import { Center, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useInitializeDndSpells } from "./dnd/dnd-spells/dnd-spells-store";
import DndSpellsTab from "./dnd/dnd-spells/dnd-spells-tab";
import useAsyncLayoutEffect from "./hooks/use-async-layout-effect";

type AppState = "initial" | "loading" | "success" | "failure";

function App() {
  const [state, setState] = useState<AppState>("initial");
  const initializeSpells = useInitializeDndSpells();

  useAsyncLayoutEffect(async () => {
    setState("loading");
    try {
      await initializeSpells();
      setState("success");
    } catch {
      setState("failure");
    }
  }, [initializeSpells]);

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

  return <DndSpellsTab />;
}

export default App;
