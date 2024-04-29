import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledRootProps } from './CustomOption.types';

export const Root = styled('li')<StyledRootProps>(
  ({ theme }) => css`
    gap: 6px;
    min-height: 32px !important;
    padding: 0 10px !important;
    font-family: ${theme.appFonts.primary};
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: ${theme.appColors.primary_02};

    & g {
      fill: ${theme.appColors.primary_02};
    }
    & path {
      stroke: ${theme.appColors.primary_02};
    }
  `,
);

export const OptionCheck = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    flex-shrink: 0;
  `,
);
