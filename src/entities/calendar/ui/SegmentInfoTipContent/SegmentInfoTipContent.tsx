import { useTheme } from '@emotion/react';
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
import { Fragment, useCallback, useMemo } from 'react';

import {
  IconArrowLeftSvg,
  IconClockSvg,
  IconCoffeeSvg,
  IconEditSvg,
  IconEyeSvg,
  IconMapPinSvg,
  IconMicSvg,
  IconMonitorsSvg,
  IconUsersSvg,
} from '@/shared/assets';
import { Tournament } from '@/shared/types/entities.types';
import { Avatar } from '@/shared/ui/data-display';
import { PrimaryButton } from '@/shared/ui/inputs';
import { Rotate } from '@/shared/ui/layouts';
import { MarkedText } from '@/shared/ui/typography';

import * as S from './SegmentInfoTipContent.styles';
import { ContentRow, SegmentInfoTipContentProps } from './SegmentInfoTipContent.types';

export const SegmentInfoTipContent: React.FC<SegmentInfoTipContentProps> = ({
  title,
  color,
  discipline,
  eventName,
  date,
  time,
  guests,
  disciplineFilterList,
  onClickEdit,
  onClickView,
}) => {
  const theme = useTheme();

  const contentRows = useMemo(() => {
    const rows: ContentRow[] = [];

    if (date || time) {
      rows.push({
        id: nanoid(),
        icon: <IconClockSvg />,
        content: `${date ? dayjs(date).format('DD MMM') : ''}${time ? ` ${time}` : ''}`,
      });
    }

    if (guests?.length > 0) {
      rows.push({
        id: nanoid(),
        icon: <IconUsersSvg />,
        content: guests?.map((guest, index) => (
          <Fragment key={guest?.id}>
            <S.Bold>{guest?.username}</S.Bold> <span>{guest?.name}</span>{' '}
            <S.Gray>{guest?.social}</S.Gray>
            {index !== guests.length - 1 && ', '}
          </Fragment>
        )),
      });
    }

    return rows;
  }, [date, guests, time]);

  return (
    <S.Root>
      <S.Header>
        <div>
          {discipline && (
            <S.HeaderName>
              {disciplineFilterList?.includes(String(discipline?.id)) ? (
                <MarkedText>{discipline?.title}</MarkedText>
              ) : (
                discipline?.title
              )}
            </S.HeaderName>
          )}
          {eventName && <S.HeaderName>{eventName}</S.HeaderName>}
        </div>
        {title && <S.Title>{title}</S.Title>}
      </S.Header>

      <S.Control>
        <PrimaryButton
          onClick={onClickEdit}
          label="Edit"
          variant="custom"
          IconComponent={IconEditSvg}
          customStyles={{
            color: theme.appColors.primary_05,
            iconColor: theme.appColors.primary_05,
            backgroundColor: color,
            backgroundColorHovered: `${color}B3`,
            backgroundColorActive: `${color}B3`,
          }}
        />

        <PrimaryButton
          onClick={onClickView}
          label="View"
          variant="custom"
          IconComponent={IconEyeSvg}
          customStyles={{
            color,
            iconColor: color,
            backgroundColorHovered: `${color}33`,
            backgroundColorActive: `${color}33`,
          }}
        />
      </S.Control>

      <S.Body>
        {contentRows?.map(({ id, icon, content }) => (
          <S.ContentRow key={id}>
            <S.ContentRowIcon>{icon}</S.ContentRowIcon>
            <S.ContentRowText>{content}</S.ContentRowText>
          </S.ContentRow>
        ))}
      </S.Body>
    </S.Root>
  );
};
