import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledRootProps } from './FieldErrorMessage.types';

export const Root = styled('div')<StyledRootProps>(
  ({ theme, $position }) => css`
    position: ${$position};
    ${$position === 'absolute'
      ? css`
          bottom: -13px;
          left: 0;
        `
      : ''}
    font-family: ${theme.appFonts.primary};
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.004em;
    color: ${theme.appColors.secondary_09};
  `,
);
