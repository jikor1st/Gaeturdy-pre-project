import React from "react";
import { DefaultTheme } from "styled-components";

type AsProps<T extends React.ElementType> = {
  as?: T;
};

export type StyleXProps = {
  styleX?: React.CSSProperties | ((theme: DefaultTheme) => React.CSSProperties);
};

export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>["ref"];

export type PolymorphicComponentProps<
  T extends React.ElementType,
  Props = {}
> = AsProps<T> &
  StyleXProps &
  React.ComponentPropsWithoutRef<T> &
  Props & {
    ref?: PolymorphicRef<T>;
  };
