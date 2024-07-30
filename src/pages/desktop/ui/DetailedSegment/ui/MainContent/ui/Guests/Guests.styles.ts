import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Guests = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  `,
);

export const GuestItem = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    line-height: 15.73px;
    letter-spacing: 0.004em;
  `,
);

export const Username = styled('span')(
  ({ theme }) => css`
    color: ${theme.appColors.primary_02};
    font-weight: 600;
  `,
);

export const Name = styled('span')(
  ({ theme }) => css`
    color: ${theme.appColors.primary_02};
    font-weight: 400;
  `,
);

export const Social = styled('span')(
  ({ theme }) => css`
    color: ${theme.appColors.secondary_04};
    font-weight: 400;
  `,
);
