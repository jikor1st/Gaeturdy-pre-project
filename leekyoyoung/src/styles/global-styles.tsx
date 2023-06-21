import reset from 'styled-reset'
import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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
        border: none; 
        box-shadow: none; 
        border-radius: 0;
        padding: 0; 
        overflow: visible; 
        cursor: pointer
    }

    input {
        padding: 12px 16px;
        border: 1px solid #E0E0E0;
        font-family: 'Pretendard';
        color: #424242;
        line-height: 24px;
        font-size: 16px;
        font-weight: 500;
        border-radius: 8px;
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