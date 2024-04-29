import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Scrollbar = styled('div')(
  ({ theme }) => css`
    width: 100%;
    height: 100%;

    .ScrollbarsCustom-Scroller[style*='overflow: hidden scroll'] {
      margin-right: -20px !important;
    }

    .ScrollbarsCustom-Wrapper[style*='inset: 0px 10px 0px 0px'] {
      inset: 0px 8px 0px 0px !important;
    }

    .ScrollbarsCustom-TrackY {
      width: 8px !important;
      height: 100% !important;
      top: 0 !important;
      right: 0 !important;
      border-radius: 0 !important;
      background: transparent !important;
    }

    .ScrollbarsCustom-TrackX {
      width: 100% !important;
      height: 8px !important;
      bottom: 0 !important;
      left: 0 !important;
      border-radius: 0 !important;
      background: transparent !important;
    }

    .ScrollbarsCustom-Thumb {
      position: relative;
      background: ${theme.appColors.primary_01} !important;
      border-radius: 0 !important;
      z-index: 99;
    }
  `,
);
