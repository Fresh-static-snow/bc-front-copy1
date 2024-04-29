import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { UseCustomSearchParams } from './useCustomSearchParams.types';

export const useCustomSearchParams = (paramsArray: string[]): UseCustomSearchParams => {
  const [searchParams, setSearchParams] = useSearchParams();

  // * Parses single parameters from the URL and stores them in 'params'
  const parsedSearchParams = useMemo(
    () =>
      paramsArray.reduce((acc, param) => {
        const paramValue = searchParams.get(param);

        if (paramValue) {
          return {
            ...acc,
            [param]: paramValue,
          };
        }

        return acc;
      }, {} as Record<string, string>),
    [paramsArray, searchParams],
  );

  // * Parses parameters that can have multiple values (arrays) from the URL and stores them in 'arrayParams'
  const parsedSearchArrayParams = useMemo(
    () =>
      paramsArray.reduce((acc, param) => {
        const paramValues = searchParams.get(param);

        if (paramValues) {
          // * Join the array values into a comma-separated string
          const formattedValue = paramValues.split(',');

          return {
            ...acc,
            [param]: formattedValue,
          };
        }

        return acc;
      }, {} as Record<string, string[]>),
    [paramsArray, searchParams],
  );

  // * Parses the search params into a string
  const searchParamsString = useMemo(
    () =>
      paramsArray.reduce((acc, param, index) => {
        const paramValue = searchParams.get(param);

        if (paramValue) {
          if (index === paramsArray.length - 1) {
            return `${acc + param}=${paramValue}`;
          }
          return `${acc + param}=${paramValue}&`;
        }

        return acc;
      }, ''),
    [paramsArray, searchParams],
  );

  // * Sets a single parameter in the URL
  const setParam = useCallback(
    (param: string, value: string, replace?: boolean) => {
      if (!paramsArray.includes(param)) {
        return;
      }

      setSearchParams(
        (currentParams) => {
          currentParams.set(param, value);
          return currentParams;
        },
        { replace },
      );
    },
    [paramsArray, setSearchParams],
  );

  // * Sets an array parameter in the URL
  const updateArrayParamValue = useCallback(
    (param: string, value: string, replace?: boolean) => {
      if (!paramsArray.includes(param)) {
        return;
      }

      setSearchParams(
        (currentParams) => {
          const currentParamValue = currentParams.get(param) ?? '';

          // * Separate the current value and the new value with a comma if the current value is not empty
          const updatedParamValue = currentParamValue ? `${currentParamValue},${value}` : value;

          currentParams.set(param, updatedParamValue);
          return currentParams;
        },
        { replace },
      );
    },
    [paramsArray, setSearchParams],
  );

  // * Sets an array parameters in the URL
  const setArrayParams = useCallback(
    (param: string, values: string[], replace?: boolean) => {
      if (!paramsArray.includes(param)) {
        return;
      }

      setSearchParams(
        (currentParams) => {
          currentParams.set(param, values.join(','));
          return currentParams;
        },
        { replace },
      );
    },
    [paramsArray, setSearchParams],
  );

  // * Removes a single parameter from the URL
  const removeParam = useCallback(
    (param: string, replace?: boolean) => {
      if (!paramsArray.includes(param)) {
        return;
      }

      setSearchParams(
        (currentParams) => {
          currentParams.delete(param);
          return currentParams;
        },
        { replace },
      );
    },
    [paramsArray, setSearchParams],
  );

  // * Removes a single value from an array parameter in the URL
  const removeArrayParam = useCallback(
    (param: string, value: string, replace?: boolean) => {
      if (!paramsArray.includes(param)) {
        return;
      }

      setSearchParams(
        (currentParams) => {
          const currentParamValue = currentParams.get(param) ?? '';

          // * Split the current value into an array
          const currentParamValues = currentParamValue.split(',');

          // * Filter out the selected value from the array
          const updatedParamValues = currentParamValues.filter((val) => val !== value);

          // * Update the parameter if there are remaining values, or delete it if no values are left
          if (updatedParamValues.length > 0) {
            currentParams.set(param, updatedParamValues.join(','));
          } else {
            currentParams.delete(param);
          }

          return currentParams;
        },
        { replace },
      );
    },
    [paramsArray, setSearchParams],
  );

  const clearParams = useCallback(
    (replace?: boolean) => {
      setSearchParams(
        (currentParams) => {
          paramsArray.forEach((param) => {
            currentParams.delete(param);
          });
          return currentParams;
        },
        { replace },
      );
    },
    [paramsArray, setSearchParams],
  );

  return {
    params: parsedSearchParams,
    arrayParams: parsedSearchArrayParams,
    paramsString: searchParamsString,
    setParam,
    setArrayParams,
    updateArrayParamValue,
    removeParam,
    removeArrayParam,
    clearParams,
  };
};
