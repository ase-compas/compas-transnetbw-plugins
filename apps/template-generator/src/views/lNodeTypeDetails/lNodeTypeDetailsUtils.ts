import { LNodeTypeDetails } from '../../lib/domain';

export function createBreadcrumbs(isCreateMode: boolean, lNodeType: LNodeTypeDetails) {
  const base = { label: 'Logical Node Types', enabled: true };

  const detail = isCreateMode
    ? { label: 'New Logical Node Type', secondaryLabel: `${lNodeType?.id} ${lNodeType?.lnClass ? '(' + lNodeType.lnClass + ')' : ''}`, enabled: false }
    : { label: 'Current-LN', secondaryLabel: `${lNodeType?.id} ${lNodeType?.lnClass ? '(' + lNodeType.lnClass + ')' : ''}`, enabled: false };

  return [base, detail];
}
