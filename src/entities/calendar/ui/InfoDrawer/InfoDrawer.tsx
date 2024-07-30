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
  title,
  teamOne,
  teamTwo,
  format,
  date,
  time,
  location,
  channels,
  streams,
  commentators,
  analytics,
  staff,
  mainParticipant,
  mediaRepresentative,
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

    if (channels?.items?.length > 0 || streams?.items?.length > 0) {
      rows.push({
        id: nanoid(),
        icon: <IconMonitorsSvg />,
        content: (
          <>
            {channels?.items?.map((channel, index) => (
              <Fragment key={channel?.id}>
                {channels?.filterList?.includes(String(channel?.id)) ? (
                  <MarkedText>{channel?.name}</MarkedText>
                ) : (
                  <span>{channel?.name}</span>
                )}
                {index !== (channels?.items?.length ?? 0) - 1 && ', '}
              </Fragment>
            ))}

            {channels?.items?.length > 0 && streams?.items?.length > 0 && ', '}

            {streams?.items?.map((stream, index) => (
              <Fragment key={stream?.id}>
                {streams?.filterList?.includes(String(stream?.id)) ? (
                  <MarkedText>{stream?.name}</MarkedText>
                ) : (
                  <span>{stream?.name}</span>
                )}
                {index !== (streams?.items?.length ?? 0) - 1 && ', '}
              </Fragment>
            ))}
          </>
        ),
      });
    }

    if (commentators?.items?.length > 0) {
      rows.push({
        id: nanoid(),
        icon: <IconMicSvg />,
        content: commentators?.items?.map((person, index) => (
          <Fragment key={person?.id}>
            {commentators?.filterList?.includes(String(person?.id)) ? (
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
            {index !== (commentators?.items?.length ?? 0) - 1 && ', '}
          </Fragment>
        )),
      });
    }

    if (analytics?.items?.length > 0) {
      rows.push({
        id: nanoid(),
        icon: <IconCoffeeSvg />,
        content: analytics?.items?.map((person, index) => (
          <Fragment key={person?.id}>
            {analytics?.filterList?.includes(String(person?.id)) ? (
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
            {index !== (analytics?.items?.length ?? 0) - 1 && ', '}
          </Fragment>
        )),
      });
    }

    return rows;
  }, [channels, streams, commentators, analytics, date, format, location, time]);

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
            {discipline?.item && (
              <S.DisciplineName>
                {discipline?.filterList?.includes(String(discipline?.item?.id)) ? (
                  <MarkedText>{discipline?.item?.title}</MarkedText>
                ) : (
                  discipline?.item?.title
                )}
              </S.DisciplineName>
            )}
            {eventName && <S.EventName>{eventName}</S.EventName>}
          </S.InfoDrawerHeader>

          <S.InfoDrawerMatch>
            {(teamOne || teamTwo) && (
              <S.InfoDrawerTitle>
                <S.Bold>{teamOne}</S.Bold> vs <S.Bold>{teamTwo}</S.Bold>
              </S.InfoDrawerTitle>
            )}

            {title && (
              <S.InfoDrawerTitle>
                <S.Bold>{title}</S.Bold>
              </S.InfoDrawerTitle>
            )}

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

          <S.InfoDrawerBody>
            {contentRows?.map(({ id, icon, content }) => (
              <S.InfoDrawerRow key={id}>
                <S.InfoDrawerRowIcon>{icon}</S.InfoDrawerRowIcon>
                <S.InfoDrawerRowText>{content}</S.InfoDrawerRowText>
              </S.InfoDrawerRow>
            ))}
          </S.InfoDrawerBody>

          {(mainParticipant?.item || mediaRepresentative?.item) && (
            <S.Category>
              <S.CategoryTitle>Main & media</S.CategoryTitle>
              <S.CategoryList>
                {mainParticipant?.item && (
                  <S.CategoryItem>
                    <Avatar
                      image={mainParticipant?.item?.avatar?.url}
                      name={mainParticipant?.item?.display_name}
                      backgroundColor={color}
                      size="32px"
                    />
                    {mainParticipant?.filterList?.includes(String(mainParticipant?.item?.id)) ? (
                      <MarkedText>
                        <S.Bold>{mainParticipant?.item?.nick}</S.Bold>{' '}
                        {mainParticipant?.item?.first_name} {mainParticipant?.item?.last_name}
                      </MarkedText>
                    ) : (
                      <span>
                        <S.Bold>{mainParticipant?.item?.nick}</S.Bold>{' '}
                        {mainParticipant?.item?.first_name} {mainParticipant?.item?.last_name}
                      </span>
                    )}
                  </S.CategoryItem>
                )}

                {mediaRepresentative?.item && (
                  <S.CategoryItem>
                    <Avatar
                      image={mediaRepresentative?.item?.avatar?.url}
                      name={mediaRepresentative?.item?.display_name}
                      backgroundColor={color}
                      size="32px"
                    />
                    {mediaRepresentative?.filterList?.includes(
                      String(mediaRepresentative?.item?.id),
                    ) ? (
                      <MarkedText>
                        <S.Bold>{mediaRepresentative?.item?.nick}</S.Bold>{' '}
                        {mediaRepresentative?.item?.first_name}{' '}
                        {mediaRepresentative?.item?.last_name}
                      </MarkedText>
                    ) : (
                      <span>
                        <S.Bold>{mediaRepresentative?.item?.nick}</S.Bold>{' '}
                        {mediaRepresentative?.item?.first_name}{' '}
                        {mediaRepresentative?.item?.last_name}
                      </span>
                    )}
                  </S.CategoryItem>
                )}
              </S.CategoryList>
            </S.Category>
          )}

          {staff?.items?.length > 0 && (
            <S.Category>
              <S.CategoryTitle>Staff</S.CategoryTitle>
              <S.CategoryList>
                {staff?.items?.map(({ id, display_name, avatar, nick, first_name, last_name }) => (
                  <S.CategoryItem key={id}>
                    <Avatar
                      image={avatar?.url}
                      size="26px"
                      name={display_name}
                      backgroundColor={color}
                    />

                    {staff?.filterList?.includes(String(id)) ? (
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
