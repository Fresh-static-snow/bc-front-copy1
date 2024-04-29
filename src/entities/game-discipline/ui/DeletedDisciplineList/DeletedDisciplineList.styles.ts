import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    padding: 50px 30px;
  `,
);

export const TournamentListWrapper = styled('div')(
  () => css`
    padding: 0 0 0 30px;
  `,
);

export const MatchListWrapper = styled('div')(
  () => css`
    padding: 0 0 20px 30px;
  `,
);
