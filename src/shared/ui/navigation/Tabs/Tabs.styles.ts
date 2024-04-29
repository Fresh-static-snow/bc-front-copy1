import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledTabLabelProps, StyledTabProps } from './Tabs.types';

export const Root = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
);

export const Tab = styled('button')<StyledTabProps>(
  ({ theme, $color, $withoutFocusColors }) => css`
    padding: 0 10px;
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    line-height: 16px;
    color: ${$color ?? theme.appColors.primary_02};
    border-radius: 4px;
    transition: all ${theme.appTransitions.primary}ms;
    cursor: pointer;

    ${!$withoutFocusColors
      ? css`
          &:hover {
            background: ${theme.appColors.primary_04};
          }

          &:active,
          &:focus {
            background: ${theme.appColors.secondary_03};
          }
        `
      : ''}
  `,
);

export const TabLabel = styled('div')<StyledTabLabelProps>(
  ({ theme, $active }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 6px 0;
    border-top: 2px solid transparent;
    border-bottom: ${$active ? `2px solid ${theme.appColors.primary_01}` : '2px solid transparent'};
    transition: all ${theme.appTransitions.primary}ms;
  `,
);
