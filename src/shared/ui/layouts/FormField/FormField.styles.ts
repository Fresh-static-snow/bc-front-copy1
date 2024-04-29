import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledFieldProps, StyledLabelProps, StyledRootProps } from './FormField.types';

export const Root = styled('div')<StyledRootProps>(({ $direction }) => {
  switch ($direction) {
    case 'column':
      return css`
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 6px;
        width: 100%;
      `;
    case 'row':
      return css`
        display: flex;
        align-items: center;
        gap: 24px;
        width: 100%;
      `;
    default:
      return css``;
  }
});

export const Label = styled('div')<StyledLabelProps>(({ theme, $direction }) => {
  switch ($direction) {
    case 'column':
      return css`
        position: relative;
        font-family: ${theme.appFonts.primary};
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.004em;
        color: ${theme.appColors.primary_02};
      `;
    case 'row':
      return css`
        position: relative;
        width: calc(100% - 420px - 24px);
        font-family: ${theme.appFonts.primary};
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.004em;
        color: ${theme.appColors.secondary_04};
        text-align: end;
      `;
    default:
      return css``;
  }
});

export const Required = styled('span')(
  ({ theme }) => css`
    position: absolute;
    top: -2px;
    right: -8px;
    color: ${theme.appColors.secondary_09};
  `,
);

export const Field = styled('div')<StyledFieldProps>(({ $direction }) => {
  const getVariant = () => {
    switch ($direction) {
      case 'column':
        return css`
          width: 100%;
        `;
      case 'row':
        return css`
          width: 420px;
        `;
      default:
        return css``;
    }
  };

  return css`
    display: flex;
    align-items: flex-start;
    ${getVariant()}
  `;
});
