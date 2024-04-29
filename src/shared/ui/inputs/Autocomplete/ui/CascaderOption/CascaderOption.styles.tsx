import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Tooltip as TooltipMui, TooltipProps } from '@mui/material';

import { StyledTooltipProps } from './CascaderOption.types';

export const CascaderOption = styled('li')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between !important;
    min-height: 32px !important;
    padding: 0 32px 0 10px !important;
    font-family: ${theme.appFonts.primary};
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: ${theme.appColors.primary_02};

    & g {
      fill: ${theme.appColors.primary_02};
    }
    & path {
      stroke: ${theme.appColors.primary_02};
    }
  `,
);

export const Tooltip = styled(({ className, ...props }: TooltipProps & StyledTooltipProps) => (
  <TooltipMui {...props} classes={{ popper: className }} />
))(
  ({ theme, $elementsCount }) => css`
    & * {
      transition: all ${theme.appTransitions.primary}ms;
    }

    & .MuiTooltip-tooltip {
      width: 300px;
      height: ${$elementsCount * 32}px;
      max-height: 320px;
      padding: 0;
      margin: 0;
      background: ${theme.appColors.primary_05};
      border-radius: 0px;
      box-shadow: ${theme.appShadows.primary};
    }

    &[data-popper-placement*='right'] .MuiTooltip-tooltip {
      margin-left: -24px !important;
    }

    &[data-popper-placement*='left'] .MuiTooltip-tooltip {
      margin-right: -8px !important;
    }
  `,
);

export const OptionCheck = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
  `,
);

export const MainPart = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 6px;
  `,
);

export const SecondaryPart = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
);
