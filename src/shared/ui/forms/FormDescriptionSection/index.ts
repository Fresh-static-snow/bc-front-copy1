import { Section } from './ui/Section/Section';
import { sectionItem } from './ui/Section/Section.const';
import { sectionSchema } from './ui/Section/Section.schema';

export type { SectionSchema as FormDescriptionSectionSchema } from './ui/Section/Section.types';

export const FormDescriptionSection = {
  Section,
  schema: sectionSchema,
  item: sectionItem,
};
