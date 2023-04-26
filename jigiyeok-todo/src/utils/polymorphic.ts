import { DefaultTheme } from "styled-components";

export const createResultWithFunctionTheme = <R = any>(
  theme: DefaultTheme,
  result: R
) => {
  return typeof result === "function" ? result(theme) : result;
};
