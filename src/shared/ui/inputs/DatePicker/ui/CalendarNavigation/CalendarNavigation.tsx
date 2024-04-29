import { memo } from 'react';

import { IconArrowLeftSvg } from '@/shared/assets';
import { PrimaryButton } from '@/shared/ui/inputs/PrimaryButton/PrimaryButton';
import { Rotate } from '@/shared/ui/layouts/Rotate/Rotate';

import * as S from './CalendarNavigation.styles';
import { CalendarNavigationProps } from './CalendarNavigation.types';

export const CalendarNavigation: React.FC<CalendarNavigationProps> = memo(
  ({ onClickBack, onClickForward }) => (
    <S.Root>
      <Rotate rotateDeg={90}>
        <PrimaryButton
          variant="secondary"
          padding="4px"
          iconHeight="24px"
          iconWidth="24px"
          IconComponent={IconArrowLeftSvg}
          onClick={onClickBack}
          data-testid="onClickBack"
        />
      </Rotate>

      <Rotate rotateDeg={270}>
        <PrimaryButton
          variant="secondary"
          padding="4px"
          iconHeight="24px"
          iconWidth="24px"
          IconComponent={IconArrowLeftSvg}
          onClick={onClickForward}
          data-testid="onClickForward"
        />
      </Rotate>
    </S.Root>
  ),
);
