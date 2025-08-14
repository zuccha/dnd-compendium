import {
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
  createListCollection,
} from "@chakra-ui/react";
import { type ReactNode, useCallback, useMemo } from "react";
import {
  LuCopy,
  LuDot,
  LuFileJson,
  LuSquareCheck,
  LuSquareX,
} from "react-icons/lu";
import NumberInput from "../../components/ui/number-input";
import SelectSimple from "../../components/ui/select-simple";
import { toaster } from "../../components/ui/toaster";
import useI18n, { type I18n } from "../../i18n/use-i18n";
import {
  type ViewSortOrder,
  type ViewType,
  viewSortOrders,
  viewTypes,
} from "../models/view";
import type { DataStore } from "./dnd-data-store";

export type DndDataHeaderProps<
  DndData extends { id: string },
  DndDataLocalized,
  DndFilters,
> = {
  children: ReactNode;
  hideViewSelection?: boolean;
  onLocalizeData: (data: DndData, i18n: I18n) => unknown;
  sortByItems: string[];
  store: DataStore<DndData, DndDataLocalized, DndFilters>;
};

export default function DndDataHeader<
  DndData extends { id: string },
  DndDataLocalized,
  DndFilters,
>({
  children,
  hideViewSelection = false,
  onLocalizeData,
  sortByItems,
  store,
}: DndDataHeaderProps<DndData, DndDataLocalized, DndFilters>) {
  const i18n = useI18n();
  const [view, setView] = store.useView();
  const count = store.useSelectedVisibleDataCount();

  const viewCollection = useMemo(() => {
    return createListCollection({
      items: viewTypes.map((viewType) => ({
        label: i18n.t(`dnd.data.view.type.${viewType}`),
        value: viewType,
      })),
    });
  }, [i18n]);

  const sortByCollection = useMemo(() => {
    return createListCollection({
      items: sortByItems.map((sortBy) => ({
        label: i18n.t(`dnd.data.view.sort_by.${sortBy}`),
        value: sortBy,
      })),
    });
  }, [i18n, sortByItems]);

  const sortOrderCollection = useMemo(() => {
    return createListCollection({
      items: viewSortOrders.map((sortOrder) => ({
        label: i18n.t(`dnd.data.view.sort_order.${sortOrder}`),
        value: sortOrder,
      })),
    });
  }, [i18n]);

  return (
    <VStack pb={2} px={1} w="100%">
      <HStack justify="space-between" w="100%" wrap="wrap">
        <HStack rowGap={2} separator={<Separator />} wrap="wrap">
          {!hideViewSelection && (
            <HStack>
              <SelectSimple
                collection={viewCollection}
                defaultValue={[view.type]}
                flex={0}
                minW="6em"
                name="dnd-data-view-type"
                onValueChange={(e) => setView({ type: e.value[0] as ViewType })}
                size="sm"
              />

              {view.type === "cards" && (
                <NumberInput
                  defaultValue={`${view.zoom * 100}%`}
                  formatOptions={{ style: "percent" }}
                  inputProps={{ w: "6em" }}
                  max={2}
                  min={0.5}
                  name="dnd-data-view-zoom"
                  onValueChange={(e) => setView({ zoom: e.valueAsNumber })}
                  size="sm"
                  step={0.1}
                />
              )}
            </HStack>
          )}

          <HStack>
            <SelectSimple
              collection={sortByCollection}
              defaultValue={[view.sortBy]}
              flex={0}
              minW="6em"
              name="dnd-data-view-sort-by"
              onValueChange={(e) => setView({ sortBy: e.value[0] })}
              size="sm"
            />

            <SelectSimple
              collection={sortOrderCollection}
              defaultValue={[view.sortOrder]}
              flex={0}
              minW="5em"
              name="dnd-data-view-sort-order"
              onValueChange={(e) =>
                setView({ sortOrder: e.value[0] as ViewSortOrder })
              }
              size="sm"
            />
          </HStack>

          <Text>{i18n.tpi("dnd.data.results", count, `${count}`)}</Text>
        </HStack>

        <HStack rowGap={2} separator={<Separator />} wrap="wrap">
          <HStack>
            <IconButton
              onClick={store.deselectAllVisibleData}
              size="sm"
              variant="outline"
            >
              <LuSquareX />
            </IconButton>

            <IconButton
              onClick={store.selectAllVisibleData}
              size="sm"
              variant="outline"
            >
              <LuSquareCheck />
            </IconButton>

            <CopySelectedDataToClipboard
              onLocalizeData={onLocalizeData}
              store={store}
            />
            <DownloadSelectedDataAsJson
              onLocalizeData={onLocalizeData}
              store={store}
            />
          </HStack>
        </HStack>
      </HStack>

      {children}
    </VStack>
  );
}

function CopySelectedDataToClipboard<
  DndData extends { id: string },
  DndDataLocalized,
  DndFilters,
>({
  onLocalizeData,
  store,
}: Omit<
  DndDataHeaderProps<DndData, DndDataLocalized, DndFilters>,
  "children" | "sortByItems" | "hideViewSelection"
>) {
  const i18n = useI18n();
  const datalist = store.useSelectedVisibleDatalist();

  const copySpellsAsJson = useCallback(async () => {
    const localizedDatalist = datalist.map((s) => onLocalizeData(s, i18n));
    const json = JSON.stringify(localizedDatalist, null, 2);
    await navigator.clipboard.writeText(json);
    toaster.success({ title: i18n.t("dnd.data.copied") });
  }, [i18n, datalist, onLocalizeData]);

  const disabled = datalist.length === 0;

  return (
    <IconButton disabled={disabled} onClick={copySpellsAsJson} size="sm">
      <LuCopy />
    </IconButton>
  );
}

function DownloadSelectedDataAsJson<
  DndData extends { id: string },
  DndDataLocalized,
  DndFilters,
>({
  onLocalizeData,
  store,
}: Omit<
  DndDataHeaderProps<DndData, DndDataLocalized, DndFilters>,
  "children" | "sortByItems" | "hideViewSelection"
>) {
  const i18n = useI18n();
  const datalist = store.useSelectedVisibleDatalist();

  const copySpellsAsJson = useCallback(async () => {
    const localizedDatalist = datalist.map((s) => onLocalizeData(s, i18n));
    const json = JSON.stringify(localizedDatalist, null, 2);
    const blob = new Blob([json], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `data.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, [i18n, datalist, onLocalizeData]);

  const disabled = datalist.length === 0;

  return (
    <IconButton disabled={disabled} onClick={copySpellsAsJson} size="sm">
      <LuFileJson />
    </IconButton>
  );
}

function Separator() {
  return (
    <Icon size="lg">
      <LuDot />
    </Icon>
  );
}
