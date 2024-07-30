import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { EditorContent, EditorEvents, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import dayjs from 'dayjs';
import React, { useCallback, useEffect, useState } from 'react';
import { Control, FieldValues, useController } from 'react-hook-form';

import {
  IconBoldSvg,
  IconBulletListSvg,
  IconClearFormatingSvg,
  IconItalicSvg,
  IconLinkSvg,
  IconOrderedListSvg,
  IconRemoveLinkSvg,
  IconStrikeSvg,
  IconUnderlineSvg,
} from '@/shared/assets';
import { mobileMedia } from '@/shared/const';
import { useMediaQuery, useOs } from '@/shared/lib';
import { SelectableValue } from '@/shared/types/values.types';
import { FieldErrorMessage } from '@/shared/ui/feedback';
import { PrimaryButton } from '@/shared/ui/inputs';
import { headingButtons } from '@/shared/ui/inputs/TiptapEditor/TiptapEditor.const';
import { Hint } from '@/shared/ui/layouts';

import * as S from './TiptapEditor.styles';
import { ButtonsGroup } from './TiptapEditor.styles';
import { TiptapEditorProps } from './TiptapEditor.types';
import { HeadingDropDown } from './ui/HeadingDropDown/HeadingDropDown';

export const TiptapEditor: React.FC<TiptapEditorProps> = ({
  control,
  name,
  placeholder,
  disabled,
}) => {
  const isMobile = useMediaQuery(mobileMedia);
  const os = useOs();
  const { field, fieldState } = useController({ name, control, defaultValue: '' });
  const [headingValue, setHeadingValue] = useState<SelectableValue>({
    value: 'normal',
    label: 'Normal',
  });

  const updateHeadingValue = useCallback(({ editor }: EditorEvents['transaction']) => {
    if (editor.isActive('heading', { level: 1 })) {
      setHeadingValue({ value: '1', label: 'Heading 1' });
    } else if (editor.isActive('heading', { level: 2 })) {
      setHeadingValue({ value: '2', label: 'Heading 2' });
    } else if (editor.isActive('heading', { level: 3 })) {
      setHeadingValue({ value: '3', label: 'Heading 3' });
    } else {
      setHeadingValue({ value: 'normal', label: 'Normal' });
    }
  }, []);

  const editorSignature = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
        blockquote: false,
        horizontalRule: false,
        hardBreak: false,
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Link,
      Underline,
      TextStyle,
      Placeholder.configure({
        placeholder,
      }),
    ],
    content: field.value as string,
    onUpdate: ({ editor }) => {
      field.onChange(editor.getHTML());
    },
    editable: !disabled,
    onTransaction: (data) => {
      updateHeadingValue(data);
    },
  });

  const onChangeHeadingValue = (newValue: SelectableValue) => {
    if (newValue.value === 'normal') {
      editorSignature.chain().focus().setParagraph().run();
    } else {
      editorSignature
        .chain()
        .focus()
        .toggleHeading({ level: +newValue.value as 1 | 2 | 3 })
        .run();
    }
    setHeadingValue(newValue);
  };

  return (
    <S.Root $error={!!fieldState?.error?.message} data-testid="TiptapEditor">
      {editorSignature && (
        <S.Toolbar>
          <S.ButtonsGroup>
            <Hint
              HintContent={`Heading | ${
                os === 'macos' ? 'Cmd + Opt + 0 / 1 / 2 / 3' : 'Control + Alt + 0 / 1 / 2 / 3'
              }`}
              disabled={isMobile}
              enterDelay={500}
            >
              <div>
                <HeadingDropDown
                  value={headingValue}
                  setValue={onChangeHeadingValue}
                  buttons={headingButtons}
                />
              </div>
            </Hint>
          </S.ButtonsGroup>

          <S.ButtonsGroup>
            <Hint
              HintContent={`Bold | ${os === 'macos' ? 'Cmd + B' : 'Control + B'}`}
              disabled={isMobile}
              enterDelay={500}
            >
              <div>
                <PrimaryButton
                  IconComponent={IconBoldSvg}
                  variant={editorSignature.isActive('bold') ? 'secondary' : 'base'}
                  padding="5px"
                  onClick={() => editorSignature.chain().focus().toggleBold().run()}
                />
              </div>
            </Hint>

            <Hint
              HintContent={`Italicize | ${os === 'macos' ? 'Cmd + I' : 'Control + I'}`}
              disabled={isMobile}
              enterDelay={500}
            >
              <div>
                <PrimaryButton
                  IconComponent={IconItalicSvg}
                  variant={editorSignature.isActive('italic') ? 'secondary' : 'base'}
                  padding="5px"
                  onClick={() => editorSignature.chain().focus().toggleItalic().run()}
                />
              </div>
            </Hint>

            <Hint
              HintContent={`Underline | ${os === 'macos' ? 'Cmd + U' : 'Control + U'}`}
              disabled={isMobile}
              enterDelay={500}
            >
              <div>
                <PrimaryButton
                  IconComponent={IconUnderlineSvg}
                  variant={editorSignature.isActive('underline') ? 'secondary' : 'base'}
                  padding="5px"
                  onClick={() => editorSignature.chain().focus().toggleUnderline().run()}
                />
              </div>
            </Hint>

            <Hint
              HintContent={`Strikethrough | ${
                os === 'macos' ? 'Cmd + Shift + S' : 'Control + Shift + S'
              }`}
              disabled={isMobile}
              enterDelay={500}
            >
              <div>
                <PrimaryButton
                  IconComponent={IconStrikeSvg}
                  variant={editorSignature.isActive('strike') ? 'secondary' : 'base'}
                  padding="5px"
                  onClick={() => editorSignature.chain().focus().toggleStrike().run()}
                />
              </div>
            </Hint>
          </S.ButtonsGroup>

          <S.ButtonsGroup>
            <Hint
              HintContent={`Bullet list | ${
                os === 'macos' ? 'Cmd + Shift + 8' : 'Control + Shift + 8'
              }`}
              disabled={isMobile}
              enterDelay={500}
            >
              <div>
                <PrimaryButton
                  IconComponent={IconBulletListSvg}
                  variant={editorSignature.isActive('bulletList') ? 'secondary' : 'base'}
                  padding="5px"
                  onClick={() => editorSignature.chain().focus().toggleBulletList().run()}
                />
              </div>
            </Hint>

            <Hint
              HintContent={`Ordered list | ${
                os === 'macos' ? 'Cmd + Shift + 7' : 'Control + Shift + 7'
              }`}
              disabled={isMobile}
              enterDelay={500}
            >
              <div>
                <PrimaryButton
                  IconComponent={IconOrderedListSvg}
                  variant={editorSignature.isActive('orderedList') ? 'secondary' : 'base'}
                  padding="5px"
                  onClick={() => editorSignature.chain().focus().toggleOrderedList().run()}
                />
              </div>
            </Hint>

            <PrimaryButton
              IconComponent={IconLinkSvg}
              variant="base"
              padding="5px"
              onClick={() => {
                const url = prompt('Enter the URL');
                if (url) {
                  editorSignature.chain().focus().setLink({ href: url }).run();
                }
              }}
            />

            <PrimaryButton
              IconComponent={IconRemoveLinkSvg}
              variant="base"
              padding="5px"
              onClick={() => editorSignature.chain().focus().unsetLink().run()}
            />

            <PrimaryButton
              IconComponent={IconClearFormatingSvg}
              variant="base"
              padding="5px"
              onClick={() => editorSignature.chain().focus().clearNodes().unsetAllMarks().run()}
            />
          </S.ButtonsGroup>
        </S.Toolbar>
      )}

      <EditorContent editor={editorSignature} />

      <FieldErrorMessage errorMessage={fieldState?.error?.message} />
    </S.Root>
  );
};
