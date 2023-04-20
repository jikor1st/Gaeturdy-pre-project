import styled from "styled-components";
import Icon from "../Icon";

export const TextFieldWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  height: 56px;
  padding: 0 16px;
  background-color: whitesmoke;
  border-radius: 4px 4px 0 0;

  &.text-field--filled {
  }

  &.text-field--outlined {
  }

  &.text-field--full-width {
    width: 100%;
  }

  &.text-field--with-left-icon {
    padding-left: 0;
  }
  &.text-field--with-right-icon {
    padding-right: 0;
  }
`;

export const TextFieldInput = styled.input`
  width: 100%;
  height: 28px;
  background: none;
  border: 0;
  padding: 0;
  align-self: flex-end;
  margin-bottom: 8px;
`;

export const TextFieldLabel = styled.span`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: rgba(0, 0, 0, 0.6);
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
    color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left top;

  &.text-field__label--floating {
    transform: translateY(-106%) scale(0.75);
    color: rgb(109 55 238);
  }

  &.text-field__label--with-left-icon {
    left: 48px;
  }

  &.text-field__label--error {
    color: #d41818;
  }
`;

export const TextFieldLineRipple = styled.div`
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 2px solid rgba(0, 0, 0, 0.42);
    transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scaleX(0);
    opacity: 0;
  }

  &.text-field__line-ripple--active::after {
    border-bottom-color: rgb(109 55 238);
    transform: scaleX(1);
    opacity: 1;
  }

  &.text-field__line-ripple--error {
    &::before {
      border-color: #d41818;
    }
    &::after {
      border-color: #d41818;
    }
  }
`;

export const TextxFieldIconWrapper = styled.i`
  width: 24px;
  height: 24px;

  &.text-field__icon-wrapper--left {
    margin: 0 8px 0 16px;
  }
  &.text-field__icon-wrapper--right {
    margin: 0 16px 0 8px;
  }
  & svg {
    width: 24px;
    height: 24px;
  }
`;
// test
export const TextFieldErrorIcon = styled(Icon).attrs({
  icon: "SystemAlertCircle",
})`
  & path {
    fill: #d41818;
  }
`;
