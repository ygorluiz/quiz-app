import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    border: none;

  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Avenir Next Cyr';
    font-weight: normal;
    font-style: normal;
    background: rgb(18, 18, 20);
    text-decoration: none;

  }

  @font-face {
    font-family: 'Avenir Next Cyr';
    src: url('/font/AvenirNextCyr-Bold.eot');
    src: local('/font/Avenir Next Cyr Bold'), local('/font/AvenirNextCyr-Bold'),
    url('/font/AvenirNextCyr-Bold.eot?#iefix') format('embedded-opentype'),
    url('/font/AvenirNextCyr-Bold.woff2') format('woff2'),
    url('/font/AvenirNextCyr-Bold.woff') format('woff'),
    url('/font/AvenirNextCyr-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir Next Cyr';
    src: url('/font/AvenirNextCyr-ThinItalic.eot');
    src: local('/font/Avenir Next Cyr Thin Italic'), local('/font/AvenirNextCyr-ThinItalic'),
    url('/font/AvenirNextCyr-ThinItalic.eot?#iefix') format('embedded-opentype'),
    url('/font/AvenirNextCyr-ThinItalic.woff2') format('woff2'),
    url('/font/AvenirNextCyr-ThinItalic.woff') format('woff'),
    url('/font/AvenirNextCyr-ThinItalic.ttf') format('truetype');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: 'Avenir Next Cyr';
    src: url('/font/AvenirNextCyr-MediumItalic.eot');
    src: local('/font/Avenir Next Cyr Medium Italic'), local('/font/AvenirNextCyr-MediumItalic'),
    url('/font/AvenirNextCyr-MediumItalic.eot?#iefix') format('embedded-opentype'),
    url('/font/AvenirNextCyr-MediumItalic.woff2') format('woff2'),
    url('/font/AvenirNextCyr-MediumItalic.woff') format('woff'),
    url('/font/AvenirNextCyr-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Avenir Next Cyr Ultra';
    src: url('/font/AvenirNextCyr-UltraLightIt.eot');
    src: local('/font/Avenir Next Cyr Ultra Light Italic'), local('/font/AvenirNextCyr-UltraLightIt'),
    url('/font/AvenirNextCyr-UltraLightIt.eot?#iefix') format('embedded-opentype'),
    url('/font/AvenirNextCyr-UltraLightIt.woff2') format('woff2'),
    url('/font/AvenirNextCyr-UltraLightIt.woff') format('woff'),
    url('/font/AvenirNextCyr-UltraLightIt.ttf') format('truetype');
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'Avenir Next Cyr';
    src: url('/font/AvenirNextCyr-Light.eot');
    src: local('/font/Avenir Next Cyr Light'), local('/font/AvenirNextCyr-Light'),
    url('/font/AvenirNextCyr-Light.eot?#iefix') format('embedded-opentype'),
    url('/font/AvenirNextCyr-Light.woff2') format('woff2'),
    url('/font/AvenirNextCyr-Light.woff') format('woff'),
    url('/font/AvenirNextCyr-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir Next Cyr';
    src: url('/font/AvenirNextCyr-Italic.eot');
    src: local('/font/Avenir Next Cyr Italic'), local('/font/AvenirNextCyr-Italic'),
    url('/font/AvenirNextCyr-Italic.eot?#iefix') format('embedded-opentype'),
    url('/font/AvenirNextCyr-Italic.woff2') format('woff2'),
    url('/font/AvenirNextCyr-Italic.woff') format('woff'),
    url('/font/AvenirNextCyr-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Avenir Next Cyr';
    src: url('/font/AvenirNextCyr-BoldItalic.eot');
    src: local('/font/Avenir Next Cyr Bold Italic'), local('/font/AvenirNextCyr-BoldItalic'),
    url('/font/AvenirNextCyr-BoldItalic.eot?#iefix') format('embedded-opentype'),
    url('/font/AvenirNextCyr-BoldItalic.woff2') format('woff2'),
    url('/font/AvenirNextCyr-BoldItalic.woff') format('woff'),
    url('/font/AvenirNextCyr-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Avenir Next Cyr';
    src: url('/font/AvenirNextCyr-Heavy.eot');
    src: local('/font/Avenir Next Cyr Heavy'), local('/font/AvenirNextCyr-Heavy'),
    url('/font/AvenirNextCyr-Heavy.eot?#iefix') format('embedded-opentype'),
    url('/font/AvenirNextCyr-Heavy.woff2') format('woff2'),
    url('/font/AvenirNextCyr-Heavy.woff') format('woff'),
    url('/font/AvenirNextCyr-Heavy.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir Next Cyr';
    src: url('/font/AvenirNextCyr-HeavyItalic.eot');
    src: local('/font/Avenir Next Cyr Heavy Italic'), local('/font/AvenirNextCyr-HeavyItalic'),
    url('/font/AvenirNextCyr-HeavyItalic.eot?#iefix') format('embedded-opentype'),
    url('/font/AvenirNextCyr-HeavyItalic.woff2') format('woff2'),
    url('/font/AvenirNextCyr-HeavyItalic.woff') format('woff'),
    url('/font/AvenirNextCyr-HeavyItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Avenir Next Cyr';
    src: url('/font/AvenirNextCyr-Thin.eot');
    src: local('/font/Avenir Next Cyr Thin'), local('/font/AvenirNextCyr-Thin'),
    url('/font/AvenirNextCyr-Thin.eot?#iefix') format('embedded-opentype'),
    url('/font/AvenirNextCyr-Thin.woff2') format('woff2'),
    url('/font/AvenirNextCyr-Thin.woff') format('woff'),
    url('/font/AvenirNextCyr-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir Next Cyr';
    src: url('/font/AvenirNextCyr-Medium.eot');
    src: local('/font/Avenir Next Cyr Medium'), local('/font/AvenirNextCyr-Medium'),
    url('/font/AvenirNextCyr-Medium.eot?#iefix') format('embedded-opentype'),
    url('/font/AvenirNextCyr-Medium.woff2') format('woff2'),
    url('/font/AvenirNextCyr-Medium.woff') format('woff'),
    url('/font/AvenirNextCyr-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir Next Cyr';
    src: url('/font/AvenirNextCyr-DemiItalic.eot');
    src: local('/font/Avenir Next Cyr Demi Italic'), local('/font/AvenirNextCyr-DemiItalic'),
    url('/font/AvenirNextCyr-DemiItalic.eot?#iefix') format('embedded-opentype'),
    url('/font/AvenirNextCyr-DemiItalic.woff2') format('woff2'),
    url('/font/AvenirNextCyr-DemiItalic.woff') format('woff'),
    url('/font/AvenirNextCyr-DemiItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Avenir Next Cyr';
    src: url('/font/AvenirNextCyr-Demi.eot');
    src: local('/font/Avenir Next Cyr Demi'), local('/font/AvenirNextCyr-Demi'),
    url('/font/AvenirNextCyr-Demi.eot?#iefix') format('embedded-opentype'),
    url('/font/AvenirNextCyr-Demi.woff2') format('woff2'),
    url('/font/AvenirNextCyr-Demi.woff') format('woff'),
    url('/font/AvenirNextCyr-Demi.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir Next Cyr';
    src: url('/font/AvenirNextCyr-Regular.eot');
    src: local('/font/Avenir Next Cyr Regular'), local('/font/AvenirNextCyr-Regular'),
    url('/font/AvenirNextCyr-Regular.eot?#iefix') format('embedded-opentype'),
    url('/font/AvenirNextCyr-Regular.woff2') format('woff2'),
    url('/font/AvenirNextCyr-Regular.woff') format('woff'),
    url('/font/AvenirNextCyr-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Avenir Next Cyr';
    src: url('/font/AvenirNextCyr-LightItalic.eot');
    src: local('/font/Avenir Next Cyr Light Italic'), local('/font/AvenirNextCyr-LightItalic'),
    url('/font/AvenirNextCyr-LightItalic.eot?#iefix') format('embedded-opentype'),
    url('/font/AvenirNextCyr-LightItalic.woff2') format('woff2'),
    url('/font/AvenirNextCyr-LightItalic.woff') format('woff'),
    url('/font/AvenirNextCyr-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Avenir Next Cyr Ultra';
    src: url('/font/AvenirNextCyr-UltraLight.eot');
    src: local('/font/Avenir Next Cyr Ultra Light'), local('/font/AvenirNextCyr-UltraLight'),
    url('/font/AvenirNextCyr-UltraLight.eot?#iefix') format('embedded-opentype'),
    url('/font/AvenirNextCyr-UltraLight.woff2') format('woff2'),
    url('/font/AvenirNextCyr-UltraLight.woff') format('woff'),
    url('/font/AvenirNextCyr-UltraLight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
  }


`;

export default GlobalStyle;
