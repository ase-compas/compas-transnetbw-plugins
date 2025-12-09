import { DataTypeRepository } from '../repositories';
import { type ITypeSpecificationService, NsdSpecificationService } from './type-specification.service';
import { type ILNodeTypeService, LNodeTypeService } from './l-node-type.service';
import { DataTypeService, type IDataTypeService } from './common-data-type';
import { DoTypeService, type IDoTypeService } from './do-type.service';
import { DaTypeService, type IDaTypeService } from './da-type.service';
import { EnumTypeService, type IEnumTypeService } from './enum-type.service';
import { type IDefaultService, LocalStorageDefaultService } from './default.service';
import { OscdAlertService } from '@oscd-transnet-plugins/oscd-services/alert';

// App-scoped state
let xmlDoc: XMLDocument | null = null;
let hostElement: HTMLElement | null = null;

let dataTypeRepo: DataTypeRepository | null = null;

let lNodeTypeService: ILNodeTypeService | null = null;
let doTypeService: IDoTypeService | null = null;
let daTypeService: IDaTypeService | null = null;
let enumTypeService: IEnumTypeService | null = null;

let typeSpecService: ITypeSpecificationService | null = null;
let dataTypeService: IDataTypeService | null = null;
let defaultService: IDefaultService | null = null;
let alertService: OscdAlertService | null = null;

/**
 * Initializes all repositories and services with the provided XML document and host element.
 */
export function initServices(doc: XMLDocument, host: HTMLElement): void {
  xmlDoc = doc;
  hostElement = host;

  if (!xmlDoc || !hostElement) {
    throw new Error('Invalid arguments passed to initServices.');
  }

  if (dataTypeRepo) {
    dataTypeRepo.setDocument(xmlDoc);
    dataTypeRepo.setHost(host)
  } else {
    dataTypeRepo = new DataTypeRepository(xmlDoc, hostElement);
  }

  if (!defaultService) defaultService = new LocalStorageDefaultService();
  if (!typeSpecService) typeSpecService = new NsdSpecificationService();
  if (!dataTypeService) dataTypeService = new DataTypeService(dataTypeRepo, typeSpecService, defaultService);
  if (!alertService) alertService = new OscdAlertService(hostElement)

  lNodeTypeService = new LNodeTypeService(dataTypeRepo, dataTypeService);
  doTypeService = new DoTypeService(dataTypeRepo, dataTypeService, typeSpecService);
  daTypeService = new DaTypeService(dataTypeRepo, dataTypeService, typeSpecService);
  enumTypeService = new EnumTypeService(dataTypeRepo, dataTypeService);
}

// === Service Getters ===

export function getAlertService(): OscdAlertService {
  if (!alertService) {
    throw new Error('AlertService not initialized. Call initServices() first.');
  }
  return alertService;
}

export function getEnumTypeService(): IEnumTypeService {
  if (!enumTypeService) {
    throw new Error('EnumTypeService not initialized. Call initServices() first.');
  }
  return enumTypeService;
}

export function getDATypeService(): IDaTypeService {
  if (!daTypeService) {
    throw new Error('DoTypeService not initialized. Call initServices() first.');
  }
  return daTypeService;
}

export function getDOTypeService(): IDoTypeService {
  if (!doTypeService) {
    throw new Error('DoTypeService not initialized. Call initServices() first.');
  }
  return doTypeService;
}

export function getLNodeTypeService(): ILNodeTypeService {
  if (!lNodeTypeService) {
    throw new Error('LNodeTypeV2Service not initialized. Call initServices() first.');
  }
  return lNodeTypeService;
}

export function getDataTypeService(): IDataTypeService {
  if (!dataTypeService) {
    throw new Error('DataTypeService not initialized. Call initServices() first.');
  }
  return dataTypeService;
}

export function getDefaultTypeService(): IDefaultService {
  if (!defaultService) {
    throw new Error('DefaultService not initialized. Call initServices() first.');
  }
  return defaultService;
}
