import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledRootProps } from './UsersRow.types';

export const Root = styled('div')<StyledRootProps>(
  ({ $gridColumns }) => css`
    display: grid;
    grid-template-columns: ${$gridColumns ? '70% 30%' : '100%'};
    width: 100%;
    height: 20px;
  `,
);

export const MainParticipant = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 4px;
    height: 20px;
    margin: 0 10px 0 0;
  `,
);
