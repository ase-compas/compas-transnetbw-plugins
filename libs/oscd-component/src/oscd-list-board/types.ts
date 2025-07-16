export type ItemState = 'default' | 'marked';

/**
 * Generic ListSettings type for use in board configurations.
 *
 * @template T - The type of each item in the list.
 */
export interface ListSettings<T> {
  id: string;
  title: string;
  secondaryTitle?: string | null;
  actionText?: string | null;
  showSearch?: boolean;

  items: T[];

  canMark?: boolean;
  canEdit?: boolean;

  getItemTitle: (item: T) => string;
  getItemState: (item: T) => ItemState;
  getItemSubtitle?: (item: T) => string | null;
  getItemReferences?: (item: T) => number | null;
}

/**
 * FilterListSettings adds support for filtering based on a previous item,
 * without requiring the getItemState function.
 *
 * @template T - The current list item type.
 * @template P - The previous list item type used for filtering.
 */
export interface FilterListSettings<T>
  extends Omit<ListSettings<T>, 'getItemState'> {
  /**
   * Filter function to determine if an item of type T should be shown,
   * based on a previously selected item of type P.
   */
  filterFn: (item: T, previousMarkedSets: Set<any>[]) => boolean;
}
