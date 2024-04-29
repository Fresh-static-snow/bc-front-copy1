import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledContentProps, StyledStaticFieldsProps } from './TournamentForm.types';

export const Content = styled('div')<StyledContentProps>(
  ({ $padding }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    width: 100%;
    padding: ${$padding ?? '0'};
  `,
);

export const StaticFields = styled('div')<StyledStaticFieldsProps>(
  ({ $fieldsDirection }) => css`
    display: flex;
    flex-direction: column;
    gap: ${$fieldsDirection === 'row' ? '15px' : '30px'};
    width: 100%;
  `,
);
