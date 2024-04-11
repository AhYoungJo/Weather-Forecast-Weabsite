import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset'; //브라우저마다 기본적으로 설치되어 있는 스타일을 지워주는 Node.js패키지


export default createGlobalStyle`
    ${reset}
    *, *::before, *::after{
        box-sizing: border-box;
    }
    html{
        font-size: 1vw;
    }
    body{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        overflow-x: hidden;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
    #root {
    }
`;

