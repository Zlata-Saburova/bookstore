import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} 

ul {
  list-style-type: none;
}

button {
  font-family: inherit;

  border: 0;
  background: none;
  outline: none;
}

a {
  text-decoration: none;
}

input {
  border: none;
  &:focus {
    outline: none;
  }
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}`;

export default GlobalStyles;
