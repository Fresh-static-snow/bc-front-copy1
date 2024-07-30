import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
);

export const Control = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px;
    border-bottom: ${theme.appColors.primary_03} 1px solid;
  `,
);

export const InputWrapper = styled('div')(
  ({ theme }) => css`
    border-radius: 4px;
    background: ${theme.appColors.primary_05};
  `,
);

export const Lists = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 28px 0;
  `,
);
