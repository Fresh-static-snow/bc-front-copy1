import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledLineMobileProps } from './TournamentItem.types';

export const Root = styled('div')(
  () => css`
    display: grid;
    grid-template-columns: 300fr 1250fr 150fr;
    gap: 4px;
    width: 100%;
    min-height: 66px;

    @media (max-width: 1440px) {
      grid-template-columns: 180fr 830fr 80fr;
    }
  `,
);

export const MatchList = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,
);

export const RootMobile = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    min-width: 100%;
    width: 100%;
  `,
);

export const LineMobile = styled('div')<StyledLineMobileProps>(
  ({ $color }) => css`
    background-color: ${$color};
    min-width: 100%;
    width: 100%;
    height: 8px;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  `,
);

export const MatchListMobile = styled('ul')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 6px;
  `,
);
