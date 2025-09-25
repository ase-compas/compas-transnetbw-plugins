import { type TColumnConfig } from '../../tboard/types';

export function getColumns(isEditMode: boolean): TColumnConfig[] {
  return [
    {
      id: 'refs',
      title: 'Data Object Structure',
      hasSearch: true,
      searchPlaceholder: 'Search Object Structures...',
      highlighted: true,
      itemsDraggable: false,
      dragAndDropBorder: isEditMode,
      canSelectItems: true,
      showSelectionIndicator: isEditMode,
    },
    {
      id: 'dataAttributeTypes',
      title: 'Data Attribute Types (BDA)',
      searchPlaceholder: 'Search Attribute Types...',
      actionLabel: 'Add New',
      hasSearch: true,
      hasAction: true,
      itemsDraggable: isEditMode,
      dragAndDropBorder: isEditMode,
    },
    {
      id: 'enumTypes',
      title: 'Enum Types',
      searchPlaceholder: 'Search Enum Types...',
      actionLabel: 'Add New',
      hasSearch: true,
      hasAction: true,
      itemsDraggable: isEditMode,
      dragAndDropBorder: isEditMode,
    }
  ];
}
