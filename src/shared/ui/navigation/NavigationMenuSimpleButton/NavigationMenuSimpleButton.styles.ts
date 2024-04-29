import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledContentProps } from './NavigationMenuSimpleButton.types';

export const Content = styled('div')<StyledContentProps>(
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
