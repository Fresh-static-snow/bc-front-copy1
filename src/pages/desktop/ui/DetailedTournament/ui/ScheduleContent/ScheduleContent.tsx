import { useTheme } from '@emotion/react';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { MatchItem, MatchTitles } from '@/entities/calendar';
import { useGetTournamentSchedule } from '@/entities/tournament';
import { useCheckAccess } from '@/shared/lib';
import { Match, Segment } from '@/shared/types/entities.types';
import { SlicedContentLayout } from '@/shared/ui/layouts';
import { useTournamentMenuStore } from '@/widgets/desktop';

import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import * as S from './ScheduleContent.styles';
import { DayTitle } from './ui/DayTitle/DayTitle';

const ScheduleContent: React.FC = () => {
  const theme = useTheme();
  const checkAccess = useCheckAccess();
  const { id: eventId } = useParams();
  const { data: scheduleData } = useGetTournamentSchedule(eventId);

  const setEditingRequestType = useTournamentMenuStore((state) => state.setEditingRequestType);

  const onChangeModalStatus = (match: Match | Segment) => {
    switch (match.type) {
      case 'Match':
        setEditingRequestType({
          label: 'Match',
          value: 'match',
          additional: String((match as Match).id),
        });
        break;
      case 'Segment':
        setEditingRequestType({
          label: 'Segment',
          value: 'segment',
          additional: String((match as Segment).id),
        });
        break;
      default:
        break;
    }
  };

  return (
    <ContentWrapper>
      <SlicedContentLayout.Body scrollActive>
        <SlicedContentLayout.Section
          fragments={2}
          backgroundColor="transparent"
          scrollActive={false}
        >
          {scheduleData?.dates?.length === 0 ? (
            <S.EmptySchedule>There are no schedule yet.</S.EmptySchedule>
          ) : (
            <>
              {scheduleData?.dates && (
                <S.HeaderWrapper>
                  <MatchTitles />
                </S.HeaderWrapper>
              )}

              {scheduleData?.dates?.map((day) => (
                <Fragment key={day.start_date}>
                  <DayTitle date={day.start_date} />

                  <S.MatchList>
                    {day?.matches?.map((match) => (
                      <MatchItem
                        key={match.id}
                        match={match}
                        color={scheduleData?.ui_template?.primary || theme.appColors.palette_01}
                        onClickMatch={
                          checkAccess(['get::/api/v1/matches/:id/edit', 'put::/api/v1/matches/:id'])
                            ? onChangeModalStatus
                            : null
                        }
                      />
                    ))}
                  </S.MatchList>
                </Fragment>
              ))}
            </>
          )}
        </SlicedContentLayout.Section>
      </SlicedContentLayout.Body>
    </ContentWrapper>
  );
};

export default ScheduleContent;
