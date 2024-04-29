import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 50px 30px;
  `,
);

export const TitleWrapper = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
);
