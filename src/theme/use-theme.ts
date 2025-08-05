import { useCallback } from "react";
import { createStorePersistent } from "../utils/store-persistent";
import { type Theme, themeSchema } from "./theme";

const themeStore = createStorePersistent("theme", "light", themeSchema.parse);

export default function useTheme(): [
  Theme,
  React.Dispatch<React.SetStateAction<Theme>>,
  () => void,
] {
  const [theme, setTheme] = themeStore.use();

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, [setTheme]);

  return [theme, setTheme, toggleTheme];
}
