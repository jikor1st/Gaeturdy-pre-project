import { InputHTMLAttributes } from "react";
import { Input } from "./TextField.styles";

type TextFieldProps = {} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({ ...props }: TextFieldProps) => {
  return <Input {...props} />;
};

export default TextField;
