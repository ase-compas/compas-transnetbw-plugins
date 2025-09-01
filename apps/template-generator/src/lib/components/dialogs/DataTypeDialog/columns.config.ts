import { TColumnConfig } from '../../tboard/types';

export function getColumns(isEditMode: boolean): TColumnConfig[] {
  return [
    {
      id: 'refs',
      title: 'Data Object Structure',
      hasSearch: true,
      highlighted: true,
      dragAndDropBorder: isEditMode,
      canSelectItems: true,
      showSelectionIndicator: isEditMode,
      itemsDraggable: false,
    },
    {
      id: 'dataObjectTypes',
      title: 'Data Object Types (SDO)',
      actionLabel: 'Add New',
      hasSearch: true,
      hasAction: true,
      itemsDraggable: isEditMode,
      dragAndDropBorder: isEditMode,
    },
    {
      id: 'dataAttributeTypes',
      title: 'Data Attribute Types',
      actionLabel: 'Add New',
      hasSearch: true,
      hasAction: true,
      itemsDraggable: isEditMode,
      dragAndDropBorder: isEditMode,
    },
    {
      id: 'enumTypes',
      title: 'Enum Types',
      actionLabel: 'Add New',
      hasSearch: true,
      hasAction: true,
      itemsDraggable: isEditMode,
      dragAndDropBorder: isEditMode,
    }
  ];
}
