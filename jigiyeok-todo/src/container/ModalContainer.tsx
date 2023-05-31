import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import ReactDOM from "react-dom";
import { ModalAtom } from "@/recoil/modal";
import { closeModalSelector } from "@/recoil/modal/selectors";

const ModalContainer = () => {
  const modalStore = useRecoilValue(ModalAtom);
  const close = useSetRecoilState(closeModalSelector);
  const isOpen = modalStore !== null;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      {modalStore.open({
        onClose: close,
        state: modalStore.state,
      })}
    </>,
    document.body
  );
};

export default ModalContainer;
