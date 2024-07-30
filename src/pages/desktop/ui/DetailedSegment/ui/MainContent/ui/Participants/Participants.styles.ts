import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    width: 100%;
    padding: 40px 30px 40px 54px;
  `,
);

export const ParticipantsTitle = styled('div')(
  ({ theme }) => css`
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid ${theme.appColors.primary_03};
    font-family: ${theme.appFonts.primary};
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    text-transform: uppercase;
    color: ${theme.appColors.primary_02};
  `,
);
