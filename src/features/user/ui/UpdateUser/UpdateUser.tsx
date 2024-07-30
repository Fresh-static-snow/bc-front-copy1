import { useCallback, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useResentInvitation } from '@/entities/auth';
import { useGetRoleOptions } from '@/entities/role';
import {
  useGetUser,
  usePreDeleteUser,
  UserForm,
  UserFormSchema,
  useUpdateUser,
} from '@/entities/user';
import { useGetUserCompanyOptions } from '@/entities/user-company';
import { useGetUserDisciplineOptions } from '@/entities/user-discipline';
import { appendFormData, useCheckAccess, useToggle } from '@/shared/lib';
import { RelatedEventList } from '@/shared/ui/data-display';
import { CircularLoader, ConfirmationModal } from '@/shared/ui/feedback';
import { CollapsibleFormHeader } from '@/shared/ui/forms';
import { PrimaryButton } from '@/shared/ui/inputs';

import { CropUserAvatar } from '../CropUserAvatar/CropUserAvatar';
import * as S from './UpdateUser.styles';
import { UpdateUserProps } from './UpdateUser.types';

export const UpdateUser: React.FC<UpdateUserProps> = ({ userId, sendBackPath, deleteBackPath }) => {
  const [openConfirmationModal, setOpenConfirmationModal] = useToggle(false);
  const [extendedStatus, setExtendedStatus] = useToggle(false);
  const navigate = useNavigate();
  const checkAccess = useCheckAccess();

  const {
    data: userData,
    isFetching: isFetchingUserData,
    isSuccess: isSuccessUserData,
  } = useGetUser(userId);

  const defaultFormData = useMemo<UserFormSchema>(() => {
    if (!userData) {
      return {};
    }

    return {
      username: userData?.nick ?? '',
      firstName: userData?.first_name ?? '',
      lastName: userData?.last_name ?? '',
      avatar: userData?.avatar?.url ?? '',
      email: userData?.email ?? '',
      company: userData?.company
        ? { value: String(userData?.company?.id), label: userData?.company?.title }
        : undefined,
      disciplines: userData?.user_disciplines?.map(({ id, title }) => ({
        value: String(id),
        label: title,
      })),
      role:
        userData?.roles?.length > 0
          ? { value: String(userData?.roles?.[0]?.id), label: userData?.roles?.[0]?.title }
          : undefined,
      googleCalendar: userData?.google_calendar?.status ?? false,
    };
  }, [userData]);

  const { data: userDisciplines } = useGetUserDisciplineOptions();
  const { data: companies } = useGetUserCompanyOptions();
  const { data: roles } = useGetRoleOptions();

  const { mutateAsync: onUpdateUser, isLoading: isUpdateLoading } = useUpdateUser();
  const { mutateAsync: onPreDeleteUser, isLoading: isDeleteLoading } = usePreDeleteUser();
  const { mutateAsync: onResentInvitation } = useResentInvitation();

  const onSendData = useCallback(
    async (data: UserFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [
        { key: 'nick', value: data.username, options: { canBeEmpty: true } },
        { key: 'first_name', value: data.firstName, options: { canBeEmpty: true } },
        { key: 'last_name', value: data.lastName, options: { canBeEmpty: true } },
        { key: 'email', value: data.email, options: { canBeEmpty: true } },
        { key: 'company_id', value: data.company?.value, options: { canBeEmpty: true } },
        {
          key: 'user_discipline_ids[]',
          value: data.disciplines?.map((discipline) => discipline.value),
          options: { type: 'list', canBeEmpty: true },
        },
        { key: 'role_ids[]', value: data.role?.value, options: { canBeEmpty: true } },
        { key: 'google_calendar_status', value: String(data.googleCalendar) },
        { key: 'google_calendar_required', value: String(data.googleCalendar) },
      ]);

      await onUpdateUser({ id: userId, formData });

      if (sendBackPath) {
        navigate(sendBackPath);
      }
    },
    [navigate, onUpdateUser, sendBackPath, userId],
  );

  const onDelete = useCallback(async () => {
    await onPreDeleteUser({ id: userId, hide_history: false });

    if (deleteBackPath) {
      navigate(deleteBackPath);
    }
  }, [deleteBackPath, navigate, onPreDeleteUser, userId]);

  const onDeleteWithHistory = useCallback(async () => {
    await onPreDeleteUser({ id: userId, hide_history: true });

    if (deleteBackPath) {
      navigate(deleteBackPath);
    }
  }, [deleteBackPath, navigate, onPreDeleteUser, userId]);

  const onResentInvite = useCallback(async () => {
    await onResentInvitation({ id: userId });
  }, [onResentInvitation, userId]);

  useEffect(() => {
    setExtendedStatus(false);
  }, [userId, setExtendedStatus]);

  return (
    <S.Root>
      <ConfirmationModal
        isOpen={openConfirmationModal}
        isLoading={isUpdateLoading || isDeleteLoading}
        onClose={setOpenConfirmationModal}
        onConfirm={onDelete}
        title="Are you sure?"
        message="Would you like to remove this user?"
        confirmButtonLabel="Delete"
        withAdditionalButton={userData?.related_events?.length > 0}
        additionalButtonLabel="Delete with history"
        onClickAdditionalButton={onDeleteWithHistory}
        maxWidth="400px"
        additionalContent={
          <>
            {userData?.related_events?.length > 0 ? (
              <RelatedEventList
                title={`User participant in such events (${userData?.events_count}):`}
                content={userData?.related_events}
              />
            ) : (
              <RelatedEventList title="No related events" />
            )}
          </>
        }
      />

      {!isFetchingUserData && isSuccessUserData ? (
        <>
          <CollapsibleFormHeader
            AvatarComponent={
              <CropUserAvatar userData={userData} size="100px" fontSize="40px" buttonGap="5px" />
            }
            title={`${userData?.first_name} ${userData?.last_name}`}
            subtitle={<S.Nickname>{userData?.nick}</S.Nickname>}
            extendedStatus={extendedStatus}
            onChangeExtendedStatus={setExtendedStatus}
            onOpenConfirmationModal={
              checkAccess(['delete::/api/v1/users/:id']) ? setOpenConfirmationModal : () => {}
            }
          />

          <UserForm
            userDisciplineOptions={userDisciplines}
            companyOptions={companies}
            roleOptions={roles}
            fieldsDirection="column"
            footerType="secondary"
            defaultFormData={defaultFormData}
            disabledFields={
              checkAccess(['put::/api/v1/users/:id'])
                ? []
                : [
                    'username',
                    'firstName',
                    'lastName',
                    'email',
                    'company',
                    'disciplines',
                    'role',
                    'googleCalendar',
                  ]
            }
            hiddenFields={extendedStatus ? [] : ['username', 'firstName', 'lastName']}
            submitButtonLabel="Update"
            isLoading={isUpdateLoading || isDeleteLoading}
            onSendData={onSendData}
          />
          <div style={{ display: 'flex', gap: '8px' }}>
            <PrimaryButton label="Resent Invite" variant="outlined" onClick={onResentInvite} />
          </div>
        </>
      ) : (
        <CircularLoader size="24px" width="100%" padding="8px" />
      )}
    </S.Root>
  );
};
