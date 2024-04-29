import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledContentProps } from './UserForm.types';

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

export const GoogleCalendarCheckboxWrapper = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
);
