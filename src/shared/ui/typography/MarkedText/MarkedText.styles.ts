import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledRootProps } from './MarkedText.types';

export const Root = styled('span')<StyledRootProps>(
  ({ theme, $color }) => css`
    width: max-content;
    font-family: ${theme.appFonts.primary};
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.004em;
    background: ${$color ?? theme.appColors.secondary_12};
  `,
);
