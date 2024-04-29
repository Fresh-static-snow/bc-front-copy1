import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Content = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  `,
);

export const MainInfo = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
);

export const AdditionalInfo = styled('span')(
  ({ theme }) => css`
    color: ${theme.appColors.secondary_04};
  `,
);
