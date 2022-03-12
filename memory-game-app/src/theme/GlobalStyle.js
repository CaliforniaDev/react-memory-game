import { createGlobalStyle } from "styled-components";
import CabinRegularW2 from '../lib/assets/fonts/Cabin-Regular.woff2';
import CabinRegular from '../lib/assets/fonts/Cabin-Regular.woff';
import RobotoCondensedW2 from '../lib/assets/fonts/Roboto-Regular.woff2';
import RobotoCondensed from '../lib/assets/fonts/Roboto-Regular.woff';
const GlobalStyle = createGlobalStyle `

@font-face {
    font-family: "Cabin";
    src: url(${ CabinRegularW2 }) format("woff2"),
         url(${ CabinRegular }) format("woff");
         font-weight: normal;
         font-style: normal;
}
@font-face {
    font-family: "Roboto Condensed";
    src: url(${ RobotoCondensedW2 }) format("woff2"),
         url(${ RobotoCondensed }) format("woff");
         font-weight: normal;
         font-style: normal; 
}

html {
    font-size: 62.5%;
    line-height: 1.6;
    position: relative;
    min-height: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}
*, *:before, *:after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
}
body, textarea {
    font-family: 'Cabin';
    letter-spacing: 1px;
    font-size: 1.6rem;
    margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    line-height: 1.5em;
    letter-spacing: 2px;
}
h1 {
    font-size: 5.6rem;
    font-family: "Roboto Condensed"
}
h2 {
    font-size: 4rem;
}
h3 {
    font-size: 3.2rem;
}
h4 {
    font-size: 2rem;
}
h5 {
    font-size: 1.6rem;
}
`

export default GlobalStyle;