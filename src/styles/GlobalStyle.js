import { createGlobalStyle } from 'styled-components';
// import NEXONFont from './fonts/NEXON-Gothic-Regular.otf';
import esamanruMedium from './fonts/esamanru-Light.otf';

import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

  ${reset}
  @font-face {
    font-family: 'NEXON Lv1 Gothic OTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff')
      format('woff');
  }

  /* @font-face {
    font-family: 'GongGothicMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicMedium.woff')
      format('woff');
  }
   */

    @font-face {
    font-family: 'GongGothicMedium';
    src: url(${esamanruMedium});
  }
  
  
  * {
    box-sizing: border-box;
    font-family: 'NEXON Lv1 Gothic OTF', sans-serif;
  }

  body {
    box-shadow:
    -5px 0px 5px rgba(0, 0, 0, 0.1),
    5px 0px 5px rgba(0, 0, 0, 0.1);
    width: 100vw;
    background-color: white;
    transition: background-color 1s ease;
    font-family: "NEXON Lv1 Gothic OTF";
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
