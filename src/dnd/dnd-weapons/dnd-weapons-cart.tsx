import DndDataCart from "../dnd-data/dnd-data-cart";
import dndWeaponsStore from "./dnd-weapons-store";

export default function DndWeaponsCart() {
  return <DndDataCart store={dndWeaponsStore} />;
}
