import { css } from '@emotion/react';

import {
  fontInterBlack,
  fontInterBold,
  fontInterExtraBold,
  fontInterExtraLight,
  fontInterLight,
  fontInterMedium,
  fontInterRegular,
  fontInterSemiBold,
  fontInterThin,
} from '@/shared/assets';

const reset = css`
  // * Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property.
  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  // * Preferred box-sizing value.
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  // * Remove list styles (bullets/numbers).
  ol,
  ul {
    list-style: none;
  }

  // * For images to not be able to exceed their container and clear images bottom space.
  img {
    max-width: 100%;
    display: block;
  }

  // * Removes spacing between cells in tables.
  table {
    border-collapse: collapse;
  }

  // * Revert the 'white-space' property for textarea elements on Safari.
  textarea {
    white-space: revert;
  }
`;

const fonts = css`
  @font-face {
    font-family: 'Inter';
    src: url(${fontInterThin});
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${fontInterExtraLight});
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${fontInterLight});
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${fontInterRegular});
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${fontInterMedium});
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${fontInterSemiBold});
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${fontInterBold});
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${fontInterExtraBold});
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${fontInterBlack});
    font-weight: 900;
    font-style: normal;
  }
`;

const global = css`
  ${reset}
  ${fonts}
`;

export default global;
