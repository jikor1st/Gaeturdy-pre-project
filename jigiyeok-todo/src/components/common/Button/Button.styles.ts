import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  ${({ theme }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: ${theme.color.primary[300]};
    color: ${theme.color.white};
    height: 44px;
    padding: 0 16px;
    font-size: ${theme.typography.button1.fontSize};
    font-weight: ${theme.typography.button1.fontWeight};
    line-height: ${theme.typography.button1.lineHeight};
    border-radius: 8px;
  `}
`;
