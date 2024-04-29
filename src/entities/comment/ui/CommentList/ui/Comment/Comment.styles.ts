import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
    padding: 14px 0;

    &:not(:last-of-type) {
      border-bottom: 1px solid ${theme.appColors.primary_03};
    }
  `,
);

export const Text = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.004em;
    color: ${theme.appColors.primary_02};
    white-space: break-spaces;
    word-wrap: break-word;
  `,
);

export const Footer = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    width: 100%;
  `,
);

export const Name = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    line-height: 16px;
    color: ${theme.appColors.secondary_04};
  `,
);

export const Date = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    line-height: 16px;
    color: ${theme.appColors.secondary_04};
  `,
);
