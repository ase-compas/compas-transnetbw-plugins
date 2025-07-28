import type { DAType, DOType, EnumType, LNodeType } from '../domain';
import { LNodeTypeMapper } from '../mappers';
import { GenericCrudTypeRepository } from './genericType.repository';

export class LNodeTypeRepository extends GenericCrudTypeRepository<LNodeType> {
  constructor(
    doc: XMLDocument,
    hostElement: HTMLElement // e.g., the root container of LNodeTypes
  ) {
    super(doc, hostElement, 'LNodeType', LNodeTypeMapper);
  }
}
