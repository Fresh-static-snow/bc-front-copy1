import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    width: 100%;
    padding: 30px 20px 50px;
  `,
);

export const EmptyMedia = styled('div')(
  ({ theme }) => css`
    color: ${theme.appColors.primary_02};
    font-family: ${theme.appFonts.primary};
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.072px;
  `,
);

export const MediaItem = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
    padding: 14px 0;
    border-bottom: 1px solid ${theme.appColors.primary_03};
  `,
);

export const Title = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: ${theme.appColors.primary_02};
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

export const MediaItemText = styled('div')(
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
