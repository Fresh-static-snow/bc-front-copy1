import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    width: 100%;
    padding: 0 20px;
  `,
);

export const ParticipantsTitle = styled('div')(
  ({ theme }) => css`
    width: 100%;
    padding: 0 0 10px;
    border-bottom: 1px solid ${theme.appColors.primary_03};
    font-family: ${theme.appFonts.primary};
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    text-transform: uppercase;
    color: ${theme.appColors.primary_02};
  `,
);
