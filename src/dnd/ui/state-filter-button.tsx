import { Button, type ButtonProps } from "../../components/ui/button";
import type { StateFilter } from "../models/filter";

export type StateFilterButtonProps = {
  state: StateFilter;
  onChangeState: (state: StateFilter) => void;
} & Omit<ButtonProps, "colorPalette" | "onClick" | "variant">;

export default function StateFilterButton({
  onChangeState,
  state,
  ...rest
}: StateFilterButtonProps) {
  const toggleState = () => onChangeState(nextStateByState[state]);

  return (
    <Button
      {...rest}
      colorPalette={colorPaletteByState[state]}
      onClick={toggleState}
      variant={variantByState[state]}
    />
  );
}

const colorPaletteByState = {
  negative: "red",
  neutral: "gray",
  positive: "green",
} as const;

const variantByState = {
  negative: "surface",
  neutral: "outline",
  positive: "surface",
} as const;

const nextStateByState = {
  negative: "neutral",
  neutral: "positive",
  positive: "negative",
} as const;
