import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyleRootProps } from './Body.types';

export const Root = styled('div')<StyleRootProps>(
  ({ $padding }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: ${$padding ?? '0 24px'};
  `,
);
