import { User } from "firebase/auth";
import { atom } from "recoil";

export type UserAtomType = {
  isLoading: boolean;
  error: Error | null;
  data: User | null;
};
export const userAtom = atom<UserAtomType>({
  key: "user",
  default: {
    isLoading: true,
    error: null,
    data: null,
  },
});
