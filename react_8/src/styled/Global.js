import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

 body {
     background-color: ${({theme})=>theme.body};
     color: ${({theme})=>theme.font};
 }
 a {
     text-decoration: none;
 }

.theme {
    background-color: orange;
    color: black;
    margin-bottom: 1%;
}

footer {
    background-color: red;
    text-align: center;
    font-size: 1.3rem;
}

`;