import { useCallback, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  useDeleteUserCompany,
  useGetUserCompanyForm,
  UserCompanyForm,
  UserCompanyFormSchema,
  useUpdateUserCompany,
} from '@/entities/user-company';
import { IconTriangleAlertSvg } from '@/shared/assets';
import { appendFormData, useCheckAccess, useToggle } from '@/shared/lib';
import { CircularLoader, ConfirmationModal } from '@/shared/ui/feedback';
import { CollapsibleFormHeader } from '@/shared/ui/forms';
import { Checkbox } from '@/shared/ui/inputs';

import * as S from './UpdateUserCompany.styles';
import { UpdateUserCompanyProps } from './UpdateUserCompany.types';

export const UpdateUserCompany: React.FC<UpdateUserCompanyProps> = ({
  companyId,
  sendBackPath,
  deleteBackPath,
}) => {
  const [openConfirmationModal, setOpenConfirmationModal] = useToggle(false);
  const [extendedStatus, setExtendedStatus] = useToggle(false);
  const [allTeamStatus, setAllTeamStatus] = useToggle(false);
  const navigate = useNavigate();
  const checkAccess = useCheckAccess();

  const {
    data: userCompanyData,
    isFetching: isFetchingUserCompanyData,
    isSuccess: isSuccessUserCompanyData,
  } = useGetUserCompanyForm(companyId);

  const defaultFormData = useMemo<UserCompanyFormSchema>(() => {
    if (!userCompanyData) {
      return {};
    }

    return {
      companyName: userCompanyData?.title ?? '',
      cover: userCompanyData?.cover?.url ?? '',
    };
  }, [userCompanyData]);

  const { mutateAsync: onUpdateUserCompany, isLoading: isUpdateLoading } = useUpdateUserCompany();
  const { mutateAsync: onDeleteUserCompany, isLoading: isDeleteLoading } = useDeleteUserCompany();

  const onSendData = useCallback(
    async (data: UserCompanyFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [
        { key: 'title', value: data.companyName },
        { key: 'cover', value: data.cover, options: { type: 'file', canBeEmpty: true } },
        {
          key: 'user_ids[]',
          value: userCompanyData?.users?.map((user) => String(user.id)),
          options: { type: 'list' },
        },
      ]);

      await onUpdateUserCompany({ id: companyId, formData });

      if (sendBackPath) {
        navigate(sendBackPath);
      }
    },
    [userCompanyData?.users, companyId, navigate, onUpdateUserCompany, sendBackPath],
  );

  const onReset = useCallback(() => {
    setAllTeamStatus(false);
  }, [setAllTeamStatus]);

  const onDelete = useCallback(async () => {
    await onDeleteUserCompany({ id: companyId });

    if (deleteBackPath) {
      navigate(deleteBackPath);
    }
  }, [companyId, deleteBackPath, navigate, onDeleteUserCompany]);

  useEffect(() => {
    setExtendedStatus(false);
  }, [companyId, setExtendedStatus]);

  return (
    <>
      <ConfirmationModal
        isOpen={openConfirmationModal}
        isLoading={isUpdateLoading || isDeleteLoading}
        onClose={setOpenConfirmationModal}
        onConfirm={onDelete}
        icon={<IconTriangleAlertSvg />}
        title="Are you sure?"
        message="Would you like to remove this company? If you delete this company, all users associated with it will be deleted."
      />

      {!isFetchingUserCompanyData && isSuccessUserCompanyData ? (
        <S.FormWrapper $withGap={allTeamStatus || extendedStatus}>
          <CollapsibleFormHeader
            avatarName={userCompanyData?.title}
            avatarImage={userCompanyData?.cover?.url}
            title={userCompanyData?.title}
            subtitle={
              <Checkbox
                checked={allTeamStatus}
                onChange={setAllTeamStatus as () => void}
                label="Use avatar for all team"
              />
            }
            extendedStatus={extendedStatus}
            onChangeExtendedStatus={setExtendedStatus}
            onOpenConfirmationModal={
              checkAccess(['delete::/api/v1/usercompanies/:id'])
                ? setOpenConfirmationModal
                : () => {}
            }
          />

          <UserCompanyForm
            hiddenFields={extendedStatus ? ['anotherOne'] : ['companyName', 'cover', 'anotherOne']}
            disabledFields={
              checkAccess(['put::/api/v1/usercompanies/:id']) ? [] : ['companyName', 'cover']
            }
            defaultFormData={defaultFormData}
            footerType="secondary"
            fieldsDirection="column"
            submitButtonLabel="Update"
            isLoading={isUpdateLoading || isDeleteLoading}
            isDirty={allTeamStatus}
            onSendData={onSendData}
            onClickReset={onReset}
          />
        </S.FormWrapper>
      ) : (
        <CircularLoader size="24px" width="100%" padding="8px" />
      )}
    </>
  );
};
