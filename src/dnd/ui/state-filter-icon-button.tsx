import IconButton, {
  type IconButtonProps,
} from "../../components/ui/icon-button";
import type { StateFilter } from "../models/filter";

export type StateFilterIconButtonProps = {
  state: StateFilter;
  onChangeState: (state: StateFilter) => void;
} & Omit<IconButtonProps, "colorPalette" | "onClick" | "variant">;

export default function StateFilterIconButton({
  onChangeState,
  state,
  ...rest
}: StateFilterIconButtonProps) {
  const toggleState = () => onChangeState(nextStateByState[state]);

  return (
    <IconButton
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
