import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useCreateComment } from '@/entities/comment';
import { PrimaryButton } from '@/shared/ui/inputs';

import * as S from './CreateComment.styles';
import { CreateCommentProps } from './CreateComment.types';

export const CreateComment: React.FC<CreateCommentProps> = ({ entityType }) => {
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
    <S.Root>
      <S.Textarea
        value={textareaValue}
        onChange={onChangeTextareaValue}
        data-testid="Comments-textarea"
      />

      <S.TextareaAdditional>
        <S.IconButtons>
          {/* <PrimaryButton variant="secondary" IconComponent={IconSmileSvg} padding="5px" /> */}
          {/* <PrimaryButton variant="secondary" IconComponent={IconFilePlusSvg} padding="5px" /> */}
        </S.IconButtons>

        <PrimaryButton label="Send" variant="primary" onClick={onSendComment} />
      </S.TextareaAdditional>
    </S.Root>
  );
};
