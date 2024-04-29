import dayjs from 'dayjs';
import { useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';

import { RangeBackgroundTable, useGetCalendarQuarter } from '@/entities/calendar';
import { QuarterRangeItemMobile } from '@/entities/calendar/ui/QuarterRangeItem/QuarterRangeItem.mobile';
import { QuarterRangeTitlesMobile } from '@/entities/calendar/ui/QuarterRangeTitles/QuarterRangeTitles.mobile';
import { useCustomSearchParams } from '@/shared/lib';
import { CircularLoader } from '@/shared/ui/feedback';
import { filterParamsWithUser } from '@/widgets/desktop';

import { CalendarOutletContext } from '../../types';
import { EmptyContent } from '../EmptyContent/EmptyContent';
import { HeaderWrapper } from '../HeaderWrapper/HeaderWrapper';
import { ItemWrapper } from '../ItemWrapper/ItemWrapper';
import * as S from './QuarterContent.styles';

const QuarterContent: React.FC = () => {
  const { onClickTournament, onClickDiscipline, onClickCorporate } =
    useOutletContext<CalendarOutletContext>();
  const { params } = useCustomSearchParams(['start_at']);
  const { arrayParams } = useCustomSearchParams(filterParamsWithUser);

  const formattedQuarter = useMemo(() => {
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
  } = useGetCalendarQuarter(formattedQuarter, arrayParams);

  return (
    <S.Root>
      {calendarData?.length > 0 && (
        <HeaderWrapper>
          <QuarterRangeTitlesMobile activeDate={formattedQuarter} />
        </HeaderWrapper>
      )}

      {calendarData?.length === 0 && (
        <EmptyContent>
          There are no events on this year or no events match your filters.
        </EmptyContent>
      )}

      {calendarData?.length > 0 && (
        <RangeBackgroundTable
          tableHeight="calc(100dvh - 68px - 20px)"
          columnsCount={3}
          tablePaddings="0 24px"
          isMobile
        >
          <ItemWrapper>
            {calendarData?.map((disciplineItem) => (
              <QuarterRangeItemMobile
                key={`${disciplineItem.discipline?.id}-${disciplineItem.discipline?.keyword}`}
                activeDate={formattedQuarter}
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
        </RangeBackgroundTable>
      )}

      {isFetchingCalendarData && !isCalendarDataSuccess && (
        <CircularLoader width="100%" height="100%" size="36px" padding="16px" />
      )}
    </S.Root>
  );
};

export default QuarterContent;
