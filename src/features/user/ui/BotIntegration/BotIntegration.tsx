import { useSnackbar } from 'notistack';
import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useUpdateUser } from '@/entities/user';
import { useAuthStore } from '@/shared/model/auth/auth.store';

export const BotIntegration = () => {
  const navigate = useNavigate();

  const authedUser = useAuthStore((state) => state.authedUser);

  const { mutateAsync: updateUser } = useUpdateUser(true);

  const { chatId } = useParams();

  const { botPlatform } = useParams();

  const { enqueueSnackbar } = useSnackbar();

  const botFieldId = useMemo(() => {
    switch (botPlatform) {
      case 'telegram':
        return 'telegram_chat_id';
      case 'discord':
        return 'discord_user_id';
      default:
        return '';
    }
  }, [botPlatform]);

  useEffect(() => {
    const formData = new FormData();

    formData.append(botFieldId, chatId);

    updateUser({ id: authedUser?.id, formData });

    navigate('/', { state: { prevPath: `/${botPlatform}/${chatId}` } });

    enqueueSnackbar(`${botPlatform} bot has been attached successfuly`, { variant: 'success' });
  }, []);

  return null;
};
