import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
);

export const Lists = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 28px 0;
  `,
);
