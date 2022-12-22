import styled,{createGlobalStyle} from "styled-components";


export const Globalstyle = createGlobalStyle`
html {
    height: 100%;
  }
  body {
    background-color:gray ;
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`