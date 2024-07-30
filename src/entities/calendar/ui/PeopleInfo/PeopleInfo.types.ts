import { CSSProperties } from 'react';

import { HEX } from '@/shared/types/styles.types';

import { CalendarPerson } from '../../types';

export type PeopleInfoProps = {
  mainPeople: CalendarPerson[];
  secondaryPeople?: CalendarPerson[];
  staffPeople?: CalendarPerson[];
  rows?: boolean;
  color: HEX;
  isVisible?: boolean;
  /**
   * @default secondary_10
   * @description `secondary_10` is the color of the active theme.
   */
  baseColor?: CSSProperties['color'];
  mainFilterList?: string[];
  secondaryFilterList?: string[];
  staffFilterList?: string[];
};

export type StyledSeparatorProps = {
  $baseColor: CSSProperties['color'];
  $secondaryColor: CSSProperties['color'];
};

export type PeopleInfoMobileProps = {
  color: CSSProperties['color'];
  isVisible?: boolean;
  peopleList: CalendarPerson[];
  filterList?: string[];
};
