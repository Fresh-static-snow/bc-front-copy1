import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const NotificationsAdditional = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 10px;

    & g {
      fill: ${theme.appColors.primary_02};
    }
    & path {
      stroke: ${theme.appColors.primary_02};
    }
  `,
);
