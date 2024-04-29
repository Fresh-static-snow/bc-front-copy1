import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    position: relative;
    width: 100%;
    height: calc(100dvh - 48px - 44px - 48px - 48px);
  `,
);
