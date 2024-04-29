import * as S from './CommentList.styles';
import { CommentListProps } from './CommentList.types';
import { Comment } from './ui/Comment/Comment';

export const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <S.Root>
    {comments?.length === 0 ? (
      <S.EmptyComments>There are no comments yet.</S.EmptyComments>
    ) : (
      comments?.map((comment) => <Comment key={comment.id} {...comment} />)
    )}
  </S.Root>
);
