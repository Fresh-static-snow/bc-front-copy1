export type FilterOptionProps = {
  label: string;
  value: string;
  parent: string;
  params: Record<string, string[]>;
  onClickFilterOption: (param: string, value: string) => void;
};
