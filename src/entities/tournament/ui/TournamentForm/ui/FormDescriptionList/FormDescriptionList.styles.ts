import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledElementProps } from './FormDescriptionList.types';

export const Root = styled('div')(
  () => css`
    width: 100%;
  `,
);

export const ElementList = styled('div')(
  () => css`
    width: 100%;
  `,
);

export const Element = styled('div')<StyledElementProps>(
  ({ theme, $fieldsDirection }) => css`
    display: flex;
    flex-direction: column;
    gap: ${$fieldsDirection === 'row' ? '15px' : '30px'};
    width: 100%;
    padding: 15px 0;

    &:not(:last-of-type) {
      border-bottom: 1px dashed ${theme.appColors.primary_03};
    }
  `,
);

export const FieldWithButton = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
  `,
);

export const ButtonWrapper = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,
);
