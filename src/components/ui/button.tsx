import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { Button as ChakraButton } from "@chakra-ui/react";

export type ButtonProps = ChakraButtonProps;

export function Button(props: ButtonProps) {
  return <ChakraButton {...props} />;
}
