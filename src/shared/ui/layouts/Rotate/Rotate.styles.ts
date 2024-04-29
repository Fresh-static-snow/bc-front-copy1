import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledRootProps } from './Rotate.types';

export const Root = styled('div')<StyledRootProps>(
  ({ $rotateDeg }) => css`
    display: flex;
    align-items: center;
    width: max-content;
    transform: rotate(${$rotateDeg || '0'}deg);
  `,
);
