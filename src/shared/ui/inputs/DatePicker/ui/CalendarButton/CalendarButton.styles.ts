import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledButtonProps, StyledDateProps, StyledRootProps } from './CalendarButton.types';

export const Root = styled('div')<StyledRootProps>(({ theme, $rangeType }) => {
  const baseStyles = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  `;

  switch ($rangeType) {
    case 'range-start':
      return css`
        ${baseStyles}
        background: linear-gradient(to left, ${theme.appColors.secondary_06}, transparent 50%);
      `;
    case 'in-range':
      return css`
        ${baseStyles}
        background: ${theme.appColors.secondary_06};
      `;
    case 'range-end':
      return css`
        ${baseStyles}
        background: linear-gradient(to right, ${theme.appColors.secondary_06}, transparent 50%);
      `;
    default:
      return css`
        ${baseStyles}
      `;
  }
});

export const Button = styled('button')<StyledButtonProps>(
  ({ theme, $isCurrentDate, $isActiveDate, $isBig }) => {
    const baseStyles = css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${$isBig ? '77' : '44'}px;
      height: ${$isBig ? '77' : '44'}px;
      border-radius: 50%;
      border: 1px solid transparent;
      cursor: pointer;
      transition: all ${theme.appTransitions.primary}ms;

      @media (max-width: 320px) {
        width: ${$isBig ? '55' : '32'}px;
        height: ${$isBig ? '55' : '32'}px;
      }

      &:hover,
      &:focus {
        border: 1px solid ${theme.appColors.primary_02};
      }
    `;

    const getBackgroundStyles = () => {
      if ($isActiveDate) {
        return css`
          background: ${theme.appColors.primary_01};
        `;
      }
      if ($isCurrentDate) {
        return css`
          background: ${theme.appColors.primary_02};
        `;
      }
      return css`
        background: transparent;
      `;
    };

    return css`
      ${baseStyles}
      ${getBackgroundStyles()}
    `;
  },
);

export const Date = styled('div')<StyledDateProps>(
  ({ theme, $isCurrentDate, $isActiveDate, $isOtherPeriod }) => css`
    font-family: ${theme.appFonts.primary};
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: ${$isCurrentDate || $isActiveDate
      ? theme.appColors.primary_05
      : theme.appColors.primary_02};
    ${$isOtherPeriod ? 'opacity: 0.3;' : ''}
  `,
);
