import { css } from '@emotion/react';

import { SelectableValue } from '@/shared/types/values.types';

export const sortingButtons: SelectableValue[] = [
  { value: 'asc', label: 'A to Z' },
  { value: 'desc', label: 'Z to A' },
  { value: 'role-asc', label: 'Role' },
];

export const mobileMedia = '(max-width: 768px)';
export const smallMobileMedia = '(max-width: 320px)';

export const editorStyles = css`
  p {
    min-height: 15.73px;
  }

  p,
  li::marker {
    font-size: 13px;
    font-weight: 400;
    line-height: 15.73px;
    letter-spacing: 0.004em;
  }

  a {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }

  h1 {
    font-size: 24px;
    font-weight: 400;
    line-height: 29.05px;
    letter-spacing: 0.004em;
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    line-height: 21.78px;
    letter-spacing: 0.004em;
  }

  h3 {
    font-size: 15px;
    font-weight: 400;
    line-height: 18.15px;
    letter-spacing: 0.004em;
  }

  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }

  u {
    text-decoration: underline;
  }

  s {
    text-decoration: line-through;
  }

  ul,
  ol {
    padding-inline-start: 24px;
  }

  ul {
    list-style-type: disc;
  }

  ul ul {
    list-style-type: circle;
  }

  ul ul ul {
    list-style-type: square;
  }

  ol {
    list-style-type: decimal;
  }

  ol ol {
    list-style-type: lower-alpha;
  }

  ol ol ol {
    list-style-type: lower-roman;
  }
`;
