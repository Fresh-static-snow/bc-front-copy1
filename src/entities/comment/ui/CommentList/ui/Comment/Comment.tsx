import * as S from './Comment.styles';
import { CommentProps } from './Comment.types';

export const Comment: React.FC<CommentProps> = ({ id, user, message, time }) => (
  <S.Root key={id}>
    <S.Text>{message}</S.Text>

    <S.Footer>
      <S.Name>{user?.display_name}</S.Name>
      <S.Date>{time}</S.Date>
    </S.Footer>
  </S.Root>
);
