import dayjs from 'dayjs';
import { Fragment, useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';

import { DisciplineItemMobile, useGetCalendarMonth } from '@/entities/calendar';
import { EmptyContent } from '@/pages/desktop/ui/Calendar/ui/EmptyContent/EmptyContent';
import { useCustomSearchParams } from '@/shared/lib';
import { CircularLoader } from '@/shared/ui/feedback';
import { filterParamsWithUser } from '@/widgets/desktop';

import { CalendarOutletContext } from '../../types';

const MonthContent: React.FC = () => {
  const { onClickTournament, onClickDiscipline, onClickMatch, onClickCorporate } =
    useOutletContext<CalendarOutletContext>();
  const { params } = useCustomSearchParams(['start_at']);
  const { arrayParams } = useCustomSearchParams(filterParamsWithUser);

  const formattedWeek = useMemo(() => {
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
  } = useGetCalendarMonth(formattedWeek, arrayParams);

  return (
    <>
      {calendarData?.length === 0 && (
        <EmptyContent>
          There are no events on this day or no events match your filters.
        </EmptyContent>
      )}

      {calendarData?.length > 0 &&
        calendarData?.map((day) => (
          <Fragment key={`${day.date}-${day.type}`}>
            {day?.disciplines?.map((disciplineItem) => (
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
                day={day}
              />
            ))}
          </Fragment>
        ))}

      {isFetchingCalendarData && !isCalendarDataSuccess && (
        <CircularLoader width="100%" height="100%" size="36px" padding="16px" />
      )}
    </>
  );
};

export default MonthContent;
