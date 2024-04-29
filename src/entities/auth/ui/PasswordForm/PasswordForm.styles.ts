import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledContentProps } from './PasswordForm.types';

export const Content = styled('div')<StyledContentProps>(
  ({ $padding, $fieldsDirection }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${$fieldsDirection === 'row' ? '15px' : '30px'};
    width: 100%;
    padding: ${$padding ?? '0'};
  `,
);

export const Footer = styled('div')(
  () => css`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 30px 0 0;
  `,
);
