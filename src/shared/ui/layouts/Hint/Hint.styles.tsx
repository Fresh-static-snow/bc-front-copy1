import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Tooltip as TooltipMui, TooltipProps } from '@mui/material';

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
      background: ${theme.appColors.primary_02};
      border-radius: 4px;
      box-shadow: ${theme.appShadows.primary};
    }
  `,
);

export const Content = styled('div')(
  ({ theme }) => css`
    padding: 3px 5px;
    color: ${theme.appColors.primary_05};
    font-family: ${theme.appFonts.primary};
    font-size: 12px;
    font-weight: 500;
    line-height: 14.52px;
    letter-spacing: 0.004em;
  `,
);
