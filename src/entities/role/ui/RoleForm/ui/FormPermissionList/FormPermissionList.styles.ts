import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    width: 100%;
  `,
);

export const Element = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 15px 0;
    border-top: 1px solid ${theme.appColors.primary_03};
  `,
);

export const Header = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 8px;
  `,
);

export const Title = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    color: ${theme.appColors.primary_02};
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
  `,
);

export const Description = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    color: ${theme.appColors.primary_02};
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
  `,
);
