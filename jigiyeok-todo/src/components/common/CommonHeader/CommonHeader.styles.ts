import styled, { css } from "styled-components";
import Typography from "../Typography";

export const HeaderContainer = styled.header`
  display: flex;
  height: 56px;
  align-items: center;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledIconButton = styled.button`
  ${({ theme }) => css`
    & path {
      fill: ${theme.color.gray[800]};
    }
  `}

  & svg {
    width: 24px;
    height: 24px;
  }
`;
export const HeaderTitle = styled(Typography).attrs({
  variant: "h3",
})``;
