import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledTournamentWrapperProps } from './TournamentRangeItem.types';

export const TournamentWrapper = styled('div')<StyledTournamentWrapperProps>(
  ({ $periodLength }) => css`
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: ${$periodLength * 100}%;
    height: 100%;
    min-height: 76px;
    padding: 0 2px;
  `,
);

export const Tournament = styled('button')(
  ({ theme }) => css`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 76px;
    background: ${theme.appColors.primary_06};
    transition: all ${theme.appTransitions.primary}ms;

    &:not(:disabled) > div {
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

export const TournamentContent = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4px;
    width: 100%;
    height: 100%;
    min-height: 76px;
    padding: 8px 8px 8px 5px;
  `,
);

export const TournamentContentBottom = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%;
  `,
);
