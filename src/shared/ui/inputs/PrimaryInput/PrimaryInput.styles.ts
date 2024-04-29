import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledInputProps } from './PrimaryInput.types';

export const Root = styled('div')(
  () => css`
    position: relative;
    width: 100%;
  `,
);

export const Input = styled('input')<StyledInputProps>(
  ({ theme, $error, $withIcon }) => css`
    width: 100%;
    padding: ${$withIcon ? '13px 48px 13px 24px' : '13px 24px'};
    border: 1px solid
      ${$error ? `${theme.appColors.secondary_09} !important` : theme.appColors.secondary_03};
    border-radius: 4px;
    font-family: ${theme.appFonts.primary};
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.004em;
    color: ${theme.appColors.primary_02};
    transition: all ${theme.appTransitions.primary}ms;

    &::placeholder {
      color: ${theme.appColors.secondary_04};
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
  `,
);

export const TogglePasswordButton = styled('div')(
  () => css`
    position: absolute;
    height: 100%;
    top: 0;
    right: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
);

export const IconWrapper = styled('div')(
  () => css`
    position: absolute;
    height: 100%;
    top: 0;
    right: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    & > svg {
      width: 16px;
      height: 16px;
    }
  `,
);
