import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('button')(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    transition: all ${theme.appTransitions.primary}ms;

    &:not(:disabled) {
      cursor: pointer;

      &:hover,
      &:focus,
      &:active {
        opacity: 0.6;
      }
    }
  `,
);

export const TournamentTitle = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 10px;
  `,
);

export const RootMobile = styled('button')(
  ({ theme }) => css`
    width: calc(100% - 40px);
    height: 60px;
    transition: all ${theme.appTransitions.primary}ms;
    border: 1px solid ${theme.appColors.secondary_05};
    border-radius: 4px;
    margin-inline: 20px;
    margin-top: 15px;
    margin-bottom: 0;

    &:not(:disabled) {
      cursor: pointer;

      &:hover,
      &:focus,
      &:active {
        opacity: 0.6;
      }
    }
  `,
);

export const TournamentTitleMobile = styled('div')(
  () => css`
    display: grid;
    place-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 10px;
  `,
);
