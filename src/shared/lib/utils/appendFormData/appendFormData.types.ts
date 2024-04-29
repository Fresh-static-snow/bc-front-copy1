export type ValueOptions = {
  type?: 'simple' | 'file' | 'list';
  canBeEmpty?: boolean;
};

export type DataObject = {
  key: string;
  value?: string | File | string[];
  options?: ValueOptions;
};
