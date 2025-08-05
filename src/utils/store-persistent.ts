import { useCallback, useEffect, useState } from "react";

type Callback<T> = (value: T) => void;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const listeners = new Map<string, Set<Callback<any>>>();

const fullId = (id: string) => `dnd/${id}`;

export function createStorePersistent<T>(
  id: string,
  initialValue: T,
  parse: (maybeT: unknown) => T,
) {
  id = fullId(id);

  const get = (): T => {
    try {
      const stringOrNull = localStorage.getItem(id);
      return stringOrNull === null
        ? initialValue
        : parse(JSON.parse(stringOrNull));
    } catch {
      localStorage.removeItem(id);
      return initialValue;
    }
  };

  const set = (value: T): void => {
    localStorage.setItem(id, JSON.stringify(value));
    listeners.get(id)?.forEach((callback) => callback(value));
  };

  const subscribe = (callback: Callback<T>): (() => void) => {
    if (!listeners.has(id)) listeners.set(id, new Set());
    listeners.get(id)!.add(callback);
    return () => {
      listeners.get(id)?.delete(callback);
      if (listeners.get(id)?.size === 0) listeners.delete(id);
    };
  };

  const isUpdater = <T>(
    maybeSettingUpdater: unknown,
  ): maybeSettingUpdater is (prevSetting: T) => void => {
    return typeof maybeSettingUpdater === "function";
  };

  const use = (): [
    T,
    (nextValueOrUpdateValue: T | ((prevValue: T) => T)) => T,
  ] => {
    const [value, setValue] = useState(() => get());

    useEffect(() => {
      setValue(get());
      const callback = (nextValue: T) => setValue(nextValue);
      return subscribe(callback);
    }, []);

    const saveValue = useCallback(
      (nextValueOrUpdateValue: T | ((prevValue: T) => T)): T => {
        const nextValue = isUpdater<T>(nextValueOrUpdateValue)
          ? nextValueOrUpdateValue(get())
          : nextValueOrUpdateValue;
        set(nextValue);
        return nextValue;
      },
      [],
    );

    return [value, saveValue];
  };

  return { get, set, subscribe, use };
}
