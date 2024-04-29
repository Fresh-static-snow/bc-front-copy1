import { useTheme } from '@emotion/react';
import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useCreateComment } from '@/entities/comment';
import { IconArrowUpCircle, IconFilePlusSvg, IconSmileSvg } from '@/shared/assets';
import { PrimaryButton } from '@/shared/ui/inputs';

import * as S from './CreateComment.styles';
import { CreateCommentProps } from './CreateComment.types';

export const CreateCommentMobile: React.FC<CreateCommentProps> = ({ entityType }) => {
  const theme = useTheme();
  const { id: eventId } = useParams();
  const [textareaValue, setTextareaValue] = useState('');

  const { mutate: onCreateComment } = useCreateComment();

  const onChangeTextareaValue = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  }, []);

  const onSendComment = useCallback(() => {
    if (!textareaValue) {
      return;
    }

    const formData = new FormData();

    formData.append('entity_type', entityType);
    formData.append('message', textareaValue);
    formData.append('entity_id', eventId);

    onCreateComment({ formData });

    setTextareaValue('');
  }, [textareaValue, entityType, eventId, onCreateComment]);

  return (
    <S.RootMobile>
      <S.IconButtons>
        <PrimaryButton
          IconComponent={IconSmileSvg}
          variant="custom"
          customStyles={{ iconColor: theme.appColors.primary_01, disabledOpacity: '0.3' }}
          padding="5px"
          disabled
          data-testid="mobile-comments-smiles-button"
        />
        <PrimaryButton
          IconComponent={IconFilePlusSvg}
          variant="custom"
          customStyles={{ iconColor: theme.appColors.primary_01, disabledOpacity: '0.3' }}
          padding="5px"
          disabled
          data-testid="mobile-comments-files-button"
        />
      </S.IconButtons>

      <S.TextareaMobile
        value={textareaValue}
        onChange={onChangeTextareaValue}
        data-testid="mobile-comments-textarea"
      />

      <PrimaryButton
        IconComponent={IconArrowUpCircle}
        variant="custom"
        customStyles={{ iconColor: theme.appColors.primary_01 }}
        padding="5px"
        onClick={onSendComment}
        data-testid="mobile-comments-send-button"
      />
    </S.RootMobile>
  );
};
