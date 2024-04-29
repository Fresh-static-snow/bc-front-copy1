import { MatchFormSchema } from './MatchForm.types';

export const languageItem = {
  language: {
    value: '1',
    label: 'Ukrainian',
    additional: 'uk',
  },
  studio: null,
  studio_analytics: null,
  channel: null,
  commentators: [],
  analytics: [],
  staff: [],
};

export const matchFormDefaultValues: MatchFormSchema = {
  date: undefined,
  time: [undefined, undefined],
  languages: [languageItem],
  visible: true,
  anotherOne: false,
};
