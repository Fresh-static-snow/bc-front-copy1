import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledEditButtonWrapperProps } from './UserAvatar.types';

export const Root = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      padding: 10px;
      padding-bottom: 0;
    }
  `,
);

export const AvatarWrapper = styled('div')(
  () => css`
    position: relative;
  `,
);

export const EditButtonWrapper = styled('div')<StyledEditButtonWrapperProps>(
  ({ $bottom }) => css`
    position: absolute;
    width: max-content;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: ${$bottom};
  `,
);
