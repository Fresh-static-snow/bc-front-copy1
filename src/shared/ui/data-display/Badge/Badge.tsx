import { memo } from 'react';

import { Rotate } from '@/shared/ui/layouts/Rotate/Rotate';

import * as S from './Badge.styles';
import { BadgeProps } from './Badge.types';

export const Badge: React.FC<BadgeProps> = memo(
  ({ text, baseColor, secondaryColor, rotateDeg = -90, height, right }) => (
    <S.Root $height={height}>
      <Rotate rotateDeg={rotateDeg}>
        <S.Body $baseColor={baseColor} $secondaryColor={secondaryColor} $right={right}>
          <S.Text>{text}</S.Text>
        </S.Body>
      </Rotate>
    </S.Root>
  ),
);
