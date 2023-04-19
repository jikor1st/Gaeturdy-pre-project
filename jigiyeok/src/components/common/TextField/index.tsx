import { InputHTMLAttributes, ReactNode, useState } from "react";
import {
  TextFieldWrapper,
  TextFieldInput,
  TextFieldLabel,
  TextFieldLineRipple,
  TextxFieldIconWrapper,
  TextFieldErrorIcon,
} from "./TextField.styles";
import cn from "classnames";

type TextFieldProps = {
  error?: boolean;
  variant?: "filled" | "outlined";
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  error,
  variant = "filled",
  fullWidth,
  placeholder,
  leftIcon,
  rightIcon,
  ...inputProps
}: TextFieldProps) => {
  const [isInputFocus, seIsInputFocus] = useState(false);

  return (
    <TextFieldWrapper
      className={cn("text-field", `text-field--${variant}`, {
        "text-field--full-width": fullWidth,
        "text-field--focus": isInputFocus,
        "text-field--with-left-icon": !!leftIcon,
        "text-field--with-right-icon": !!rightIcon,
      })}
    >
      {leftIcon && (
        <TextxFieldIconWrapper className="text-field__icon-wrapper--left">
          {leftIcon}
        </TextxFieldIconWrapper>
      )}
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
      {(() => {
        if (error) {
          return (
            <TextxFieldIconWrapper className="text-field__icon-wrapper--right">
              <TextFieldErrorIcon />
            </TextxFieldIconWrapper>
          );
        }
        if (rightIcon) {
          return (
            <TextxFieldIconWrapper className="text-field__icon-wrapper--right">
              {rightIcon}
            </TextxFieldIconWrapper>
          );
        }
      })()}
      <TextFieldLineRipple
        className={cn("text-field__line-ripple", {
          "text-field__line-ripple--active": isInputFocus,
          "text-field__line-ripple--error": error,
        })}
      />
      <TextFieldLabel
        className={cn("text-field__label", {
          "text-field__label--floating": isInputFocus,
          "text-field__label--with-left-icon": !!leftIcon,
          "text-field__label--error": error,
        })}
      >
        {placeholder}
      </TextFieldLabel>
    </TextFieldWrapper>
  );
};

export default TextField;
