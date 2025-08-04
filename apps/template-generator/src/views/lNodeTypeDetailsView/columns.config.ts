import type { TColumnConfig } from '../../lib/components/tboard/types';

export function getColumns(isEditMode: boolean): TColumnConfig[] {
  return [
    {
      id: 'refs',
      title: 'Referenced Data Types',
      hasSearch: false,
      showApplyDefaults: isEditMode,
      itemsDraggable: false,
    },
    {
      id: 'dotypes',
      title: 'Data Object Types',
      actionLabel: 'Create',
      hasSearch: true,
      hasAction: true,
      itemsDraggable: isEditMode
    },
    {
      id: 'datypes',
      title: 'Data Attribute Types',
      actionLabel: 'Create',
      hasSearch: true,
      hasAction: true,
      itemsDraggable: false
    },
    {
      id: 'enumtypes',
      title: 'Enum Types',
      actionLabel: 'Create',
      hasSearch: true,
      hasAction: true,
      itemsDraggable: false
    }
  ];
}
