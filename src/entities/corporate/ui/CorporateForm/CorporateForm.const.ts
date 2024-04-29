import { CorporateFormSchema } from './CorporateForm.types';

export const corporateFormDefaultValues: CorporateFormSchema = {
  date: undefined,
  time: [undefined, undefined],
  visible: true,
  anotherOne: false,
};
