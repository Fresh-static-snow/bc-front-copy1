import dayjs from 'dayjs';
import parse from 'html-react-parser';
import { Fragment, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { useGetSegment } from '@/entities/event-segment';
import { Guests } from '@/pages/desktop/ui/DetailedSegment/ui/MainContent/ui/Guests/Guests';
import { UserInCalendarEntity } from '@/shared/types/entities.types';
import { SlicedContentLayout } from '@/shared/ui/layouts';

import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import { Description } from './ui/Description/Description';
import { EventInfo } from './ui/EventInfo/EventInfo';
import { Participants } from './ui/Participants/Participants';

const MainContent: React.FC = () => {
  const { id: eventId } = useParams();
  const { data: mainData } = useGetSegment(eventId);

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

    const guests =
      mainData?.guests?.length > 0
        ? [
            {
              id: 'Guests',
              title: 'Guests',
              description: <Guests guests={mainData.guests} />,
            },
          ]
        : [];

    return [
      // {
      //   id: 'Format',
      //   title: 'Format',
      //   description: mainData?.format?.name ?? '',
      // },
      {
        id: 'Languages',
        title: 'Languages',
        description:
          mainData?.languages
            ?.map((language) => language.keyword)
            .join(', ')
            .toUpperCase() ?? '',
      },
      {
        id: 'Analyst Studios',
        title: 'Analyst Studios',
        description:
          mainData?.analytic_studios?.map((analytic_studio) => analytic_studio.name).join(', ') ??
          '',
      },
      {
        id: 'Studios',
        title: 'Studios',
        description: mainData?.studios?.map((studio) => studio.name).join(', ') ?? '',
      },
      {
        id: 'Setups',
        title: 'Setups',
        description: mainData?.setups?.map((setup) => setup.name).join(', ') ?? '',
      },
      {
        id: 'Streams',
        title: 'Streams',
        description: mainData?.streams?.map((stream) => stream.name).join(', ') ?? '',
      },
      {
        id: 'Channels',
        title: 'Channels',
        description: mainData?.channels?.map((channel) => channel.name).join(', ') ?? '',
      },
      ...descriptions,
      ...guests,
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
      { type: commentators, label: 'Casters' },
      { type: analytics, label: 'Analysts' },
      { type: mainData?.staff_members ?? [], label: 'Staff' },
    ];
  }, [mainData]);

  const participantsCount = useMemo(
    () => peopleTypes.reduce((acc, { type }) => acc + type.length, 0),
    [peopleTypes],
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
            logo={mainData?.logo?.url}
            eventName={mainData?.tournament?.title}
            time={`${mainData?.start_time ?? ''}${
              mainData?.end_time ? ` - ${mainData?.end_time}` : ''
            }`}
            date={mainData?.start_date ? dayjs(mainData?.start_date).format('DD MMM YYYY') : ''}
            name={mainData?.title}
            disciplineLogo={mainData?.game_discipline?.cover?.url}
          />
        </SlicedContentLayout.Section>

        <SlicedContentLayout.Section fragments={1} borderRight>
          <Description descriptionItems={descriptionList} />
        </SlicedContentLayout.Section>

        <SlicedContentLayout.Section fragments={1} borderRight>
          <Participants peopleTypes={peopleTypes} count={participantsCount} />
        </SlicedContentLayout.Section>
      </SlicedContentLayout.Body>
    </ContentWrapper>
  );
};

export default MainContent;
