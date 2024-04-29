import { ChannelNameWithParams } from '@rails/actioncable';
import { Updater } from '@tanstack/react-query';

export type UseWebSocketParams<DataType, MessageType> = {
  enabled: boolean;
  webSocketURL: string;
  subscriptionOptions: ChannelNameWithParams;
  queryKeys: string[];
  invalidationKeys?: string[];
  queryCallback: (message: MessageType) => Updater<DataType, DataType>;
};
