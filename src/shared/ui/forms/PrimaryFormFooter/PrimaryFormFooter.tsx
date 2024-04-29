import { useController } from 'react-hook-form';

import { Checkbox } from '@/shared/ui/inputs/Checkbox/Checkbox';
import { PrimaryButton } from '@/shared/ui/inputs/PrimaryButton/PrimaryButton';
import { Switch } from '@/shared/ui/inputs/Switch/Switch';

import * as S from './PrimaryFormFooter.styles';
import { PrimaryFormFooterProps } from './PrimaryFormFooter.types';

export const PrimaryFormFooter: React.FC<PrimaryFormFooterProps> = ({
  control,
  disabledFields = [],
  hiddenFields = [],
  withDelete = false,
  checkBoxName = '',
  switchName = '',
  submitChecked,
  submitButtonLabel = 'Submit',
  isLoading,
  onClose = () => {},
  onClickDelete = () => {},
}) => {
  const { field: switchField } = useController({
    name: switchName,
    control,
    defaultValue: false,
  });
  const { field: checkBoxField } = useController({
    name: checkBoxName,
    control,
    defaultValue: false,
  });

  return (
    <S.Root>
      <S.AdditionalButtons>
        {switchName && !hiddenFields.includes(switchName) && (
          <Switch
            checked={switchField.value as boolean}
            onChange={switchField.onChange}
            label="Visible item"
            disabled={disabledFields.includes(switchName)}
          />
        )}

        {checkBoxName && !hiddenFields.includes(checkBoxName) && (
          <Checkbox
            checked={checkBoxField.value as boolean}
            onChange={checkBoxField.onChange}
            label="Create another one"
            disabled={disabledFields.includes(checkBoxName)}
          />
        )}
      </S.AdditionalButtons>

      <S.ControlButtons>
        {withDelete && (
          <PrimaryButton
            label="Delete"
            variant="secondary"
            onClick={onClickDelete}
            isLoading={isLoading}
          />
        )}

        <PrimaryButton onClick={onClose} label="Cancel" variant="secondary" />

        <PrimaryButton
          label={submitButtonLabel}
          variant="primary"
          disabled={!submitChecked}
          type="submit"
          isLoading={isLoading}
        />
      </S.ControlButtons>
    </S.Root>
  );
};
