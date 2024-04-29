import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    width: 100%;
    border: 1px solid ${theme.appColors.secondary_03};
    border-radius: 4px;
  `,
);

export const Textarea = styled('textarea')(
  ({ theme }) => css`
    display: block;
    width: 100%;
    height: 72px;
    padding: 14px 24px;
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.004em;
    color: ${theme.appColors.primary_02};
  `,
);

export const TextareaAdditional = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 44px;
    padding: 0 24px 0 19px;
    background: ${theme.appColors.primary_03};
    border-radius: 0px 0px 4px 4px;
  `,
);

export const IconButtons = styled('div')(
  () => css`
    display: flex;
    align-items: center;
  `,
);

export const RootMobile = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 54px;
    background: ${theme.appColors.primary_03};
    padding: 0 15px;
  `,
);

export const TextareaMobile = styled('textarea')(
  ({ theme }) => css`
    display: block;
    width: 100%;
    height: 34px;
    padding: 9px 10px;
    font-family: ${theme.appFonts.primary};
    font-size: 11px;
    line-height: 14px;
    letter-spacing: 0.004em;
    color: ${theme.appColors.primary_02};
    background: ${theme.appColors.primary_05};
    border: 1px solid ${theme.appColors.secondary_03};
    border-radius: 4px;
    margin: 0 5px;
  `,
);
