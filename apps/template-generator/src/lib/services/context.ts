import {
  DataAttributeTypeRepository,
  DataObjectTypeRepository,
  EnumTypeRepository,
  LNodeTypeRepository,
} from '../repositories';

import { ILNodeTypeService, LNodeTypeServiceImpl } from './lNodeType.service';
import { DataObjectTypeService } from './dataObjectType.service';
import { DataAttributeTypeService } from './dataAttributeType.service';
import { EnumTypeService } from './enumType.service';
import { OscdDefaultTypeService } from './oscdDefaultType.service';
import { IStandardProviderService, StandardProviderService } from './standardProvider.service';
import { DefaultGeneratorService, IDefaultGeneratorService } from './defaultGenerator.service';
import { cdcData, lnClassData } from '../../data/nsdToJson/testNsdJson';
import { ReferenceAssignmentService } from './referenceAssignment.service';

// App-scoped state
let xmlDoc: XMLDocument | null = null;
let hostElement: HTMLElement | null = null;

let lNodeTypeRepo: LNodeTypeRepository | null = null;
let dataObjectTypeRepo: DataObjectTypeRepository | null = null;
let dataAttributeTypeRepo: DataAttributeTypeRepository | null = null;
let enumTypeRepo: EnumTypeRepository | null = null;
let oscdDefaultTypeService: OscdDefaultTypeService | null = null;

let lNodeTypeService: ILNodeTypeService | null = null;
let dataObjectTypeService: DataObjectTypeService | null = null;
let dataAttributeTypeService: DataAttributeTypeService | null = null;
let enumTypeService: EnumTypeService | null = null;

let standardProviderService: IStandardProviderService | null = null;
let defaultGeneratorService: IDefaultGeneratorService | null = null;
let assignmentService: ReferenceAssignmentService | null = null;

/**
 * Initializes all repositories and services with the provided XML document and host element.
 */
export function initServices(doc: XMLDocument, host: HTMLElement): void {
  xmlDoc = doc;
  hostElement = host;

  if (!xmlDoc || !hostElement) {
    throw new Error('Invalid arguments passed to initServices.');
  }

  if (lNodeTypeRepo) {
    lNodeTypeRepo.setDocument(xmlDoc);
  } else {
    lNodeTypeRepo = new LNodeTypeRepository(xmlDoc, hostElement);
  }

  if (dataObjectTypeRepo) {
    dataObjectTypeRepo.setDocument(xmlDoc);
  } else {
    dataObjectTypeRepo = new DataObjectTypeRepository(xmlDoc, hostElement);
  }

  if (dataAttributeTypeRepo) {
    dataAttributeTypeRepo.setDocument(xmlDoc);
  } else {
    dataAttributeTypeRepo = new DataAttributeTypeRepository(
      xmlDoc,
      hostElement
    );
  }

  if (enumTypeRepo) {
    enumTypeRepo.setDocument(xmlDoc);
  } else {
    enumTypeRepo = new EnumTypeRepository(xmlDoc, hostElement);
  }


  standardProviderService = new StandardProviderService(lnClassData, cdcData);
  defaultGeneratorService = new DefaultGeneratorService(standardProviderService);

  dataObjectTypeService = new DataObjectTypeService(dataObjectTypeRepo);
  dataAttributeTypeService = new DataAttributeTypeService(dataAttributeTypeRepo);
  enumTypeService = new EnumTypeService(enumTypeRepo);
  oscdDefaultTypeService = new OscdDefaultTypeService()
  assignmentService = new ReferenceAssignmentService(dataObjectTypeService, dataAttributeTypeService, enumTypeService, undefined);
  lNodeTypeService = new LNodeTypeServiceImpl(lNodeTypeRepo, standardProviderService, defaultGeneratorService, dataObjectTypeRepo);
}

// === Service Getters ===

export function getStandardProviderService(): IStandardProviderService {
  if (!standardProviderService) {
    throw new Error("StandardProviderService not initialized. Call initServices() first.");
  }
  return standardProviderService;
}

export function getDefaultGeneratorService(): IDefaultGeneratorService {
  if (!defaultGeneratorService) {
    throw new Error(
      'DefaultGeneratorService not initialized. Call initServices() first.'
    );
  }
  return defaultGeneratorService;
}

export function getOscdDefaultTypeService(): OscdDefaultTypeService {
  if (!oscdDefaultTypeService) {
    throw new Error(
      'OscdDefaultTypeService not initialized. Call initServices() first.'
    );
  }
  return oscdDefaultTypeService;
}

export function getLNodeTypeService(): ILNodeTypeService {
  if (!lNodeTypeService)
    throw new Error(
      'LNodeTypeService not initialized. Call initServices() first.'
    );
  return lNodeTypeService;
}

export function getDataObjectTypeService(): DataObjectTypeService {
  if (!dataObjectTypeService)
    throw new Error(
      'DataObjectTypeService not initialized. Call initServices() first.'
    );
  return dataObjectTypeService;
}

export function getDataAttributeTypeService(): DataAttributeTypeService {
  if (!dataAttributeTypeService)
    throw new Error(
      'DataAttributeTypeService not initialized. Call initServices() first.'
    );
  return dataAttributeTypeService;
}

export function getEnumTypeService(): EnumTypeService {
  if (!enumTypeService)
    throw new Error(
      'EnumTypeService not initialized. Call initServices() first.'
    );
  return enumTypeService;
}
