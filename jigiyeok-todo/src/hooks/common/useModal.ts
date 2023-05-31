import { useSetRecoilState } from "recoil";
import { Modal, ModalState } from "@/recoil/modal/modal.type";
import { openModalSelector } from "@/recoil/modal/selectors";

type ModalOption<M extends Modal> = {
  state?: ModalState<M>;
};
export default function useModal<Modals extends Record<string, Modal>>(
  modals: Modals
) {
  const _open = useSetRecoilState(openModalSelector);

  return {
    open: <Name extends keyof Modals>(
      modalName: Name,
      option: ModalOption<Modals[Name]> = {}
    ) => {
      _open({
        open: modals[modalName].render,
        state: option.state,
      });
    },
  };
}
