import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Checkbox as CheckboxMui } from '@mui/material';

import { StyledLabelProps } from './Checkbox.types';

export const Root = styled('div')(
  () => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  `,
);

export const Checkbox = styled(CheckboxMui)(
  ({ theme }) => css`
    flex-shrink: 0;
    padding: 0;
    width: 20px;
    height: 20px;
    border: 1px solid ${theme.appColors.secondary_03};
    border-radius: 4px;
    transition: all ${theme.appTransitions.primary}ms;

    & * {
      transition: all ${theme.appTransitions.primary}ms;
    }

    &:hover,
    &.Mui-focusVisible {
      border: 1px solid ${theme.appColors.primary_02};
    }

    & .PrivateSwitchBase-input {
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      top: -1px;
      left: -1px;
    }

    &.Mui-disabled {
      opacity: 0.5;
    }
  `,
);

export const Checked = styled('div')(
  ({ theme }) => css`
    width: 12px;
    height: 12px;
    background: ${theme.appColors.primary_01};
    border-radius: 4px;
  `,
);

export const Label = styled('div')<StyledLabelProps>(
  ({ theme, $disabled }) => css`
    font-family: ${theme.appFonts.primary};
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: ${theme.appColors.primary_02};
    ${$disabled ? `opacity: 0.5;` : ''}
  `,
);
