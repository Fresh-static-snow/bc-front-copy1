import { memo } from 'react';

import * as S from './DisciplineTitle.styles';
import { DisciplineTitleProps } from './DisciplineTitle.types';

export const DisciplineTitle: React.FC<DisciplineTitleProps> = memo(
  ({ title, logo, borderWrapper, onClickDiscipline }) => (
    <S.Root
      onClick={onClickDiscipline || (() => {})}
      disabled={!onClickDiscipline}
      $borderWrapper={borderWrapper}
    >
      <S.Logo src={logo} alt={title} />
    </S.Root>
  ),
);
