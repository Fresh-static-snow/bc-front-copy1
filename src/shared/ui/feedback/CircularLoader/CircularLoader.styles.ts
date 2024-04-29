import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { CircularProgress as CircularProgressMui } from '@mui/material';

import { StyledCircularProgressProps, StyledRootProps } from './CircularLoader.types';

export const Root = styled('div')<StyledRootProps>(
  ({ $width, $height, $padding, $position }) => css`
    display: flex;
    justify-content: ${$position ?? 'center'};
    align-items: center;
    width: ${$width ?? 'max-content'};
    height: ${$height ?? 'auto'};
    padding: ${$padding ?? '0'};
  `,
);

export const CircularProgress = styled(CircularProgressMui, {
  shouldForwardProp: (prop) => prop !== '$size' && prop !== '$color',
})<StyledCircularProgressProps>(
  ({ theme, $size, $color }) => css`
    width: ${$size || '20px'} !important;
    height: ${$size || '20px'} !important;
    color: ${$color || theme.appColors.secondary_07};
  `,
);
