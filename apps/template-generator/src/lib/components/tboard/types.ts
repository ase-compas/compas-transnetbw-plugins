export type TItem = {
  id: string;
  title: string;
  subtitle?: string;
  references?: number;
  badgeText?: string;

  marked: boolean;
  selected: boolean

  canEdit?: boolean;
  canMark?: boolean;
  canSelect?: boolean;
  canApplyDefaults?: boolean;
  canUnlink?: boolean

  acceptDrop?: (target: TBoardItemContext) => boolean; // Function to determine if the item can accept a drop

  error?: boolean; // Indicates if the item has an error
  errorMessage?: string; // Error message if the item has an error
}

export type TColumnConfig = {
  id: string;
  title: string;
  subtitle?: string;
  actionLabel?: string,

  hasSearch?: boolean;
  hasAction?: boolean;
  showApplyDefaults?: boolean;
  highlighted?: boolean;
  dragAndDropBorder?: boolean;
  canSelectItems?: boolean;

  itemsDraggable?: boolean; // If items in this column can be dragged
}

export type TData = {
  [key: string]: TItem[];
}

export type TBoardItemContext = {
  itemId: string;
  columnId: string;
  item?: TItem;
}


export type ItemDropOnItemEventDetail = {
  source: TBoardItemContext; // The item that was dragged
  target: TBoardItemContext; // The item it was dropped onto
};
