import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    padding: 50px 30px;
  `,
);
