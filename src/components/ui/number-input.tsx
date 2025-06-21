import { NumberInput as ChakraNumberInput } from "@chakra-ui/react";
import * as React from "react";

export type NumberInputProps = ChakraNumberInput.RootProps;

export const NumberInput = React.forwardRef<HTMLDivElement, NumberInputProps>(
  function NumberInput(props, ref) {
    return (
      <ChakraNumberInput.Root ref={ref} variant="outline" {...props}>
        <ChakraNumberInput.Input {...props} />
        <ChakraNumberInput.Control>
          <ChakraNumberInput.IncrementTrigger />
          <ChakraNumberInput.DecrementTrigger />
        </ChakraNumberInput.Control>
      </ChakraNumberInput.Root>
    );
  }
);

export const NumberInputField = ChakraNumberInput.Input;
export const NumberInputScrubber = ChakraNumberInput.Scrubber;
export const NumberInputLabel = ChakraNumberInput.Label;

export default NumberInput;
