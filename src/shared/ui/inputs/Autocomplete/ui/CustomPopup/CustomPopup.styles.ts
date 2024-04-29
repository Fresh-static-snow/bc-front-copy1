import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Popper as PopperMui } from '@mui/material';

export const Root = styled(PopperMui)(
  ({ theme }) => css`
    & .MuiAutocomplete-paper.MuiPaper-root {
      box-shadow: ${theme.appShadows.primary};
      border-radius: 0;
    }

    & * {
      transition: all ${theme.appTransitions.primary}ms !important;
    }

    & .MuiAutocomplete-listbox {
      padding: 0;
    }

    & .MuiAutocomplete-option {
      &.Mui-focused {
        background: ${theme.appColors.primary_04} !important;
      }

      &[aria-selected='true'] {
        background: ${theme.appColors.primary_05} !important;

        &.Mui-focused {
          background: ${theme.appColors.primary_04} !important;
        }
      }

      &[aria-invalid='true'] {
        background: ${theme.appColors.secondary_05} !important;

        &.Mui-focused {
          background: ${theme.appColors.primary_04} !important;
        }
      }

      &[aria-disabled='true'] {
        display: none;
      }

      &:focus,
      &:active {
        background: ${theme.appColors.secondary_03};
      }
    }
  `,
);
