import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
import { Fragment, useMemo } from 'react';

import {
  IconArrowLeftSvg,
  IconClockSvg,
  IconCoffeeSvg,
  IconMapPinSvg,
  IconMicSvg,
  IconMonitorsSvg,
} from '@/shared/assets';
import { Avatar } from '@/shared/ui/data-display';
import { Rotate } from '@/shared/ui/layouts';
import { MarkedText } from '@/shared/ui/typography';

import * as S from './FullInfoTipContent.styles';
import { ContentRow, FullInfoTipContentProps } from './FullInfoTipContent.types';

export const FullInfoTipContent: React.FC<FullInfoTipContentProps> = ({
  color,
  discipline,
  eventName,
  startDate,
  endDate,
  tier,
  location,
  channels,
  commentators,
  analytics,
  mainParticipant,
  mediaRepresentative,
  disciplineFilterList,
  channelFilterList,
  commentatorsFilterList,
  analyticsFilterList,
  mainParticipantFilterList,
  mediaRepresentativeFilterList,
}) => {
  const contentRows = useMemo(() => {
    const rows: ContentRow[] = [];

    if (startDate || endDate) {
      rows.push({
        id: nanoid(),
        icon: <IconClockSvg />,
        content: `${startDate ? dayjs(startDate).format('DD MMM') : ''}${
          endDate && startDate !== endDate ? ` - ${dayjs(endDate).format('DD MMM')}` : ''
        }`,
      });
    }

    if (location) {
      rows.push({
        id: nanoid(),
        icon: <IconMapPinSvg />,
        content: location ?? '',
      });
    }

    if (channels?.length > 0) {
      rows.push({
        id: nanoid(),
        icon: <IconMonitorsSvg />,
        content: channels?.map((channel, index) => (
          <Fragment key={channel?.id}>
            {channelFilterList?.includes(String(channel?.id)) ? (
              <MarkedText>{channel?.name}</MarkedText>
            ) : (
              <span>{channel?.name}</span>
            )}
            {index !== channels.length - 1 && ', '}
          </Fragment>
        )),
      });
    }

    if (tier) {
      rows.push({
        id: nanoid(),
        icon: (
          <Rotate rotateDeg={90}>
            <IconArrowLeftSvg />
          </Rotate>
        ),
        content: tier ? `Tier ${tier}` : '',
      });
    }

    if (commentators?.length > 0) {
      rows.push({
        id: nanoid(),
        icon: <IconMicSvg />,
        content: commentators?.map((person, index) => (
          <Fragment key={person?.id}>
            {commentatorsFilterList?.includes(String(person?.id)) ? (
              <MarkedText>
                <S.Bold>{person?.nick}</S.Bold> {person?.firstName} {person?.lastName}
              </MarkedText>
            ) : (
              <span>
                <S.Bold>{person?.nick}</S.Bold> {person?.firstName} {person?.lastName}
              </span>
            )}
            {person?.additionalText && (
              <S.CategoryStatus>{` ${person?.additionalText}`}</S.CategoryStatus>
            )}
            {index !== commentators.length - 1 && ', '}
          </Fragment>
        )),
      });
    }

    if (analytics?.length > 0) {
      rows.push({
        id: nanoid(),
        icon: <IconCoffeeSvg />,
        content: analytics?.map((person, index) => (
          <Fragment key={person?.id}>
            {analyticsFilterList?.includes(String(person?.id)) ? (
              <MarkedText>
                <S.Bold>{person?.nick}</S.Bold> {person?.firstName} {person?.lastName}
              </MarkedText>
            ) : (
              <span>
                <S.Bold>{person?.nick}</S.Bold> {person?.firstName} {person?.lastName}
              </span>
            )}
            {person?.additionalText && (
              <S.CategoryStatus>{` ${person?.additionalText}`}</S.CategoryStatus>
            )}
            {index !== analytics.length - 1 && ', '}
          </Fragment>
        )),
      });
    }

    return rows;
  }, [
    startDate,
    endDate,
    location,
    channels,
    tier,
    commentators,
    analytics,
    channelFilterList,
    commentatorsFilterList,
    analyticsFilterList,
  ]);

  return (
    <S.Root>
      <S.FullInfoTipContentHeader>
        {discipline && (
          <S.DisciplineName>
            {disciplineFilterList?.includes(String(discipline?.id)) ? (
              <MarkedText>{discipline?.title}</MarkedText>
            ) : (
              discipline?.title
            )}
          </S.DisciplineName>
        )}
        {eventName && <S.EventName>{eventName}</S.EventName>}
      </S.FullInfoTipContentHeader>

      <S.FullInfoTipContentBody>
        {contentRows?.map(({ id, icon, content }) => (
          <S.FullInfoTipContentRow key={id}>
            <S.FullInfoTipContentRowIcon>{icon}</S.FullInfoTipContentRowIcon>
            <S.FullInfoTipContentRowText>{content}</S.FullInfoTipContentRowText>
          </S.FullInfoTipContentRow>
        ))}
      </S.FullInfoTipContentBody>

      {(mainParticipant || mediaRepresentative) && (
        <S.Category>
          <S.CategoryTitle>Main & media</S.CategoryTitle>
          <S.CategoryList>
            {mainParticipant && (
              <S.CategoryItem>
                <Avatar
                  image={mainParticipant.avatar?.url}
                  name={mainParticipant.display_name}
                  backgroundColor={color}
                  size="32px"
                />
                {mainParticipantFilterList?.includes(String(mainParticipant?.id)) ? (
                  <MarkedText>
                    <S.Bold>{mainParticipant?.nick}</S.Bold> {mainParticipant?.first_name}{' '}
                    {mainParticipant?.last_name}
                  </MarkedText>
                ) : (
                  <span>
                    <S.Bold>{mainParticipant?.nick}</S.Bold> {mainParticipant?.first_name}{' '}
                    {mainParticipant?.last_name}
                  </span>
                )}
              </S.CategoryItem>
            )}

            {mediaRepresentative && (
              <S.CategoryItem>
                <Avatar
                  image={mediaRepresentative.avatar?.url}
                  name={mediaRepresentative.display_name}
                  backgroundColor={color}
                  size="32px"
                />
                {mediaRepresentativeFilterList?.includes(String(mediaRepresentative?.id)) ? (
                  <MarkedText>
                    <S.Bold>{mediaRepresentative?.nick}</S.Bold> {mediaRepresentative?.first_name}{' '}
                    {mediaRepresentative?.last_name}
                  </MarkedText>
                ) : (
                  <span>
                    <S.Bold>{mediaRepresentative?.nick}</S.Bold> {mediaRepresentative?.first_name}{' '}
                    {mediaRepresentative?.last_name}
                  </span>
                )}
              </S.CategoryItem>
            )}
          </S.CategoryList>
        </S.Category>
      )}
    </S.Root>
  );
};
