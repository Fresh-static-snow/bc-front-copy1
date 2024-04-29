import {
  AutocompleteRenderGetTagProps,
  AutocompleteRenderInputParams,
  AutocompleteRenderOptionState,
  createFilterOptions,
  FilterOptionsState,
} from '@mui/material';
import { nanoid } from 'nanoid';
import { useCallback, useMemo, useState } from 'react';
import { useController } from 'react-hook-form';

import { IconCrossSvg } from '@/shared/assets';
import { useDeepCompareEffect } from '@/shared/lib';
import { PrimarySelectableValue } from '@/shared/types/values.types';
import { FieldErrorMessage } from '@/shared/ui/feedback/FieldErrorMessage/FieldErrorMessage';

import { OptionWithAutocompleteProps, OptionWithInputValue } from '../../types';
import { CustomChip } from '../CustomChip/CustomChip';
import { CustomOption } from '../CustomOption/CustomOption';
import { CustomPopup } from '../CustomPopup/CustomPopup';
import { CustomTextField } from '../CustomTextField/CustomTextField';
import { PopupIcon } from '../PopupIcon/PopupIcon';
import * as S from './AutocompleteMultiple.styles';
import { AutocompleteMultipleProps } from './AutocompleteMultiple.types';

const filter = createFilterOptions<OptionWithInputValue>();

/**
 * The component is used to select one or more options from a list.
 *
 * Component is intended to work only in conjunction with the React Hook Form.
 */
export const AutocompleteMultiple: React.FC<AutocompleteMultipleProps> = ({
  options,
  name,
  control,
  disabled,
  placeholder,
  AdditionalElement,
  CustomPopupIcon,
  popupIconColor,
  optionCheckbox,
  disablePopupIconRotation = false,
  withOptionCreation = false,
}) => {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue: [],
  });

  const [open, setOpen] = useState(false);
  // * If has no options and popup is open, then show loading indicator.
  const isLoading = useMemo(() => open && !options, [open, options]);

  const onOpenPopup = useCallback(() => {
    setOpen(true);
  }, []);

  const onClosePopup = useCallback(() => {
    setOpen(false);
  }, []);

  // * Callback fired when the value changes.
  const onChangeSelectValue = useCallback(
    (event: React.SyntheticEvent<Element, Event>, newValue: OptionWithInputValue[]) => {
      const newValueWithCreated = newValue?.map((value) => {
        // * If the "inputValue" property is present, then the user created a new option.
        if (value.inputValue) {
          return {
            value: value.value,
            label: value.inputValue,
          };
        }
        return value;
      });

      field.onChange(newValueWithCreated);
    },
    [field],
  );

  // * A function that determines the filtered options to be rendered on search.
  const onFilterOptions = useCallback(
    (filterOptions: PrimarySelectableValue[], params: FilterOptionsState<unknown>) => {
      const filtered = filter(filterOptions, params);

      // * If the option creation is enabled, then add the option to create a new value.
      if (withOptionCreation && !isLoading) {
        // * Suggest the creation of a new value.
        const isExisting = [...filterOptions, ...(field.value as PrimarySelectableValue[])].some(
          (option) => params.inputValue.trim() === option.label,
        );

        // * If there is no existing option, then add the new option.
        if (params.inputValue.trim() !== '' && !isExisting) {
          const id = nanoid();

          filtered.push({
            inputValue: params.inputValue.trim(),
            // * Mark the option as 'new_created_option' to distinguish it from existing options.
            value: `new_created_option_${id}`,
            label: `Add "${params.inputValue.trim()}"`,
          });
        }
      }

      return filtered;
    },
    [field.value, isLoading, withOptionCreation],
  );

  // * Used to determine if the option represents the given value. Uses strict equality by default.
  // * Both arguments need to be handled, an option can only match with one value.
  const onOptionEqualToValue = useCallback(
    (testOption: PrimarySelectableValue, testValue: PrimarySelectableValue) =>
      testOption?.value === testValue?.value && testOption?.label === testValue?.label,
    [],
  );

  // * Used to determine the string value for a given option.
  const onGetOptionLabel = useCallback((option: OptionWithInputValue) => {
    // * If the "inputValue" property is present, then use it as the label.
    if (option.inputValue) {
      return option.inputValue;
    }
    return option.label;
  }, []);

  // * Render custom input element of the component.
  const onRenderInput = useCallback(
    (params: AutocompleteRenderInputParams) => (
      <CustomTextField placeholder={placeholder} params={params} isLoading={isLoading} />
    ),
    [isLoading, placeholder],
  );

  // * Render custom option element of the component.
  const onRenderOption = useCallback(
    (
      props: React.HTMLAttributes<HTMLLIElement>,
      option: PrimarySelectableValue,
      { selected }: AutocompleteRenderOptionState,
    ) => (
      <CustomOption
        key={option.label + option.value}
        props={props}
        AdditionalElement={AdditionalElement}
        option={option}
        selected={selected}
        checkbox={optionCheckbox}
      />
    ),
    [AdditionalElement, optionCheckbox],
  );

  // * Render custom tag element of the component.
  const onRenderTag = useCallback(
    (tags: PrimarySelectableValue[], getTagProps: AutocompleteRenderGetTagProps) => {
      // * Add additional props to the tag element.
      const tagsWithProps = tags?.map((tag: PrimarySelectableValue, index: number) => ({
        ...tag,
        props: { ...getTagProps({ index }) },
      }));

      return tagsWithProps?.map((option: OptionWithAutocompleteProps) => (
        <CustomChip
          key={option.label}
          AdditionalElement={option?.additional ? AdditionalElement : undefined}
          option={option}
        />
      ));
    },
    [AdditionalElement],
  );

  useDeepCompareEffect(() => {
    if (options) {
      const updatedStates = (field?.value as PrimarySelectableValue[])?.map((currentValue) => {
        const updatedOption = options.find((option) => option.value === currentValue.value);
        return updatedOption ?? currentValue;
      });

      field.onChange(updatedStates);
    }
  }, [options]);

  return (
    <S.AutocompleteMultiple>
      <S.Autocomplete
        disabled={disabled}
        loading={isLoading}
        // * If true, value must be an array and the menu will support multiple selections.
        multiple
        // * If true, the popup won't close when a value is selected.
        disableCloseOnSelect
        // * The values of the autocomplete.
        value={field.value as PrimarySelectableValue[]}
        onBlur={field.onBlur}
        onOpen={onOpenPopup}
        onClose={onClosePopup}
        onChange={onChangeSelectValue}
        options={options || []}
        filterOptions={onFilterOptions}
        isOptionEqualToValue={onOptionEqualToValue}
        getOptionLabel={onGetOptionLabel}
        // * The component used to render the listbox.
        PopperComponent={CustomPopup}
        // * The component used to render popup indicator icon.
        popupIcon={CustomPopupIcon ? <CustomPopupIcon /> : <PopupIcon />}
        // * If `true`, the popup icon does not rotate when the popup is open.
        $disablePopupIconRotation={disablePopupIconRotation}
        // * The color of the popup icon.
        $popupIconColor={popupIconColor}
        // * The icon to display in place of the default clear icon.
        clearIcon={<IconCrossSvg />}
        renderInput={onRenderInput}
        renderOption={onRenderOption}
        renderTags={onRenderTag}
        // * If `true`, the component is in a error state.
        $error={!!fieldState?.error?.message}
        data-testid={`AutoCompleteInput-${name}`}
      />

      <FieldErrorMessage errorMessage={fieldState?.error?.message} />
    </S.AutocompleteMultiple>
  );
};
