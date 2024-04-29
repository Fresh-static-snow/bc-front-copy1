import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 30px 30px 15px;
    background: ${theme.appColors.primary_06};
    border-radius: 10px 10px 0px 0px;
    border-bottom: 1px solid ${theme.appColors.primary_03};

    @media (max-width: 768px) {
      align-items: flex-start;
      flex-direction: column;
      gap: 10px;
    }
  `,
);

export const Title = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: ${theme.appColors.primary_02};
  `,
);

export const RequestType = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 768px) {
      width: 100%;
      justify-content: flex-end;
    }
  `,
);

export const InputLabelText = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.004em;
    color: ${theme.appColors.secondary_04};
  `,
);

export const RequestTypeAdditional = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 0 6px;

    & g {
      fill: ${theme.appColors.primary_02};
    }
    & path {
      stroke: ${theme.appColors.primary_02};
    }
  `,
);
