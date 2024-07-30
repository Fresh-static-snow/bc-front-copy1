import { DataObject, ValueOptions } from './appendFormData.types';

export const appendFormValue = (
  formData: FormData,
  key: string,
  value?: string | File | string[],
  options: ValueOptions = {},
): void => {
  const { type = 'simple', canBeEmpty = false } = options;

  if (type === 'list' && Array.isArray(value) && value.length) {
    value.forEach((elem) => {
      formData.append(key, elem);
    });
    return;
  }

  if (
    value &&
    !Array.isArray(value) &&
    (type === 'simple' || (type === 'file' && typeof value !== 'string'))
  ) {
    formData.append(key, value);
    return;
  }

  if (!(value instanceof File) && !value?.length && canBeEmpty) {
    formData.append(key, '');
  }
};

export const appendFormData = (formData: FormData, data: DataObject[]) => {
  data.forEach(({ key, value, options }) => {
    appendFormValue(formData, key, value, options);
  });
};
