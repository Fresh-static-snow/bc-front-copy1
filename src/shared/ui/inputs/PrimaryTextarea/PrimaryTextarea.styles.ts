import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledTextareaProps } from './PrimaryTextarea.types';

export const Root = styled('div')(
  () => css`
    position: relative;
    width: 100%;
  `,
);

export const Textarea = styled('textarea')<StyledTextareaProps>(
  ({ theme, $error }) => css`
    display: block;
    width: 100%;
    min-height: 62px;
    padding: 14px 24px;
    border: 1px solid
      ${$error ? `${theme.appColors.secondary_09} !important` : theme.appColors.secondary_03};
    border-radius: 4px;
    font-family: ${theme.appFonts.primary};
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.004em;
    color: ${theme.appColors.primary_02};
    transition: all ${theme.appTransitions.primary}ms, height 0s;
    resize: none;
    overflow: hidden;

    &::placeholder {
      color: ${theme.appColors.secondary_04};
    }

    &:hover:not(:disabled) {
      border: 1px solid ${theme.appColors.secondary_04};
    }

    &:focus:not(:disabled),
    &:active:not(:disabled) {
      border: 1px solid ${theme.appColors.primary_02};
    }

    &:disabled {
      background: ${theme.appColors.primary_04};
      color: ${theme.appColors.secondary_04};
    }
  `,
);
