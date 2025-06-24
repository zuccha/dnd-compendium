export type NormalizedList<T> = {
  ids: string[];
  byId: Record<string, T>;
};

export function normalize<T>(
  items: T[],
  getId: (item: T) => string,
): NormalizedList<T> {
  const ids: string[] = new Array(items.length);
  const byId: Record<string, T> = {};
  for (const item of items) {
    const id = getId(item);
    ids.push(id);
    byId[id] = item;
  }
  return { byId, ids };
}
