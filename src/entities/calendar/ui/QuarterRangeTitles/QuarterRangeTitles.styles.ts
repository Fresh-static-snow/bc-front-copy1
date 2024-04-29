import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 4px;
    width: 100%;
    height: 100%;
  `,
);

export const MonthsGrid = styled('div')(
  () => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    height: 100%;
  `,
);
