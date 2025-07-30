import type { DAType, ReferencedTypes } from '../domain';
import { DATypeMapper } from '../mappers';
import { GenericCrudTypeRepository } from './genericType.repository';
import { TypeResolver } from '../utils/typeResolver';
import { ReferenceTracker } from '../utils/referenceTracker';

export class DataAttributeTypeRepository extends GenericCrudTypeRepository<DAType> {
  private resolver: TypeResolver;
  constructor(
    doc: XMLDocument,
    hostElement: HTMLElement // e.g., the root container of LNodeTypes
  ) {
    super(doc, hostElement, 'DAType', DATypeMapper);
    this.resolver = new TypeResolver(doc)
  }

  public findReferencedTypesById(id: string, childNameFilter: string[] = []): ReferencedTypes | null {
    const dataObjectType: Element = this.doc.querySelector(`${this.tagName}[id="${id}"]`);
    if (!dataObjectType) return null; // Not found

    const tracker = new ReferenceTracker();

    this.resolver.resolveDAType(id, tracker, false, childNameFilter);

    return tracker.result;
  }

}
