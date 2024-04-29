import dayjs from 'dayjs';
import { useCallback } from 'react';

import { useGetGameDisciplineOptions } from '@/entities/game-discipline';
import { useGetRegionOptions } from '@/entities/region';
import { useGetSponsorOptions } from '@/entities/sponsor';
import {
  TournamentForm,
  TournamentFormSchema,
  useCreateTournament,
  useGetTournamentTypeOptions,
} from '@/entities/tournament';
import {
  useGetMainParticipantOptions,
  useGetManagerOptions,
  useGetMediaRepresentativeOptions,
} from '@/entities/user';
import { appendFormData } from '@/shared/lib';

import { CreateTournamentProps } from './CreateTournament.types';

export const CreateTournament: React.FC<CreateTournamentProps> = ({ setEntityModal }) => {
  const { data: disciplineOptions } = useGetGameDisciplineOptions();
  const { data: mainParticipantsOptions } = useGetMainParticipantOptions();
  const { data: mediaRepresentativeOptions } = useGetMediaRepresentativeOptions();
  const { data: regionsOptions } = useGetRegionOptions();
  const { data: typesOptions } = useGetTournamentTypeOptions();
  const { data: sponsorsOptions } = useGetSponsorOptions();
  const { data: ownersOptions } = useGetManagerOptions();

  const { mutateAsync: onCreateTournament, isLoading } = useCreateTournament();

  const onSendData = useCallback(
    async (data: TournamentFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [
        { key: 'visible', value: String(data.visible) },
        { key: 'game_discipline_id', value: data.discipline?.value },
        { key: 'title', value: data.name },
        { key: 'main_participant_ids[]', value: data.main_participant?.value },
        { key: 'media_representative_ids[]', value: data.media_representative?.value },
        { key: 'start_at', value: dayjs(data.date[0]).format('YYYY-MM-DD') },
        { key: 'end_at', value: dayjs(data.date[1]).format('YYYY-MM-DD') },
        { key: 'region_id', value: data.region?.value },
        { key: 'type_id', value: data.type?.value },
        { key: 'top', value: data.tier?.value },
        { key: 'owner_id', value: data.owner?.value },
        { key: 'cover', value: data.cover, options: { type: 'file' } },

        ...(data.sponsors ?? []).map((sponsor, index) =>
          sponsor?.value?.includes('new_created_option')
            ? { key: `sponsors_attributes[${index}][name]`, value: sponsor?.label }
            : { key: `sponsor_ids[]`, value: sponsor?.value },
        ),

        ...(data.descriptions ?? []).flatMap((description, index) => [
          {
            key: `descriptions_attributes[${index}][title]`,
            value: description?.title,
          },
          {
            key: `descriptions_attributes[${index}][description]`,
            value: description?.description,
          },
        ]),

        ...(data.medias ?? []).flatMap((media, index) => [
          {
            key: `media_attributes[${index}][title]`,
            value: media?.title,
          },
          {
            key: `media_attributes[${index}][description]`,
            value: media?.description,
          },
        ]),
      ]);

      await onCreateTournament({ formData });
    },
    [onCreateTournament],
  );

  return (
    <TournamentForm
      disciplineOptions={disciplineOptions}
      mainParticipantsOptions={mainParticipantsOptions}
      mediaRepresentativeOptions={mediaRepresentativeOptions}
      regionsOptions={regionsOptions}
      typesOptions={typesOptions}
      sponsorsOptions={sponsorsOptions}
      ownersOptions={ownersOptions}
      hiddenFields={['type']}
      contentPaddings="30px"
      footerType="primary"
      submitButtonLabel="Create"
      isLoading={isLoading}
      onSendData={onSendData}
      onCloseModal={setEntityModal}
    />
  );
};
