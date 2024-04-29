export type ResponseData<T> = {
  success: boolean;
  data?: T;
};

export type AxiosErrorContent = {
  errors: string[];
};
