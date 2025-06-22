import { IconButton } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";
import useTheme from "./use-theme";

export default function ThemeButton() {
  const [theme, _setColorMode, toggleTheme] = useTheme();
  return (
    <IconButton
      aria-label="Toggle color mode"
      // css={{ _icon: { height: "5", width: "5" } }}
      onClick={toggleTheme}
      size="sm"
      variant="ghost"
    >
      {theme === "dark" ? <LuMoon /> : <LuSun />}
    </IconButton>
  );
}
