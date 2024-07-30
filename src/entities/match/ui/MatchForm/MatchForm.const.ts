import { MatchFormSchema } from './MatchForm.types';

export const languageItem = {
  language: {
    value: '1',
    label: 'Ukrainian',
    additional: 'uk',
  },
  commentators: [],
  backup_commentators: [],
  analytics: [],
  host_analytic: null,
  studio: null,
  studio_analytics: null,
  setup: null,
  channels: [],
  stream: null,
  staff: [],
};

export const matchFormDefaultValues: MatchFormSchema = {
  date: undefined,
  time: [undefined, undefined],
  languages: [languageItem],
  visible: true,
  anotherOne: false,
};
