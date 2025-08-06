import { z } from "zod/v4";
import { createStorePersistent } from "../utils/store-persistent";
import DndSpellsHeader from "./dnd-spells/dnd-spells-header";
import DndSpellsList from "./dnd-spells/dnd-spells-list";
import DndWeaponsHeader from "./dnd-weapons/dnd-weapons-header";
import DndWeaponsList from "./dnd-weapons/dnd-weapons-list";

export const dndTabIdSchema = z.enum(["spells", "weapons"]);

export const dndTabIds = dndTabIdSchema.options;

export type DndTabId = z.infer<typeof dndTabIdSchema>;

export type DndTab = {
  Content: React.FC;
  Header: React.FC;
};

export const dndTabs: Record<DndTabId, DndTab> = {
  spells: { Content: DndSpellsList, Header: DndSpellsHeader },
  weapons: { Content: DndWeaponsList, Header: DndWeaponsHeader },
};

const selectedDndTabStore = createStorePersistent(
  "dnd.tabs.id.selected",
  "spells",
  dndTabIdSchema.parse,
);

export const useSelectedDndTabId = selectedDndTabStore.use;
