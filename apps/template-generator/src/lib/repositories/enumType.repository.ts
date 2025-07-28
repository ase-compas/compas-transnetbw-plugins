import type { EnumType } from '../domain';
import { EnumTypeMapper } from '../mappers';
import { GenericCrudTypeRepository } from './genericType.repository';

export class EnumTypeRepository extends GenericCrudTypeRepository<EnumType> {
  constructor(
    doc: XMLDocument,
    hostElement: HTMLElement // e.g., the root container of LNodeTypes
  ) {
    super(doc, hostElement, 'DOType', EnumTypeMapper);
  }
}
