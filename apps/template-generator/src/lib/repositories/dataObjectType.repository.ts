import type { DOType } from '../domain';
import { DOTypeMapper } from '../mappers';
import { GenericCrudTypeRepository } from './genericType.repository';

export class DataObjectTypeRepository extends GenericCrudTypeRepository<DOType> {
  constructor(
    doc: XMLDocument,
    hostElement: HTMLElement // e.g., the root container of LNodeTypes
  ) {
    super(doc, hostElement, 'DOType', DOTypeMapper);
  }
}
