import dayjs from 'dayjs';

import { PrimarySelectableValue } from '@/shared/types/values.types';

import { TournamentFormSchema } from './TournamentForm.types';

export const descriptionItem = { title: '', description: '' };

export const tournamentFormDefaultValues: TournamentFormSchema = {
  date: [dayjs().format(), undefined],
  descriptions: [descriptionItem],
  medias: [descriptionItem],
  visible: true,
  anotherOne: false,
};

export const tournamentTierList: PrimarySelectableValue[] = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
];
