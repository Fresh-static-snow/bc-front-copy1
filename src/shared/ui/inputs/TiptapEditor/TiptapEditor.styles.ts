import { css } from '@emotion/react';
import styled from '@emotion/styled';

import arrowImg from '@/shared/assets/images/icon-chevron-left.svg';
import { editorStyles } from '@/shared/const';

import { StyledRootProps } from './TiptapEditor.types';

export const Root = styled('div')<StyledRootProps>(
  ({ theme, $error }) => css`
    position: relative;
    width: 100%;
    border: 1px solid
      ${$error ? `${theme.appColors.secondary_09} !important` : theme.appColors.secondary_03};
    border-radius: 4px;

    .ProseMirror {
      min-height: 68px;
      padding: 14px 24px;
      font-family: ${theme.appFonts.primary};

      p.is-editor-empty:first-of-type::before {
        color: ${theme.appColors.secondary_04};
        content: attr(data-placeholder);
        float: left;
        height: 0;
        pointer-events: none;
      }

      ${editorStyles}
    }
  `,
);

export const Toolbar = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    padding: 6px 14px;
    background: ${theme.appColors.primary_04};
    border-radius: 4px 4px 0 0;
  `,
);

export const ButtonsGroup = styled('div')(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1px;
  `,
);
