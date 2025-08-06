import {
  IconButton as ChakraIconButton,
  type IconButtonProps as ChakraIconButtonProps,
} from "@chakra-ui/react";
import type { IconType } from "react-icons/lib";

export type IconButtonProps = Omit<ChakraIconButtonProps, "children"> & {
  Icon: IconType;
};

export default function IconButton(props: IconButtonProps) {
  return (
    <ChakraIconButton {...props}>
      <props.Icon />
    </ChakraIconButton>
  );
}
