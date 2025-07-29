import type { DOType, ReferencedTypes } from '../domain';
import { DOTypeMapper } from '../mappers';
import { GenericCrudTypeRepository } from './genericType.repository';
import { ReferenceTracker } from '../utils/referenceTracker';
import { TypeResolver } from '../utils/typeResolver';

export class DataObjectTypeRepository extends GenericCrudTypeRepository<DOType> {
  private resolver: TypeResolver;
  constructor(
    doc: XMLDocument,
    hostElement: HTMLElement // e.g., the root container of LNodeTypes
  ) {
    super(doc, hostElement, 'DOType', DOTypeMapper);
    this.resolver = new TypeResolver(doc);
  }

  public findReferencedTypesById(id: string): ReferencedTypes | null {
    const dataObjectType: Element = this.doc.querySelector(`${this.tagName}[id="${id}"]`);
    if (!dataObjectType) return null; // Not found

    const tracker = new ReferenceTracker();

    this.resolver.resolveDOType(id, tracker, false);

    return tracker.result;
  }
}
