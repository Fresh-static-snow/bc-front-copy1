import { memo } from 'react';

import * as S from './ColumnTitle.styles';
import { ColumnTitleProps } from './ColumnTitle.types';

export const ColumnTitle: React.FC<ColumnTitleProps> = memo(({ title, color }) => (
  <S.Root color={color}>{title}</S.Root>
));
