import { createStorePersistent } from "../utils/store-persistent";
import { i18nSystemSchema } from "./i18n-system";

const i18nSystemStore = createStorePersistent(
  "i18n.system",
  "imperial",
  i18nSystemSchema.parse,
);

const useI18nSystem = i18nSystemStore.use;

export default useI18nSystem;
