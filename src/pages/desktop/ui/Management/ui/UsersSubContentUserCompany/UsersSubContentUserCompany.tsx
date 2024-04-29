import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useGetUserCompanyForm, UserCompanyUserList } from '@/entities/user-company';
import { UpdateUser, UpdateUserCompany } from '@/features/user';
import { IconChevronLeftSvg } from '@/shared/assets';
import { PrimaryButton } from '@/shared/ui/inputs';
import { SlicedContentLayout } from '@/shared/ui/layouts';
import { useManagementMenuStore } from '@/widgets/desktop';

import * as S from './UsersSubContentUserCompany.styles';

const UsersSubContentUserCompany: React.FC = () => {
  const navigate = useNavigate();
  const { companyId, userId } = useParams();
  const { data: companyData } = useGetUserCompanyForm(companyId);

  const setCreationRequestType = useManagementMenuStore((state) => state.setCreationRequestType);

  const onClickBack = () => {
    navigate(`/management/users/company/${companyId}/edit`);
  };

  const onOpenCreationModal = useCallback(() => {
    setCreationRequestType({ label: 'User', value: 'user', additional: companyId });
  }, [companyId, setCreationRequestType]);

  if (companyData?.users?.some((user) => String(user?.id) === userId)) {
    return (
      <SlicedContentLayout.Section width="608px" borderRight>
        <S.BackButtonWrapper>
          <PrimaryButton
            label="Back"
            variant="secondary"
            IconComponent={IconChevronLeftSvg}
            onClick={onClickBack}
            data-testid="Back"
          />
        </S.BackButtonWrapper>

        <UpdateUser
          userId={userId}
          deleteBackPath={`/management/users/company/${companyId}/edit`}
          sendBackPath={`/management/users/company/${companyId}/edit`}
        />
      </SlicedContentLayout.Section>
    );
  }

  return (
    <SlicedContentLayout.Section width="608px" borderRight scrollActive={false}>
      <S.UpdateUserCompanyWrapper>
        <UpdateUserCompany
          companyId={companyId}
          deleteBackPath="/management/users"
          sendBackPath={`/management/users/company/${companyId}/edit`}
        />

        <S.AdditionalContent>
          <UserCompanyUserList
            mainKey="company-user"
            dataList={companyData?.users}
            onOpenCreationModal={onOpenCreationModal}
          />
        </S.AdditionalContent>
      </S.UpdateUserCompanyWrapper>
    </SlicedContentLayout.Section>
  );
};

export default UsersSubContentUserCompany;
