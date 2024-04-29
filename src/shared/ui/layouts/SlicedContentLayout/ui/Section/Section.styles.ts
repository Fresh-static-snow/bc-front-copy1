import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledRootProps } from './Section.types';

export const Root = styled('div')<StyledRootProps>(
  ({
    theme,
    $width,
    $fragments,
    $borderLeft,
    $borderLeftType,
    $borderRight,
    $borderRightType,
    $backgroundColor,
  }) => css`
    width: ${$width ?? `calc((100% * ${$fragments}) / 3)`};
    height: 100%;
    ${$borderLeft
      ? `border-left: 1px ${$borderLeftType || 'solid'} ${theme.appColors.primary_03};`
      : ''}
    ${$borderRight
      ? `border-right: 1px ${$borderRightType || 'solid'} ${theme.appColors.primary_03};`
      : ''}
    background: ${$backgroundColor || theme.appColors.primary_05};
  `,
);
