import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledRootProps, StyledSectionWrapper } from './SubMenu.types';

export const Root = styled('div')<StyledRootProps>(
  ({ theme, $backgroundColor, $borderNone }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    width: 100%;
    height: 45px;
    padding: 0 30px;
    background: ${$backgroundColor ?? theme.appColors.secondary_11};
    border-bottom: ${$borderNone ? 'none' : `1px solid ${theme.appColors.primary_03}`};

    @media (max-width: 768px) {
      padding-inline: 20px;
    }
  `,
);

export const SectionWrapper = styled('div')<StyledSectionWrapper>(
  ({ $flexPosition }) => css`
    display: flex;
    align-items: center;
    justify-content: ${$flexPosition || 'center'};
  `,
);

export const BackButtonAdditional = styled('div')(
  ({ theme, color }) => css`
    font-family: ${theme.appFonts.primary};
    font-weight: 400;
    font-size: 13px;
    color: ${color ?? theme.appColors.primary_02};
  `,
);

export const EventTitle = styled('div')(
  ({ theme, color }) => css`
    font-family: ${theme.appFonts.primary};
    font-weight: 600;
    font-size: 13px;
    color: ${color ?? theme.appColors.primary_02};
    max-width: 800px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 1200px) {
      max-width: 600px;
    }

    @media (max-width: 1024px) {
      max-width: 500px;
    }

    @media (max-width: 900px) {
      max-width: 300px;
    }

    @media (max-width: 400px) {
      max-width: 200px;
    }

    @media (max-width: 300px) {
      max-width: 150px;
    }
  `,
);
