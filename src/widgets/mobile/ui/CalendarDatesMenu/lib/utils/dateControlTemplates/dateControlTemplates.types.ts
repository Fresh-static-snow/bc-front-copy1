import { Dayjs } from 'dayjs';

import { DateControlSignature } from '../../../types';

export type DateControlTemplates = {
  [key: string]: (
    date?: Dayjs | [Dayjs, Dayjs],
    changeDateFunc?: (day: Dayjs | [Dayjs, Dayjs]) => void,
  ) => DateControlSignature;
};
