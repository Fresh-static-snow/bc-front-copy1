import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { SubmitHandler, useController, useForm } from 'react-hook-form';

import { FormField } from '@/shared/ui/forms';
import { Checkbox, PrimaryButton, PrimaryInput } from '@/shared/ui/inputs';

import { loginSchema } from './LoginForm.schema';
import * as S from './LoginForm.styles';
import { LoginFormProps, LoginFormSchema } from './LoginForm.types';

export const LoginForm: React.FC<LoginFormProps> = ({
  additionalLinkText,
  additionalLinkPath,

  contentPaddings,
  fieldsDirection = 'row',
  disabledFields = [],
  hiddenFields = [],
  isLoading,
  onSendData,
}) => {
  const { handleSubmit, reset, control } = useForm<LoginFormSchema>({
    resolver: yupResolver(loginSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const { field: rememberMeCheckboxField } = useController({
    name: 'rememberMe',
    control,
    defaultValue: true,
  });

  const onSubmit: SubmitHandler<LoginFormSchema> = useCallback(
    async (data) => {
      await onSendData(data);
      reset();
    },
    [onSendData, reset],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Content $padding={contentPaddings}>
        <S.StaticFields $fieldsDirection={fieldsDirection}>
          {!hiddenFields.includes('email') && (
            <FormField direction={fieldsDirection} label="Email">
              <PrimaryInput
                name="email"
                control={control}
                disabled={disabledFields.includes('email')}
              />
            </FormField>
          )}

          {!hiddenFields.includes('password') && (
            <FormField direction={fieldsDirection} label="Password">
              <PrimaryInput
                name="password"
                control={control}
                type="password"
                disabled={disabledFields.includes('password')}
              />
            </FormField>
          )}

          {!hiddenFields.includes('rememberMe') && (
            <FormField direction={fieldsDirection} label="">
              <Checkbox
                checked={rememberMeCheckboxField.value}
                onChange={rememberMeCheckboxField.onChange}
                label="Remember me"
                disabled={disabledFields.includes('rememberMe')}
              />
            </FormField>
          )}
        </S.StaticFields>

        {additionalLinkPath && additionalLinkText && (
          <S.AdditionalLink to={additionalLinkPath}>{additionalLinkText}</S.AdditionalLink>
        )}
      </S.Content>

      <S.Footer>
        <PrimaryButton
          type="submit"
          label="SIGN IN"
          variant="primary"
          padding="10px 20%"
          isLoading={isLoading}
        />
      </S.Footer>
    </form>
  );
};
