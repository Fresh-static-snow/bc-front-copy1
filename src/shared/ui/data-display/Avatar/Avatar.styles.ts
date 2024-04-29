import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Avatar as AvatarMui } from '@mui/material';

import {
  StyledAdditionalBorderProps,
  StyledAdditionalIconWrapperProps,
  StyledAvatarProps,
  StyledRootProps,
} from './Avatar.types';

export const Root = styled('div')<StyledRootProps>(
  ({ $size }) => css`
    position: relative;
    width: ${$size ?? '20px'};
    height: ${$size ?? '20px'};
    border-radius: 50%;
  `,
);

export const Avatar = styled(AvatarMui, {
  shouldForwardProp: (prop) =>
    prop !== '$size' &&
    prop !== '$borderColor' &&
    prop !== '$backgroundColor' &&
    prop !== '$fontSize' &&
    prop !== '$fontWeight' &&
    prop !== '$textColor' &&
    prop !== '$withShadow' &&
    prop !== '$shadowColor',
})<StyledAvatarProps>(
  ({
    theme,
    $size,
    $borderColor,
    $backgroundColor,
    $fontSize,
    $fontWeight,
    $textColor,
    $withShadow,
    $shadowColor,
  }) => css`
    width: ${$size ?? '20px'};
    height: ${$size ?? '20px'};
    margin: 0;
    background-color: ${$backgroundColor ?? 'transparent'};
    font-family: ${theme.appFonts.primary};
    font-size: ${$fontSize ?? '10px'};
    line-height: ${$fontSize ?? '10px'};
    font-weight: ${$fontWeight ?? '600'};
    border: ${$borderColor ? `1px solid ${$borderColor}` : ''};
    color: ${$textColor ?? theme.appColors.primary_05};
    transition: all ${theme.appTransitions.primary}ms;
    box-shadow: ${$withShadow
      ? `0 0 0 2px ${$shadowColor ?? theme.appColors.secondary_12}, 0px 0px 10px 3px ${
          $shadowColor ?? theme.appColors.secondary_12
        }`
      : 'none'};
  `,
);

export const AdditionalIconWrapper = styled('div')<StyledAdditionalIconWrapperProps>(
  ({ $innerStroke, $outerStroke }) => css`
    position: absolute;
    z-index: 1;
    bottom: -1px;
    right: -1px;
    width: 55%;
    display: flex;

    & svg {
      width: 100%;
    }

    & .crown-icon-inner-layer {
      ${$innerStroke
        ? css`
            stroke: ${$innerStroke};
          `
        : ''}
    }

    & .crown-icon-outer-layer {
      ${$outerStroke
        ? css`
            stroke: ${$outerStroke};
          `
        : ''}
    }
  `,
);

export const AdditionalBorder = styled('div')<StyledAdditionalBorderProps>(
  ({ $border }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: ${$border};
    border-radius: 50%;
  `,
);
