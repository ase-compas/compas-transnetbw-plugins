import { TItemMapper } from '../../lib/mappers/tItem.mapper';
import type { DAType, DO, DOType, EnumType, LNodeType } from '../../lib/domain';
import type { Route } from '../../lib/stores';

export function buildRefItems(dataObjects: DO[], markedSet: Set<string>, isEditMode: boolean) {
  return dataObjects.map(obj =>
    TItemMapper.fromDataObject(obj.name, obj, {
      marked: markedSet.has(obj.name),
      canMark: true,
      canSelect: isEditMode,
      acceptDrop: (item) => item.title.includes(obj.name),
    })
  );
}

export function buildDOTypeItems(list: DOType[], isEdit: boolean) {
  return list?.map(item =>
    TItemMapper.fromDataObjectType(item.id, item, { canEdit: isEdit })
  ) ?? [];
}

export function buildDATypeItems(list: DAType[], isEdit: boolean) {
  return list?.map(item =>
    TItemMapper.fromDataAttributeType(item.id, item, { canEdit: isEdit })
  ) ?? [];
}

export function buildEnumTypeItems(list: EnumType[], isEdit: boolean) {
  return list?.map(item =>
    TItemMapper.fromEnumType(item.id, item, {canEdit: isEdit })
  ) ?? [];
}

export function createNewLNodeType(id: string, lnClass: string): LNodeType {
  return { id, lnClass, desc: '', dataObjects: [] };
}

export function createBreadcrumbs(route: Route, lNodeType: LNodeType) {
  const base = { label: 'Logical Node Types', enabled: true };
  const isView = route.path[0] === 'view';

  const detail = isView
    ? { label: 'Current-LN', secondaryLabel: lNodeType?.lnClass ?? '', enabled: false }
    : { label: 'New Logical Node Type', secondaryLabel: route.meta?.lnClass ?? '', enabled: false };

  return [base, detail];
}
