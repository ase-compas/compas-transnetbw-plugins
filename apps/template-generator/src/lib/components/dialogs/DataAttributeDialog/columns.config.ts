import { TColumnConfig } from '../../tboard/types';

export function getColumns(isEditMode: boolean): TColumnConfig[] {
  return [
    {
      id: 'refs',
      title: 'Data Object Structure',
      hasSearch: true,
      highlighted: true,
      itemsDraggable: false,
      dragAndDropBorder: isEditMode,
      canSelectItems: true,
    },
    {
      id: 'dataAttributeTypes',
      title: 'Data Attribute Types (BDA)',
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
