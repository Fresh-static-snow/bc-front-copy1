import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    width: 100%;
    height: calc(100dvh - 48px - 45px - 48px);
  `,
);
