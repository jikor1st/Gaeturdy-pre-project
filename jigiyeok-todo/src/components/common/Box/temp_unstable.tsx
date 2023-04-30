import React, { forwardRef } from "react";
import styled from "styled-components";
import {
  PolymorphicComponentProps,
  PolymorphicRef,
  StyleXProps,
} from "@/types/polymorphic";
import { createResultWithFunctionTheme } from "@/utils/polymorphic";

type BoxProps<T extends React.ElementType> = PolymorphicComponentProps<T, {}>;

type BoxComponentType = <C extends React.ElementType = "div">(
  props: BoxProps<C>
) => React.ReactElement | null;

const Box: BoxComponentType = forwardRef(
  <T extends React.ElementType = "div">(
    { as, children, styleX, ...props }: BoxProps<T>,
    ref: PolymorphicRef<T>
  ) => {
    return (
      <BoxComponent as={as || "div"} ref={ref} styleX={styleX} {...props}>
        {children}
      </BoxComponent>
    );
  }
);

export default Box;

const BoxComponent = styled.div<StyleXProps>(({ theme, styleX }) => {
  return {
    ...createResultWithFunctionTheme(theme, styleX),
  };
});
