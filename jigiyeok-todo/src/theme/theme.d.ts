import "styled-components";
import type GlobalTheme from "./index";

type GlobalThemeType = typeof GlobalTheme;
declare module "styled-components" {
  export interface DefaultTheme extends GlobalThemeType {}
}
