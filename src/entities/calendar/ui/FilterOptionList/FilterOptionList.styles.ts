import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AccordionContent = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%;
    padding: 0 0 6px;
  `,
);
