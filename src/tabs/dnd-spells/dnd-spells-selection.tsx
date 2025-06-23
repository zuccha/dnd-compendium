/* eslint-disable react-refresh/only-export-components */
import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type Callback = (id: string, selected: boolean) => void;

//------------------------------------------------------------------------------
// Context Value
//------------------------------------------------------------------------------

export type DndSpellsSelectionContextValue = {
  deselect: (id: string) => void;
  listeners: Map<string, Set<Callback>>;
  listenersAll: Set<Callback>;
  select: (id: string) => void;
  selected: Set<string>;
  subscribe: (id: string, callback: Callback) => () => void;
  subscribeAll: (callback: Callback) => () => void;
  toggle: (id: string) => void;
};

type Listeners = DndSpellsSelectionContextValue["listeners"];
type ListenersAll = DndSpellsSelectionContextValue["listenersAll"];
type Selected = DndSpellsSelectionContextValue["selected"];

//------------------------------------------------------------------------------
// Context
//------------------------------------------------------------------------------

export const DndSpellsSelectionContext = createContext<
  DndSpellsSelectionContextValue | undefined
>(undefined);

//------------------------------------------------------------------------------
// Provider
//------------------------------------------------------------------------------

export function DndSpellsSelectionProvider(props: { children: ReactNode }) {
  const listeners = useRef<Listeners>(new Map()).current;
  const listenersAll = useRef<ListenersAll>(new Set()).current;

  const selected = useRef<Selected>(new Set()).current;

  const subscribe = useCallback(
    (id: string, callback: Callback) => {
      if (!listeners.has(id)) listeners.set(id, new Set());
      listeners.get(id)!.add(callback);

      return () => {
        listeners.get(id)?.delete(callback);
        if (listeners.get(id)?.size === 0) listeners.delete(id);
      };
    },
    [listeners],
  );

  const subscribeAll = useCallback(
    (callback: Callback) => {
      listenersAll.add(callback);
      return () => listenersAll.delete(callback);
    },
    [listenersAll],
  );

  const deselect = useCallback(
    (id: string) => {
      if (selected.has(id)) {
        selected.delete(id);
        listeners.get(id)?.forEach((callback) => callback(id, false));
        listenersAll.forEach((callback) => callback(id, false));
      }
    },
    [listeners, listenersAll, selected],
  );

  const select = useCallback(
    (id: string) => {
      if (!selected.has(id)) {
        selected.add(id);
        listeners.get(id)?.forEach((callback) => callback(id, true));
        listenersAll.forEach((callback) => callback(id, true));
      }
    },
    [listeners, listenersAll, selected],
  );

  const toggle = useCallback(
    (id: string) => {
      if (selected.has(id)) {
        selected.delete(id);
        listeners.get(id)?.forEach((callback) => callback(id, false));
        listenersAll.forEach((callback) => callback(id, false));
      } else {
        selected.add(id);
        listeners.get(id)?.forEach((callback) => callback(id, true));
        listenersAll.forEach((callback) => callback(id, true));
      }
    },
    [listeners, listenersAll, selected],
  );

  const value = {
    deselect,
    listeners,
    listenersAll,
    select,
    selected,
    subscribe,
    subscribeAll,
    toggle,
  };

  return (
    <DndSpellsSelectionContext.Provider value={value}>
      {props.children}
    </DndSpellsSelectionContext.Provider>
  );
}

//------------------------------------------------------------------------------
// Use Context
//------------------------------------------------------------------------------

export function useDndSpellsSelectionContext() {
  const context = useContext(DndSpellsSelectionContext);
  if (!context)
    throw new Error("Must be used within DndSpellsSelectionProvider");
  return context;
}

//------------------------------------------------------------------------------
// Use Toggle
//------------------------------------------------------------------------------

export function useDndSpellsSelectionToggle(id: string) {
  const context = useDndSpellsSelectionContext();
  return useCallback(() => context.toggle(id), [context, id]);
}

//------------------------------------------------------------------------------
// Use Selected
//------------------------------------------------------------------------------

export function useDndSpellsSelectionSelected(id: string) {
  const context = useDndSpellsSelectionContext();
  const [selected, setSelected] = useState(context.selected.has(id));

  useLayoutEffect(
    () => context.subscribe(id, (_id, next) => setSelected(next)),
    [context, id],
  );

  return selected;
}

//------------------------------------------------------------------------------
// Use Count
//------------------------------------------------------------------------------

export function useDndSpellsSelectionCount() {
  const context = useDndSpellsSelectionContext();
  const [count, setCount] = useState(context.selected.size);

  useLayoutEffect(
    () => context.subscribeAll(() => setCount(context.selected.size)),
    [context],
  );

  return count;
}
