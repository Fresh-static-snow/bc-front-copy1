import { memo } from 'react';

import * as S from './CircularLoader.styles';
import { CircularLoaderProps } from './CircularLoader.types';

export const CircularLoader: React.FC<CircularLoaderProps> = memo(
  ({ size, color, width, height, padding, position }) => (
    <S.Root $width={width} $height={height} $padding={padding} $position={position}>
      <S.CircularProgress $size={size} $color={color} data-testid="CircularLoader" />
    </S.Root>
  ),
);
