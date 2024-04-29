import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { NavigationItem, NavigationMenuAccordionButton } from '@/shared/ui/navigation';

import * as S from './MenuUserCompanyList.styles';
import { MenuUserCompanyListProps } from './MenuUserCompanyList.types';

export const MenuUserCompanyList: React.FC<MenuUserCompanyListProps> = ({ companies }) => {
  const { pathname } = useLocation();

  // * If `true`, the current path includes the part of the path contained in the button link.
  const hasActivePath = useMemo(
    () =>
      companies?.some(({ id: companyId }) =>
        pathname.includes(`/management/users/company/${companyId}/edit`),
      ),
    [companies, pathname],
  );

  return (
    <>
      {companies && (
        <NavigationMenuAccordionButton
          title="Companies"
          count={companies?.length}
          defaultExpandedStatus={hasActivePath}
        >
          <S.ItemList>
            {companies?.map(({ id: companyId, title, cover, user_count }) => (
              <NavigationItem
                key={companyId}
                linkPath={`/management/users/company/${companyId}/edit`}
                activePathExact={false}
                name={title}
                avatarImage={cover?.url}
                AdditionalComponent={<S.Count>{user_count ?? 0}</S.Count>}
                padding="7px 24px 7px 50px"
                variant="colored"
              />
            ))}
          </S.ItemList>
        </NavigationMenuAccordionButton>
      )}
    </>
  );
};
