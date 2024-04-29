import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledRootProps } from './DropDownChevron.types';

export const Root = styled('div')<StyledRootProps>(
  ({ theme, $active, $size }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ${theme.appTransitions.primary}ms;
    transform: ${$active ? 'rotate(90deg)' : 'rotate(270deg)'};

    & svg {
      width: ${$size ?? '12px'};
      height: ${$size ?? '12px'};
    }
  `,
);
