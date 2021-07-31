import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing : border-box;
  font-family:  "Gill Sans Extrabold", sans-serif;
}
body {
  margin: 0;
  padding: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
input, button {
  background-color: transparent;
  border: none;
  outline: none;
}
ol, ul, li {
  list-style: none;
}
`;
