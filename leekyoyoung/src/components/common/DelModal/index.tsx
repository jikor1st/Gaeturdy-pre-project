import styled, {css} from "styled-components";

const DelModal = ({ onClose, onDelete }: any) => {
    return (
        <DelModalWrapper>
            <ModalContents>
                <h2>할 일 삭제</h2>
                <p>할 일을 삭제하시겠습니까?</p>
                <ButtonArea>
                    <button type='button' onClick={onClose}>취소</button>
                    <button type='button' onClick={onDelete} className="fill">삭제</button>
                </ButtonArea>
            </ModalContents>
        </DelModalWrapper>
    );
};

export default DelModal;
export const DelModalWrapper = styled.div ` 
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(33, 33, 33, 0.4);
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
            background-color: ${props => props.theme.colors.red};
            color: #ffffff;
        }
    }
`