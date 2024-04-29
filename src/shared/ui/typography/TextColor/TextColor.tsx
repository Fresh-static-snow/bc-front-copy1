import { memo } from 'react';

import * as S from './TextColor.styles';
import { TextColorProps } from './TextColor.types';

/**
 * Simple text block with two gradient colors that overlap each other.
 *
 * By default, the base color is set from the active theme and a secondary layer must be added.
 * But if necessary, you can specify both color layers.
 */
export const TextColor: React.FC<TextColorProps> = memo(
  ({ text, fontWeight, lineHeight, fontSize, baseColor, secondaryColor, limitedWidth = false }) => (
    <S.Root
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $lineHeight={lineHeight}
      $baseColor={baseColor}
      $secondaryColor={secondaryColor}
      $limitedWidth={limitedWidth}
    >
      {text}
    </S.Root>
  ),
);
