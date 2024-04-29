import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme, color }) => css`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-family: ${theme.appFonts.primary};
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.004em;
    color: ${color ?? theme.appColors.primary_02};
    text-align: center;
    overflow: hidden;
  `,
);
