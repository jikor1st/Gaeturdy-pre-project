import { createGlobalStyle } from "styled-components";
import pretendard from "@/font/Pretendard-Medium.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: "pretendard";
        src: local("pretendard"), url(${pretendard}) format('woff2');
        font-weight: 500;
    }
`;
