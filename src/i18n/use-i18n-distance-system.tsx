import { useStorePersistent } from "../utils/store-persistent";
import {
  type I18nDistanceSystem,
  i18nDistanceSystemSchema,
} from "./i18n-distance";

export default function useI18nDistanceSystem() {
  return useStorePersistent<I18nDistanceSystem>(
    "i18n.distance_system",
    "imperial",
    i18nDistanceSystemSchema.parse,
  );
}
