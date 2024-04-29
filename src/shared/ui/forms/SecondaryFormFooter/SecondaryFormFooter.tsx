import { PrimaryButton } from '@/shared/ui/inputs/PrimaryButton/PrimaryButton';

import * as S from './SecondaryFormFooter.styles';
import { SecondaryFormFooterProps } from './SecondaryFormFooter.types';

export const SecondaryFormFooter: React.FC<SecondaryFormFooterProps> = ({
  isDirty,
  CustomComponent,
  withDelete,
  submitButtonLabel = 'Submit',
  isLoading,
  onClickDelete = () => {},
  onReset = () => {},
}) => (
  <>
    {(isDirty || withDelete || CustomComponent) && (
      <S.Root>
        <div>
          {CustomComponent && <>{CustomComponent}</>}

          {withDelete && (
            <PrimaryButton
              label="Delete"
              variant="secondary"
              onClick={onClickDelete}
              isLoading={isLoading}
            />
          )}
        </div>

        {isDirty && (
          <S.FormControl>
            <PrimaryButton
              label="Reset changes"
              variant="secondary"
              onClick={onReset}
              isLoading={isLoading}
            />
            <PrimaryButton
              type="submit"
              label={submitButtonLabel}
              variant="primary"
              isLoading={isLoading}
            />
          </S.FormControl>
        )}
      </S.Root>
    )}
  </>
);
