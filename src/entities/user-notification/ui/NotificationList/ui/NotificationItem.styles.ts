import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 32px 1fr 26px;
    gap: 7px;
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px dashed ${theme.appColors.primary_03};
  `,
);

export const Content = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 100%;
  `,
);

export const ContentTitle = styled('div')(
  () => css`
    width: 100%;
  `,
);

export const Name = styled('span')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.004em;
    color: ${theme.appColors.primary_02};
  `,
);

export const Action = styled('span')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-style: italic;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.004em;
    color: ${theme.appColors.primary_02};
  `,
);

export const ActionName = styled('span')(
  () => css`
    width: max-content;
    display: inline-block;
    position: relative;
    padding: 0 26px 0 0;
  `,
);

export const ActionIcon = styled('div')(
  () => css`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 16px;
    height: 16px;
    margin: 0 7px 0 0;

    svg {
      width: 100%;
      height: 100%;
    }
  `,
);

export const Title = styled('span')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.004em;
    color: ${theme.appColors.primary_02};

    & > a {
      transition: all ${theme.appTransitions.primary}ms;
      cursor: pointer;

      &:hover,
      &:focus,
      &:active {
        opacity: 0.6;
      }
    }
  `,
);

export const Date = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.004em;
    color: ${theme.appColors.secondary_04};
  `,
);

export const StatusWrapper = styled('div')(
  () => css`
    padding: 10px 0 0;
  `,
);

export const Status = styled('div')(
  ({ theme }) => css`
    min-width: 24px;
    font-family: ${theme.appFonts.primary};
    font-weight: 600;
    font-size: 9px;
    line-height: 11px;
    text-transform: uppercase;
    text-align: center;
    border-radius: 35px;
    color: ${theme.appColors.secondary_14};
    background: ${theme.appColors.secondary_15};
  `,
);
