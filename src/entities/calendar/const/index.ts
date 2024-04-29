import { customAlphabet } from 'nanoid';

import { Match, MatchCast } from '@/shared/types/entities.types';

import { ScheduleTitles } from '../types';

const nanoid = customAlphabet('1234567890', 10);

export const scheduleTitles: ScheduleTitles = {
  discipline: 'Discipline',
  tournament: 'Tournament',
  time: '',
  match: 'Match',
  studio: 'Studio',
  analytics: 'Commentators & Analytics',
  staff: 'Staff',
  channel: 'Channel',
  media: 'Main & Media',
};

export const matchDetailsItemEmpty: MatchCast = {
  id: +nanoid(),
  language: {
    id: +nanoid(),
    name: '',
    keyword: '',
  },
  studio: {
    id: +nanoid(),
    name: '',
    keyword: '',
  },
  analytic_studio: {
    id: +nanoid(),
    name: '',
    keyword: '',
  },
  channels: [
    {
      id: +nanoid(),
      name: '',
    },
  ],
  commentators: [],
  analytics: [],
  host_analytic: null,
  backup_commentator: null,
  staff_members: [],
};

export const matchItemEmpty: Match = {
  id: +nanoid(),
  start_time: '',
  team_one: '',
  team_two: '',
  end_time: '',
  start_date: '',
  format: '',
  visible: false,
  match_casts: [matchDetailsItemEmpty],
};

export const monthNames: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
