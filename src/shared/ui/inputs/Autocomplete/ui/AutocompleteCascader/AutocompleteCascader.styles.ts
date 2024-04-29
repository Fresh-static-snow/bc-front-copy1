import { css } from '@emotion/react';
import styled from '@emotion/styled';

import * as S from '../../styles';

export const AutocompleteCascader = styled(S.AutocompleteWrapper)();

export const Autocomplete = styled(S.Autocomplete)(
  ({ theme }) => css`
    & .MuiInputBase-root.MuiOutlinedInput-root {
      gap: 6px;
    }

    & .MuiAutocomplete-tag {
      margin: 0;
      font-family: ${theme.appFonts.primary};
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.004em;
      color: ${theme.appColors.primary_02};
    }
  `,
);
