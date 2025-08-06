import { Center, Checkbox, Flex, Span, Table, VStack } from "@chakra-ui/react";
import { type ReactNode, useState } from "react";
import RichText from "../../components/ui/rich-text";
import type { DataStore } from "./dnd-data-store";

type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

export type DndDataListTableColumn<DndDataLocalized> = {
  header: string;
  key: keyof DndDataLocalized;
  style?: Table.ColumnHeaderProps;
};

export type DndDataListTableProps<
  DndData extends { id: string },
  DndDataLocalized,
  DndFilters,
> = {
  columns: DndDataListTableColumn<DndDataLocalized>[];
  store: DataStore<DndData, DndDataLocalized, DndFilters>;
  textKey: StringKeys<DndDataLocalized>;
};

export default function DndDataListTable<
  DndData extends { id: string },
  DndDataLocalized,
  DndFilters,
>({
  columns,
  store,
  textKey,
}: DndDataListTableProps<DndData, DndDataLocalized, DndFilters>) {
  const dataIds = store.useVisibleDataIds();

  if (dataIds.length === 0) return <Center mt="25%">Nothing found</Center>;

  return (
    <Table.Root interactive size="sm">
      <Table.Header>
        <DndDataListTableHeader
          columns={columns}
          size={dataIds.length}
          store={store}
        />
      </Table.Header>
      <Table.Body>
        {dataIds.map((id) => (
          <DndDataListTableRow
            columns={columns}
            dataId={id}
            key={id}
            store={store}
            textKey={textKey}
          />
        ))}
      </Table.Body>
    </Table.Root>
  );
}

function DndDataListTableHeader<
  DndData extends { id: string },
  DndDataLocalized,
  DndFilters,
>({
  columns,
  size,
  store,
}: Omit<
  DndDataListTableProps<DndData, DndDataLocalized, DndFilters>,
  "textKey"
> & {
  size: number;
}) {
  const count = store.useSelectedVisibleDataCount();

  return (
    <Table.Row>
      <Table.ColumnHeader w="2em">
        <Flex alignItems="center">
          <Checkbox.Root
            checked={
              count === size ? true : count === 0 ? false : "indeterminate"
            }
            onCheckedChange={
              count === size
                ? store.deselectAllVisibleData
                : store.selectAllVisibleData
            }
            position="static"
            size="sm"
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label />
          </Checkbox.Root>
        </Flex>
      </Table.ColumnHeader>
      {columns.map((column) => (
        <Table.ColumnHeader key={column.header} {...column.style}>
          {column.header}
        </Table.ColumnHeader>
      ))}
    </Table.Row>
  );
}

function DndDataListTableRow<
  DndData extends { id: string },
  DndDataLocalized,
  DndFilters,
>({
  columns,
  dataId,
  store,
  textKey,
}: DndDataListTableProps<DndData, DndDataLocalized, DndFilters> & {
  dataId: string;
}) {
  const dataLocalized = store.useLocalizedData(dataId);
  const selected = store.useIsDataSelected(dataId);
  const [expanded, setExpanded] = useState(false);

  const text = dataLocalized[textKey] as string;

  return (
    <>
      <Table.Row onClick={() => setExpanded((prev) => !prev)}>
        <Table.Cell alignItems="center">
          <Flex alignItems="center">
            <Checkbox.Root
              checked={selected}
              onCheckedChange={() => store.toggleDataSelection(dataId)}
              onClick={(e) => e.stopPropagation()}
              position="static"
              size="sm"
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label />
            </Checkbox.Root>
          </Flex>
        </Table.Cell>

        {columns.map((column) => (
          <Table.Cell key={column.header}>
            {`${dataLocalized[column.key]}`}
          </Table.Cell>
        ))}
      </Table.Row>

      {expanded && text && (
        <Table.Row>
          <Table.Cell colSpan={columns.length + 1}>
            <VStack align="flex-start" gap={1} w="full">
              {text.split("\n").map((paragraph, i) => (
                <RichText key={i} patterns={patterns} text={paragraph} />
              ))}
            </VStack>
          </Table.Cell>
        </Table.Row>
      )}
    </>
  );
}

const patterns = [
  {
    regex: /\*\*(.+?)\*\*/,
    render: (val: ReactNode) => <Span fontWeight="bold">{val}</Span>,
  },
  {
    regex: /_(.+?)_/,
    render: (val: ReactNode) => <Span fontStyle="italic">{val}</Span>,
  },
];
