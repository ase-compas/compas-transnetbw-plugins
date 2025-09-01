import { DataTypeRepository } from '../repositories';
import { TypeSpecificationService } from './type-specification.service';
import { ILNodeTypeService, LNodeTypeService } from './l-node-type.service';
import { DataTypeService } from './data-type-service';
import { DoTypeService, IDoTypeService } from './do-type.service';
import { DaTypeService, IDaTypeService } from './da-type.service';

// App-scoped state
let xmlDoc: XMLDocument | null = null;
let hostElement: HTMLElement | null = null;

let dataTypeRepo: DataTypeRepository | null = null;

let lNodeTypeService: ILNodeTypeService | null = null;
let doTypeService: IDoTypeService | null = null;
let daTypeService: IDaTypeService | null = null;

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

  const typeSpecService = new TypeSpecificationService();
  const dataTypeService = new DataTypeService(dataTypeRepo, typeSpecService);

  lNodeTypeService = new LNodeTypeService(dataTypeRepo, dataTypeService, typeSpecService);
  doTypeService = new DoTypeService(dataTypeRepo, dataTypeService, typeSpecService);
  daTypeService = new DaTypeService(dataTypeRepo, dataTypeService, typeSpecService);
}

// === Service Getters ===

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
