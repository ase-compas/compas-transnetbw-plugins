import { type LNodeTypeDetails } from '@oscd-transnet-plugins/oscd-template-generator'

export function createBreadcrumbs(isCreateMode: boolean, lNodeType: LNodeTypeDetails) {
  const base = { label: 'Logical Node Types', enabled: true };

  const detail = isCreateMode
    ? { label: 'New Logical Node Type', secondaryLabel: `${lNodeType?.id} ${lNodeType?.lnClass ? '(' + lNodeType.lnClass + ')' : ''}`, enabled: false }
    : { label: 'Current-LN', secondaryLabel: `${lNodeType?.id} ${lNodeType?.lnClass ? '(' + lNodeType.lnClass + ')' : ''}`, enabled: false };

  return [base, detail];
}
