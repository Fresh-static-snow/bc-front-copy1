import { memo } from 'react';

import * as S from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox: React.FC<CheckboxProps> = memo(
  ({ checked, onChange, label, disabled, tabIndex = 0 }) => (
    <S.Root>
      <S.Checkbox
        checked={checked}
        onChange={onChange}
        disableRipple // * Remove MUI default ripple.
        icon={<div />} // * Remove MUI default icon.
        checkedIcon={<S.Checked />} // * Custom check icon.
        disabled={disabled}
        tabIndex={tabIndex}
        data-testid={`Checkbox${label ? `-${label}` : ''}`}
      />

      {label && <S.Label $disabled={disabled}>{label}</S.Label>}
    </S.Root>
  ),
);
