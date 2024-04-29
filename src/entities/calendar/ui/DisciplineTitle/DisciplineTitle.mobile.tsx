import { ElementRef, forwardRef, memo } from 'react';

import * as S from './DisciplineTitle.styles';
import { DisciplineTitleMobileProps } from './DisciplineTitle.types';

export const DisciplineTitleMobile = memo(
  forwardRef<ElementRef<'button'>, DisciplineTitleMobileProps>(
    ({ title, onClickDiscipline, top }, ref) => (
      <S.RootMobile
        ref={ref}
        top={top}
        onClick={onClickDiscipline || (() => {})}
        disabled={!onClickDiscipline}
      >
        <S.TitleMobile>{title}</S.TitleMobile>
      </S.RootMobile>
    ),
  ),
);
