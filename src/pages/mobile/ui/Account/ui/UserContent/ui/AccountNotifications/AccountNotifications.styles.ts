import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 50px 0 0;

    @media (max-width: 768px) {
      padding-top: 10px;
    }
  `,
);

export const EmptyNotifications = styled('div')(
  ({ theme }) => css`
    padding: 24px 30px 24px 50px;
    color: ${theme.appColors.secondary_13};
    font-family: ${theme.appFonts.primary};
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.072px;
  `,
);

export const NotificationsElement = styled('div')(
  () => css`
    padding: 0 30px 0 50px;

    @media (max-width: 768px) {
      padding-inline: 20px;
    }
  `,
);

export const Content = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    height: 100%;
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
