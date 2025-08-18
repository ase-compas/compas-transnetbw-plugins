import { DataTypes, LNodeType } from '../../lib/domain';
import { lnClassData } from '../../data/nsdToJson/testNsdJson';
import {
  DataAttributeTypeService,
  DataObjectTypeService,
  EnumTypeService,
  getDataAttributeTypeService,
  getDataObjectTypeService,
  getEnumTypeService,
  getLNodeTypeService,
  LNodeTypeService,
} from '../../lib/services';

let service: LNodeTypeService;
let dataObjectService: DataObjectTypeService;
let dataAttributeService: DataAttributeTypeService;
let enumTypeService: EnumTypeService;

export function initDataLoaders() {
  service = getLNodeTypeService();
  dataObjectService = getDataObjectTypeService();
  dataAttributeService = getDataAttributeTypeService();
  enumTypeService = getEnumTypeService();
}

export function loadLogicalNodeType(lNodeTypeId: string): LNodeType | null {
  return service.findById(lNodeTypeId);
}

export function loadReferencedTypesById(
  lNodeTypeId: string,
  markedLNodeTypeIds?: Set<string>
): DataTypes {
  return service.findReferencedTypesById(
    lNodeTypeId,
    Array.from(markedLNodeTypeIds)
  );
}

export function loadCompatibleTypesById(
  logicalNodeType: LNodeType,
  markedLNodeTypeIds?: Set<string>
): DataTypes {
  const classData = lnClassData[logicalNodeType.lnClass];
  if (!classData) {
    console.warn(
      `Compatible types could not be loaded: LN class '${logicalNodeType.lnClass}' not found in lnClassData. Returning all types instead.`
    );
    return getAllDataTypes();
  }

  // If no marked LNodeType IDs are provided, use all names from the logical node type
  const names = logicalNodeType.dataObjects.map((d) => d.name);
  const selectedNames =
    markedLNodeTypeIds.size > 0 ? [...markedLNodeTypeIds] : names;

  // Get cdcs of DO by their names using the standard
  const cdcs = Array.from(
    new Set(selectedNames.map((name) => classData[name]?.type).filter(Boolean))
  );

  const references = loadReferencedTypesById(logicalNodeType.id, new Set(selectedNames));

  return {
    dataObjectTypes: dataObjectService.findAllByCdc(cdcs),
    dataAttributeTypes: references.dataAttributeTypes,
    enumTypes: references.enumTypes,
  };
}

function getAllDataTypes(): DataTypes {
  return {
    dataObjectTypes: dataObjectService.findAll(),
    dataAttributeTypes: dataAttributeService.findAll(),
    enumTypes: enumTypeService.findAll(),
  };
}
