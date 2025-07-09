import {
  Icon,
  Select as ChakraSelect,
  useSelectContext,
} from "@chakra-ui/react";
import type { SelectRootProps as ChakraSelectRootProps } from "@chakra-ui/react";
import { LuCheck } from "react-icons/lu";

export type SelectProps = ChakraSelectRootProps & {
  placeholder?: string;
};

export default function Select(props: SelectProps) {
  return (
    <ChakraSelect.Root {...props}>
      <ChakraSelect.HiddenSelect />

      <ChakraSelect.Control>
        <ChakraSelect.Trigger>
          <ChakraSelect.ValueText placeholder={props.placeholder} />
        </ChakraSelect.Trigger>
        <ChakraSelect.IndicatorGroup>
          {props.multiple && <AllTrigger />}
          <ChakraSelect.ClearTrigger />
          <ChakraSelect.Indicator />
        </ChakraSelect.IndicatorGroup>
      </ChakraSelect.Control>

      <ChakraSelect.Positioner>
        <ChakraSelect.Content>
          {props.collection.items.map((item) => (
            <ChakraSelect.Item item={item} key={item.value}>
              {item.label}
              <ChakraSelect.ItemIndicator />
            </ChakraSelect.Item>
          ))}
        </ChakraSelect.Content>
      </ChakraSelect.Positioner>
    </ChakraSelect.Root>
  );
}

function AllTrigger() {
  const select = useSelectContext();
  return select.selectedItems.length === select.collection.size ? null : (
    <Icon
      color="fg.muted"
      cursor="default"
      display="block"
      onClick={select.selectAll}
      pointerEvents="auto"
      size="sm"
      zIndex={1}
    >
      <LuCheck />
    </Icon>
  );
}
