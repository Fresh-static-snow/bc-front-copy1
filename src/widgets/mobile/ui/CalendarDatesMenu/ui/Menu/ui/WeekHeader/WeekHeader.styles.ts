import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 68px;
    z-index: 1200;
    height: 56px;
    width: 100%;
    padding-inline: 10px;
    background-color: ${theme.appColors.primary_02};
  `,
);

export const FlexWrapper = styled('div')(
  () =>
    css`
      display: flex;
      gap: 8px;
    `,
);

export const DayContainer = styled('div')(
  ({ theme, color }) => css`
    text-align: center;
    color: ${color ?? theme.appColors.secondary_08};
    font-family: ${theme.appFonts.primary};
    font-weight: 300;
    font-size: 11px;
    width: 36px;
  `,
);

export const ActiveCircle = styled('a')(
  ({ theme, color }) => css`
    display: grid;
    place-items: center;
    background-color: ${color ?? 'initial'};
    width: 36px;
    height: 36px;
    border-radius: 100%;
  `,
);
