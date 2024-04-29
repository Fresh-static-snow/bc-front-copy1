import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    width: 100%;
  `,
);

export const Participant = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 7px;
    width: 100%;
    padding: 6px 0;

    &:not(:last-of-type) {
      border-bottom: 1px dashed ${theme.appColors.primary_03};
    }
  `,
);

export const Name = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.004em;
    color: ${theme.appColors.primary_02};
  `,
);
