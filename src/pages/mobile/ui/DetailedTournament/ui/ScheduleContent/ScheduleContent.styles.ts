import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MatchList = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    /* padding: 30px 0 20px; */
  `,
);

export const EmptySchedule = styled('div')(
  ({ theme }) => css`
    padding: 24px 0;
    color: ${theme.appColors.primary_02};
    font-family: ${theme.appFonts.primary};
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0.096px;
  `,
);
