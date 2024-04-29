import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 48px;
    padding: 0 30px;
    background: ${theme.appColors.primary_02};
  `,
);

export const Logo = styled('button')(
  ({ theme }) => css`
    max-width: 200px;
    max-height: 28px;
    transition: all ${theme.appTransitions.primary}ms;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }

    & img {
      max-height: 28px;
      max-width: 200px;
    }
  `,
);

export const Navigation = styled('div')(
  () => css`
    display: flex;
    align-items: center;
  `,
);

export const NavigationButtonContent = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 0 4px;
  `,
);

export const DropDownContent = styled('div')(
  ({ theme }) => css`
    width: 200px;
    background: ${theme.appColors.primary_05};
  `,
);

export const DropDownContentItem = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 10px 0;
  `,
);

export const Separator = styled('div')(
  ({ theme }) => css`
    width: 100%;
    height: 1px;
    background: ${theme.appColors.secondary_03};
  `,
);
