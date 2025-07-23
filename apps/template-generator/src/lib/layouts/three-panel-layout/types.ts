export type Item = {
  id: string | number;
  name: string;
  type: string;
  item: any;
  children?: Item[];
};

export type ToggleItem = Omit<Item, 'children'> & {
  isOpen: boolean;
  selected?: boolean;
  children?: ToggleItem[];
};
