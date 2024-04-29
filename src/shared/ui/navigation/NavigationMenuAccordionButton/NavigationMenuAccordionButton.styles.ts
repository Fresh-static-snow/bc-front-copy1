import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AccordionSummary = styled('div')(
  () => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
);

export const Label = styled('div')(
  () => css`
    font-size: 14px;
    font-weight: 600;
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
