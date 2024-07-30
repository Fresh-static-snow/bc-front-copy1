import dayjs from 'dayjs';
import { useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';

import { useGetAccountSettings } from '@/entities/account-setting';
import {
  QuarterRangeItem,
  QuarterRangeTitles,
  RangeBackgroundTable,
  useGetCalendarQuarter,
} from '@/entities/calendar';
import { useCustomSearchParams } from '@/shared/lib';
import { CircularLoader } from '@/shared/ui/feedback';
import { filterParams } from '@/widgets/desktop';

import { CalendarOutletContext } from '../../types';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import { EmptyContent } from '../EmptyContent/EmptyContent';
import { HeaderWrapper } from '../HeaderWrapper/HeaderWrapper';
import { ItemWrapper } from '../ItemWrapper/ItemWrapper';

const QuarterContent: React.FC = () => {
  const { onClickTournament, onClickDiscipline, onClickCorporate } =
    useOutletContext<CalendarOutletContext>();
  const { params } = useCustomSearchParams(['start_at']);
  const { arrayParams } = useCustomSearchParams(filterParams);
  const { data: accountSettings, isLoading: isLoadingGetAccountSettings } = useGetAccountSettings();

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
  } = useGetCalendarQuarter(
    formattedQuarter,
    {
      ...arrayParams,
      current_user: [String(accountSettings?.current_user_filter_enabled ?? false)],
    },
    !!formattedQuarter && !isLoadingGetAccountSettings,
  );

  return (
    <>
      <HeaderWrapper>
        <QuarterRangeTitles activeDate={formattedQuarter} />
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
          columnsCount={3}
          tableHeight="calc(100dvh - 48px - 44px - 48px - 48px)"
          tablePaddings="0 24px"
        >
          <ContentWrapper>
            <ItemWrapper>
              {calendarData?.map((disciplineItem) => (
                <QuarterRangeItem
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

export default QuarterContent;
