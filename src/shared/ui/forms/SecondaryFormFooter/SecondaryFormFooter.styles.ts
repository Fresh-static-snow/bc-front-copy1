import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 30px 0 0;
  `,
);

export const FormControl = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  `,
);
