import dayjs from 'dayjs';
import { useCallback } from 'react';

import { CorporateForm, CorporateFormSchema, useCreateCorporate } from '@/entities/corporate';
import { useGetMainParticipantOptions, useGetParticipantCascadingOptions } from '@/entities/user';
import { appendFormData } from '@/shared/lib';

import { CreateCorporateProps } from './CreateCorporate.types';

export const CreateCorporate: React.FC<CreateCorporateProps> = ({ setEntityModal }) => {
  const { data: participantsOptions } = useGetParticipantCascadingOptions();
  const { data: mainParticipantsOptions } = useGetMainParticipantOptions();

  const { mutateAsync: onCreateCorporate, isLoading } = useCreateCorporate();

  const onSendData = useCallback(
    async (data: CorporateFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [
        { key: 'visible', value: String(data.visible) },
        { key: 'company_id', value: '1' },
        { key: 'name', value: data.name },
        { key: 'location', value: data.location },
        { key: 'cover', value: data.cover, options: { type: 'file' } },
        { key: 'start_at', value: `${dayjs(data.date).format('YYYY-MM-DD')} ${data.time[0]}` },
        {
          key: 'end_at',
          value: data.time?.[1]
            ? `${dayjs(data.date).format('YYYY-MM-DD')} ${data.time?.[1]}`
            : null,
        },
        { key: 'description', value: data.description },
        { key: 'main_participant_ids[]', value: data.main_participant?.value },
        {
          key: 'participant_ids[]',
          value: data.participants
            ?.filter((participant) => !!participant.parents?.length)
            .map((participant) => participant.value),
          options: { type: 'list' },
        },
      ]);

      await onCreateCorporate({ formData });
    },
    [onCreateCorporate],
  );

  return (
    <CorporateForm
      participantsOptions={participantsOptions}
      mainParticipantsOptions={mainParticipantsOptions}
      contentPaddings="30px"
      footerType="primary"
      submitButtonLabel="Create"
      isLoading={isLoading}
      onCloseModal={setEntityModal}
      onSendData={onSendData}
    />
  );
};
