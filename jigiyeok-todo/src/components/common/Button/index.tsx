import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { StyledButton, StyledButtonProps } from "./Button.styles";

type ButtonProps = StyledButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: PropsWithChildren<ButtonProps>) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
