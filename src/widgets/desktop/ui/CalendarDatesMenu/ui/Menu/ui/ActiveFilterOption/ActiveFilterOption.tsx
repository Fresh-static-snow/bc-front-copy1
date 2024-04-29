import { memo } from 'react';

import { IconCrossSvg } from '@/shared/assets';

import * as S from './ActiveFilterOption.styles';
import { ActiveFilterOptionProps } from './ActiveFilterOption.types';

export const ActiveFilterOption: React.FC<ActiveFilterOptionProps> = memo(
  ({ label, value, parent, onClick }) => {
    const onRemoveOption = () => {
      onClick(parent, value);
    };

    return (
      <S.Root>
        {label}{' '}
        <S.RemoveOptionButton onClick={onRemoveOption}>
          <IconCrossSvg />
        </S.RemoveOptionButton>
      </S.Root>
    );
  },
);
