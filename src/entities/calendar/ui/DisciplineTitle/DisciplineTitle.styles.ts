import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledRootProps } from './DisciplineTitle.types';

export const Root = styled('button')<StyledRootProps>(
  ({ theme, $borderWrapper }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.appColors.primary_05};
    box-shadow: ${$borderWrapper
      ? `0 0 0 2px inset ${theme.appColors.secondary_12}`
      : theme.appShadows.secondary};
    border-radius: 4px;
    transition: all ${theme.appTransitions.primary}ms;
    ${$borderWrapper
      ? css`
          border: 1px dashed ${theme.appColors.secondary_04};
        `
      : ''}

    &:not(:disabled) {
      cursor: pointer;

      &:hover,
      &:focus,
      &:active {
        opacity: 0.6;
      }
    }
  `,
);

export const Logo = styled('img')(
  () => css`
    max-width: 102px;
    max-height: 64px;
  `,
);

export const RootMobile = styled('button')<StyledRootProps>(
  ({ theme, $borderWrapper, top }) => css`
    position: sticky;
    top: ${top ?? '68px'};
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    padding-inline: 20px;
    padding-block: 15px;
    font-family: ${theme.appFonts.primary};
    background-color: ${theme.appColors.palette_05};
    color: ${theme.appColors.secondary_08};
    transition: all ${theme.appTransitions.primary}ms;
    height: 44px;
    ${$borderWrapper
      ? css`
          border: 1px dashed ${theme.appColors.secondary_04};
        `
      : ''}

    &:not(:disabled) {
      cursor: pointer;

      &:hover,
      &:focus,
      &:active {
        opacity: 0.9;
      }
    }
  `,
);

export const TitleMobile = styled('div')(() => css``);
