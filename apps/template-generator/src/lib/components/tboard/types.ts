export type TItem = {
  id: string;
  title: string;
  subtitle?: string;
  references?: number;

  marked: boolean;
  selected: boolean

  canEdit?: boolean;
  canMark?: boolean;
  canSelect?: boolean;

  acceptDrop?: (target: TItem) => boolean; // Function to determine if the item can accept a drop
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
