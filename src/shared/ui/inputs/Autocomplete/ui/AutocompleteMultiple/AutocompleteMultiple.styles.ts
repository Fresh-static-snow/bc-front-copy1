import { css } from '@emotion/react';
import styled from '@emotion/styled';

import * as S from '../../styles';

export const AutocompleteMultiple = styled(S.AutocompleteWrapper)();

export const Autocomplete = styled(S.Autocomplete)(
  () => css`
    & .MuiInputBase-root.MuiOutlinedInput-root {
      gap: 6px;
    }
  `,
);
