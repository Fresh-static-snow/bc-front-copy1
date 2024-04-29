import { useParams } from 'react-router-dom';

import { useGetTournamentMedia } from '@/entities/tournament';

import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import * as S from './MediaContent.styles';

const MediaContent: React.FC = () => {
  const { id: eventId } = useParams();
  const { data: mediaData } = useGetTournamentMedia(eventId);

  return (
    <ContentWrapper>
      <S.Root>
        {mediaData?.length === 0 ? (
          <S.EmptyMedia>There are no media yet.</S.EmptyMedia>
        ) : (
          mediaData?.map(({ id, description, title, updated_at }) => (
            <S.MediaItem key={id}>
              <S.Title>{title}</S.Title>

              <S.Date>Last update {updated_at}</S.Date>

              <S.MediaItemText>{description}</S.MediaItemText>
            </S.MediaItem>
          ))
        )}
      </S.Root>
    </ContentWrapper>
  );
};

export default MediaContent;
