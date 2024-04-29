import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    display: grid;
    grid-template-columns: 230fr 230fr 300fr 180fr;
    gap: 4px;
    width: 100%;
    height: 100%;
  `,
);
