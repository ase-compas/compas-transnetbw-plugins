import { ObjectReferenceState } from '../stores';
import { TItem } from '../components/tboard/types';
import { mapObjectReferenceStateToTItem } from '../mappers';

export function getDisplayReferenceItems(items: ObjectReferenceState[], isEditMode: boolean, acceptDrop): TItem[] {

  return [...items]
    .filter(item => isEditMode || item.meta.isConfigured)
    .map(item => mapObjectReferenceStateToTItem(item, isEditMode, acceptDrop))
    .sort((a: TItem, b: TItem) => {
      // Sort by mandatory first, then selected, then alphabetically
      const groupA = a.isMandatory ? 0 : a.selected ? 1 : 2;
      const groupB = b.isMandatory ? 0 : b.selected ? 1 : 2;
      if (groupA !== groupB) return groupA - groupB;
      return a.title.localeCompare(b.title);
    });
}
