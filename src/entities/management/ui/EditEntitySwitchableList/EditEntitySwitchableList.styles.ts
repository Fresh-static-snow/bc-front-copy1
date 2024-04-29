import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 50px 30px;
  `,
);

export const SwitchWrapper = styled('div')(
  () => css`
    padding: 0 10px 0 0;
  `,
);
