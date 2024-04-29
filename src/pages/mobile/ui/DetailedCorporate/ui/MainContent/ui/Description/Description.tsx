import * as S from './Description.styles';
import { DescriptionProps } from './Description.types';

export const Description: React.FC<DescriptionProps> = ({ descriptionText }) => (
  <S.Root id="description">
    <S.DescriptionTitle>Description</S.DescriptionTitle>

    <S.Text>{descriptionText}</S.Text>
  </S.Root>
);
