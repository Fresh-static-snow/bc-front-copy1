import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const CompanyName = styled('div')(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    font-family: ${theme.appFonts.primary};
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0.004em;
    padding: 0 30px;
  `,
);

interface IFormWrapperProps {
  $withGap?: boolean;
}

export const FormWrapper = styled('div')<IFormWrapperProps>(
  ({ $withGap }) => css`
    display: flex;
    flex-direction: column;
    padding: 0 30px;

    ${$withGap
      ? css`
          gap: 50px;
        `
      : ''}
  `,
);

export const AdditionalContent = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
);
