import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 10px;
  `,
);

export const BadgeWrapper = styled('div')(
  () => css`
    margin: 0 10px;
  `,
);

export const TextList = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 6px;
  `,
);
