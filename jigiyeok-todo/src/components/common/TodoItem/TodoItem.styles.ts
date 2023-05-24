import styled, { css } from "styled-components";
import Typography from "../Typography";
import { ellipsisWithLine } from "@/utils/styles";

export const TodoItemWrapper = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px 16px 12px;
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.color.gray[100]};
  `}
  touch-action:none;
`;

export const TodoItemContentWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
  overflow: hidden;
`;

export const TodoItemInfoWrapper = styled.div``;

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

export const TodoItemDateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  ${({ theme }) => css`
    color: ${theme.color.gray[300]};
    & svg {
      width: 16px;
      height: 16px;
    }

    & path {
      fill: ${theme.color.gray[300]};
    }
  `}
`;

export const TodoModifyButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateX(100%);
  height: 100%;
`;

export const TodoModifyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 100%;
  ${({ theme }) => css`
    &.edit {
      background: ${theme.color.gray[900]};
    }
    &.delete {
      background: ${theme.color.red[300]};
    }

    & svg {
      width: 20px;
      height: 20px;
    }

    & path {
      fill: ${theme.color.white};
    }
  `}
`;
// export const TodoDeleteIconButton = styled.button`
//   display: none;
//   width: 24px;
//   height: 24px;
//   flex-shrink: 0;

//   & svg {
//     width: 100%;
//     height: 100%;

//     & path {
//       ${({ theme }) => css`
//         fill: ${theme.color.red};
//       `}
//     }
//   }
// `;
