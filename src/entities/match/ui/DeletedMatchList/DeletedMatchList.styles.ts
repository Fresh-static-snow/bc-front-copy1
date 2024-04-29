import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const DeletedMatchList = styled('div')(
  ({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 20px 0;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 1px;
      height: 20px;
      background: ${theme.appColors.secondary_03};
    }
  `,
);

export const MatchItem = styled('div')(
  ({ theme }) => css`
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 7px;
    padding-bottom: 20px;

    &:last-of-type {
      padding-bottom: 0;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        height: 10px;
        background: ${theme.appColors.secondary_03};
      }
    }

    &:not(:last-of-type) {
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        height: 100%;
        background: ${theme.appColors.secondary_03};
      }
    }
  `,
);

export const CheckboxWrapper = styled('div')(
  () => css`
    display: flex;
    align-items: center;
  `,
);

export const Separator = styled('div')(
  ({ theme }) => css`
    width: 20px;
    height: 1px;
    background: ${theme.appColors.secondary_03};
  `,
);

export const Teams = styled('div')(
  ({ theme }) => css`
    color: ${theme.appColors.primary_02};
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    & > span {
      color: ${theme.appColors.secondary_04};
    }
  `,
);

export const ButtonsWrapper = styled('div')(
  () => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
  `,
);
