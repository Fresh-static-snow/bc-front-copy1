import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledContentProps, StyledStaticFieldsProps } from './SegmentForm.types';

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

export const FlexWrapper = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      gap: 15px;
    }
  `,
);
