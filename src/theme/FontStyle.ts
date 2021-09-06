import { createGlobalStyle } from 'styled-components';
import SCDreamThin from '../assets/fonts/SCDream1.otf';
import SCDreamBold from '../assets/fonts/SCDream6.otf';

const FontStyles = createGlobalStyle`

  @font-face {
    font-family: 'SCDreamThin';
    src: url(${SCDreamThin}) format('otf');
    font-weight: normal;
    font-style: normal;
  }

  /* @font-face {
    font-family: 'SCDreamBold';
    src: url(${SCDreamBold}) format('otf');
  } */
`;

export default FontStyles;
