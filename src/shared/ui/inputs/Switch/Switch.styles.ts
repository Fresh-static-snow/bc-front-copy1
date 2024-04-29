import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Switch as SwitchMui } from '@mui/material';

import { StyledLabelProps } from './Switch.types';

export const Root = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  `,
);

export const Switch = styled(SwitchMui)(
  ({ theme }) => css`
    width: auto;
    height: auto;
    padding: 0;

    & * {
      transition: all ${theme.appTransitions.primary}ms !important;
    }

    &:hover {
      & .MuiButtonBase-root {
        background: none;

        & + .MuiSwitch-track {
          border: 1px solid ${theme.appColors.primary_02};
        }

        & .MuiSwitch-thumb {
          opacity: 1;
        }

        &.Mui-checked + .MuiSwitch-track {
          background: ${theme.appColors.secondary_01};
          border: 1px solid ${theme.appColors.secondary_01};
        }

        &.Mui-disabled {
          & .MuiSwitch-thumb {
            opacity: 0.5;
          }

          &.Mui-checked {
            & .MuiSwitch-thumb {
              opacity: 1;
            }
          }

          & + .MuiSwitch-track {
            border: 1px solid ${theme.appColors.secondary_03};
          }

          &.Mui-checked + .MuiSwitch-track {
            background: ${theme.appColors.primary_01};
            border: 1px solid ${theme.appColors.primary_01};
          }
        }
      }
    }

    & .MuiButtonBase-root {
      padding: 4px;
      background: none;
      color: unset;

      & .MuiSwitch-thumb {
        width: 12px;
        height: 12px;
        box-shadow: none;
        background: ${theme.appColors.primary_02};
        opacity: 0.5;
      }

      & + .MuiSwitch-track {
        width: 40px;
        height: 20px;
        border-radius: 35px;
        background: ${theme.appColors.primary_05};
        border: 1px solid ${theme.appColors.secondary_03};
        opacity: 1;
      }

      &.Mui-checked {
        color: unset;

        & .MuiSwitch-thumb {
          background: ${theme.appColors.primary_05};
          opacity: 1;
        }
      }

      &.Mui-checked + .MuiSwitch-track {
        background: ${theme.appColors.primary_01};
        border: 1px solid ${theme.appColors.primary_01};
        opacity: 1;
      }

      &.Mui-focusVisible {
        & + .MuiSwitch-track {
          border: 1px solid ${theme.appColors.primary_02};
        }

        & .MuiSwitch-thumb {
          opacity: 1;
        }

        &.Mui-checked + .MuiSwitch-track {
          background: ${theme.appColors.secondary_01};
          border: 1px solid ${theme.appColors.secondary_01};
        }
      }

      &.Mui-disabled {
        opacity: 0.5;
      }

      &.Mui-disabled + .MuiSwitch-track {
        opacity: 0.5;
      }
    }
  `,
);

export const Label = styled('div')<StyledLabelProps>(
  ({ theme, $disabled }) => css`
    font-family: ${theme.appFonts.primary};
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: ${$disabled ? theme.appColors.secondary_04 : theme.appColors.primary_02};
  `,
);
