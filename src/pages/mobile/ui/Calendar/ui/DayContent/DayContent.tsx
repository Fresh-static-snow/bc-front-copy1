import dayjs from 'dayjs';
import { useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';

import { useGetAccountSettings } from '@/entities/account-setting';
import { DisciplineItemMobile, useGetCalendarDay } from '@/entities/calendar';
import { EmptyContent } from '@/pages/desktop/ui/Calendar/ui/EmptyContent/EmptyContent';
import { useCustomSearchParams } from '@/shared/lib';
import { CircularLoader } from '@/shared/ui/feedback';
import { filterParams } from '@/widgets/mobile';

import { CalendarOutletContext } from '../../types';
import * as S from './DayContent.styles';

const DayContent: React.FC = () => {
  const { onClickTournament, onClickDiscipline, onClickMatch, onClickCorporate } =
    useOutletContext<CalendarOutletContext>();
  const { params } = useCustomSearchParams(['start_at']);
  const { arrayParams } = useCustomSearchParams(filterParams);
  const { data: accountSettings, isLoading: isLoadingGetAccountSettings } = useGetAccountSettings();

  const formattedDay = useMemo(() => {
    const date = dayjs(params.start_at);

    if (params.start_at && date.isValid()) {
      return date.format('YYYY-MM-DD');
    }
    return null;
  }, [params.start_at]);

  const {
    data: calendarData,
    isFetching: isFetchingCalendarData,
    isSuccess: isCalendarDataSuccess,
  } = useGetCalendarDay(
    formattedDay,
    {
      ...arrayParams,
      current_user: [String(accountSettings?.current_user_filter_enabled ?? false)],
    },
    !!formattedDay && !isLoadingGetAccountSettings,
  );

  return (
    <S.Root>
      {calendarData?.length === 0 && (
        <EmptyContent>
          There are no events on this day or no events match your filters.
        </EmptyContent>
      )}

      {calendarData?.length > 0 &&
        calendarData?.map((disciplineItem) => (
          <DisciplineItemMobile
            key={`${disciplineItem.discipline?.id}-${disciplineItem.discipline?.keyword}`}
            discipline={disciplineItem.discipline}
            tournaments={disciplineItem.tournaments}
            corporates={disciplineItem.corporates}
            onClickDiscipline={onClickDiscipline}
            onClickTournament={onClickTournament}
            onClickCorporate={onClickCorporate}
            onClickMatch={onClickMatch}
            filters={arrayParams}
          />
        ))}

      {isFetchingCalendarData && !isCalendarDataSuccess && (
        <CircularLoader width="100%" height="100%" size="36px" padding="16px" />
      )}
    </S.Root>
  );
};

export default DayContent;
