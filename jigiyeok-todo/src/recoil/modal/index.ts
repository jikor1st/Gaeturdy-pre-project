import { atom } from "recoil";
import { ModalAtomType } from "./modal.type";

export const ModalAtom = atom<ModalAtomType | null>({
  key: "modal",
  default: null,
});
