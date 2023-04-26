import styled, { DefaultTheme } from "styled-components";

type TypographyProps = {
  variant?: keyof DefaultTheme["typography"];
};

const Typography = styled.p<TypographyProps>(
  ({ theme, variant = "body1" }) => ({
    ...theme.typography[variant],
  })
);

export default Typography;
