import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    margin-top: 68px;
    position: relative;
    overflow: auto;
    max-width: 100vw;
    width: 100%;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  `,
);
