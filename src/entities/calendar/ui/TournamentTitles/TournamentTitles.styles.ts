import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    display: grid;
    grid-template-columns: 300fr 1250fr 150fr;
    gap: 4px;
    width: 100%;
    height: 100%;

    @media (max-width: 1440px) {
      grid-template-columns: 180fr 830fr 80fr;
    }
  `,
);
