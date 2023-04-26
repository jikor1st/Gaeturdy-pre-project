export {};
// import { forwardRef } from "react";
// import Box from "../Box/temp_unstable";
// import { DefaultTheme } from "styled-components";
// import { PolymorphicComponentProps, PolymorphicRef } from "@/types/polymorphic";
// import { createResultWithFunctionTheme } from "@/utils/polymorphic";

// type _TypographyProps = {
//   variant?: keyof DefaultTheme["typography"];
// };
// type TypographyProps<T extends React.ElementType> = PolymorphicComponentProps<
//   T,
//   _TypographyProps
// >;

// type TypographyComponentType = <C extends React.ElementType = "p">(
//   props: TypographyProps<C>
// ) => React.ReactElement | null;

// const Typography: TypographyComponentType = forwardRef(
//   <T extends React.ElementType>(
//     { as, children, variant = "body1", styleX, ...props }: TypographyProps<T>,
//     ref: PolymorphicRef<T>
//   ) => {
//     return (
//       <Box
//         as={as || "p"}
//         ref={ref}
//         styleX={(theme) => ({
//           ...theme.typography[variant],
//           ...createResultWithFunctionTheme(theme, styleX),
//         })}
//         {...props}
//       >
//         {children}
//       </Box>
//     );
//   }
// );

// export default Typography;
