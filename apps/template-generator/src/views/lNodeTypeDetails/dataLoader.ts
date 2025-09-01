import { getLNodeTypeService, LNodeTypeService } from '../../lib/services';
import { BasicTypes, LNodeTypeDetails } from '../../lib/domain';

let lNodeTypeService: LNodeTypeService;

export async function loadLNodeType(
  mode: 'create' | 'edit' | 'view',
  lNodeTypeId: string,
  lnClass?: string
): Promise<LNodeTypeDetails> {
  if (!lNodeTypeService) {
    lNodeTypeService = getLNodeTypeService();
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
): Promise<BasicTypes> {
  const types: BasicTypes = {
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
