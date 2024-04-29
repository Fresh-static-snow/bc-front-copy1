import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  Accordion as AccordionMui,
  AccordionDetails as AccordionDetailsMui,
  AccordionSummary as AccordionSummaryMui,
} from '@mui/material';

import { StyledAccordionSummary, StyledRootProps } from './Accordion.types';

export const Root = styled(AccordionMui, {
  shouldForwardProp: (prop) => prop !== '$withoutBorder' && prop !== '$dashedBorder',
})<StyledRootProps>(
  ({ theme, $withoutBorder, $dashedBorder }) => css`
    background: transparent;
    box-shadow: none;
    transition: all ${theme.appTransitions.primary}ms;
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.004em;
    color: ${theme.appColors.primary_02};
    ${$withoutBorder
      ? ''
      : css`
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            border-bottom: 1px ${$dashedBorder ? 'dashed' : 'solid'} ${theme.appColors.primary_03};
          }
        `}

    &::before {
      position: unset;
    }
  `,
);

export const AccordionSummary = styled(AccordionSummaryMui, {
  shouldForwardProp: (prop) =>
    prop !== '$reversed' &&
    prop !== '$padding' &&
    prop !== '$hoverable' &&
    prop !== '$summaryColor' &&
    prop !== '$endRotationPositionDeg',
})<StyledAccordionSummary>(
  ({ theme, $reversed, $padding, $hoverable, $summaryColor, $endRotationPositionDeg }) => css`
    min-height: 46px;
    padding: ${$padding ?? '14px 0'};
    flex-direction: ${$reversed ? 'row-reverse' : 'row'};
    gap: 4px;
    transition: all ${theme.appTransitions.primary}ms;

    ${$hoverable
      ? css`
          &:hover,
          &:focus {
            background: ${theme.appColors.primary_03};
          }
        `
      : ''}

    & .MuiAccordionSummary-content {
      display: flex;
      align-items: center;
      margin: 0;
      color: ${$summaryColor ?? theme.appColors.secondary_04};
    }

    & .MuiAccordionSummary-expandIconWrapper {
      & g {
        fill: ${theme.appColors.primary_02};
      }
      & path {
        stroke: ${theme.appColors.primary_02};
      }
    }

    & .MuiAccordionSummary-expandIconWrapper {
      transition: all ${theme.appTransitions.primary}ms;
    }

    & .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
      transform: rotate(${$endRotationPositionDeg ?? 180}deg);
    }
  `,
);

export const AccordionDetails = styled(AccordionDetailsMui)(
  () => css`
    padding: 0;
    min-height: auto;
  `,
);
