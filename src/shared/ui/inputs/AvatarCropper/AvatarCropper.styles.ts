import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AvatarCropper = styled('div')(
  () => css`
    width: 600px;
    height: 600px;
  `,
);

export const PreviewImage = styled('img')(
  () => css`
    display: block;
  `,
);

export const Content = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 800px;
    padding: 30px;
  `,
);

export const Footer = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    width: 100%;
    padding: 15px 30px;
    background: ${theme.appColors.primary_06};
    border-radius: 0px 0px 10px 10px;
    border-top: 1px solid ${theme.appColors.primary_03};
  `,
);
