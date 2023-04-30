import styled, { css } from "styled-components";
import Typography from "../common/Typography";

export const HomeContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    min-height: 100vh;
    max-height: 100vh;
    background: ${theme.color.gray[300]};
  `}
`;

export const HomeWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 520px;
    margin: 40px auto;
    overflow: auto;
    padding: 0 20px;
    background: ${theme.color.white};
  `}
`;

export const HomeHeader = styled.div`
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    left: 0;
    background: ${theme.color.white};
    padding: 40px 0 32px;
  `}
`;

export const HomeDate = styled(Typography).attrs({
  variant: "h1",
})`
  ${({ theme }) => css`
    margin-bottom: 24px;
    color: ${theme.color.gray[800]};
  `}
`;

export const HomeTabWrapper = styled.div`
  display: flex;
  gap: 24px;
  padding-bottom: 20px;
  margin-bottom: 32px;
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.color.gray[200]};
  `}
`;

export const TodoInputWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const TodoListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* overflow: auto;
  height: 100%;
  flex: 1;
  align-content: stretch; */
`;
