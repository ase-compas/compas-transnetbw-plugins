export type BaseItem = {
  id: string;
  marked?: boolean;
  selected?: boolean;
};

export type CardProps = {
  title: string;
  subtitle: string | null;
  references: number | null;
  marked: boolean;
  selected: boolean;
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
