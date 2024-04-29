import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('button')(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 80fr 230fr 940fr;
    gap: 4px;
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

export const MatchDetailsList = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  `,
);

export const RootMobile = styled('li')(
  () => css`
    list-style: none;
    overflow: hidden;

    &:not(:first-child) {
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }

    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  `,
);

export const MatchDetailsListMobile = styled('ul')(
  ({ theme }) => css`
    li:last-child #tournament-match-time {
      border-bottom: 1px solid ${theme.appColors.secondary_05};
    }
  `,
);

export const TeamsHeaderMobile = styled('div')(
  ({ theme, color }) => css`
    display: flex;
    margin-inline: 20px;
    height: 25px;
    justify-content: space-between;
    border-bottom: 1px solid ${color ?? theme.appColors.secondary_05};
  `,
);

export const TeamsHeaderTextMobile = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 11px;
    width: calc(100% - 48px);
    position: relative;
  `,
);

export const TextFade = styled('div')(
  () => css`
    position: absolute;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;

    top: 0;
    right: 0;
    height: 24px;
    width: 9px;
    background: linear-gradient(to right, transparent 50%, #bbeaf6 200%);
  `,
);

export const BadgeWrapper = styled('div')(
  () => css`
    margin-right: -24px;
  `,
);
