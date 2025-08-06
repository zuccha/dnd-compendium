import { Box, Flex } from "@chakra-ui/react";
import { type ReactNode } from "react";

export type AppContentProps = {
  children: ReactNode;
};

export default function AppContent({ children }: AppContentProps) {
  return (
    <Flex flex={1} justifyContent="center" overflow="auto" w="100%">
      <Box maxW="64em" pt={4} w="100%">
        {children}
        <Box h={4} />
      </Box>
    </Flex>
  );
}
