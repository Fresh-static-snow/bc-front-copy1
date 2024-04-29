import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledElementProps } from './FormLanguageList.types';

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
    padding: 30px 0;
    border-top: 1px dashed ${theme.appColors.primary_03};

    &:last-of-type {
      padding: 30px 0 15px;
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
