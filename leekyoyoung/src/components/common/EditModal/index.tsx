import { useState } from "react";
import styled, {css} from "styled-components";

const EditModal = ({ onClose, onEdit, value }: any) => {
const [editedValue, setEditedValue] = useState<string>(value);

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedValue(e.target.value);
};

const handleEditButtonClick = () => {
    onEdit(editedValue);
    if (!editedValue.trim()) {
        return;
    } else {
        onClose();
    }
};

return (
    <EditModalWrapper>
    <ModalContents>
        <h2>할 일 수정</h2>
        <input
            type="text"
            value={editedValue}
            onChange={handleInputChange}
        />
        <ButtonArea>
            <button type="button" onClick={onClose}>
                취소
            </button>
            <button type="button" onClick={handleEditButtonClick} className="fill">
                수정 완료
            </button>
        </ButtonArea>
    </ModalContents>
    </EditModalWrapper>
);
};

export default EditModal;
export const EditModalWrapper = styled.div ` 
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(33, 33, 33, 0.4);
    z-index: 99;
`

export const ModalContents = styled.div ` 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 20px;
    width: 450px;
    background: #FFFFFF;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.12);
    border-radius: ${props=> props.theme.Radius.BRadius};

    h2 {
        text-align: center;
        ${({theme})=>css`
            line-height: ${theme.SubTit1.LineHight};
            font-size:${theme.SubTit1.FontSize};
            font-weight:${theme.SubTit1.FontWeight};
        `}
    }

    p {
        margin-top: 20px;
        text-align: center;
        ${({theme})=>css`
            line-height: ${theme.SubTit2.LineHight};
            font-size:${theme.SubTit2.FontSize};
            font-weight:${theme.SubTit2.FontWeight};
        `}
    }

    input {
        margin-top: 24px;
        width: 100%;
        height: 56px;
        ${({theme}) => css`
            border: 1px solid ${theme.colors.Gray300}
            line-height: ${theme.Body1.LineHight};
            font-size:${theme.Body1.FontSize};
            font-weight:${theme.Body1.FontWeight};
        `}
    }
`

export const ButtonArea = styled.div ` 
    display: flex;
    height: 56px;
    margin-top:24px;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: nowrap;

    button {
        width: 50%;
        ${({theme})=>css`
            line-height: ${theme.Button1.LineHight};
            font-size:${theme.Button1.FontSize};
            font-weight:${theme.Button1.FontWeight};
            border-radius: ${theme.Radius.BRadius};
            border: 1px solid ${theme.colors.Gray300};
        `}

        +button {
            margin-left: 16px;
        }

        &.fill {
            background-color: ${props => props.theme.colors.Primary};
            color: #ffffff;
        }
    }
`