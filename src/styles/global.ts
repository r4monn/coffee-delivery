import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${(props) => props.theme.colors["base-background"]};
    color: ${(props) => props.theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, border-style, input, textarea, button {
    font-family: ${(props) => props.theme.fonts.regular};
    font-weight: 400;
    font-size: ${(props) => props.theme.textSizes["text-regular-m"]};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }


  ::-webkit-scrollbar {
    width: 0.4rem;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors["base-button"]}
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors["brand-yellow"]}
  }
`;