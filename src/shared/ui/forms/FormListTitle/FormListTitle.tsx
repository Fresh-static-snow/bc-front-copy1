import * as S from './FormListTitle.styles';
import { FormListTitleProps } from './FormListTitle.types';

/**
 * The title component which displays the title of the form block.
 */
export const FormListTitle: React.FC<FormListTitleProps> = ({ title }) => (
  <S.Root>
    <S.Title>{title}</S.Title>
  </S.Root>
);
