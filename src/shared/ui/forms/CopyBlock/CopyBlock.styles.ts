import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    padding: 30px 60px;
    border-radius: 10px;
    background: ${theme.appColors.primary_06};

    @media (max-width: 768px) {
      padding: 30px 20px;
    }
  `,
);

export const Title = styled('div')(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    font-family: ${theme.appFonts.primary};
    font-size: 18px;
    font-weight: 600;
    color: ${theme.appColors.secondary_04};
  `,
);

export const ButtonsWrapper = styled('div')(
  () => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  `,
);

export const Content = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
);
