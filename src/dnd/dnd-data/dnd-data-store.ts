import { useCallback, useLayoutEffect, useMemo, useState } from "react";
import { z } from "zod/v4";
import type { I18nLanguage } from "../../i18n/i18n-language";
import type { I18n } from "../../i18n/use-i18n";
import useI18n from "../../i18n/use-i18n";
import { i18nLanguageStore } from "../../i18n/use-i18n-language";
import { type NormalizedList, normalize } from "../../utils/normalized-list";
import { createObservable } from "../../utils/observable";
import { createStore } from "../../utils/store";
import { createStorePersistent } from "../../utils/store-persistent";
import {
  type View,
  type ViewSortBy,
  type ViewSortOrder,
  viewSchema,
} from "../models/view";

export type DataStore<
  DndData extends { id: string },
  DndDataLocalized,
  DndFilters,
> = ReturnType<
  typeof createDndDataStore<DndData, DndDataLocalized, DndFilters>
>;

export function createDndDataStore<
  DndData extends { id: string },
  DndDataLocalized,
  DndFilters,
>({
  compareData,
  dataSchema,
  dataUrl,
  isDataVisible,
  localizeData,
  parseFilters,
  storeId,
}: {
  compareData: (
    data1: DndData,
    data2: DndData,
    sortBy: ViewSortBy,
    sortOrder: ViewSortOrder,
    lang: I18nLanguage,
  ) => number;
  dataSchema: z.ZodType<DndData>;
  dataUrl: string;
  isDataVisible: (data: DndData, filters: DndFilters) => boolean;
  localizeData: (data: DndData, i18n: I18n) => DndDataLocalized;
  parseFilters: (maybeT: unknown) => DndFilters;
  storeId: string;
}) {
  //----------------------------------------------------------------------------
  // Stores
  //----------------------------------------------------------------------------

  const defaultData = { byId: {}, ids: [] };
  const datasetStore = createStore<NormalizedList<DndData>>(defaultData);

  const filtersStore = createStorePersistent(
    `dnd.${storeId}.filters`,
    parseFilters({}),
    parseFilters,
  );

  const viewStore = createStorePersistent(
    `dnd.${storeId}.view`,
    viewSchema.parse({}),
    viewSchema.parse,
  );

  const visibleDataIdsStore = (() => {
    let visibleDataIds: string[] = [];

    const { notify, subscribe } = createObservable<string[]>();

    const refresh = () => {
      const lang = i18nLanguageStore.get();
      const dataset = datasetStore.get();
      const filters = filtersStore.get();
      const { sortBy, sortOrder } = viewStore.get();

      const isVisible = (id: string): boolean => {
        const data = dataset.byId[id];
        return isDataVisible(data, filters);
      };

      const compare = (id1: string, id2: string): number => {
        const data1 = dataset.byId[id1];
        const data2 = dataset.byId[id2];
        return compareData(data1, data2, sortBy, sortOrder, lang);
      };

      visibleDataIds = dataset.ids.filter(isVisible).sort(compare);
      notify(visibleDataIds);
    };

    datasetStore.subscribe(refresh);
    filtersStore.subscribe(refresh);
    viewStore.subscribe(refresh);
    i18nLanguageStore.subscribe(refresh);

    refresh();

    const get = () => visibleDataIds;

    return { get, subscribe };
  })();

  const selectedDataIdsStore = createStore<Record<string, boolean>>({});

  //----------------------------------------------------------------------------
  // Use Dataset
  //----------------------------------------------------------------------------

  function useDataset(): NormalizedList<DndData> {
    return datasetStore.useValue();
  }

  //----------------------------------------------------------------------------
  // Use Visible Data Ids
  //----------------------------------------------------------------------------

  function useVisibleDataIds(): string[] {
    const [ids, setIds] = useState(visibleDataIdsStore.get());
    useLayoutEffect(() => visibleDataIdsStore.subscribe(setIds), []);
    return ids;
  }

  //----------------------------------------------------------------------------
  // Use Selected Visible Datalist
  //----------------------------------------------------------------------------

  function useSelectedVisibleDatalist(): DndData[] {
    const dataset = useDataset();
    const selectedDataIds = selectedDataIdsStore.useValue();
    const visibleDataIds = useVisibleDataIds();
    return visibleDataIds
      .filter((id) => selectedDataIds[id])
      .map((id) => dataset.byId[id]);
  }

  //----------------------------------------------------------------------------
  // Use Data
  //----------------------------------------------------------------------------

  function useData(id: string): DndData {
    const dataset = datasetStore.useValue();
    return dataset.byId[id];
  }

  //----------------------------------------------------------------------------
  // Use Localized Data
  //----------------------------------------------------------------------------

  function useLocalizedData(id: string): DndDataLocalized {
    const i18n = useI18n();
    const dataset = useDataset();
    return useMemo(
      () => localizeData(dataset.byId[id], i18n),
      [dataset.byId, i18n, id],
    );
  }

  //----------------------------------------------------------------------------
  // Use Is Data Selected
  //----------------------------------------------------------------------------

  function useIsDataSelected(id: string): boolean {
    const selectedDataIds = selectedDataIdsStore.useValue();
    return selectedDataIds[id];
  }

  //----------------------------------------------------------------------------
  // Use Selected Visible Data Count
  //----------------------------------------------------------------------------

  function useSelectedVisibleDataCount(): number {
    const visibleDataIds = useVisibleDataIds();
    const selectedDataIds = selectedDataIdsStore.useValue();
    return visibleDataIds.filter((id) => selectedDataIds[id]).length;
  }

  //----------------------------------------------------------------------------
  // Use Filters
  //----------------------------------------------------------------------------

  function useFilters(): [
    DndFilters,
    (partialFilters: Partial<DndFilters>) => void,
  ] {
    const [filters, setFilters] = filtersStore.use();

    const setPartialFilters = useCallback(
      (partialFilters: Partial<DndFilters>) =>
        setFilters((prev) => ({ ...prev, ...partialFilters })),
      [setFilters],
    );

    return [filters, setPartialFilters];
  }

  //----------------------------------------------------------------------------
  // Use View
  //----------------------------------------------------------------------------

  function useView(): [View, (partialView: Partial<View>) => void] {
    const [view, setView] = viewStore.use();

    const setPartialView = useCallback(
      (partialView: Partial<View>) =>
        setView((prev) => ({ ...prev, ...partialView })),
      [setView],
    );

    return [view, setPartialView];
  }

  //----------------------------------------------------------------------------
  // Fetch Dataset
  //----------------------------------------------------------------------------

  async function fetchDataset(): Promise<void> {
    const response = await fetch(dataUrl);
    const json = await response.json();
    const datalist = z.array(dataSchema).parse(json);
    datasetStore.set(normalize(datalist, (data) => data.id));
  }

  //----------------------------------------------------------------------------
  // Select Data
  //----------------------------------------------------------------------------

  function selectData(id: string): void {
    const selectedDataIds = selectedDataIdsStore.get();
    if (!selectedDataIds[id])
      selectedDataIdsStore.set({ ...selectedDataIds, [id]: true });
  }

  //----------------------------------------------------------------------------
  // Select All Visible Data
  //----------------------------------------------------------------------------

  function selectAllVisibleData() {
    const visibleDataIds = visibleDataIdsStore.get();
    const selectedDataIds = { ...selectedDataIdsStore.get() };
    for (const visibleDataId of visibleDataIds)
      selectedDataIds[visibleDataId] = true;
    selectedDataIdsStore.set(selectedDataIds);
  }

  //----------------------------------------------------------------------------
  // Deselect Data
  //----------------------------------------------------------------------------

  function deselectData(id: string): void {
    const selectedDataIds = selectedDataIdsStore.get();
    if (selectedDataIds[id])
      selectedDataIdsStore.set({ ...selectedDataIds, [id]: false });
  }

  //----------------------------------------------------------------------------
  // Deselect All Visible Data
  //----------------------------------------------------------------------------

  function deselectAllVisibleData() {
    const visibleDataIds = visibleDataIdsStore.get();
    const selectedDataIds = { ...selectedDataIdsStore.get() };
    for (const visibleDataId of visibleDataIds)
      selectedDataIds[visibleDataId] = false;
    selectedDataIdsStore.set(selectedDataIds);
  }

  //----------------------------------------------------------------------------
  // Toggle Data Selection
  //----------------------------------------------------------------------------

  function toggleDataSelection(id: string): void {
    const selectedDataIds = selectedDataIdsStore.get();
    if (selectedDataIds[id])
      selectedDataIdsStore.set({ ...selectedDataIds, [id]: false });
    else selectedDataIdsStore.set({ ...selectedDataIds, [id]: true });
  }

  //----------------------------------------------------------------------------
  // Return
  //----------------------------------------------------------------------------

  return {
    deselectAllVisibleData,
    deselectData,
    fetchDataset,
    selectAllVisibleData,
    selectData,
    toggleDataSelection,
    useData,
    useDataset,
    useFilters,
    useIsDataSelected,
    useLocalizedData,
    useSelectedVisibleDataCount,
    useSelectedVisibleDatalist,
    useView,
    useVisibleDataIds,
  };
}
