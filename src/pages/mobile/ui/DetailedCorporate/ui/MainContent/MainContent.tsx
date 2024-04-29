import dayjs from 'dayjs';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useGetCorporate } from '@/entities/corporate';

import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import * as S from './MainContent.styles';
import { Description } from './ui/Description/Description';
import { EventInfo } from './ui/EventInfo/EventInfo';
import { Participants } from './ui/Participants/Participants';

const MainContent: React.FC = () => {
  const { id: eventId } = useParams();
  const { data: mainData } = useGetCorporate(eventId);

  const participantsCount = useMemo(
    () => [...(mainData?.main_participants ?? []), ...(mainData?.participants ?? [])].length,
    [mainData?.main_participants, mainData?.participants],
  );

  // * Format the event dates. If the event is a single day event, only show the start date.
  const eventDate = useMemo(
    () =>
      `${mainData?.start_date ? dayjs(mainData?.start_date).format('DD MMM YYYY') : ''} ${
        mainData?.start_time ?? ''
      } ${
        mainData?.end_time && mainData?.start_time !== mainData?.end_time
          ? ` - ${mainData?.end_time}`
          : ''
      }`,
    [mainData?.end_time, mainData?.start_date, mainData?.start_time],
  );

  return (
    <ContentWrapper>
      <S.Root>
        <EventInfo
          cover={mainData?.cover?.url}
          date={eventDate}
          logo={mainData?.company?.cover?.url}
          name={mainData?.name}
          location={mainData?.location}
          participantsCount={participantsCount}
        />

        <Description descriptionText={mainData?.description} />

        <Participants
          mainParticipant={mainData?.main_participants ?? []}
          participants={mainData?.participants ?? []}
          participantsCount={participantsCount}
        />
      </S.Root>
    </ContentWrapper>
  );
};

export default MainContent;
