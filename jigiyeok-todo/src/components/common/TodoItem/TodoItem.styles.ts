import styled, { css } from "styled-components";
import Typography from "../Typography";
import { ellipsisWithLine } from "@/utils/styles";

export const TodoItemWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover .todo-item__delete {
    display: block;
  }
`;

export const TodoCheckBoxWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const TodoItemTitle = styled(Typography)`
  width: 100%;
  ${ellipsisWithLine(1)};

  ${({ theme }) => css`
    color: ${theme.color.gray[800]};

    .checked & {
      color: ${theme.color.gray[400]};
    }
  `}
`;

export const TodoDeleteIconButton = styled.button`
  display: none;
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  & svg {
    width: 100%;
    height: 100%;

    & path {
      ${({ theme }) => css`
        fill: ${theme.color.red};
      `}
    }
  }
`;
