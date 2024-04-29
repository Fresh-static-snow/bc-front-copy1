import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Content = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;
  `,
);

export const InfoWrapper = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  `,
);

export const Icon = styled('div')(
  () => css`
    flex-shrink: 0;

    & > svg {
      width: 64px;
      height: 64px;
    }
  `,
);

export const TextInfo = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
);

export const Title = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-size: 18px;
    font-weight: 400;
    color: ${theme.appColors.primary_02};
  `,
);

export const Message = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.052px;
    color: ${theme.appColors.primary_02};
  `,
);

export const ButtonsWrapper = styled('div')(
  () => css`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  `,
);
