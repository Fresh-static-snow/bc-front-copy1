import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FormWrapper = styled('div')(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 50px 30px;
  `,
);
