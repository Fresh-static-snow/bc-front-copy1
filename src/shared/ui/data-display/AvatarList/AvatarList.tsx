import { memo, useMemo, useRef } from 'react';

import { useSize } from '@/shared/lib';

import { TextColor } from '../../typography';
import { Avatar } from '../Avatar/Avatar';
import * as S from './AvatarList.styles';
import { AvatarListProps } from './AvatarList.types';

/**
 * The component that shows a list of avatars with a plus sign if there are more avatars than the visible count.
 * The avatars are displayed in a row.
 */
export const AvatarList: React.FC<AvatarListProps> = memo(
  ({ color, people, avatarSize = 20, position, filterList = [] }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const containerSize = useSize(containerRef);

    // * Calculate the number of avatars that can be displayed in the container.
    const visibleCount = useMemo(() => {
      if (containerSize?.width) {
        const avatarWidth = avatarSize + 4;
        const simpleCount = Math.floor(containerSize.width / avatarWidth);
        const overflowCount = (people?.length || 0) - simpleCount;

        if (overflowCount > 9) {
          const newVisibleCount = Math.floor((containerSize.width - 24) / avatarWidth);
          return newVisibleCount >= 0 ? newVisibleCount : 0;
        }
        if (overflowCount > 0) {
          const newVisibleCount = Math.floor((containerSize.width - 16) / avatarWidth);
          return newVisibleCount >= 0 ? newVisibleCount : 0;
        }
        return simpleCount;
      }
      return 0;
    }, [avatarSize, containerSize?.width, people?.length]);

    // * Get the visible people.
    const visiblePeople = useMemo(() => people?.slice(0, visibleCount), [people, visibleCount]);
    // * Get the number of people that are not visible.
    const overflowCount = useMemo(
      () => (people?.length || 0) - visibleCount,
      [people, visibleCount],
    );

    return (
      <S.Root ref={containerRef} $position={position}>
        {visiblePeople?.map(({ id, name, image, additionalBorder, crownIcon }) => (
          <Avatar
            key={String(id) + name}
            name={name}
            image={image}
            size={`${avatarSize}px`}
            backgroundColor={color}
            withShadow={filterList?.includes(String(id))}
            additionalBorder={additionalBorder ? '2px dashed #fff' : undefined}
            crownIcon={crownIcon}
            crownOuterStrokeColor={`${color}40`}
          />
        ))}

        {overflowCount > 0 && (
          <S.Counter>
            <TextColor
              text={`+${overflowCount > 99 ? 99 : overflowCount}`}
              secondaryColor={color}
            />
          </S.Counter>
        )}
      </S.Root>
    );
  },
);
