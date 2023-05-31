import { DefaultValue, selector } from "recoil";
import { ModalAtom } from "./index";
import { ModalAtomType } from "./modal.type";

export const openModalSelector = selector<Required<ModalAtomType> | null>({
  key: "modal/open",
  get: () => null,
  set({ set }, value) {
    if (value instanceof DefaultValue) return;

    set(ModalAtom, value);
  },
});

export const closeModalSelector = selector<void>({
  key: "modal/close",
  get: () => {},
  set: ({ set }) => set(ModalAtom, null),
});
