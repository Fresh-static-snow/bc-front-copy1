import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HeaderWrapper = styled('div')(
  ({ theme }) => css`
    position: sticky;
    left: 0;
    top: 0;
    z-index: 10;
    height: 48px;
    padding: 10px 0;
    background: ${theme.appColors.primary_06};
  `,
);

export const MatchList = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 24px 0;
  `,
);

export const EmptySchedule = styled('div')(
  ({ theme }) => css`
    padding: 24px 0;
    color: ${theme.appColors.secondary_13};
    font-family: ${theme.appFonts.primary};
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0.096px;
  `,
);
