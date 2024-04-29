import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledDetailedWrapperMobileProps } from './MatchDetailsItem.types';

export const Root = styled('div')(
  () => css`
    display: grid;
    grid-template-columns: 230fr 230fr 300fr 180fr;
    gap: 4px;
    width: 100%;
    height: 100%;
  `,
);

export const RootMobile = styled('li')(
  () => css`
    display: flex;
    align-items: stretch;
    width: 100%;
    min-height: 90px;
    padding-inline: 20px;
    padding-top: 15px;
  `,
);

export const TimeWrapperMobile = styled('div')(
  () => css`
    width: 77px;
    flex-shrink: 0;

    > div {
      justify-content: start;
      align-items: start;
    }
  `,
);

export const DetailsWrapperMobile = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    padding-bottom: 15px;
    border-bottom: 1px solid ${theme.appColors.secondary_05};
  `,
);

export const DetailWrapperMobile = styled('div')<StyledDetailedWrapperMobileProps>(
  ({ $alignItems }) => css`
    display: flex;
    align-items: ${$alignItems ?? 'center'};
    width: 100%;

    > div {
      justify-content: start;
    }
  `,
);
