import { memo } from 'react';

import * as S from './MarkedText.styles';
import { MarkedTextProps } from './MarkedText.types';

export const MarkedText: React.FC<MarkedTextProps> = memo(({ children, color }) => (
  <S.Root $color={color}>{children}</S.Root>
));
