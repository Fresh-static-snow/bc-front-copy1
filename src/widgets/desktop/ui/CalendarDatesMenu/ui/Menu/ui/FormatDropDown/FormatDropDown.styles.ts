import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FormatAdditional = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 0 6px;

    & g {
      fill: ${theme.appColors.primary_02};
    }
    & path {
      stroke: ${theme.appColors.primary_02};
    }
  `,
);
