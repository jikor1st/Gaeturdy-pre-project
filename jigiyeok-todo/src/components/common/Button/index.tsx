import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  PropsWithChildren,
} from "react";
import { StyledButton } from "./Button.styles";

type ButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: PropsWithChildren<ButtonProps>) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
