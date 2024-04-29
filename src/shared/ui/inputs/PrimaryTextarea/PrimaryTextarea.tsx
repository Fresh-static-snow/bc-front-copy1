import { memo, useEffect, useRef } from 'react';
import { useController } from 'react-hook-form';

import { FieldErrorMessage } from '@/shared/ui/feedback/FieldErrorMessage/FieldErrorMessage';

import * as S from './PrimaryTextarea.styles';
import { PrimaryTextareaProps } from './PrimaryTextarea.types';

/**
 * The primary application textarea.
 *
 * Component is intended to work only in conjunction with the React Hook Form.
 */
export const PrimaryTextarea: React.FC<PrimaryTextareaProps> = memo(
  ({ control, name, placeholder, disabled = false }) => {
    const { field, fieldState } = useController({ name, control, defaultValue: '' });

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // * The utility is needed to auto-size the component when you change the number of lines in the field.
    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = '0px';
        const { scrollHeight } = textareaRef.current;
        textareaRef.current.style.height = `${scrollHeight}px`;
      }
    }, [textareaRef?.current?.scrollHeight]);

    return (
      <S.Root data-testid="PrimaryTextarea">
        <S.Textarea
          value={field.value as string}
          onChange={field.onChange}
          onBlur={field.onBlur}
          ref={textareaRef}
          placeholder={placeholder}
          disabled={disabled}
          $error={!!fieldState?.error?.message}
        />

        <FieldErrorMessage errorMessage={fieldState?.error?.message} />
      </S.Root>
    );
  },
);
