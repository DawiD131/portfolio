import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

 *, *::before, *::after {
    box-sizing: border-box;
 }

 html {
     font-size: 62.5%;
 }

 body {
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    background-color:#2D3339;
    ${
      "" /* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;

    @keyframes gradient {
     0% {
      background-position: 0% 50%;
     }
     50% {
      background-position: 100% 50%;
     }
     100% {
      background-position: 0% 50%;
     }
   } */
    }
     margin:0;
     padding:0;
   } 

`;
export default GlobalStyle;
