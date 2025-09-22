import type { TColumnConfig } from '../../lib/components/tboard/types';

export function getColumns(isEditMode: boolean): TColumnConfig[] {
  return [
    {
      id: 'refs',
      title: 'Referenced Data Types',
      searchPlaceholder: 'Search Referenced Types...',
      hasSearch: true,
      highlighted: true,
      dragAndDropBorder: isEditMode,
      canSelectItems: true,
      showSelectionIndicator: isEditMode,
      itemsDraggable: false,
    },
    {
      id: 'doTypes',
      title: 'Data Object Types',
      searchPlaceholder: 'Search Object Types...',
      actionLabel: 'Create',
      hasSearch: true,
      hasAction: true,
      itemsDraggable: isEditMode,
      dragAndDropBorder: isEditMode,
    },
    {
      id: 'daTypes',
      title: 'Data Attribute Types',
      searchPlaceholder: 'Search Attribute Types...',
      actionLabel: 'Create',
      hasSearch: true,
      hasAction: true,
      itemsDraggable: false
    },
    {
      id: 'enumTypes',
      title: 'Enum Types',
      searchPlaceholder: 'Search Enum Types...',
      actionLabel: 'Create',
      hasSearch: true,
      hasAction: true,
      itemsDraggable: false
    }
  ];
}
