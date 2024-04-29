import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const LocationTitle = styled('div')(
  () => css`
    opacity: 0.5;
  `,
);

export const ContentWrapper = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 0 20px;
    width: 100%;
    height: 100%;
  `,
);
