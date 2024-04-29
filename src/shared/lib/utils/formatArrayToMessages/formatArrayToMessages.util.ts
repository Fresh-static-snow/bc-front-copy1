export const formatArrayToMessages = (data: string[], title?: string): string => {
  let formattedMessages = title ? `${title}\n\n` : '';

  if (Array.isArray(data)) {
    data?.forEach((message) => {
      formattedMessages += `${message}\n`;
    });
  }

  return formattedMessages;
};
