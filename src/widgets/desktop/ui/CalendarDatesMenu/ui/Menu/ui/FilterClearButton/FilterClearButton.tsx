import { memo } from 'react';

import { IconRefreshCwSvg } from '@/shared/assets';

import * as S from './FilterClearButton.styles';
import { FilterClearButtonProps } from './FilterClearButton.types';

export const FilterClearButton: React.FC<FilterClearButtonProps> = memo(({ onClick }) => {
  const onClearOptions = () => {
    onClick();
  };

  return (
    <S.Root onClick={onClearOptions}>
      <IconRefreshCwSvg />
      Clear
    </S.Root>
  );
});
