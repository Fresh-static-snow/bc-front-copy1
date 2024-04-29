import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Drawer } from '@mui/material';

export const Root = styled(Drawer)(
  () => css`
    .MuiPaper-root {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 250px;
      padding-block: 30px;
    }
  `,
);

export const List = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 14px;
  `,
);

export const NavigationButtonContent = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 0 8px;
  `,
);

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
