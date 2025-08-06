import DndSpellsListCards from "./dnd-spells-list-cards";
import DndSpellsListTable from "./dnd-spells-list-table";
import dndSpellsStore from './dnd-spells-store';

export default function DndSpellsList() {
  const [view] = dndSpellsStore.useView();

  return view.type === "table" ? (
    <DndSpellsListTable />
  ) : (
    <DndSpellsListCards />
  );
}
