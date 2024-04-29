export type UseCustomSearchParams = {
  params: Record<string, string>;
  arrayParams: Record<string, string[]>;
  paramsString: string;
  setParam: (param: string, value: string, replace?: boolean) => void;
  setArrayParams: (param: string, values: string[], replace?: boolean) => void;
  updateArrayParamValue: (param: string, value: string, replace?: boolean) => void;
  removeParam: (param: string, replace?: boolean) => void;
  removeArrayParam: (param: string, value: string, replace?: boolean) => void;
  clearParams: (replace?: boolean) => void;
};
