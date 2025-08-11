import type { DO, LNodeType } from '../../lib/domain';
import type { Route } from '../../lib/stores';

export function createNewLNodeType(id: string, lnClass: string, baseDataObjects: DO[]): LNodeType {
  return { id, lnClass, desc: '', dataObjects: baseDataObjects };
}

export function createBreadcrumbs(route: Route, lNodeType: LNodeType) {
  const base = { label: 'Logical Node Types', enabled: true };
  const isView = route.path[0] === 'view';

  const detail = isView
    ? { label: 'Current-LN', secondaryLabel: lNodeType?.lnClass ?? '', enabled: false }
    : { label: 'New Logical Node Type', secondaryLabel: route.meta?.lnClass ?? '', enabled: false };

  return [base, detail];
}
