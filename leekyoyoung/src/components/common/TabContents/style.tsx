import styled, {css} from "styled-components";
import checkboxSVG from '@icon/tab-checkbox.svg';
import delSVG from '@icon/tab-delete.svg';
import editSVG from '@icon/tab-edit.svg';
import dateSVG from '@icon/tab-date.svg';

export const Container = styled.div `
    /* padding-top: 28px; */
`
export const InputWrapper = styled.form `
    display: flex;
    height: 56px;
`
export const Label = styled.label `
    width: 100%;
    height: 100%;
`

export const TextField = styled.input `
    display: inline-block;
    width: calc( 100% - 88px);
    height: 100%;

    &::placeholder {
        color: ${props => props.theme.colors.Gray400};
        font-size: 16px;
    }
`


export const AddButton = styled.button `
    display: inline-block;
    margin-left: 12px;
    width: 76px;
    height: 100%;
    ${({theme})=>css`
        color: ${theme.colors.white};
        font-size:  ${theme.Button1.FontSize};
        font-weight: ${theme.Button1.FontWeight};
        line-height: ${theme.Button1.LineHight};
        background-color: ${theme.colors.Primary};
        border-radius: ${theme.Radius.BRadius};
    `}

    border: none;
    cursor: pointer;
`
export const DelButton = styled.button`
    position: absolute;
    right: 0;
    bottom: 0;
    background-image: url(${delSVG});
    background-repeat: no-repeat;
    background-size: 20px, 20px;
    background-position: center center;
    border: none;
    outline: none;
    background-color: ${props=>props.theme.colors.red};
    text-indent: -9999px;
    overflow: hidden;
    width: 48px;
    height: 100%;
    cursor: pointer;
`

export const ContentsWrapper = styled.ul ` 
    margin-top: 32px;
    margin-right: -16px;
    overflow: hidden;

    `
export const TodoItem = styled.li` 
    position: relative;
    background-color: #ffffff;
    border-bottom: 1px solid ${props => props.theme.colors.Gray100};;

    label {
        position: relative;
        background-color: #ffffff;
        display: block;
        z-index: 1;
        padding: 14px 0 12px 0;
        transform: translateX(0);
        touch-action: none;


        input[type="checkbox"] {
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(0, 0);
            margin: 0;
            width: 30px;
            height: 30px;
            opacity: 0;

            &:checked {
                &+span {
                    color: ${props => props.theme.colors.Gray500};

                    &::before {
                        background-image: url(${checkboxSVG});
                        background-position: -5px -5px;
                        background-repeat: no-repeat;
                        border-color: ${props=>props.theme.colors.Primary};
                    }
                }
            }

            & + span {
                position: relative;
                display: inline-block;
                padding-left: 44px;
                ${({theme})=>css`
                    color: ${theme.colors.Gray900};
                    line-height: ${theme.SubTit2.LineHight};
                    font-size: ${theme.SubTit2.FontSize};
                    font-weight: ${theme.SubTit2.FontWeight};
                `}
                cursor: pointer;
                width: calc(100% - 16px);
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;

                em {
                    margin-top: 1px;
                    position: relative;
                    display: block;
                    padding-left: 20px;
                    ${({theme})=>css`
                        color: ${theme.colors.Gray300};
                        line-height: ${theme.Caption1.LineHight};
                        font-size: ${theme.Caption1.FontSize};
                        font-weight: ${theme.Caption1.FontWeight};
                    `}

                    &::before {
                        content: '';
                        position: absolute;
                        display: inline-block;
                        left: 0;
                        width: 16px;
                        height: 21px;
                        background-image: url(${dateSVG});
                        background-repeat: no-repeat;
                        background-size: 16px 16px;
                        background-position: center center;
                    }
                }

                &::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 0;
                    display: inline-block;
                    width: 28px;
                    height: 28px;
                    border: 3px solid ${props => props.theme.colors.Gray200};
                    border-radius: 50%;
                    overflow: hidden;
                    box-sizing: border-box;
                }
            }
        }
    }
`

export const EditButton = styled.button` 
    position: absolute;
    right: 48px;
    bottom: 0;
    background-image: url(${editSVG});
    background-repeat: no-repeat;
    background-size: 20px, 20px;
    background-position: center center;
    border: none;
    outline: none;
    background-color: ${props => props.theme.colors.Gray900};
    text-indent: -9999px;
    overflow: hidden;
    width:  48px;
    height: 100%;
    cursor: pointer;
`