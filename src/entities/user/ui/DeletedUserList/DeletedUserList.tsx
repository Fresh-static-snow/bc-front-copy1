import { useTheme } from '@emotion/react';
import { useCallback } from 'react';

import { EntityAccordionItem } from '@/entities/management';
import { IconRotateCcwSvg, IconTrashSvg } from '@/shared/assets';
import { sortingButtons } from '@/shared/const';
import { useSortUsers } from '@/shared/lib';
import { UserWithEvents } from '@/shared/types/entities.types';
import { Avatar, RelatedEventList, RelatedEventsContent } from '@/shared/ui/data-display';
import { CircularLoader } from '@/shared/ui/feedback';
import { PrimaryButton, SortButton } from '@/shared/ui/inputs';

import * as S from './DeletedUserList.styles';
import { DeletedUserListProps } from './DeletedUserList.types';

export const DeletedUserList: React.FC<DeletedUserListProps> = ({
  mainKey,
  dataList,
  isLoading,
  onDelete,
  onRestore,
}) => {
  const theme = useTheme();
  const { sortedUsers, sortingValue, onChangeSortingValue } =
    useSortUsers<UserWithEvents>(dataList);

  const onClickDelete = useCallback(
    (id: number | string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onDelete(id);
    },
    [onDelete],
  );
  const onClickRestore = useCallback(
    (id: number | string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onRestore(id);
    },
    [onRestore],
  );

  return (
    <S.Root>
      <S.UserListHeader>
        <SortButton
          sortingButtons={sortingButtons}
          sortingValue={sortingValue}
          setSortingValue={onChangeSortingValue}
        />
      </S.UserListHeader>

      <S.ListWrapper>
        {sortedUsers?.map(
          ({ id, display_name, avatar, company, roles, events_count, related_events }) => (
            <EntityAccordionItem
              key={`${mainKey}-${id}`}
              title={
                <S.TitleWrapper>
                  <Avatar
                    name={display_name}
                    image={avatar?.url}
                    size="32px"
                    backgroundColor={theme.appColors.primary_01}
                    fontSize="13px"
                    fontWeight="400"
                  />
                  {display_name}
                </S.TitleWrapper>
              }
              content={
                <S.ContentWrapper>
                  <S.InfoItemList>
                    <RelatedEventList title="Company" content={company?.title} />
                    <RelatedEventList title="Role" content={roles?.[0]?.title} />
                  </S.InfoItemList>

                  <RelatedEventsContent
                    events_count={events_count}
                    related_events={related_events}
                  />
                </S.ContentWrapper>
              }
              elementsList={[
                {
                  key: `${mainKey}-${id}-delete`,
                  content: (
                    <PrimaryButton
                      IconComponent={IconTrashSvg}
                      variant="secondary"
                      onClick={onClickDelete(id)}
                      isLoading={isLoading}
                    />
                  ),
                },
                {
                  key: `${mainKey}-${id}-restore`,
                  content: (
                    <PrimaryButton
                      IconComponent={IconRotateCcwSvg}
                      variant="secondary"
                      onClick={onClickRestore(id)}
                      isLoading={isLoading}
                    />
                  ),
                },
              ]}
            />
          ),
        )}

        {!sortedUsers && <CircularLoader size="24px" width="100%" padding="8px" />}
      </S.ListWrapper>
    </S.Root>
  );
};
