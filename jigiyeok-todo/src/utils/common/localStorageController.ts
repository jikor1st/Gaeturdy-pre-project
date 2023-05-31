import { LocalStorageValuesType } from "@/types/localStorage";

type LocalStorageKeyType = keyof LocalStorageValuesType;
const localStorageController = {
  getItem<P extends LocalStorageKeyType>(
    key: P
  ): LocalStorageValuesType[P] | null {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as LocalStorageValuesType[P]) : null;
  },
  setItem<P extends LocalStorageKeyType>(
    key: P,
    value: LocalStorageValuesType[P]
  ) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  removeItem(key: LocalStorageKeyType) {
    localStorage.removeItem(key);
  },
};

export default localStorageController;
