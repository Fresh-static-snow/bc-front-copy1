import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 4px;
    width: 100%;
    min-height: 66px;
    padding: 8px 0;

    &:not(:last-of-type) {
      border-bottom: 1px dashed ${theme.appColors.primary_03};
    }
  `,
);

export const TournamentList = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    min-height: 66px;
  `,
);

export const RootMobile = styled('div')(
  ({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
  `,
);

export const TournamentListMobile = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 6px;
    gap: 6px;
  `,
);
