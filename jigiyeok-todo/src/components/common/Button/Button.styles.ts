import { convertObjectToCss } from "@/utils/common/styles";
import styled, { css } from "styled-components";

export type StyledButtonProps = {
  size?: "small" | "medium" | "large";
  variant?: "fillPrimary" | "fillRed" | "outlineGray";
  fullWidth?: boolean;
};
export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border-radius: 8px;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  ${({ theme }) => css`
    ${convertObjectToCss(theme.typography.button1)};
  `}

  ${({ size = "medium" }) => {
    switch (size) {
      case "small":
        return css`
          height: 32px;
          padding: 0 16px;
        `;
      case "medium":
        return css`
          height: 44px;
          padding: 0 20px;
        `;
      case "large":
        return css`
          height: 56px;
          padding: 0 24px;
        `;
    }
  }}
  ${({ variant = "fillPrimary", theme }) => {
    switch (variant) {
      case "fillPrimary":
        return css`
          background: ${theme.color.primary[300]};
          color: ${theme.color.white};
        `;
      case "fillRed":
        return css`
          background: ${theme.color.red[300]};
          color: ${theme.color.white};
        `;
      case "outlineGray":
        return css`
          border: 1px solid ${theme.color.gray[300]};
          color: ${theme.color.gray[800]};
        `;
    }
  }}
`;
