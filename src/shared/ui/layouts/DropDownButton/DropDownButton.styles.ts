import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Popover as PopoverMui } from '@mui/material';

import { StyledRootProps } from './DropDownButton.types';

export const Root = styled('div')<StyledRootProps>(({ theme, $active, $orientation }) => {
  const baseStyles = css`
    width: max-content;
    background: ${$active ? theme.appColors.secondary_05 : 'transparent'};
    transition: all ${theme.appTransitions.primary}ms;

    ${$active ? `& button { background: transparent }` : ''}
  `;

  const orientationStyles = {
    left: css`
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    `,
    right: css`
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    `,
    top: css`
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    `,
    bottom: css`
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    `,
  };

  return css`
    ${baseStyles}
    ${orientationStyles[$orientation]}
  `;
});

export const Popover = styled(PopoverMui)(
  ({ theme }) => css`
    & .MuiPopover-paper {
      border-radius: 0;
      box-shadow: ${theme.appShadows.primary};
    }
  `,
);
