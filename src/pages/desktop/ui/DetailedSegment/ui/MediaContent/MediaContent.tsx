import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';

import { useGetSegmentMedia } from '@/entities/event-segment';
import { SlicedContentLayout } from '@/shared/ui/layouts';

import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import * as S from './MediaContent.styles';

const MediaContent: React.FC = () => {
  const { id: eventId } = useParams();
  const { data: mediaData } = useGetSegmentMedia(eventId);

  return (
    <ContentWrapper>
      <SlicedContentLayout.Body>
        <SlicedContentLayout.Section fragments={1} borderLeft borderRight>
          <S.Media>
            {mediaData?.length === 0 ? (
              <S.EmptyMedia>There are no media yet.</S.EmptyMedia>
            ) : (
              mediaData?.map(({ id, description, title, updated_at }) => (
                <S.MediaItem key={id}>
                  <S.MediaItemHeader>
                    <S.Title>{title}</S.Title>
                    <S.Date>Last update {updated_at}</S.Date>
                  </S.MediaItemHeader>

                  <S.MediaItemText>{parse(description)}</S.MediaItemText>
                </S.MediaItem>
              ))
            )}
          </S.Media>
        </SlicedContentLayout.Section>
      </SlicedContentLayout.Body>
    </ContentWrapper>
  );
};

export default MediaContent;
