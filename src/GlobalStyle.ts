import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        
    }
    *, *::before, *::after{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Roboto', sans-serif;
        line-height:1;
        font-size:100%;
    }
`;