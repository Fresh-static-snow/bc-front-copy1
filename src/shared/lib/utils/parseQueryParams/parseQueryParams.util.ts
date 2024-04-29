export const parseQueryParams = <T>(search: string): T => {
  const params = new URLSearchParams(search);
  const queryParams = {} as T;
  for (const [key, value] of params.entries()) {
    queryParams[key] = value;
  }
  return queryParams;
};
