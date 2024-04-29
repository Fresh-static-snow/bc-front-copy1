import {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteRenderGetTagProps,
  AutocompleteRenderInputParams,
  AutocompleteRenderOptionState,
} from '@mui/material';
import { Fragment, useCallback, useMemo, useState } from 'react';
import { useController } from 'react-hook-form';

import { IconCrossSvg } from '@/shared/assets';
import { CascaderMixedValue, CascaderSubValue } from '@/shared/types/values.types';
import { FieldErrorMessage } from '@/shared/ui/feedback';

import { OptionWithAutocompleteProps } from '../../types';
import { CascaderOption } from '../CascaderOption/CascaderOption';
import { CustomChip } from '../CustomChip/CustomChip';
import { CustomOption } from '../CustomOption/CustomOption';
import { CustomPopup } from '../CustomPopup/CustomPopup';
import { CustomTextField } from '../CustomTextField/CustomTextField';
import { PopupIcon } from '../PopupIcon/PopupIcon';
import * as S from './AutocompleteCascader.styles';
import { AutocompleteCascaderProps } from './AutocompleteCascader.types';

/**
 * The component is used to select one or more options from a list or sub list.
 *
 * Component is intended to work only in conjunction with the React Hook Form.
 */
export const AutocompleteCascader: React.FC<AutocompleteCascaderProps> = ({
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
}) => {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue: [],
  });

  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  // * If has no options and popup is open, then show loading indicator.
  const isLoading = useMemo(() => open && !options, [open, options]);
  // * The primary options or main layer of the cascader options.
  const primaryOptions = useMemo(() => {
    if (Array.isArray(options)) {
      return options;
    }
    return [];
  }, [options]);
  // * The sub options or sub layer of the cascader options.
  const subOptions = useMemo(() => {
    const uniqueValues = [] as CascaderSubValue[];
    (options?.flatMap((option) => option?.children ?? []) ?? []).forEach((subOption) => {
      if (!uniqueValues.find((value) => value.value === subOption.value)) {
        uniqueValues.push(subOption);
      }
    });

    return uniqueValues;
  }, [options]);

  const onOpenPopup = useCallback(() => {
    setOpen(true);
  }, []);

  const onClosePopup = useCallback(() => {
    setOpen(false);
  }, []);

  // * Callback fired when the input value changes.
  const onChangeInputValue = useCallback(
    (event: React.SyntheticEvent<Element, Event>, value: string) => {
      setInputValue(value);
    },
    [],
  );

  // * Callback fired when new primary option is added.
  const onAddPrimaryOption = useCallback(
    (selectedOption: CascaderMixedValue) => {
      // * Get current values from field.
      const currentMixedValues = field.value as CascaderMixedValue[];

      // * Get all sub options from selected option.
      const subOptionList = selectedOption?.children?.filter(
        (subOption) => !currentMixedValues.find((option) => option.value === subOption.value),
      );

      // * Check all primary options by checked sub options.
      const primaryOptionList = primaryOptions
        .filter((option) => !currentMixedValues.find((value) => value.value === option.value))
        .filter((option) =>
          option?.children?.every((subOption) =>
            [...currentMixedValues, ...subOptionList].find(
              (value) => value.value === subOption.value,
            ),
          ),
        );

      // * Add selected option and sub options to field.
      field.onChange([...currentMixedValues, ...primaryOptionList, ...subOptionList]);
    },
    [field, primaryOptions],
  );

  // * Callback fired when primary option is removed.
  const onRemovePrimaryOption = useCallback(
    (selectedOption: CascaderMixedValue) => {
      // * Get current values from field.
      const currentMixedValues = field.value as CascaderMixedValue[];

      // * Get all removed sub options from selected option.
      const removedSubOptionList = currentMixedValues.filter((option) =>
        option.parents?.includes(selectedOption.value),
      );

      // * Remove selected option and sub options from field.
      const newValues = currentMixedValues.filter(
        (option) =>
          !(
            option.value === selectedOption.value ||
            option.parents?.includes(selectedOption.value) ||
            option.children?.some((subOption) =>
              removedSubOptionList.find((value) => value.value === subOption.value),
            )
          ),
      );

      field.onChange(newValues);
    },
    [field],
  );

  // * Callback fired when sub option is added.
  const onAddSubOption = useCallback(
    (selectedOption: CascaderSubValue) => {
      // * Get current values from field.
      const currentMixedValues = field.value as CascaderMixedValue[];

      // * Combine current values with selected option.
      const newValues = [...currentMixedValues, selectedOption];

      // * Filter all primary options by sub options.
      const primaryOptionList = primaryOptions
        .filter((option) => !currentMixedValues.find((value) => value.value === option.value))
        .filter((option) =>
          option?.children?.every((subOption) =>
            newValues.find((value) => value.value === subOption.value),
          ),
        );

      field.onChange([...newValues, ...primaryOptionList]);
    },
    [field, primaryOptions],
  );

  // * Callback fired when sub option is removed.
  const onRemoveSubOption = useCallback(
    (selectedOption: CascaderSubValue) => {
      // * Get current values from field.
      const currentMixedValues = field.value as CascaderMixedValue[];

      // * Remove selected option and sub options from field.
      const newValues = currentMixedValues.filter(
        (option) =>
          !(
            option.value === selectedOption.value ||
            option.children?.find((subOption) => subOption.value === selectedOption.value)
          ),
      );

      field.onChange(newValues);
    },
    [field],
  );

  // * The callback controller fires when primary option is added or removed.
  const onChangePrimaryOptions = useCallback(
    (
      event: React.SyntheticEvent<Element, Event>,
      newValue: CascaderMixedValue[],
      reason: AutocompleteChangeReason,
      details: AutocompleteChangeDetails<CascaderMixedValue>,
    ) => {
      switch (reason) {
        case 'selectOption': {
          // * If option has children, then add primary option.
          if (details.option.children) {
            onAddPrimaryOption(details.option);
            break;
          }
          // * If option has parent, then add sub option.
          if (details.option.parents) {
            onAddSubOption(details.option);
            break;
          }
          break;
        }
        case 'removeOption': {
          onRemovePrimaryOption(details.option);
          break;
        }
        case 'clear': {
          field.onChange([]);
          break;
        }
      }
    },
    [field, onAddPrimaryOption, onAddSubOption, onRemovePrimaryOption],
  );

  // * The callback controller fires when sub option is added or removed.
  const onChangeSubOptions = useCallback(
    (subOption: CascaderSubValue, selected: boolean) => {
      // * If sub option is selected, then remove sub option.
      if (selected) {
        onRemoveSubOption(subOption);
      } else {
        onAddSubOption(subOption);
      }
    },
    [onAddSubOption, onRemoveSubOption],
  );

  // * Used to determine the disabled state for a given option.
  const onGetOptionDisabled = useCallback(
    (option: CascaderMixedValue) => !!option.parents && !inputValue,
    [inputValue],
  );

  // * Used to determine if the option represents the given value. Uses strict equality by default.
  // * Both arguments need to be handled, an option can only match with one value.
  const onOptionEqualToValue = useCallback(
    (testOption: CascaderSubValue, testValue: CascaderSubValue) =>
      testOption?.value === testValue?.value && testOption?.label === testValue?.label,
    [],
  );

  // * Used to determine the string value for a given option.
  const onGetOptionLabel = useCallback((option: CascaderSubValue) => option.label, []);

  // * Render custom input element of the component.
  const onRenderInput = useCallback(
    (params: AutocompleteRenderInputParams) => (
      <CustomTextField placeholder={placeholder} params={params} isLoading={isLoading} />
    ),
    [isLoading, placeholder],
  );

  // * Render custom option element of the component with
  const onRenderOption = useCallback(
    (
      props: React.HTMLAttributes<HTMLLIElement>,
      option: CascaderMixedValue,
      { selected }: AutocompleteRenderOptionState,
    ) =>
      // * If option has parent, then render sub option. Otherwise render primary option.
      option.parents ? (
        <CustomOption
          key={option.value + option.label}
          props={props}
          AdditionalElement={AdditionalElement}
          option={option}
          selected={selected}
          checkbox={optionCheckbox}
        />
      ) : (
        <Fragment key={option.label}>
          {
            // * If we have no input value, then render only primary options with sub options tooltips.
            // * Otherwise render all mixed options without tooltips.
            !inputValue ? (
              <CascaderOption
                props={props}
                AdditionalElement={AdditionalElement}
                option={option}
                selected={selected}
                checkbox={optionCheckbox}
                activeOptions={field.value as CascaderMixedValue[]}
                onChangeSubOptions={onChangeSubOptions}
              />
            ) : (
              <CustomOption
                props={props}
                option={option}
                selected={selected}
                checkbox={optionCheckbox}
              />
            )
          }
        </Fragment>
      ),
    [AdditionalElement, field.value, inputValue, onChangeSubOptions, optionCheckbox],
  );

  // * Render custom tags element of the component.
  const onRenderTags = useCallback(
    (tags: CascaderMixedValue[], getTagProps: AutocompleteRenderGetTagProps) => {
      // * Add additional props to the tag element.
      const tagsWithProps = tags?.map((tag: CascaderMixedValue, index: number) => ({
        ...tag,
        props: { ...getTagProps({ index }) },
      }));

      // * Filter all tags by children.
      const parentsTags = tagsWithProps.filter((tag) => tag.children);
      // * Filter all tags by parent.
      const subTags = tagsWithProps.filter(
        (tag) =>
          !tag.children && !parentsTags.find((parentTag) => tag.parents?.includes(parentTag.value)),
      );

      // * Render all tags. First render parents tags, then sub tags.
      return [...parentsTags, ...subTags]?.map((option: OptionWithAutocompleteProps) => (
        <CustomChip
          key={option.value + option.label}
          AdditionalElement={option?.additional ? AdditionalElement : undefined}
          option={option}
        />
      ));
    },
    [AdditionalElement],
  );

  return (
    <S.AutocompleteCascader>
      <S.Autocomplete
        disabled={disabled}
        loading={isLoading}
        // * If true, value must be an array and the menu will support multiple selections.
        multiple
        // * If true, the popup won't close when a value is selected.
        disableCloseOnSelect
        // * The maximum number of tags that will be visible when not focused.
        limitTags={2}
        // * The values of the autocomplete.
        value={field.value as CascaderMixedValue[]}
        onBlur={field.onBlur}
        onChange={onChangePrimaryOptions}
        inputValue={inputValue}
        onInputChange={onChangeInputValue}
        onOpen={onOpenPopup}
        onClose={onClosePopup}
        // * The options and sub options to display in the list.
        options={[...primaryOptions, ...subOptions]}
        getOptionDisabled={onGetOptionDisabled}
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
        renderTags={onRenderTags}
        // * If `true`, the component is in a error state.
        $error={!!fieldState?.error?.message}
        data-testid="AutoCompleteInput-test"
      />

      <FieldErrorMessage errorMessage={fieldState?.error?.message} />
    </S.AutocompleteCascader>
  );
};
