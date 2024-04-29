import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 15px 30px;
    background: ${theme.appColors.primary_06};
    border-radius: 0px 0px 10px 10px;
    border-top: 1px solid ${theme.appColors.primary_03};

    @media (max-width: 768px) {
      align-items: flex-start;
      flex-direction: column;
      gap: 30px;
    }
  `,
);

export const AdditionalButtons = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    @media (max-width: 768px) {
      align-items: flex-start;
      flex-direction: column;
      gap: 20px;
    }
  `,
);

export const ControlButtons = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px) {
      width: 100%;
      gap: 10px;
      justify-content: flex-end;
    }
  `,
);
