import { DefaultTheme } from "styled-components";

const colors = {
    primary: "#27C8EC",
    white: "#ffffff",
    gray50: "#fafafa",
    gray100: "#f5f5f5",
    gray200: "#eeeeee",
    gray300: "#e0e0e0",
    gray400: "#bdbdbd",
    gray500: "#9E9E9E",
    gray600: "#757575",
    gray700: "#616161",
    gray800: "#424242",
    gray900: "#212121",
    red: "#FF4F4F",
};

const font = {
    h1: { fontSize: "32px", lineHeight: "48px", fontWeight: "600" },
    h2: { fontSize: "28px", lineHeight: "42px", fontWeight: "600" },
    h3: { fontSize: "24px", lineHeight: "36px", fontWeight: "600" },
    subTitle1: { fontSize: "20px", lineHeight: "30px", fontWeight: "600" },
    subTitle2: { fontSize: "18px", lineHeight: "27px", fontWeight: "600" },
    body1: { fontSize: "16px", lineHeight: "24px", fontWeight: "500" },
    body2: { fontSize: "14px", lineHeight: "21px", fontWeight: "500" },
    button1: { fontSize: "16px", lineHeight: "16px", fontWeight: "600" },
    caption1: { fontSize: "14px", lineHeight: "21px", fontWeight: "400" },
};

export type ColorsTypes = typeof colors;
export type FontTypes = typeof font;

const theme: DefaultTheme = {
    colors,
    font,
};

export default theme;
