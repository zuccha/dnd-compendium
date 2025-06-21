import { Heading, HStack } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";

export default function AppHeader() {
  return (
    <HStack w="100%" px={1} py={2} justifyContent="space-between">
      <Heading>DnD spells</Heading>
      <ColorModeButton />
    </HStack>
  );
}
