import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledRootProps } from './CalendarGrid.types';

export const Root = styled('div')<StyledRootProps>(
  ({ $columns }) => css`
    display: grid;
    grid-template-columns: repeat(${$columns}, 1fr);
    width: 100%;
  `,
);
