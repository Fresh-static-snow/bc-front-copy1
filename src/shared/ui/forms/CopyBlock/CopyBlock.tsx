import { IconClipboardSvg, IconCopySvg } from '@/shared/assets';

import { PrimaryButton } from '../../inputs';
import * as S from './CopyBlock.styles';
import { CopyBlockProps } from './CopyBlock.types';

export const CopyBlock: React.FC<CopyBlockProps> = ({
  children,
  title,
  copyButtonDisabled,
  pasteButtonDisabled,
  onCopy,
  onPaste,
}) => (
  <S.Root>
    <S.Title>
      {title}

      <S.ButtonsWrapper>
        <PrimaryButton
          label="Copy"
          variant="secondary"
          IconComponent={IconCopySvg}
          disabled={copyButtonDisabled}
          onClick={onCopy}
        />
        <PrimaryButton
          label="Paste"
          variant="secondary"
          IconComponent={IconClipboardSvg}
          disabled={pasteButtonDisabled}
          onClick={onPaste}
        />
      </S.ButtonsWrapper>
    </S.Title>

    <S.Content>{children}</S.Content>
  </S.Root>
);
