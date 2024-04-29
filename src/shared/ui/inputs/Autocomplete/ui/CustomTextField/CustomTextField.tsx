import { TextField } from '@mui/material';
import { useMemo } from 'react';

import { CircularLoader } from '@/shared/ui/feedback';

import { SingleStartAdornment } from '../SingleStartAdornment/SingleStartAdornment';
import { CustomTextFieldProps } from './CustomTextField.types';

export const CustomTextField: React.FC<CustomTextFieldProps> = ({
  params,
  placeholder,
  AdditionalElement,
  option,
  isLoading,
}) => {
  // * If the `AdditionalElement` is passed and the option is selected, then we need to add the `AdditionalElement` to the start of the input.
  const fieldParams = useMemo(
    () =>
      AdditionalElement && option?.value
        ? {
            ...params,
            InputProps: {
              ...params.InputProps,
              startAdornment: (
                <SingleStartAdornment AdditionalElement={AdditionalElement} option={option} />
              ),
            },
          }
        : params,
    [AdditionalElement, params, option],
  );

  return (
    <TextField
      // * `params` is the `TextField` props from `useAutocomplete` hook.
      {...fieldParams}
      variant="outlined"
      placeholder={placeholder}
      // * If the `isLoading` is true, then we need to add the `CircularLoader` to the end of the input.
      InputProps={{
        ...fieldParams.InputProps,
        endAdornment: (
          <>
            {isLoading ? <CircularLoader /> : null}
            {fieldParams.InputProps.endAdornment}
          </>
        ),
      }}
    />
  );
};
