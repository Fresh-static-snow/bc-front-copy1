import { CSSProperties } from 'react';

export type DisciplineTitleProps = {
  title: string;
  logo: string;
  borderWrapper?: boolean;
  onClickDiscipline?: () => void;
};

export type StyledRootProps = {
  $borderWrapper?: boolean;
  top?: CSSProperties['top'];
};

export type DisciplineTitleMobileProps = {
  title: string;
  onClickDiscipline?: () => void;
  top?: CSSProperties['top'];
};
