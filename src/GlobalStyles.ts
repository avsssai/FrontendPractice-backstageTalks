import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  font-family: 'Roboto Condensed', sans-serif;
  --font-secondary: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  --color-white:#FFFFFF;
  --color-green:#00c1b5;
  --color-orange:#ff651a;
  --color-yellow:#ffbe00;
  --color-blue:#1d3fbb;
  --color-red:#e30512;
  --color-pink:#E568AC;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
`;

export default GlobalStyles;
