import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        font-weight: 900;
        font-display: swap;
        src: local('Pretendard Black'), url('@/styles/fonts/Pretendard-Black.woff2') format('woff2'), url('@/styles/fonts/Pretendard-Black.woff') format('woff');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 800;
        font-display: swap;
        src: local('Pretendard ExtraBold'), url('@/styles/fonts/Pretendard-ExtraBold.woff2') format('woff2'), url('@/styles/fonts/Pretendard-ExtraBold.woff') format('woff');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 700;
        font-display: swap;
        src: local('Pretendard Bold'), url('@/styles/fonts/Pretendard-Bold.woff2') format('woff2'), url('@/styles/fonts/Pretendard-Bold.woff') format('woff');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 600;
        font-display: swap;
        src: local('Pretendard SemiBold'), url('@/styles/fonts/Pretendard-SemiBold.woff2') format('woff2'), url('@/styles/fonts/Pretendard-SemiBold.woff') format('woff');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 500;
        font-display: swap;
        src: local('Pretendard Medium'), url('@/styles/fonts/Pretendard-Medium.woff2') format('woff2'), url('@/styles/fonts/Pretendard-Medium.woff') format('woff');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 400;
        font-display: swap;
        src: local('Pretendard Regular'), url('@/styles/fonts/Pretendard-Regular.woff2') format('woff2'), url('@/styles/fonts/Pretendard-Regular.woff') format('woff');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 300;
        font-display: swap;
        src: local('Pretendard Light'), url('@/styles/fonts/Pretendard-Light.woff2') format('woff2'), url('@/styles/fonts/Pretendard-Light.woff') format('woff');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 200;
        font-display: swap;
        src: local('Pretendard ExtraLight'), url('@/styles/fonts/Pretendard-ExtraLight.woff2') format('woff2'), url('@/styles/fonts/Pretendard-ExtraLight.woff') format('woff');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 100;
        font-display: swap;
        src: local('Pretendard Thin'), url('@/styles/fonts/Pretendard-Thin.woff2') format('woff2'), url('@/styles/fonts/Pretendard-Thin.woff') format('woff');
    }
    ${reset}
    * {
        box-sizing: border-box;
        outline: none;
    }
    body{
        font-family: 'Pretendard';
    }
    li {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    button {
        font-family: 'Pretendard';
        background: inherit; 
        border:none; 
        box-shadow:none; 
        border-radius:0;
        padding:0; 
        overflow:visible; 
        cursor:pointer
    }

    @media only screen and (max-width: 768px) {
        body {
            font-size: 12px;
        }
    }

    @media only screen and (max-width: 576px) {
        body {
            font-size: 10px;
        }
    }
`
export default GlobalStyle