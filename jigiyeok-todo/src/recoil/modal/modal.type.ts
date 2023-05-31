import { ReactNode } from "react";

export type Modal<State extends Record<string, any> = any> = {
  render: (props: ModalProps<State>) => ReactNode;
};
export type ModalProps<State extends Record<string, any> = any> = {
  onClose: () => void;
  state: State;
};

export type ModalState<P extends Modal> = Parameters<P["render"]>[0]["state"];

export type ModalAtomType = {
  open: Modal["render"];
  state?: ModalState<Modal>;
};
