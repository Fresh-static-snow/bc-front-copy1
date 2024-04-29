import { useTheme } from '@emotion/react';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { MatchItemMobile } from '@/entities/calendar';
import { useGetTournament, useGetTournamentSchedule } from '@/entities/tournament';
import { Match } from '@/shared/types/entities.types';
import { BackgroundColor } from '@/shared/ui/data-display';
import { useTournamentMobileMenuStore } from '@/widgets/mobile';

// import { useTournamentMenuStore } from '@/widgets/desktop';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import * as S from './ScheduleContent.styles';
import { DayTitle } from './ui/DayTitle/DayTitle';

const ScheduleContent: React.FC = () => {
  const theme = useTheme();
  const { id: eventId } = useParams();
  const { data: tournamentData } = useGetTournament(eventId);
  const { data: scheduleData } = useGetTournamentSchedule(eventId);

  const setEditingRequestType = useTournamentMobileMenuStore(
    (state) => state.setEditingRequestType,
  );

  const onChangeModalStatus = (match: Match) => () => {
    setEditingRequestType({ label: 'Match', value: 'match', additional: String(match.id) });
  };

  return (
    <ContentWrapper>
      {scheduleData?.dates?.length === 0 ? (
        <S.EmptySchedule>There are no schedule yet.</S.EmptySchedule>
      ) : (
        <>
          {scheduleData?.dates?.map((day) => (
            <Fragment key={day.start_date}>
              <DayTitle date={day.start_date} />

              <S.MatchList data-testid="mobile-match-list">
                <BackgroundColor
                  customStyles={{ height: 30 }}
                  baseColor={scheduleData?.ui_template?.primary || theme.appColors.palette_01}
                  borderRadius={false}
                />
                {day?.matches?.map((match) => (
                  <MatchItemMobile
                    key={match.id}
                    discipline={tournamentData?.discipline}
                    tournament={tournamentData}
                    match={match}
                    color={scheduleData?.ui_template?.primary || theme.appColors.palette_01}
                    onClickMatch={onChangeModalStatus(match)}
                  />
                ))}
                <BackgroundColor
                  customStyles={{ height: 20 }}
                  baseColor={scheduleData?.ui_template?.primary || theme.appColors.palette_01}
                  borderRadius={false}
                />
              </S.MatchList>
            </Fragment>
          ))}
        </>
      )}
    </ContentWrapper>
  );
};

export default ScheduleContent;
