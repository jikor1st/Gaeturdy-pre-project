import styled, { css } from "styled-components";
import Typography from "../Typography";

export const TabButton = styled(Typography).attrs({
  variant: "body2",
  as: "button",
})`
  ${({ theme }) => css`
    color: ${theme.color.gray[400]};
    border-bottom: 2px solid transparent;
    padding-bottom: 4px;

    &.isActive {
      color: ${theme.color.primary[300]};
      border-color: ${theme.color.primary[300]};
    }
  `}
`;
