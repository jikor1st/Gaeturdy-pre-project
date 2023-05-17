import { ChangeEventHandler } from "react";
import styled, { css } from "styled-components";
import Icon from "../Icon";
import classNames from "classnames";

type CheckBoxProps = {
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const CheckBox = ({ onChange, checked = false }: CheckBoxProps) => {
  return (
    <CheckBoxLabel className={classNames({ checked })}>
      <input
        onChange={onChange}
        defaultChecked={checked}
        type="checkbox"
        hidden
      />
      {checked ? <Icon icon="CheckOn" /> : <Icon icon="CheckOff" />}
    </CheckBoxLabel>
  );
};

export default CheckBox;

const CheckBoxLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  user-select: none;
  width: 32px;
  height: 32px;
  & svg {
    width: 100%;
    height: 100%;
  }
  ${({ theme }) => css`
    & path {
      fill: ${theme.color.gray[200]};
    }
    &.checked {
      & path {
        fill: ${theme.color.primary[300]};
      }
    }
  `}
`;
