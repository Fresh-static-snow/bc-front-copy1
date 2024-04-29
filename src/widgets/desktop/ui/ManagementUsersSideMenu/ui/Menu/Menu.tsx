import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useGetDashboardCompanies, useGetDashboardUsers } from '@/entities/management';
import { useGetRoleOptions } from '@/entities/role';
import { MenuUserList, useGetPreDeletedUsers } from '@/entities/user';
import { MenuUserCompanyList } from '@/entities/user-company';
import { IconSearchSvg } from '@/shared/assets';
import { useDebounce } from '@/shared/lib';
import { CircularLoader } from '@/shared/ui/feedback';
import { PrimaryInput } from '@/shared/ui/inputs';
import { Scrollbar } from '@/shared/ui/layouts';
import { NavigationMenuSimpleButton } from '@/shared/ui/navigation';

import * as S from './Menu.styles';

export const Menu: React.FC = () => {
  const { control, watch } = useForm();

  const term = watch('term') as string;

  const [debouncedTerm, setDebouncedTerm] = useState('');

  useDebounce(
    () => {
      setDebouncedTerm(term);
    },
    500,
    [term],
  );

  const { data: usersData, isLoading: isLoadingUsers } = useGetDashboardUsers(debouncedTerm.trim());
  const { data: companiesData, isLoading: isLoadingCompanies } = useGetDashboardCompanies(
    debouncedTerm.trim(),
  );
  const { data: rolesData, isLoading: isLoadingRoles } = useGetRoleOptions();
  const { data: preDeletedUsersData, isLoading: isLoadingPreDeletedUsers } =
    useGetPreDeletedUsers();

  const isLoading = useMemo(
    () => isLoadingUsers || isLoadingCompanies || isLoadingRoles || isLoadingPreDeletedUsers,
    [isLoadingUsers, isLoadingCompanies, isLoadingRoles, isLoadingPreDeletedUsers],
  );

  return (
    <S.Root>
      <S.Control>
        <S.InputWrapper>
          <PrimaryInput
            control={control}
            name="term"
            placeholder="Search"
            IconComponent={IconSearchSvg}
          />
        </S.InputWrapper>
      </S.Control>

      <Scrollbar>
        <S.Lists>
          <MenuUserList rolesWithUsers={usersData} />

          <MenuUserCompanyList companies={companiesData} />

          {rolesData && (
            <NavigationMenuSimpleButton linkPath="active/entity/role" count={rolesData?.length}>
              <span>Roles</span>
            </NavigationMenuSimpleButton>
          )}

          {preDeletedUsersData && (
            <NavigationMenuSimpleButton linkPath="deleted" count={preDeletedUsersData?.length}>
              <span>Deleted users</span>
            </NavigationMenuSimpleButton>
          )}

          {isLoading && <CircularLoader size="24px" width="100%" padding="8px" />}
        </S.Lists>
      </Scrollbar>
    </S.Root>
  );
};
