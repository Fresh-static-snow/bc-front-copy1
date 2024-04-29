import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledInputComponentProps } from './TimePickerInput.types';

export const Root = styled('div')(
  () => css`
    position: relative;
    width: 100%;
  `,
);

export const InputComponent = styled('div')<StyledInputComponentProps>(
  ({ theme, $disabled }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 94px;
    font-family: ${theme.appFonts.primary};
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.004em;
    color: ${$disabled ? theme.appColors.secondary_04 : theme.appColors.primary_02};
  `,
);
