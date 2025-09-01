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
import { DataTypeRepository } from '../repositories/data-type.repository';
import { TypeSpecificationService } from './type-specification.service';
import { ILNodeTypeV2Service, LNodeTypeV2ServiceImpl } from './i-l-node-type-v2.service';
import { DataTypeService } from './data-type-service';
import { DOTypeV2Service, IDoTypeV2Service } from './do-type-v2.service';
import { DATypeV2Service, IDATypeV2Service } from './da-type-v2.service';

// App-scoped state
let xmlDoc: XMLDocument | null = null;
let hostElement: HTMLElement | null = null;

let lNodeTypeRepo: LNodeTypeRepository | null = null;
let dataObjectTypeRepo: DataObjectTypeRepository | null = null;
let dataAttributeTypeRepo: DataAttributeTypeRepository | null = null;
let enumTypeRepo: EnumTypeRepository | null = null;
let oscdDefaultTypeService: OscdDefaultTypeService | null = null;
let dataTypeRepo: DataTypeRepository | null = null;

let lNodeTypeService: ILNodeTypeService | null = null;
let dataObjectTypeService: DataObjectTypeService | null = null;
let dataAttributeTypeService: DataAttributeTypeService | null = null;
let enumTypeService: EnumTypeService | null = null;

let standardProviderService: IStandardProviderService | null = null;
let defaultGeneratorService: IDefaultGeneratorService | null = null;

let lNodeTypeServiceV2: ILNodeTypeV2Service | null = null;
let doTypeServiceV2: IDoTypeV2Service | null = null;
let daTypeServiceV2: IDATypeV2Service | null = null;

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

  if (dataTypeRepo) {
    dataTypeRepo.setDocument(xmlDoc);
  } else {
    dataTypeRepo = new DataTypeRepository(xmlDoc, hostElement);
  }


  standardProviderService = new StandardProviderService(lnClassData, cdcData);
  defaultGeneratorService = new DefaultGeneratorService(standardProviderService);

  dataObjectTypeService = new DataObjectTypeService(dataObjectTypeRepo);
  dataAttributeTypeService = new DataAttributeTypeService(dataAttributeTypeRepo);
  enumTypeService = new EnumTypeService(enumTypeRepo);
  oscdDefaultTypeService = new OscdDefaultTypeService()
  lNodeTypeService = new LNodeTypeServiceImpl(lNodeTypeRepo, standardProviderService, defaultGeneratorService, dataObjectTypeRepo);
  const typeSpecService = new TypeSpecificationService();
  const dataTypeService = new DataTypeService(dataTypeRepo, typeSpecService);
  lNodeTypeServiceV2 = new LNodeTypeV2ServiceImpl(dataTypeRepo, dataTypeService, typeSpecService);
  doTypeServiceV2 = new DOTypeV2Service(dataTypeRepo, dataTypeService, typeSpecService);
  daTypeServiceV2 = new DATypeV2Service(dataTypeRepo, dataTypeService, typeSpecService);
}

// === Service Getters ===

export function getDATypeV2Service(): IDATypeV2Service {
  if (!daTypeServiceV2) {
    throw new Error('DOTypeV2Service not initialized. Call initServices() first.');
  }
  return daTypeServiceV2;
}

export function getDOTypeV2Service(): IDoTypeV2Service {
  if (!doTypeServiceV2) {
    throw new Error('DOTypeV2Service not initialized. Call initServices() first.');
  }
  return doTypeServiceV2;
}

export function getLNodeTypeServiceV2(): ILNodeTypeV2Service {
  if (!lNodeTypeServiceV2) {
    throw new Error('LNodeTypeV2Service not initialized. Call initServices() first.');
  }
  return lNodeTypeServiceV2;
}

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
