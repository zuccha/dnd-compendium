import { useState, useCallback } from "react";

export default function useStateBoolean(
  defaultState: boolean
): [boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>] {
  const [active, setActive] = useState(defaultState);
  const toggle = useCallback(() => setActive((prev) => !prev), []);
  return [active, toggle, setActive];
}
