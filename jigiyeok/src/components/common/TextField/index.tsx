import { InputHTMLAttributes, useState } from "react";
import {
  TextFieldWrapper,
  TextFieldInput,
  TextFieldLabel,
  TextFieldLineRipple,
} from "./TextField.styles";
import cn from "classnames";

type TextFieldProps = {
  variant?: "filled" | "outlined";
  fullWidth?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  variant = "filled",
  fullWidth,
  placeholder,
  ...inputProps
}: TextFieldProps) => {
  const [isInputFocus, seIsInputFocus] = useState(false);
  return (
    <TextFieldWrapper
      className={cn("text-field", `text-field--${variant}`, {
        "text-field--full-width": fullWidth,
        "text-field--focus": isInputFocus,
      })}
    >
      <TextFieldInput
        className="text-field__input"
        onFocus={(event) => {
          seIsInputFocus(true);
          inputProps.onFocus?.(event);
        }}
        onBlur={(event) => {
          if (!event.target.value) {
            seIsInputFocus(false);
          }
          inputProps.onBlur?.(event);
        }}
        {...inputProps}
      />
      <TextFieldLineRipple
        className={cn("text-field__line-ripple", {
          "text-field__line-ripple--active": isInputFocus,
        })}
      />
      <TextFieldLabel
        className={cn("text-field__label", {
          "text-field__label--floating": isInputFocus,
        })}
      >
        {placeholder}
      </TextFieldLabel>
    </TextFieldWrapper>
  );
};

export default TextField;
