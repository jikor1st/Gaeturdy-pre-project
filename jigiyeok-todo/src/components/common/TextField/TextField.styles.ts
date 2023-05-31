import { convertObjectToCss } from "@/utils/common/styles";
import styled, { css } from "styled-components";

export const Input = styled.input`
  ${({ theme }) => css`
    background: ${theme.color.white};
    border: 1px solid ${theme.color.gray[300]};
    height: 56px;
    width: 100%;
    padding: 0 16px;
    border-radius: 8px;

    ${convertObjectToCss(theme.typography.body1)};

    &::placeholder {
      color: ${theme.color.gray[400]};
    }
  `}
`;
