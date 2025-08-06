import DndSpellsListCards from "./dnd-spells-list-cards";
import DndSpellsListTable from "./dnd-spells-list-table";
import { useDndSpellsView } from "./dnd-spells-store";

export default function DndSpellsList() {
  const [view] = useDndSpellsView();

  return view.type === "table" ? (
    <DndSpellsListTable />
  ) : (
    <DndSpellsListCards />
  );
}
