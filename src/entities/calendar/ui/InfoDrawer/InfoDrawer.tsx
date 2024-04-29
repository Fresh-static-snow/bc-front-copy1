import { useTheme } from '@emotion/react';
import { Drawer } from '@mui/material';
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
import { Fragment, useMemo } from 'react';

import {
  IconClockSvg,
  IconCoffeeSvg,
  IconEditSvg,
  IconMapPinSvg,
  IconMicSvg,
  IconMonitorsSvg,
  IconServerSvg,
} from '@/shared/assets';
import { Avatar } from '@/shared/ui/data-display';
import { PrimaryButton } from '@/shared/ui/inputs';
import { MarkedText } from '@/shared/ui/typography';

import * as S from './InfoDrawer.styles';
import { ContentRow, InfoDrawerProps } from './InfoDrawer.types';

export const InfoDrawer: React.FC<InfoDrawerProps> = ({
  isOpen,
  setOpen,
  isVisible,
  color,
  discipline,
  eventName,
  teamOne,
  teamTwo,
  format,
  date,
  time,
  location,
  channels,
  commentators,
  analytics,
  staff,
  mainParticipant,
  mediaRepresentative,
  disciplineFilterList,
  channelFilterList,
  commentatorsFilterList,
  analyticsFilterList,
  staffFilterList,
  mainParticipantFilterList,
  mediaRepresentativeFilterList,
  onClickEdit,
}) => {
  const theme = useTheme();

  const contentRows = useMemo(() => {
    const rows: ContentRow[] = [];

    if (format) {
      rows.push({
        id: nanoid(),
        icon: <IconServerSvg />,
        content: format,
      });
    }

    if (date || time) {
      rows.push({
        id: nanoid(),
        icon: <IconClockSvg />,
        content: `${date ? dayjs(date).format('DD MMM') : ''}${time ? ` ${time}` : ''}`,
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
            {index !== analytics.length - 1 && ', '}
          </Fragment>
        )),
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
    format,
    date,
    time,
    location,
    channels,
    commentators,
    analytics,
    channelFilterList,
    commentatorsFilterList,
    analyticsFilterList,
  ]);

  const onClose = () => setOpen(false);

  return (
    <Drawer
      open={isOpen}
      anchor="bottom"
      onClose={onClose}
      PaperProps={{
        elevation: 0,
        sx: { borderRadius: '4px 4px 0px 0px' },
      }}
      sx={{ zIndex: 2000 }}
    >
      <S.Root>
        <S.StatusIndicator $stripes={!isVisible} $baseColor={color} />

        <S.Content>
          <S.InfoDrawerHeader>
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
          </S.InfoDrawerHeader>

          {(teamOne || teamTwo) && (
            <S.InfoDrawerMatch>
              <S.InfoDrawerTeams>
                <S.Bold>{teamOne}</S.Bold> vs <S.Bold>{teamTwo}</S.Bold>
              </S.InfoDrawerTeams>

              {!!onClickEdit && (
                <PrimaryButton
                  label="Edit"
                  onClick={onClickEdit}
                  IconComponent={IconEditSvg}
                  width="max-content"
                  variant="custom"
                  customStyles={{
                    backgroundColor: color ?? theme.appColors.primary_01,
                    color: theme.appColors.primary_05,
                    iconColor: theme.appColors.primary_05,
                  }}
                />
              )}
            </S.InfoDrawerMatch>
          )}

          <S.InfoDrawerBody>
            {contentRows?.map(({ id, icon, content }) => (
              <S.InfoDrawerRow key={id}>
                <S.InfoDrawerRowIcon>{icon}</S.InfoDrawerRowIcon>
                <S.InfoDrawerRowText>{content}</S.InfoDrawerRowText>
              </S.InfoDrawerRow>
            ))}
          </S.InfoDrawerBody>

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
                        <S.Bold>{mediaRepresentative?.nick}</S.Bold>{' '}
                        {mediaRepresentative?.first_name} {mediaRepresentative?.last_name}
                      </MarkedText>
                    ) : (
                      <span>
                        <S.Bold>{mediaRepresentative?.nick}</S.Bold>{' '}
                        {mediaRepresentative?.first_name} {mediaRepresentative?.last_name}
                      </span>
                    )}
                  </S.CategoryItem>
                )}
              </S.CategoryList>
            </S.Category>
          )}

          {staff?.length > 0 && (
            <S.Category>
              <S.CategoryTitle>Staff</S.CategoryTitle>
              <S.CategoryList>
                {staff?.map(({ id, display_name, avatar, nick, first_name, last_name }) => (
                  <S.CategoryItem key={id}>
                    <Avatar
                      image={avatar?.url}
                      size="26px"
                      name={display_name}
                      backgroundColor={color}
                    />

                    {staffFilterList?.includes(String(id)) ? (
                      <MarkedText>
                        <S.Bold>{nick}</S.Bold> {first_name} {last_name}
                      </MarkedText>
                    ) : (
                      <span>
                        <S.Bold>{nick}</S.Bold> {first_name} {last_name}
                      </span>
                    )}
                  </S.CategoryItem>
                ))}
              </S.CategoryList>
            </S.Category>
          )}
        </S.Content>
      </S.Root>
    </Drawer>
  );
};
