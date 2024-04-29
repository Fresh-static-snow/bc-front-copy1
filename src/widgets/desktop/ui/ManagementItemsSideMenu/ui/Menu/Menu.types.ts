export type Item = {
  key: string;
  path: string;
  label: string;
};

export type MenuItems = {
  key: string;
  label: string;
  path?: string;
  items?: Item[];
};
