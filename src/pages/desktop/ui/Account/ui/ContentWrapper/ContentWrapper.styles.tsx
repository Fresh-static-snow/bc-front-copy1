import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    width: 100%;
    height: calc(100% - 45px);
  `,
);
