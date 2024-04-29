import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 30px;
  `,
);

export const Nickname = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-size: 18px;
    font-weight: 400;
    color: ${theme.appColors.primary_02};
  `,
);
