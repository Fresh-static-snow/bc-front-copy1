import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledRootProps } from './CorporateRangeRow.types';

export const Root = styled('div')<StyledRootProps>(
  ({ $monthCount }) => css`
    display: grid;
    grid-template-columns: repeat(${$monthCount}, 1fr);
    min-height: 76px;
  `,
);

export const MonthCell = styled('div')(
  () => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    height: 100%;
    min-height: 76px;
  `,
);

export const FourthCell = styled('div')(
  () => css`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 76px;
  `,
);
