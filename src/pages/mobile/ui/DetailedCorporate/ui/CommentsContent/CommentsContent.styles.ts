import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledCommentsWrapperProps } from './CommentsContent.types';

export const CommentsWrapper = styled('div')<StyledCommentsWrapperProps>(
  ({ $fullHeight }) => css`
    width: 100%;
    height: ${$fullHeight ? '100%' : 'calc(100% - 54px)'};
  `,
);

export const TextareaWrapper = styled('div')(
  () => css`
    width: 100%;
  `,
);
