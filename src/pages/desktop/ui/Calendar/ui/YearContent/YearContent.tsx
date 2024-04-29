import dayjs from 'dayjs';
import { useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';

import {
  RangeBackgroundTable,
  useGetCalendarYear,
  YearRangeItem,
  YearRangeTitles,
} from '@/entities/calendar';
import { useCustomSearchParams } from '@/shared/lib';
import { CircularLoader } from '@/shared/ui/feedback';
import { filterParamsWithUser } from '@/widgets/desktop';

import { CalendarOutletContext } from '../../types';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import { EmptyContent } from '../EmptyContent/EmptyContent';
import { HeaderWrapper } from '../HeaderWrapper/HeaderWrapper';
import { ItemWrapper } from '../ItemWrapper/ItemWrapper';

const YearContent: React.FC = () => {
  const { onClickTournament, onClickDiscipline, onClickCorporate } =
    useOutletContext<CalendarOutletContext>();
  const { params } = useCustomSearchParams(['start_at']);
  const { arrayParams } = useCustomSearchParams(filterParamsWithUser);

  const formattedYear = useMemo(() => {
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
  } = useGetCalendarYear(formattedYear, arrayParams);

  return (
    <>
      <HeaderWrapper>
        <YearRangeTitles />
      </HeaderWrapper>

      {calendarData?.length === 0 && (
        <ContentWrapper>
          <EmptyContent>
            There are no events on this year or no events match your filters.
          </EmptyContent>
        </ContentWrapper>
      )}

      {calendarData?.length > 0 && (
        <RangeBackgroundTable
          columnsCount={12}
          tableHeight="calc(100dvh - 48px - 44px - 48px - 48px)"
          tablePaddings="0 24px"
        >
          <ContentWrapper>
            <ItemWrapper>
              {calendarData?.map((disciplineItem) => (
                <YearRangeItem
                  key={`${disciplineItem.discipline?.id}-${disciplineItem.discipline?.keyword}`}
                  activeDate={formattedYear}
                  discipline={disciplineItem.discipline}
                  tournaments={disciplineItem.tournaments}
                  corporates={disciplineItem.corporates}
                  onClickDiscipline={onClickDiscipline}
                  onClickTournament={onClickTournament}
                  onClickCorporate={onClickCorporate}
                  filters={arrayParams}
                />
              ))}
            </ItemWrapper>
          </ContentWrapper>
        </RangeBackgroundTable>
      )}

      {isFetchingCalendarData && !isCalendarDataSuccess && (
        <ContentWrapper>
          <CircularLoader width="100%" height="100%" size="36px" padding="16px" />
        </ContentWrapper>
      )}
    </>
  );
};

export default YearContent;
