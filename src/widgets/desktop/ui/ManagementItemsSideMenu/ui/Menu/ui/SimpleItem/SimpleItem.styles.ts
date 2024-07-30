import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { IStyledContentProps } from './SimpleItem.types';

export const Content = styled('div')<IStyledContentProps>(
  ({ theme, $fontSize, $fontWeight }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    color: ${theme.appColors.secondary_04};
    font-family: ${theme.appFonts.primary};
    font-size: ${$fontSize ?? '14px'};
    font-weight: ${$fontWeight ?? '600'};
  `,
);

export const Count = styled('span')(
  ({ theme }) => css`
    color: ${theme.appColors.primary_02};
    font-family: ${theme.appFonts.primary};
    font-size: 14px;
    font-weight: 600;
  `,
);
