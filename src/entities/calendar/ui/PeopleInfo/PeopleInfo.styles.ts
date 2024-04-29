import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledSeparatorProps } from './PeopleInfo.types';

export const Root = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    padding: 0 10px;
  `,
);

export const Separator = styled('div')<StyledSeparatorProps>(
  ({ theme, $baseColor, $secondaryColor }) => css`
    width: 40px;
    height: 1px;
    background: linear-gradient(
        0deg,
        ${$baseColor || theme.appColors.secondary_10},
        ${$baseColor || theme.appColors.secondary_10}
      ),
      ${$secondaryColor};
    opacity: 0.1;
  `,
);
