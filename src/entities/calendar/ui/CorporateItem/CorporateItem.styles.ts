import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledDetailedWrapperMobileProps } from '../MatchDetailsItem/MatchDetailsItem.types';
import { StyledLineMobileProps } from './CorporateItem.types';

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

export const CorporateInfoWrapper = styled('div')(
  () => css`
    display: grid;
    grid-template-columns: 80fr 1170fr;
    gap: 4px;
  `,
);

export const RootMobile = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    min-width: 100%;
    width: 100%;
    overflow: hidden;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
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

export const CorporateInfoWrapperMobile = styled('div')(
  () => css`
    display: flex;
    width: 100%;
    height: 90px;
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

export const TextWrapperMobile = styled('div')(() => css``);

export const DetailsWrapperMobile = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 100%;
    padding-bottom: 15px;
    border-bottom: 1px solid ${theme.appColors.secondary_05};
  `,
);

export const DetailWrapperMobile = styled('div')<StyledDetailedWrapperMobileProps>(
  ({ $alignItems }) => css`
    display: flex;
    align-items: ${$alignItems ?? 'center'};
    width: 100%;
    height: 20px;

    > div {
      justify-content: start;
    }
  `,
);
