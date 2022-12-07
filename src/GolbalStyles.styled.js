import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-size: 15px; 
    color: black;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
`;

export const OverLay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.show ? "block" : "none")};
`;
