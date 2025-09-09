import { DataTypeRepository } from '../repositories';
import { ITypeSpecificationService, NsdSpecificationService } from './type-specification.service';
import { ILNodeTypeService, LNodeTypeService } from './l-node-type.service';
import { DataTypeService, IDataTypeService } from './data-type.service';
import { DoTypeService, IDoTypeService } from './do-type.service';
import { DaTypeService, IDaTypeService } from './da-type.service';
import { EnumTypeService, IEnumTypeService } from './enum-type.service';

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
  } else {
    dataTypeRepo = new DataTypeRepository(xmlDoc, hostElement);
  }

  if(!typeSpecService) typeSpecService = new NsdSpecificationService();
  if(!dataTypeService) dataTypeService = new DataTypeService(dataTypeRepo, typeSpecService);

  lNodeTypeService = new LNodeTypeService(dataTypeRepo, dataTypeService, typeSpecService);
  doTypeService = new DoTypeService(dataTypeRepo, dataTypeService, typeSpecService);
  daTypeService = new DaTypeService(dataTypeRepo, dataTypeService, typeSpecService);
  enumTypeService = new EnumTypeService(dataTypeRepo, dataTypeService);
}

// === Service Getters ===

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
