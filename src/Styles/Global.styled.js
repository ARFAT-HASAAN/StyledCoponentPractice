import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        font-size: 62.5%;
    }
    
    html{
        box-sizing: border-box;
    }

    body{
        background-color: #fff;
    }
    img{
        width: 100%;
    }

`
