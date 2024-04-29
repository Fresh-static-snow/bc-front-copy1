import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const DashboardCounters = styled('div')(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px;
  `,
);
