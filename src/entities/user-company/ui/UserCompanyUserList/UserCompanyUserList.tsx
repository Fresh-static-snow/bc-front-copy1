import { IconUserPlusSvg } from '@/shared/assets';
import { sortingButtons } from '@/shared/const';
import { useSortUsers } from '@/shared/lib';
import { UserInCompany } from '@/shared/types/entities.types';
import { CircularLoader } from '@/shared/ui/feedback';
import { PrimaryButton, SortButton } from '@/shared/ui/inputs';
import { Scrollbar } from '@/shared/ui/layouts';
import { AccessControl } from '@/shared/ui/misc';
import { NavigationItem } from '@/shared/ui/navigation';

import * as S from './UserCompanyUserList.styles';
import { UserCompanyUserListProps } from './UserCompanyUserList.types';

export const UserCompanyUserList: React.FC<UserCompanyUserListProps> = ({
  mainKey,
  dataList,
  onOpenCreationModal,
}) => {
  const { sortedUsers, sortingValue, onChangeSortingValue } = useSortUsers<UserInCompany>(dataList);

  return (
    <>
      <S.UserListHeader>
        <AccessControl necessaryPermissions={['post::/api/v1/users']} NoAccessComponent={<div />}>
          <PrimaryButton
            IconComponent={IconUserPlusSvg}
            label="Add user"
            variant="secondary"
            onClick={onOpenCreationModal}
            data-testid="Add"
          />
        </AccessControl>

        <SortButton
          sortingButtons={sortingButtons}
          sortingValue={sortingValue}
          setSortingValue={onChangeSortingValue}
        />
      </S.UserListHeader>

      <S.Separator />

      <Scrollbar>
        <S.UserList>
          {sortedUsers?.map(({ id: userId, avatar, display_name, company, roles }) => (
            <NavigationItem
              key={`${mainKey}-${userId}`}
              linkPath={`/management/users/company/${company?.id}/edit/user/${userId}`}
              name={display_name}
              avatarImage={avatar?.url}
              AdditionalComponent={roles?.[0]?.title}
              padding="7px 30px"
            />
          ))}

          {!sortedUsers && <CircularLoader size="24px" width="100%" padding="8px" />}
        </S.UserList>
      </Scrollbar>
    </>
  );
};
