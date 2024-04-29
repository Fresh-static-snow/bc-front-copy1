import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    width: 201px;
    height: 340px;
  `,
);

export const Header = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 44px;
    background: ${theme.appColors.secondary_06};
  `,
);

export const TimePickerButton = styled('button')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 7px;
    width: 100%;
    padding: 8px 10px;
    font-family: ${theme.appFonts.primary};
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.004em;
    color: ${theme.appColors.primary_02};
    cursor: pointer;
    transition: all ${theme.appTransitions.primary}ms;

    &:hover:not(:disabled) {
      background: ${theme.appColors.primary_04};
    }

    &:active:not(:disabled),
    &:focus:not(:disabled) {
      background: ${theme.appColors.secondary_03};
    }

    &:disabled {
      cursor: default;
      opacity: 0.3;
    }
  `,
);

export const Icon = styled('div')(
  () => css`
    width: 16px;
    height: 16px;
  `,
);

export const TimeListWrapper = styled('div')(
  () => css`
    width: 100%;
    height: calc(100% - 44px);
  `,
);

export const TimeList = styled('div')(
  () => css`
    display: flex;
    align-items: flex-start;
    width: 100%;
  `,
);

export const TimeListLeft = styled('div')(
  ({ theme }) => css`
    width: 101px;
    border-right: 1px solid ${theme.appColors.primary_03};
  `,
);

export const TimeListRight = styled('div')(
  () => css`
    width: 100px;
  `,
);
