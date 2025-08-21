import { getLNodeTypeService, ILNodeTypeService } from '../../lib/services';
import { DataTypes, LNodeTypeDetails } from '../../lib/domain';

let lNodeTypeService: ILNodeTypeService;

export function loadLNodeType(mode: 'create' | 'edit' | 'view', lNodeTypeId: string, lnClass?: string): LNodeTypeDetails {
  if (!lNodeTypeService) {
    lNodeTypeService = getLNodeTypeService();
  }

  // --- Get node ---
  if (mode === 'create') {
    const draftNode = lNodeTypeService.createDraftLNodeType(lnClass);
    draftNode.id = lNodeTypeId;
    return draftNode;
  } else {
    return lNodeTypeService.getLNodeType(lNodeTypeId, { isConfigured: mode === 'view' });
  }
}

export function loadTypes(mode: 'create' | 'edit' | 'view', lNodeTypeId: string, lnClass: string, includeChildren: string[] = []): DataTypes {
  const types: DataTypes = {
    dataObjectTypes: [],
    dataAttributeTypes: [],
    enumTypes: []
  };

  // --- Get types ---
  if (mode === 'create') {
    // Only assignable DO types for create mode
    types.dataObjectTypes = lNodeTypeService.getAssignableDOTypes(lnClass, includeChildren);
  } else {
    // Edit or view mode: always fetch referenced types
    const referencedTypes = lNodeTypeService.getReferencedTypes(lNodeTypeId, includeChildren);
    types.dataAttributeTypes = referencedTypes.dataAttributeTypes;
    types.enumTypes = referencedTypes.enumTypes;

    if (mode === 'edit') {
      // Edit mode: DO types are assignable
      types.dataObjectTypes = lNodeTypeService.getAssignableDOTypes(lnClass, includeChildren);
    } else {
      // View mode: DO types are referenced
      types.dataObjectTypes = referencedTypes.dataObjectTypes;
    }
  }

  return types;
}
