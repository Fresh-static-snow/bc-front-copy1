import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledDisabledWrapperProps, StyledRootProps } from './EntityAccordionItem.types';

export const Root = styled('div')<StyledRootProps>(
  ({ theme, $dashedBorder, $withBorder }) => css`
    position: relative;
    width: 100%;
    color: ${theme.appColors.primary_02};
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    font-weight: 400;
    ${$withBorder
      ? css`
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            border-bottom: 1px ${$dashedBorder ? 'dashed' : 'solid'} ${theme.appColors.primary_03};
          }
        `
      : ''}

    &:first-of-type {
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        border-top: 1px ${$dashedBorder ? 'dashed' : 'solid'} ${theme.appColors.primary_03};
      }
    }
  `,
);

export const DisabledWrapper = styled('div')<StyledDisabledWrapperProps>(
  ({ theme }) => css`
    min-height: 46px;
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.004em;
    color: ${theme.appColors.primary_02};
    padding: 7px 0;
  `,
);

export const AccordionSummary = styled('div')(
  () => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
);

export const LeftPart = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
);

export const RightPart = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
);
