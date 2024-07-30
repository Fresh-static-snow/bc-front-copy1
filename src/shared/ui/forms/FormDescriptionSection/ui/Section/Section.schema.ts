import * as Yup from 'yup';

import { SectionSchema } from './Section.types';

export const sectionSchema = Yup.array().of(
  Yup.object<SectionSchema>({
    title: Yup.string().test({
      name: 'description-block-title',
      message: 'Both fields must be filled',
      test: (value, { parent }) => {
        const { description } = parent as SectionSchema;
        if (value || description) {
          return !!value;
        }
        return true;
      },
    }),
    description: Yup.string().test({
      name: 'description-block-description',
      message: 'Both fields must be filled',
      test: (value, { parent }) => {
        const { title } = parent as SectionSchema;
        if (value || title) {
          return !!value;
        }
        return true;
      },
    }),
  }),
);
