import { useParams } from 'react-router-dom';

import { CommentList } from '@/entities/comment';
import { useGetCorporateComments } from '@/entities/corporate';
import { CreateComment } from '@/features/comment';
import { useCheckAccess } from '@/shared/lib';
import { Scrollbar, SlicedContentLayout } from '@/shared/ui/layouts';
import { AccessControl } from '@/shared/ui/misc';

import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import * as S from './CommentsContent.styles';

const CommentsContent: React.FC = () => {
  const checkAccess = useCheckAccess();
  const { id: eventId } = useParams();
  const { data: commentsData } = useGetCorporateComments(eventId);

  return (
    <ContentWrapper>
      <SlicedContentLayout.Body>
        <SlicedContentLayout.Section fragments={1} borderLeft borderRight scrollActive={false}>
          <S.CommentsWrapper $fullHeight={!checkAccess(['post::/api/v1/entitycomments'])}>
            <Scrollbar>
              <CommentList comments={commentsData} />
            </Scrollbar>
          </S.CommentsWrapper>

          <AccessControl necessaryPermissions={['post::/api/v1/entitycomments']}>
            <S.TextareaWrapper>
              <CreateComment entityType="Corporate" />
            </S.TextareaWrapper>
          </AccessControl>
        </SlicedContentLayout.Section>
      </SlicedContentLayout.Body>
    </ContentWrapper>
  );
};

export default CommentsContent;
