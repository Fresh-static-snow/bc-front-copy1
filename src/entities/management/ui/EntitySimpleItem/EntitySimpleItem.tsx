import { Fragment } from 'react';

import * as S from './EntitySimpleItem.styles';
import { EntitySimpleItemProps } from './EntitySimpleItem.types';

export const EntitySimpleItem: React.FC<EntitySimpleItemProps> = ({ title, elementsList }) => (
  <S.Root>
    <S.LeftPart>{title}</S.LeftPart>

    <S.RightPart>
      {elementsList?.map(({ key, content }) => (
        <Fragment key={key}>{content}</Fragment>
      ))}
    </S.RightPart>
  </S.Root>
);
