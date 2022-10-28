import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
   body{
    min-height: 100vh;
    background-color: #191A19;
    color: white;
    font-family: 'Poppins', sans-serif;
   }
` 