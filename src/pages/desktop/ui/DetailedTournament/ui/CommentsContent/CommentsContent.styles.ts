import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledCommentsWrapperProps } from './CommentsContent.types';

export const CommentsWrapper = styled('div')<StyledCommentsWrapperProps>(
  ({ $fullHeight }) => css`
    width: 100%;
    height: ${$fullHeight ? '100%' : 'calc(100% - 118px - 24px)'};
    padding: ${$fullHeight ? '0' : '0 0 36px'};
  `,
);

export const TextareaWrapper = styled('div')(
  () => css`
    width: calc(100% - 60px);
    margin: 0 30px;
  `,
);
