import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledHeaderProps } from './NotificationHeader.types';

export const Root = styled('div')<StyledHeaderProps>(
  ({ theme, $padding }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: ${$padding ?? '0 0 10px'};
    border-bottom: 1px solid ${theme.appColors.primary_03};
  `,
);
