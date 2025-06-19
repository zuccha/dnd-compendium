import type { MtgCard } from "./mtg-card";
import type { MtgColor } from "./mtg-color";

export type MtgCombo = {
  colors: MtgColor[];
  components: MtgCard[][];
  results: string[];
};
