import DndDataCart from "../dnd-data/dnd-data-cart";
import dndSpellsStore from "./dnd-spells-store";

export default function DndSpellsCart() {
  return <DndDataCart store={dndSpellsStore} />;
}
