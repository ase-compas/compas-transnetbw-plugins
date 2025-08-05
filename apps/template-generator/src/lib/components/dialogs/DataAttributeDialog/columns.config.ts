import { TColumnConfig } from '../../tboard/types';

export function getColumns(isEditMode: boolean): TColumnConfig[] {
  return [
    {
      id: 'refs',
      title: 'Data Object Structure',
      hasSearch: false,
      showApplyDefaults: isEditMode,
      itemsDraggable: false,
    },
    {
      id: 'datypes',
      title: 'Data Attribute Types',
      actionLabel: 'Add New',
      hasSearch: true,
      hasAction: true,
      itemsDraggable: isEditMode
    },
    {
      id: 'enumtypes',
      title: 'Enum Types',
      actionLabel: 'Add New',
      hasSearch: true,
      hasAction: true,
      itemsDraggable: isEditMode
    }
  ];
}
