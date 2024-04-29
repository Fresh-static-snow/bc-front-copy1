import { memo, useMemo } from 'react';

import { AvatarList, BackgroundColor } from '@/shared/ui/data-display';

import * as S from './PeopleInfo.styles';
import { PeopleInfoProps } from './PeopleInfo.types';

export const PeopleInfo: React.FC<PeopleInfoProps> = memo(
  ({
    mainPeople,
    secondaryPeople,
    rows = false,
    color,
    isVisible = true,
    baseColor,
    mainFilterList = [],
    secondaryFilterList = [],
  }) => {
    // * Transform the data to the main people list.
    const mainPeopleList = useMemo(
      () =>
        mainPeople?.map(({ id, avatar, display_name, additionalBorder, crownIcon }) => ({
          id,
          name: display_name,
          image: avatar?.url,
          additionalBorder,
          crownIcon,
        })),
      [mainPeople],
    );
    // * Transform the data to the secondary people list.
    const secondaryPeopleList = useMemo(
      () =>
        secondaryPeople?.map(({ id, avatar, display_name, additionalBorder, crownIcon }) => ({
          id,
          name: display_name,
          image: avatar?.url,
          additionalBorder,
          crownIcon,
        })),
      [secondaryPeople],
    );

    const withFilter = useMemo(
      () =>
        !!mainPeople?.some((item) => mainFilterList?.includes(String(item.id))) ||
        !!secondaryPeople?.some((item) => secondaryFilterList?.includes(String(item.id))),
      [mainFilterList, mainPeople, secondaryFilterList, secondaryPeople],
    );

    return (
      <BackgroundColor baseColor={color} stripes={!isVisible} borderWrapper={withFilter}>
        <S.Root>
          <AvatarList
            color={color}
            avatarSize={26}
            people={mainPeopleList}
            filterList={mainFilterList}
          />

          {rows && (
            <>
              <S.Separator $baseColor={baseColor} $secondaryColor={color} />
              <AvatarList
                color={color}
                avatarSize={26}
                people={secondaryPeopleList}
                filterList={secondaryFilterList}
              />
            </>
          )}
        </S.Root>
      </BackgroundColor>
    );
  },
);
