import { useCallback, useLayoutEffect, useState } from "react";
import { z } from "zod/v4";
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

function readTabIdFromUrl(): DndTabId {
  const hash = window.location.hash.substring(1);
  const initialTabIdResult = dndTabIdSchema.safeParse(hash);
  return initialTabIdResult.success ? initialTabIdResult.data : "spells";
}

export const useSelectedDndTabId = (): [
  DndTabId,
  (tabId: DndTabId) => void,
] => {
  const [id, setId] = useState(readTabIdFromUrl);

  const setPathname = useCallback((nextId: DndTabId) => {
    window.location.hash = nextId;
  }, []);

  useLayoutEffect(() => {
    const update = () => setId(readTabIdFromUrl());
    window.addEventListener("pushstate", update);
    window.addEventListener("replacestate", update);
    window.addEventListener("popstate", update);
    return () => {
      window.removeEventListener("pushstate", update);
      window.removeEventListener("replacestate", update);
      window.removeEventListener("popstate", update);
    };
  }, []);

  return [id, setPathname];
};
