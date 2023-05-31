import styled, { css } from "styled-components";
import Typography from "../common/Typography";

export const HomeWrapper = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    max-height: 100vh;
    overflow: auto;
    background: ${theme.color.white};
  `}
`;

export const HomeStickyHeader = styled.div`
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    left: 0;
    background: ${theme.color.white};
    padding-bottom: 32px;
    z-index: 100;
  `}
`;

export const HomeTabWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin: 32px 0 24px;
`;

export const TodoInputWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const TodoListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
