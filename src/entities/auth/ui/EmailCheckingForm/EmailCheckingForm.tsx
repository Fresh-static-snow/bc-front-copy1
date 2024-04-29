import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { PrimaryButton, PrimaryInput } from '@/shared/ui/inputs';
import { FormField } from '@/shared/ui/layouts';

import { emailSchema } from './EmailCheckingForm.schema';
import * as S from './EmailCheckingForm.styles';
import { EmailCheckingFormProps, EmailCheckingFormSchema } from './EmailCheckingForm.types';

export const EmailCheckingForm: React.FC<EmailCheckingFormProps> = ({
  additionalLinkText,
  additionalLinkPath,

  contentPaddings,
  fieldsDirection = 'row',
  isLoading,
  onSendData,
}) => {
  const { handleSubmit, reset, control } = useForm<EmailCheckingFormSchema>({
    resolver: yupResolver(emailSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<EmailCheckingFormSchema> = useCallback(
    async (data) => {
      await onSendData(data);
      reset();
    },
    [onSendData, reset],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Content $padding={contentPaddings}>
        <FormField direction={fieldsDirection} label="Enter your email address">
          <PrimaryInput name="email" control={control} />
        </FormField>

        {additionalLinkPath && additionalLinkText && (
          <S.AdditionalLink to={additionalLinkPath}>{additionalLinkText}</S.AdditionalLink>
        )}
      </S.Content>

      <S.Footer>
        <PrimaryButton
          type="submit"
          label="Send"
          variant="primary"
          padding="10px 20%"
          isLoading={isLoading}
        />
      </S.Footer>
    </form>
  );
};
