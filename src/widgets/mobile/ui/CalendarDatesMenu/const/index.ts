import { SelectableValue } from '@/shared/types/values.types';

export const formatButtons: SelectableValue[] = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  // { value: 'month', label: 'Month' },
  { value: 'quarter', label: 'Quarter' },
  { value: 'year', label: 'Year' },
];

export const requestButtons: SelectableValue[] = [
  { value: 'discipline', label: 'Discipline' },
  { value: 'tournament', label: 'Event' },
  { value: 'match', label: 'Match' },
  { value: 'segment', label: 'Segment' },
  { value: 'corporate', label: 'Corporate' },
];

export const filterParams = [
  'game_discipline',
  'analytic_studio',
  'studio',
  'setup',
  'channel',
  'stream',
  'main_participants',
  'media_representatives',
  'commentators',
  'analytics',
  'staff_members',
];
