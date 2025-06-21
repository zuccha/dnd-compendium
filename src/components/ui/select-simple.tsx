import { Select as ChakraSelect } from "@chakra-ui/react";
import type { SelectRootProps as ChakraSelectRootProps } from "@chakra-ui/react";

export type SelectSimpleProps = ChakraSelectRootProps & {
  placeholder?: string;
};

export default function SelectSimple(props: SelectSimpleProps) {
  return (
    <ChakraSelect.Root {...props}>
      <ChakraSelect.HiddenSelect />

      <ChakraSelect.Control>
        <ChakraSelect.Trigger>
          <ChakraSelect.ValueText placeholder={props.placeholder} />
        </ChakraSelect.Trigger>
        <ChakraSelect.IndicatorGroup>
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
