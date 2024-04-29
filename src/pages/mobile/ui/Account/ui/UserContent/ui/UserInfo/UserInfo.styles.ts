import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    padding: 50px 30px;

    @media (max-width: 768px) {
      gap: 10px;
      padding: 0;
    }
  `,
);

export const AvatarWrapper = styled('div')(
  () => css`
    width: 100%;

    @media (max-width: 768px) {
      padding-top: 10px;
      padding-inline: 10px;
      padding-bottom: 0;
    }
  `,
);

export const FormWrapper = styled('div')(
  () => css`
    width: 100%;

    @media (max-width: 768px) {
      padding-top: 0;
      padding-inline: 20px;
      padding-bottom: 50px;
    }
  `,
);
