import { useParams } from 'react-router-dom';

import { CommentListMobile } from '@/entities/comment';
import { useGetCorporateComments } from '@/entities/corporate';
import { CreateCommentMobile } from '@/features/comment';
import { useCheckAccess } from '@/shared/lib';
import { AccessControl } from '@/shared/ui/misc';

import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import * as S from './CommentsContent.styles';

const CommentsContent: React.FC = () => {
  const checkAccess = useCheckAccess();
  const { id: eventId } = useParams();
  const { data: commentsData } = useGetCorporateComments(eventId);

  return (
    <ContentWrapper>
      <S.CommentsWrapper $fullHeight={!checkAccess(['post::/api/v1/entitycomments'])}>
        <CommentListMobile comments={commentsData} />
      </S.CommentsWrapper>

      <AccessControl necessaryPermissions={['post::/api/v1/entitycomments']}>
        <S.TextareaWrapper>
          <CreateCommentMobile entityType="Corporate" />
        </S.TextareaWrapper>
      </AccessControl>
    </ContentWrapper>
  );
};

export default CommentsContent;
