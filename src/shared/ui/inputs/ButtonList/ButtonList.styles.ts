import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledRootProps } from './ButtonList.types';

export const Root = styled('div')<StyledRootProps>(
  ({ theme, $width }) => css`
    display: flex;
    flex-direction: column;
    width: ${$width || 'auto'};
    background: ${theme.appColors.primary_05};
    box-shadow: ${theme.appShadows.primary};
  `,
);

export const Button = styled('button')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 8px 12px;
    cursor: pointer;
    transition: all ${theme.appTransitions.primary}ms;

    &:hover {
      background: ${theme.appColors.primary_04};
    }

    &:active,
    &:focus {
      background: ${theme.appColors.secondary_03};
    }
  `,
);

export const Icon = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 8px 0 0;
    width: 16px;
    height: 16px;

    & svg {
      width: 16px;
      height: 16px;
    }

    & g {
      fill: ${theme.appColors.primary_02};
    }

    & path {
      stroke: ${theme.appColors.primary_02};
    }
  `,
);

export const Label = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: ${theme.appColors.primary_02};
  `,
);
