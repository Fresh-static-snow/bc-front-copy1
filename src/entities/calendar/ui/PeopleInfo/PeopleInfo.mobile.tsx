import { memo, useMemo } from 'react';

import { AvatarList } from '@/shared/ui/data-display';

import { PeopleInfoMobileProps } from './PeopleInfo.types';

export const PeopleInfoMobile: React.FC<PeopleInfoMobileProps> = memo(
  ({ color, peopleList = [], filterList = [] }) => {
    // * Transform the data to the main people list.
    const peopleListTransform = useMemo(
      () =>
        peopleList?.map(({ id, avatar, display_name, additionalBorder, crownIcon }) => ({
          id,
          name: display_name,
          image: avatar?.url,
          additionalBorder,
          crownIcon,
        })),
      [peopleList],
    );

    return (
      <AvatarList
        color={color}
        avatarSize={26}
        people={peopleListTransform}
        filterList={filterList}
      />
    );
  },
);
