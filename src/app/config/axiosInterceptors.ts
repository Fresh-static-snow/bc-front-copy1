import { AxiosError, AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { useAuthStore } from '@/shared/model/auth/auth.store';

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error?.response?.status === 401 && window.location.pathname !== '/login') {
      useAuthStore.getState().setAuthedUser(undefined);
      useAuthStore.getState().setAuthPermissions(undefined);
    }
    throw error;
  },
);
