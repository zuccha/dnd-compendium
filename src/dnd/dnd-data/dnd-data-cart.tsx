import { HStack } from "@chakra-ui/react";
import { LuShoppingCart } from "react-icons/lu";
import IconButton from "../../components/ui/icon-button";
import { createStore } from "../../utils/store";
import type { DataStore } from "./dnd-data-store";

export type DndDataCartProps<
  DndData extends { id: string },
  DndDataLocalized,
  DndFilters,
> = {
  // onLocalizeData: (data: DndData, i18n: I18n) => unknown;
  store: DataStore<DndData, DndDataLocalized, DndFilters>;
};

export default function DndDataCart<
  DndData extends { id: string },
  DndDataLocalized,
  DndFilters,
>(_props: DndDataCartProps<DndData, DndDataLocalized, DndFilters>) {
  const [open, setOpen] = cartOpenStore.use();

  if (!open)
    return (
      <IconButton
        Icon={LuShoppingCart}
        borderRadius="full"
        onClick={() => setOpen(true)}
        size="xl"
        variant="outline"
      />
    );

  return (
    <HStack>
      <IconButton
        Icon={LuShoppingCart}
        borderRadius="full"
        onClick={() => setOpen(false)}
        size="xl"
      />
    </HStack>
  );
}

const cartOpenStore = createStore(false);
