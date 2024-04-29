import { mobileMedia } from '@/shared/const';
import { useMediaQuery } from '@/shared/lib';

import { PrimaryButton } from '../../../PrimaryButton/PrimaryButton';
import { CalendarNavigation } from '../CalendarNavigation/CalendarNavigation';
import * as S from './CalendarLayout.styles';
import { CalendarLayoutProps } from './CalendarLayout.types';

export const CalendarLayout: React.FC<CalendarLayoutProps> = ({
  children,
  title,
  onClickBack,
  onClickForward,
  onClickToday,
}) => {
  const isMobile = useMediaQuery(mobileMedia);

  return (
    <S.Root>
      <S.Header>
        <S.Date>{title}</S.Date>

        {!isMobile && (
          <CalendarNavigation onClickBack={onClickBack} onClickForward={onClickForward} />
        )}
      </S.Header>

      <S.Content>{children}</S.Content>

      <S.Footer>
        {!isMobile && <div />}

        <PrimaryButton onClick={onClickToday} variant="outlined" label="Today" />

        {isMobile && (
          <CalendarNavigation onClickBack={onClickBack} onClickForward={onClickForward} />
        )}
      </S.Footer>
    </S.Root>
  );
};
