import { createGlobalStyle } from "styled-components";

import { COLORS } from "./colors";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    color: ${COLORS.light};
    background: ${COLORS.dark};
    margin: 0;
    height: 200vh;
    width: 100%;
    font-family: 'Nunito Sans', sans-serif;
  }

  a {
    text-decoration: none;
    color: ${COLORS.light};
  }

  i {
    color: silver;
  }
`;
