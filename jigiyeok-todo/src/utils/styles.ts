import { css } from "styled-components";
export const ellipsisWithLine = (line = 1) => {
  if (line > 1) {
    return css`
      overflow: hidden;
      white-space: normal;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${line};
      -webkit-box-orient: vertical;
      word-wrap: break-word;
    `;
  }

  return css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  `;
};
