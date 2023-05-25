import { LocalStorageValue } from "@/type/localStorage";

type LocalStorageKeyType = keyof LocalStorageValue;

const localStorageController = {
    getItem<K extends LocalStorageKeyType>(
        key : K
    ): LocalStorageValue[K] | null {
        const item = localStorage.getItem(key);
        return item ? (JSON.parse(item) as LocalStorageValue[K])
        : null;
    },
    setItem<K extends LocalStorageKeyType> (
        key : K,
        value: LocalStorageValue[K]
    ) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    removeItem(key : LocalStorageKeyType){
        localStorage.removeItem(key);
    }
}

export default localStorageController;