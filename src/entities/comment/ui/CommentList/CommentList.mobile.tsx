import * as S from './CommentList.styles';
import { CommentListProps } from './CommentList.types';
import { Comment } from './ui/Comment/Comment';

export const CommentListMobile: React.FC<CommentListProps> = ({ comments }) => (
  <S.RootMobile>
    {comments?.length === 0 ? (
      <S.EmptyCommentsMobile>There are no comments yet.</S.EmptyCommentsMobile>
    ) : (
      comments?.map((comment) => <Comment key={comment.id} {...comment} />)
    )}
  </S.RootMobile>
);
