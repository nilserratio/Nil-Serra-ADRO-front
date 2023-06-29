import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html {
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 1.25rem;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font: inherit;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
  }

  input, 
  textarea, 
  select {
    font-family: inherit;
    border: none;
  }

  button {
    cursor: pointer;
    font: inherit;
    border: none;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    margin: 0;
  }

  progress {
    appearance: none;
    -webkit-appearance: none;
  }
`;

export default GlobalStyle;
