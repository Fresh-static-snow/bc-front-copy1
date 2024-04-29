import { useLocation, useNavigate } from 'react-router-dom';

import { useCustomSearchParams } from '../useCustomSearchParams/useCustomSearchParams.hook';

export const useNavigateWithParams = (paramsArray?: string[]) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { paramsString } = useCustomSearchParams(paramsArray ?? []);

  const navigateWithParams = (path: string) => {
    if (paramsString) {
      navigate(`${path}?${paramsString}`);
      return;
    }

    navigate(path + location.search);
  };

  return navigateWithParams;
};
