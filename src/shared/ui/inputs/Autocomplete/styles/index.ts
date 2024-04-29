import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Autocomplete as AutocompleteMui } from '@mui/material';

import { StyledAutocompleteProps } from '../types';

export const AutocompleteWrapper = styled('div')(
  () => css`
    position: relative;
    width: 100%;
  `,
);

export const Autocomplete = styled(AutocompleteMui, {
  shouldForwardProp: (prop) =>
    prop !== '$error' && prop !== '$disablePopupIconRotation' && prop !== '$popupIconColor',
})<StyledAutocompleteProps>(
  ({ theme, $error, $disablePopupIconRotation, $popupIconColor }) => css`
    width: 100%;

    & * {
      transition: all ${theme.appTransitions.primary}ms !important;
    }

    & .MuiOutlinedInput-root {
      padding: 6px;
    }

    &.MuiAutocomplete-hasClearIcon .MuiInputBase-root.MuiOutlinedInput-root {
      padding-right: 76px;
    }

    & .MuiInputBase-root.MuiOutlinedInput-root {
      padding-right: 50px;

      &:hover:not(.Mui-disabled) {
        & .MuiOutlinedInput-notchedOutline {
          border: 1px solid ${$error ? theme.appColors.secondary_09 : theme.appColors.secondary_04} !important;
        }
      }

      &.Mui-focused:not(.Mui-disabled) {
        & .MuiOutlinedInput-notchedOutline {
          border: 1px solid ${$error ? theme.appColors.secondary_09 : theme.appColors.primary_02} !important;
        }
      }
    }

    & .MuiOutlinedInput-notchedOutline {
      border: 1px solid ${$error ? theme.appColors.secondary_09 : theme.appColors.secondary_03} !important;
      border-radius: 4px;
    }

    & .MuiAutocomplete-input.MuiOutlinedInput-input {
      padding: 8px 18px;
      font-family: ${theme.appFonts.primary};
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: 0.004em;
      color: ${theme.appColors.primary_02};
      height: auto;

      &::placeholder {
        color: ${theme.appColors.secondary_04};
        opacity: 1;
      }
    }

    & .MuiAutocomplete-popupIndicator.MuiButtonBase-root,
    & .MuiAutocomplete-clearIndicator.MuiButtonBase-root {
      width: 28px;
      height: 28px;
    }

    & .MuiAutocomplete-clearIndicator.MuiButtonBase-root {
      @media (max-width: 768px) {
        visibility: visible !important;
      }

      & g {
        fill: ${theme.appColors.primary_02};
      }
      & path {
        stroke: ${theme.appColors.primary_02};
      }
    }

    & .MuiAutocomplete-popupIndicator.MuiButtonBase-root {
      & g {
        fill: ${$popupIconColor || theme.appColors.primary_02};
      }
      & path {
        stroke: ${$popupIconColor || theme.appColors.primary_02};
      }
    }

    & .MuiAutocomplete-endAdornment {
      right: 20px !important;
    }

    & .MuiAutocomplete-popupIndicator {
      ${$disablePopupIconRotation
        ? css`
            transform: none !important;
          `
        : css``}
    }

    & .Mui-disabled {
      background: ${theme.appColors.primary_04};
      pointer-events: none;
    }
  `,
);
