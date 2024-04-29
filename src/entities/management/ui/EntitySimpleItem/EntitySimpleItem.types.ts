export type EntitySimpleItemProps = {
  title: React.ReactNode;
  elementsList: {
    key: string | number;
    content: React.ReactNode;
  }[];
};
