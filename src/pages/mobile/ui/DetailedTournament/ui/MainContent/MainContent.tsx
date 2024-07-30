import dayjs from 'dayjs';
import parse from 'html-react-parser';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useGetTournament } from '@/entities/tournament';
import { UserInCalendarEntity } from '@/shared/types/entities.types';

import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import * as S from './MainContent.styles';
import { Description } from './ui/Description/Description';
import { EventInfo } from './ui/EventInfo/EventInfo';
import { Participants } from './ui/Participants/Participants';

const MainContent: React.FC = () => {
  const { id: eventId } = useParams();
  const { data: mainData } = useGetTournament(eventId);

  // * Format the event dates. If the event is a single day event, only show the start date.
  const eventDate = useMemo(
    () =>
      `${mainData?.start_date ? dayjs(mainData?.start_date).format('DD MMM YYYY') : ''}${
        mainData?.end_date && mainData?.start_date !== mainData?.end_date
          ? ` - ${dayjs(mainData?.end_date).format('DD MMM YYYY')}`
          : ''
      }`,
    [mainData?.end_date, mainData?.start_date],
  );

  // * Create the description list. If the value is an array, join the values with a comma.
  const descriptionList = useMemo(() => {
    const descriptions =
      mainData?.descriptions?.map((description) => ({
        id: description?.id ?? '',
        title: description?.title ?? '',
        description: description?.description
          ? (parse(description?.description) as React.ReactNode)
          : '',
      })) ?? [];

    return [
      { id: 'Owner', title: 'Owner', description: mainData?.owner?.display_name ?? '' },
      {
        id: 'Sponsor',
        title: 'Sponsor',
        description: mainData?.sponsors?.map((sponsor) => sponsor.name).join(', ') ?? '',
      },
      { id: 'Tier', title: 'Tier', description: String(mainData?.tier ?? '') },
      { id: 'Teams', title: 'Teams', description: String(mainData?.teams_count ?? '') },
      ...descriptions,
    ];
  }, [mainData]);

  const peopleTypes = useMemo(() => {
    const commentators = [
      ...(mainData?.commentators ?? []),
      ...(mainData?.backup_commentators ?? []),
    ].reduce((accumulator: UserInCalendarEntity[], commentator: UserInCalendarEntity) => {
      if (!accumulator.some((c) => c.id === commentator.id)) {
        accumulator.push(commentator);
      }
      return accumulator;
    }, []);

    const analytics = [...(mainData?.host_analytics ?? []), ...(mainData?.analytics ?? [])].reduce(
      (accumulator: UserInCalendarEntity[], analyst: UserInCalendarEntity) => {
        if (!accumulator.some((a) => a.id === analyst.id)) {
          accumulator.push(analyst);
        }
        return accumulator;
      },
      [],
    );

    return [
      { type: mainData?.main_participants ?? [], label: 'Main Participants' },
      { type: mainData?.media_representatives ?? [], label: 'Media Representatives' },
      { type: commentators, label: 'Casters' },
      { type: analytics, label: 'Analysts' },
      { type: mainData?.staff ?? [], label: 'Staff' },
    ];
  }, [mainData]);

  const participantsCount = useMemo(
    () => peopleTypes.reduce((acc, { type }) => acc + type.length, 0),
    [peopleTypes],
  );

  return (
    <ContentWrapper>
      <S.Root>
        <EventInfo
          cover={mainData?.cover?.url}
          date={eventDate}
          logo={mainData?.discipline?.cover?.url}
          name={mainData?.title}
          region={mainData?.region?.name}
          participantsCount={participantsCount}
        />

        <Description descriptionItems={descriptionList} />

        <Participants peopleTypes={peopleTypes} count={participantsCount} />
      </S.Root>
    </ContentWrapper>
  );
};

export default MainContent;
