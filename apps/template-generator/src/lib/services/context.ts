import {
  DataAttributeTypeRepository,
  DataObjectTypeRepository,
  EnumTypeRepository,
  LNodeTypeRepository,
} from '../repositories';

import { LNodeTypeService } from './lNodeType.service';
import { DataObjectTypeService } from './dataObjectType.service';
import { DataAttributeTypeService } from './dataAttributeType.service';
import { EnumTypeService } from './enumType.service';
import { OscdDefaultTypeService } from './oscdDefaultType.service';

// App-scoped state
let xmlDoc: XMLDocument | null = null;
let hostElement: HTMLElement | null = null;

let lNodeTypeRepo: LNodeTypeRepository | null = null;
let dataObjectTypeRepo: DataObjectTypeRepository | null = null;
let dataAttributeTypeRepo: DataAttributeTypeRepository | null = null;
let enumTypeRepo: EnumTypeRepository | null = null;
let oscdDefaultTypeService: OscdDefaultTypeService | null = null;

let lNodeTypeService: LNodeTypeService | null = null;
let dataObjectTypeService: DataObjectTypeService | null = null;
let dataAttributeTypeService: DataAttributeTypeService | null = null;
let enumTypeService: EnumTypeService | null = null;

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

  lNodeTypeService = new LNodeTypeService(lNodeTypeRepo);
  dataObjectTypeService = new DataObjectTypeService(dataObjectTypeRepo);
  dataAttributeTypeService = new DataAttributeTypeService(dataAttributeTypeRepo);
  enumTypeService = new EnumTypeService(enumTypeRepo);
  oscdDefaultTypeService = new OscdDefaultTypeService()
}

// === Service Getters ===

export function getOscdDefaultTypeService(): OscdDefaultTypeService {
  if (!oscdDefaultTypeService) {
    throw new Error(
      'OscdDefaultTypeService not initialized. Call initServices() first.'
    );
  }
  return oscdDefaultTypeService;
}

export function getLNodeTypeService(): LNodeTypeService {
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
