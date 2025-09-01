import type { Route } from '../../lib/stores';
import { LNodeTypeDetails } from '../../lib/domain';

export function createBreadcrumbs(route: Route, lNodeType: LNodeTypeDetails) {
  const base = { label: 'Logical Node Types', enabled: true };
  const isView = route.path[0] === 'view';

  const detail = isView
    ? { label: 'Current-LN', secondaryLabel: `${lNodeType?.id} ${lNodeType?.lnClass ? '(' + lNodeType.lnClass + ')' : ''}`, enabled: false }
    : { label: 'New Logical Node Type', secondaryLabel: route.meta?.lnClass ?? '', enabled: false };

  return [base, detail];
}
