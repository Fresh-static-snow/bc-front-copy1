import { memo } from 'react';

import * as S from './Switch.styles';
import { SwitchProps } from './Switch.types';

export const Switch: React.FC<SwitchProps> = memo(({ checked, onChange, label, disabled }) => (
  <S.Root data-testid="Switch">
    <S.Switch checked={checked} onChange={onChange} disableRipple disabled={disabled} />

    {label && <S.Label $disabled={disabled}>{label}</S.Label>}
  </S.Root>
));
