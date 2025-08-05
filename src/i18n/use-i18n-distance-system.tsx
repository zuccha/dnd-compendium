import { createStorePersistent } from "../utils/store-persistent";
import { i18nDistanceSystemSchema } from "./i18n-distance";

const i18nDistanceSystemStore = createStorePersistent(
  "i18n.distance_system",
  "imperial",
  i18nDistanceSystemSchema.parse,
);

export default function useI18nDistanceSystem() {
  return i18nDistanceSystemStore.use();
}
