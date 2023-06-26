import theme from "@/style/theme";
import styled from "styled-components";
import ToDoButton from "./ToDoButton";
import { ModalContentsProps } from "./ModalPortal";

const ModalWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 520px;
    z-index: 2;
`;

const ModalContainer = styled.div`
    background-color: ${theme.colors.white};
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 70px);
    margin: 0 auto;
`;

const ModalTitle = styled.h1`
    font-size: ${theme.font.subTitle1.fontSize};
    font-weight: ${theme.font.subTitle1.fontWeight};
    line-height: ${theme.font.subTitle1.lineHeight};
    margin: 0;
`;

const ModalText = styled.p`
    font-size: ${theme.font.subTitle2.fontSize};
    font-weight: ${theme.font.subTitle2.fontWeight};
    line-height: ${theme.font.subTitle2.lineHeight};
    color: ${theme.colors.gray900};
    margin: 0;
    margin-top: 24px;
`;

const ButtonContainer = styled.div`
    margin-top: 24px;
    width: 100%;
    justify-content: space-between;
    display: flex;
    gap: 10px;
    button {
        flex: 1;
    }
`;

interface ModalProps extends ModalContentsProps {
    isShow: boolean;
}

function ModalContent({
    headline,
    contents,
    buttonTitle,
    buttonColor,
    toggleModal,
    isShow,
}: ModalProps) {
    return (
        <ModalWrap
            id="modal"
            style={{
                display: isShow ? "block" : "none",
            }}
        >
            <ModalContainer>
                <ModalTitle>{headline}</ModalTitle>
                <ModalText>{contents}</ModalText>
                <ButtonContainer>
                    <ToDoButton
                        title="취소"
                        size="large"
                        color={theme.colors.white}
                        toggleModal={toggleModal}
                    />
                    <ToDoButton
                        title={buttonTitle}
                        size="large"
                        color={buttonColor}
                    />
                </ButtonContainer>
            </ModalContainer>
        </ModalWrap>
    );
}

export default ModalContent;
