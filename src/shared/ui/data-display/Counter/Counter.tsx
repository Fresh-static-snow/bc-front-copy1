import { memo, useMemo } from 'react';

import * as S from './Counter.styles';
import { CounterProps } from './Counter.types';

/**
 * A small element that displays the amount of something.
 * If it exceeds the maximum, then the value is displayed in the format `99+`.
 */
export const Counter: React.FC<CounterProps> = memo(({ count, maxCount = 99, bgColor, color }) => {
  // * Formats the value according to the maximum.
  const actualCount = useMemo<string | number>(
    () => (+count < +maxCount || +maxCount === 0 ? count : `${maxCount}+`),
    [count, maxCount],
  );

  return (
    <S.Root $bgColor={bgColor} $color={color} data-testid="Counter">
      <div>{actualCount}</div>
    </S.Root>
  );
});
