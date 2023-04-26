import styled, { css } from "styled-components";

export const Input = styled.input`
  ${({ theme }) => css`
    background: ${theme.color.white};
    border: 1px solid ${theme.color.gray[200]};
    height: 44px;
    width: 100%;
    padding: 0 16px;
    font-size: ${theme.typography.body1.fontSize};
    font-weight: ${theme.typography.body1.fontWeight};
    line-height: ${theme.typography.body1.lineHeight};

    border-radius: 8px;
    &::placeholder {
      color: ${theme.color.gray[400]};
    }
  `}
`;
