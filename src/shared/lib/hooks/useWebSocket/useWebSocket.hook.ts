import { Consumer, createConsumer } from '@rails/actioncable';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';

import { UseWebSocketParams } from './useWebSocket.types';

export const useWebSocket = <DataType, MessageType>({
  enabled,
  webSocketURL,
  subscriptionOptions,
  queryKeys,
  invalidationKeys,
  queryCallback,
}: UseWebSocketParams<DataType, MessageType>) => {
  const queryClient = useQueryClient();
  const consumer = useMemo<Consumer>(() => createConsumer(webSocketURL), [webSocketURL]);

  useEffect(() => {
    if (!enabled) {
      return () => {};
    }

    const subscription = consumer.subscriptions.create(subscriptionOptions ?? '', {
      connected: () => {
        console.log(`${webSocketURL} ${subscriptionOptions.channel} connected`);
      },
      received: (message: MessageType) => {
        queryKeys?.forEach((key) => {
          queryClient.setQueryData<DataType>([key], queryCallback(message));
        });

        if (invalidationKeys) {
          invalidationKeys?.forEach((key) => {
            queryClient.invalidateQueries([key]);
          });
        }
      },
    });

    return () => {
      console.log(`${webSocketURL} ${subscriptionOptions.channel} connected`);
      subscription.unsubscribe();
    };
  }, [enabled, webSocketURL]);
};
