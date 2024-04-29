import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  `,
);

export const InfoWrapper = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 20px;
  `,
);

export const NameWrapper = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
);

export const Name = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-size: 32px;
    font-weight: 600;
    color: ${theme.appColors.primary_02};
  `,
);

export const ControlWrapper = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
);
