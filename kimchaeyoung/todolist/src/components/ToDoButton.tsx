import theme from "@/style/theme";
import styled, { css } from "styled-components";

const Button = styled.button<ButtonStyleProps>`
    ${({ color }) => css`
        background-color: ${color};
        color: ${color === theme.colors.white
            ? theme.colors.gray800
            : theme.colors.white};
        border: ${color === theme.colors.white
            ? `1px solid ${theme.colors.gray300}`
            : "none"};
        border-radius: 8px;
        font-size: ${theme.font.button1.fontSize};
        line-height: ${theme.font.button1.lineHeight};
        font-weight: ${theme.font.button1.fontWeight};
        cursor: pointer;
        &.size {
            &--small {
                padding: 8px 16px;
            }
            &--middle {
                padding: 14px 20px;
            }
            &--large {
                padding: 20px 24px;
            }
        }
    `}
`;

interface ButtonStyleProps {
    color: string;
    size: string;
}

interface ButtonContentsProps extends ButtonStyleProps {
    title: string;
    onSubmit?: () => void;
    toggleModal?: () => void;
}

function ToDoButton({
    title,
    color,
    size,
    onSubmit,
    toggleModal,
}: ButtonContentsProps) {
    return (
        <Button
            onClick={title === "취소" ? toggleModal : onSubmit}
            className={`size--${size}`}
            size={size}
            color={color}
        >
            {title}
        </Button>
    );
}

export default ToDoButton;
