import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Tooltip as TooltipMui, TooltipProps } from '@mui/material';

import { StyledContentProps, StyledStatusIndicatorProps } from './InfoTipLayout.types';

export const Root = styled(({ className, ...props }: TooltipProps) => (
  <TooltipMui {...props} classes={{ popper: className }} />
))(
  ({ theme }) => css`
    & * {
      transition: all ${theme.appTransitions.primary}ms;
    }

    & .MuiTooltip-tooltip {
      max-width: 400px;
      padding: 0;
      background: ${theme.appColors.primary_05};
      border-radius: 4px;
      box-shadow: ${theme.appShadows.primary};
    }
  `,
);

export const ContentContainer = styled('div')<StyledContentProps>(
  ({ $width }) => css`
    min-width: ${$width || '200px'};
  `,
);

export const StatusIndicator = styled('div')<StyledStatusIndicatorProps>(
  ({ theme, $stripes, $baseColor }) => css`
    width: 100%;
    height: 18px;
    border-radius: 4px 4px 0px 0px;
    background: ${$stripes
      ? `repeating-linear-gradient(
          -60deg,
          ${$baseColor || theme.appColors.palette_01} 0 15px,
          ${$baseColor || theme.appColors.palette_01}B3 15px 30px
        )`
      : `${$baseColor || theme.appColors.palette_01}`};
  `,
);

export const Content = styled('div')(
  () => css`
    width: 100%;
  `,
);
