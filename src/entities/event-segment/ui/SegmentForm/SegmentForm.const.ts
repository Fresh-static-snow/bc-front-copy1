import { FormDescriptionSection } from '@/shared/ui/forms';

import { SegmentFormSchema } from './SegmentForm.types';

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

export const guestsItem = {
  name: '',
  username: '',
  social: '',
};

export const segmentFormDefaultValues: SegmentFormSchema = {
  date: undefined,
  time: [undefined, undefined],
  guests: [guestsItem],
  languages: [languageItem],
  descriptions: [FormDescriptionSection.item],
  medias: [FormDescriptionSection.item],
  visible: true,
  anotherOne: false,
};
