import type {LNodeType } from '../domain';
import { LNodeTypeMapper } from '../mappers';
import { GenericCrudTypeRepository } from './genericType.repository';
import type { ReferencedTypes } from '../domain/';
import { ReferenceTracker } from '../utils/referenceTracker';
import { TypeResolver } from '../utils/typeResolver';


export class LNodeTypeRepository extends GenericCrudTypeRepository<LNodeType> {

  private resolver: TypeResolver;

  constructor(
    doc: XMLDocument,
    hostElement: HTMLElement // e.g., the root container of LNodeTypes
  ) {
    super(doc, hostElement, 'LNodeType', LNodeTypeMapper);
    this.resolver = new TypeResolver(doc);
  }

  public findReferencedTypesById(id: string): ReferencedTypes | null {
    const lNodeType: Element = this.doc.querySelector(`${this.tagName}[id="${id}"]`);
    if (!lNodeType) return null; // Not found

    const tracker = new ReferenceTracker();

    lNodeType.querySelectorAll('DO').forEach((doElement) => {
      const typeId = doElement.getAttribute('type');
      if (typeId) this.resolver.resolveDOType(typeId, tracker);
    });

    return tracker.result;
  }

}
