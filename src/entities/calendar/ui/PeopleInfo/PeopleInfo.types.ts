import { CSSColor, HEX } from '@/shared/types/styles.types';

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
  baseColor?: CSSColor;
  mainFilterList?: string[];
  secondaryFilterList?: string[];
  staffFilterList?: string[];
};

export type StyledSeparatorProps = {
  $baseColor: string;
  $secondaryColor: string;
};

export type PeopleInfoMobileProps = {
  color: HEX;
  isVisible?: boolean;
  peopleList: CalendarPerson[];
  filterList?: string[];
};
