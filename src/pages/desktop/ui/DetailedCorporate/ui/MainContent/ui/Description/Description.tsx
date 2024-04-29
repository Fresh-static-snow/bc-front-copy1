import * as S from './Description.styles';
import { DescriptionProps } from './Description.types';

export const Description: React.FC<DescriptionProps> = ({ descriptionText }) => (
  <S.Root>
    <S.Title>Description</S.Title>

    <S.Text>{descriptionText}</S.Text>
  </S.Root>
);
