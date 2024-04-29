import dayjs from 'dayjs';
import { useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';

import { DisciplineItem, DisciplineTitles, useGetCalendarDay } from '@/entities/calendar';
import { useCustomSearchParams } from '@/shared/lib';
import { CircularLoader } from '@/shared/ui/feedback';
import { filterParamsWithUser } from '@/widgets/desktop';

import { CalendarOutletContext } from '../../types';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import { EmptyContent } from '../EmptyContent/EmptyContent';
import { HeaderWrapper } from '../HeaderWrapper/HeaderWrapper';
import { ItemWrapper } from '../ItemWrapper/ItemWrapper';

const DayContent: React.FC = () => {
  const { onClickDiscipline, onClickTournament, onClickMatch, onClickCorporate } =
    useOutletContext<CalendarOutletContext>();
  const { params } = useCustomSearchParams(['start_at']);
  const { arrayParams } = useCustomSearchParams(filterParamsWithUser);

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
  } = useGetCalendarDay(formattedDay, arrayParams);

  return (
    <>
      <HeaderWrapper>
        <DisciplineTitles />
      </HeaderWrapper>

      <ContentWrapper>
        {calendarData?.length === 0 && (
          <EmptyContent>
            There are no events on this day or no events match your filters.
          </EmptyContent>
        )}

        {calendarData?.length > 0 && (
          <ItemWrapper>
            {calendarData?.map((disciplineItem) => (
              <DisciplineItem
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
          </ItemWrapper>
        )}

        {isFetchingCalendarData && !isCalendarDataSuccess && (
          <CircularLoader width="100%" height="100%" size="36px" padding="16px" />
        )}
      </ContentWrapper>
    </>
  );
};

export default DayContent;
