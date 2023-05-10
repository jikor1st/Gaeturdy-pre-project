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
    red: "#FF7070",
};

const fontSize = {
    h1: "24px",
    body1: "16px",
    body2: "14px",
    button1: "16px",
};

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;

const theme: DefaultTheme = {
    colors,
    fontSize,
};

export default theme;
