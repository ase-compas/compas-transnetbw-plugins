import { LNodeTypeRepository } from '../repositories/lNodeType.repository';
import { LNodeTypeService } from './lNodeType.service';

// App-scoped state
let xmlDoc: XMLDocument | null = null;
let hostElement: HTMLElement | null = null;

let lNodeTypeRepo: LNodeTypeRepository | null = null;
let lNodeTypeService: LNodeTypeService | null = null;

export function initServices(doc: XMLDocument, host: HTMLElement) {
  xmlDoc = doc;
  hostElement = host;

  lNodeTypeRepo = new LNodeTypeRepository(xmlDoc, hostElement);
  lNodeTypeService = new LNodeTypeService(lNodeTypeRepo);
}

export function getLNodeTypeService(): LNodeTypeService {
  if (!lNodeTypeService) throw new Error('Service not initialized. Call initServices() first.');
  return lNodeTypeService;
}
