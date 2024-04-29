import dayjs from 'dayjs';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useGetCorporate } from '@/entities/corporate';
import { SlicedContentLayout } from '@/shared/ui/layouts';

import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import { Description } from './ui/Description/Description';
import { EventInfo } from './ui/EventInfo/EventInfo';
import { Participants } from './ui/Participants/Participants';

const MainContent: React.FC = () => {
  const { id: eventId } = useParams();
  const { data: mainData } = useGetCorporate(eventId);

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
      <SlicedContentLayout.Body>
        <SlicedContentLayout.Section
          fragments={1}
          borderLeft
          borderRight
          borderRightType="dashed"
          disableTracksWidthCompensation={false}
        >
          <EventInfo
            cover={mainData?.cover?.url}
            date={eventDate}
            logo={mainData?.company?.cover?.url}
            name={mainData?.name}
            location={mainData?.location}
          />
        </SlicedContentLayout.Section>

        <SlicedContentLayout.Section fragments={1} borderRight>
          <Description descriptionText={mainData?.description} />
        </SlicedContentLayout.Section>

        <SlicedContentLayout.Section fragments={1} borderRight>
          <Participants
            mainParticipant={mainData?.main_participants}
            participants={mainData?.participants}
          />
        </SlicedContentLayout.Section>
      </SlicedContentLayout.Body>
    </ContentWrapper>
  );
};

export default MainContent;
