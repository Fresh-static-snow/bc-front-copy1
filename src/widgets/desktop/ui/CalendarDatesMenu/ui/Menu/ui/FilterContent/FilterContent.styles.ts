import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    width: 292px;
    height: calc(100dvh - 48px - 38px - 48px);
  `,
);

export const FilterList = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 44px);
  `,
);

export const ActiveOptions = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    width: 100%;
    padding: 14px 24px;
    border-bottom: 1px solid ${theme.appColors.primary_03};
  `,
);

export const Options = styled('div')(
  () => css`
    width: 100%;
    height: 100%;
  `,
);

export const OptionListWrapper = styled('div')(
  () => css`
    width: 100%;
    padding: 0 24px;
  `,
);
