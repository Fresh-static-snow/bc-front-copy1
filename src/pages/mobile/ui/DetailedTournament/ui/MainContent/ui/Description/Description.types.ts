type DescriptionItem = {
  id: string | number;
  title: string;
  description: React.ReactNode;
};

export type DescriptionProps = {
  descriptionItems: DescriptionItem[];
};
