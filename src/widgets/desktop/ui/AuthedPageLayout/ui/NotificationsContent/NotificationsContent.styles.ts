import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    width: 420px;
    height: 464px;
  `,
);

export const EmptyNotifications = styled('div')(
  ({ theme }) => css`
    padding: 24px;
    color: ${theme.appColors.secondary_13};
    font-family: ${theme.appFonts.primary};
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.072px;
  `,
);

export const ListWrapper = styled('div')(
  () => css`
    height: 100%;
    padding: 0 24px;
  `,
);

export const LoaderWrapper = styled('div')(
  () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 0;
  `,
);
