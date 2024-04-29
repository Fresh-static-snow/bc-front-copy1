import { memo } from 'react';

import { TextColor } from '@/shared/ui/typography';

import * as S from './Time.styles';
import { TimeProps } from './Time.types';

export const Time: React.FC<TimeProps> = memo(({ startTime, endTime, color }) => (
  <S.Root>
    {startTime && <TextColor text={startTime} secondaryColor={color} />}

    {endTime && startTime !== endTime && (
      <>
        <div>
          <TextColor text="-" secondaryColor={color} />
        </div>
        <TextColor text={endTime} secondaryColor={color} />
      </>
    )}
  </S.Root>
));
