import { getLNodeTypeServiceV2, ILNodeTypeV2Service } from '../../lib/services';
import { DataTypes, LNodeTypeDetailsV2 } from '../../lib/domain/core.model';

let lNodeTypeService: ILNodeTypeV2Service;

export async function loadLNodeType(
  mode: 'create' | 'edit' | 'view',
  lNodeTypeId: string,
  lnClass?: string
): Promise<LNodeTypeDetailsV2> {
  if (!lNodeTypeService) {
    lNodeTypeService = getLNodeTypeServiceV2();
  }

  // --- Get node ---
  if (mode === 'create') {
    const draftNode = await lNodeTypeService.getDefaultType(lnClass);
    draftNode.id = lNodeTypeId;
    return draftNode;
  } else {
    return lNodeTypeService.getTypeById(lNodeTypeId);
  }
}

export async function loadTypes(
  mode: 'create' | 'edit' | 'view',
  lNodeTypeId: string,
  lnClass: string,
  includeChildren: string[] = []
): Promise<DataTypes> {
  const types: DataTypes = {
    lNodeTypes: [],
    dataObjectTypes: [],
    dataAttributeTypes: [],
    enumTypes: [],
  };
  // --- Get types ---
  if (mode === 'create') {
    // Only assignable DO types for create mode
    const assignableTypes = await lNodeTypeService.getAssignableTypes(
      lnClass,
      includeChildren
    );
    types.dataObjectTypes = assignableTypes.dataObjectTypes;
  } else {
    // Edit or view mode: always fetch referenced types
    const referencedTypes = await lNodeTypeService.getReferencedTypes(
      lNodeTypeId,
      includeChildren
    );
    types.dataAttributeTypes = referencedTypes.dataAttributeTypes;
    types.enumTypes = referencedTypes.enumTypes;

    if (mode === 'edit') {
      // Edit mode: DO types are assignable
      const assignableTypes = await lNodeTypeService.getAssignableTypes(
        lnClass,
        includeChildren
      );
      types.dataObjectTypes = assignableTypes.dataObjectTypes;
    } else {
      // View mode: DO types are referenced
      types.dataObjectTypes = referencedTypes.dataObjectTypes;
    }
  }

  return types;
}
