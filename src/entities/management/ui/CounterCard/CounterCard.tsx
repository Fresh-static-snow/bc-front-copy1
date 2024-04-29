import * as S from './CounterCard.styles';
import { CounterCardProps } from './CounterCard.types';

export const CounterCard: React.FC<CounterCardProps> = ({ title, count }) => (
  <S.Root>
    <S.Title>{title}</S.Title>
    <S.Value>{count}</S.Value>
  </S.Root>
);
