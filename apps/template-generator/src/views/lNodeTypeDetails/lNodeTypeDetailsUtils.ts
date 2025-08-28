import type { Route } from '../../lib/stores';
import { LNodeTypeDetailsV2 } from '../../lib/domain/core.model';

export function createBreadcrumbs(route: Route, lNodeType: LNodeTypeDetailsV2) {
  const base = { label: 'Logical Node Types', enabled: true };
  const isView = route.path[0] === 'view';

  const detail = isView
    ? { label: 'Current-LN', secondaryLabel: `${lNodeType?.id} ${lNodeType?.lnClass ? '(' + lNodeType.lnClass + ')' : ''}`, enabled: false }
    : { label: 'New Logical Node Type', secondaryLabel: route.meta?.lnClass ?? '', enabled: false };

  return [base, detail];
}
