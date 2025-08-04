export type BaseItem = {
  _id: string;
  _marked: boolean;
  _selected: boolean;
};

export type CardProps = {
  title: string;
  subtitle: string | null;
  references: number | null;

  canEdit: boolean;
  canMark: boolean;
  canClick: boolean;
  canSelect: boolean;
};


export type ColumnConfig<T extends BaseItem = BaseItem> = {
  id: string,
  title: string,
  secondaryTitle?: string
  actionText: string,
  showSearch: boolean,
  items: T[],
  onActionClick?: () => void,
  getCardProps: (item: T) => CardProps;
}
