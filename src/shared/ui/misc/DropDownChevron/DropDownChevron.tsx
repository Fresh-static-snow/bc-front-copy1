import { memo } from 'react';

import { IconChevronLeftSvg } from '@/shared/assets';

import * as S from './DropDownChevron.styles';
import { DropDownChevronProps } from './DropDownChevron.types';

/**
 * 180 degree rotating chevron. Can be useful when creating dropdown components.
 */
export const DropDownChevron: React.FC<DropDownChevronProps> = memo(({ active = false, size }) => (
  <S.Root $active={active} $size={size} data-testid="DropDownChevron">
    <IconChevronLeftSvg />
  </S.Root>
));
