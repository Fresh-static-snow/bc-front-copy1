import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const BackButtonWrapper = styled('div')(
  () => css`
    padding: 50px 0 0 30px;
  `,
);

export const UpdateUserCompanyWrapper = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 50px;
    height: 100%;
    padding: 30px 0 0;
  `,
);

export const AdditionalContent = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
);
