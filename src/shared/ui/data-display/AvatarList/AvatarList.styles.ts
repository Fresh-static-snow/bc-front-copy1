import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledRootProps } from './AvatarList.types';

export const Root = styled('div')<StyledRootProps>(({ $position }) => {
  const positionStyles = {
    left: `flex-start`,
    center: `center`,
    right: `flex-end`,
  };

  return css`
    display: flex;
    align-items: center;
    justify-content: ${$position ? positionStyles[$position] : 'center'};
    gap: 4px;
    width: 100%;
    min-height: 20px;
  `;
});

export const Counter = styled('div')(
  () => css`
    height: 100%;
    display: flex;
    align-items: center;
  `,
);
