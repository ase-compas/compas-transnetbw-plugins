import type {LNodeType } from '../domain';
import { LNodeTypeMapper } from '../mappers';
import { GenericCrudTypeRepository } from './genericType.repository';
import type { ReferencedTypes } from '../domain/';
import { ReferenceTracker } from '../utils/referenceTracker';


export class LNodeTypeRepository extends GenericCrudTypeRepository<LNodeType> {
  constructor(
    doc: XMLDocument,
    hostElement: HTMLElement // e.g., the root container of LNodeTypes
  ) {
    super(doc, hostElement, 'LNodeType', LNodeTypeMapper);
  }

  public findReferencedTypesById(id: string): ReferencedTypes | null {
    const lNodeType: Element = this.doc.querySelector(`${this.tagName}[id="${id}"]`);
    if (!lNodeType) return null; // Not found

    const tracker = new ReferenceTracker();

    lNodeType.querySelectorAll('DO').forEach((doElement) => {
      const typeId = doElement.getAttribute('type');
      if (typeId) this.resolveDOType(typeId, tracker);
    });

    return tracker.result;
  }

  // Helper
  private resolveDOType(id: string, tracker: ReferenceTracker) {
    const el = this.doc.querySelector(`DOType[id="${id}"]`);
    if (!el || !tracker.addDO(id, el)) return;

    // Resolve DA type references
    el.querySelectorAll('DA').forEach((da) => {
      const typeId = da.getAttribute('type');
      const bType = da.getAttribute('bType');
      if (!typeId) return;

      if (bType === 'Struct') this.resolveDAType(typeId, tracker);
      else if (bType === 'Enum') this.resolveEnumType(typeId, tracker);
    });

    // Resolve SDO type references
    el.querySelectorAll('SDO').forEach((sdo) => {
      const typeId = sdo.getAttribute('type');
      if (typeId) this.resolveDOType(typeId, tracker);
    });
  }

  private resolveDAType(id: string, tracker: ReferenceTracker) {
    const el = this.doc.querySelector(`DAType[id="${id}"]`);
    if (!el) return;
    tracker.addDA(id, el);
  }

  private resolveEnumType(id: string, tracker: ReferenceTracker) {
    const el = this.doc.querySelector(`EnumType[id="${id}"]`);
    if (!el) return;
    tracker.addEnum(id, el);
  }
}
