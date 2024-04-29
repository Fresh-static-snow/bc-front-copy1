import { Field } from './getRealFormFieldIndex.types';

export const getRealFormFieldIndex = (fields: Field[], currentField: Field) => {
  const realIndex = fields.findIndex((item) => item.id === currentField.id);
  return realIndex;
};
