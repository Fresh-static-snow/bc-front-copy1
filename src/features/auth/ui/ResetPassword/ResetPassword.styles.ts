import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    position: relative;
    width: 400px;

    @media (max-width: 768px) {
      padding-inline: 20px;
    }
  `,
);
