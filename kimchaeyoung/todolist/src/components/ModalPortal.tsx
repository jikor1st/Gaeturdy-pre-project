import { useState } from "react";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";
import ModalContent from "./Modal";
import styled from "styled-components";

export type ModalContentsProps = {
    headline: string;
    contents: string;
    buttonTitle: string;
    buttonColor: string;
    children?: React.ReactNode;
    toggleModal?: () => void;
    isShow: boolean;
};

const ModalContainer = styled.div``;

function Modal({
    headline,
    contents,
    buttonTitle,
    buttonColor,
    children,
    isShow,
    toggleModal,
}: ModalContentsProps) {
    return (
        <ModalContainer>
            {ReactDOM.createPortal(
                <Overlay isShow={isShow} />,
                document.getElementById("backdrop-root") as HTMLElement
            )}
            {ReactDOM.createPortal(
                <ModalContent
                    headline={headline}
                    contents={contents}
                    buttonTitle={buttonTitle}
                    buttonColor={buttonColor}
                    toggleModal={toggleModal}
                    isShow={isShow}
                />,
                document.getElementById("overlay-root") as HTMLElement
            )}
        </ModalContainer>
    );
}

export default Modal;
