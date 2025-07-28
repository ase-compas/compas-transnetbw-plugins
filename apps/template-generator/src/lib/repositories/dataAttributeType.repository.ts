import type { DAType } from '../domain';
import { DATypeMapper } from '../mappers';
import { GenericCrudTypeRepository } from './genericType.repository';

export class DataAttributeTypeRepository extends GenericCrudTypeRepository<DAType> {
  constructor(
    doc: XMLDocument,
    hostElement: HTMLElement // e.g., the root container of LNodeTypes
  ) {
    super(doc, hostElement, 'DOType', DATypeMapper);
  }
}
