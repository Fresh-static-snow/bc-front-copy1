import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Popover as PopoverMui } from '@mui/material';

import { StyledInputWrapperProps } from './DropDownInput.types';

export const InputWrapper = styled('button')<StyledInputWrapperProps>(
  ({ theme, $width, $active, $error }) => {
    const baseStyles = css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 4px;
      width: ${$width ?? 'max-content'};
      height: 44px;
      padding: 0 22px;
      border-radius: 4px;
      transition: all ${theme.appTransitions.primary}ms;

      &:not(:disabled) {
        cursor: pointer;
      }

      &:hover:not(:disabled) {
        border: 1px solid ${theme.appColors.secondary_04};
      }

      &:focus:not(:disabled),
      &:active:not(:disabled) {
        border: 1px solid ${theme.appColors.primary_02};
      }

      &:disabled {
        background: ${theme.appColors.primary_04};
        color: ${theme.appColors.secondary_04};
      }
    `;

    const getBorderStyle = () => {
      if ($error) {
        return css`
          border: 1px solid ${theme.appColors.secondary_09} !important;
        `;
      }
      if ($active) {
        return css`
          border: 1px solid ${theme.appColors.primary_02} !important;
        `;
      }
      return css`
        border: 1px solid ${theme.appColors.secondary_03};
      `;
    };

    return css`
      ${baseStyles}
      ${getBorderStyle()}
    `;
  },
);

export const InputIconWrapper = styled('div')(
  ({ theme }) => css`
    width: 16px;
    height: 16px;

    & svg {
      width: 16px;
      height: 16px;
    }

    & g {
      fill: ${theme.appColors.primary_01};
    }

    & path {
      stroke: ${theme.appColors.primary_01};
    }
  `,
);

export const Popover = styled(PopoverMui)(
  ({ theme }) => css`
    & .MuiPopover-paper {
      border-radius: 0;
      box-shadow: ${theme.appShadows.primary};
    }
  `,
);
