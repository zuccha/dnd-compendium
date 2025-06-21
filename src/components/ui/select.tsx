import {
  Select as ChakraSelect,
  createListCollection as chakraCreateListCollection,
} from "@chakra-ui/react";
import type { SelectRootProps as ChakraSelectRootProps } from "@chakra-ui/react";

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
          <ChakraSelect.Indicator />
          <ChakraSelect.ClearTrigger />
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

export const createListCollection = chakraCreateListCollection;
