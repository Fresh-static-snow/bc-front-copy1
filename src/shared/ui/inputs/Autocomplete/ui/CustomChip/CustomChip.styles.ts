import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Chip as ChipMui } from '@mui/material';

import { StyledRootProps } from './CustomChip.types';

export const Root = styled(ChipMui, {
  shouldForwardProp: (prop) => prop !== '$invalid',
})<StyledRootProps>(
  ({ theme, $invalid }) => css`
    background: ${$invalid ? theme.appColors.secondary_05 : theme.appColors.primary_04};
    border: none;
    border-radius: 4px;
    padding: 8px 10px;
    margin: 0 !important;
    gap: 4px;

    & .MuiChip-label {
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      font-family: ${theme.appFonts.primary};
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.004em;
      color: ${theme.appColors.primary_02};
    }

    & .MuiChip-deleteIcon {
      flex-shrink: 0;
      margin: 0;
    }
  `,
);
