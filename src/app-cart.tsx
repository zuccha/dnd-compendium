import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";

export type AppCartProps = {
  children: ReactNode;
};

export default function AppCart({ children }: AppCartProps) {
  return (
    <Box bottom={6} position="absolute" right={6}>
      {children}
    </Box>
  );
}
