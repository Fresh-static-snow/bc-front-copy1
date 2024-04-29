import * as S from './Description.styles';
import { DescriptionProps } from './Description.types';

export const Description: React.FC<DescriptionProps> = ({ descriptionItem }) => (
  <S.Root id="description">
    <S.DescriptionTitle>Description</S.DescriptionTitle>

    {descriptionItem?.map(({ id, title, description }) => (
      <S.DescriptionItem key={id}>
        <S.DescriptionItemLabel>{title}:</S.DescriptionItemLabel>

        <S.DescriptionItemValue>{description}</S.DescriptionItemValue>
      </S.DescriptionItem>
    ))}
  </S.Root>
);
