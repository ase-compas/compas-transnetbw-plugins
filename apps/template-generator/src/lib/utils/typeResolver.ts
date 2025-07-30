import { ReferenceTracker } from './referenceTracker';

/**
 * Utility class for resolving referenced types (DOType, DAType, EnumType)
 * from an SCL (Substation Configuration Language) XML document.
 *
 * Recursively traverses type definitions and collects references using a ReferenceTracker,
 * avoiding duplicates.
 */
export class TypeResolver {
  constructor(private doc: XMLDocument) {}

  /**
   * Recursively resolves a DOType and all its referenced DAType and EnumType elements.
   *
   * @param id - The ID of the DOType to resolve.
   * @param tracker - The ReferenceTracker instance used to collect and deduplicate references.
   * @param includeSelf - Whether to include the DOType itself in the results (default: true).
   *
   * Skips adding the DOType if `includeSelf` is false. Useful when the caller only wants
   * to resolve dependencies of a type, not the type itself.
   * @param childNameFilter
   */
  resolveDOType(id: string, tracker: ReferenceTracker, includeSelf = true, childNameFilter: string[] = []) {
    const el = this.doc.querySelector(`DOType[id="${id}"]`);
    if (!el) return
    if (includeSelf && !tracker.addDO(id, el)) return;

    Array.from(el.querySelectorAll('DA'))
      .filter((da) => {
        if(!childNameFilter.length) return true;
        return childNameFilter.includes(da.getAttribute("name"))
      })
      .forEach((da) => {
      const typeId = da.getAttribute('type');
      const bType = da.getAttribute('bType');
      if (!typeId) return;

      if (bType === 'Struct') this.resolveDAType(typeId, tracker);
      else if (bType === 'Enum') this.resolveEnumType(typeId, tracker);
    });

    Array.from(el.querySelectorAll('SDO'))
      .filter((sdo) => {
        if(!childNameFilter.length) return true;
        return childNameFilter.includes(sdo.getAttribute("name"))
      })
      .forEach((sdo) => {
      const typeId = sdo.getAttribute('type');
      if (typeId) this.resolveDOType(typeId, tracker);
    });
  }

  /**
   * Resolves a DAType by its ID and adds it to the tracker if found.
   *
   * @param id - The ID of the DAType to resolve.
   * @param tracker - The ReferenceTracker used to collect references.
   * @param includeSelf - Whether to include the DOType itself in the results (default: true).
   */
  resolveDAType(id: string, tracker: ReferenceTracker, includeSelf = true) {
    const el = this.doc.querySelector(`DAType[id="${id}"]`);
    if (!el) return;
    if(includeSelf && !tracker.addDA(id, el)) return;

    el.querySelectorAll('BDA').forEach((bda) => {
      const typeId = bda.getAttribute('type');
      const bType = bda.getAttribute('bType');
      if (!typeId) return;

      if (bType === 'Struct') this.resolveDAType(typeId, tracker);
      else if (bType === 'Enum') this.resolveEnumType(typeId, tracker);
    })
  }

  /**
   * Resolves an EnumType by its ID and adds it to the tracker if found.
   *
   * @param id - The ID of the EnumType to resolve.
   * @param tracker - The ReferenceTracker used to collect references.
   */
  resolveEnumType(id: string, tracker: ReferenceTracker) {
    const el = this.doc.querySelector(`EnumType[id="${id}"]`);
    if (!el) return;
    tracker.addEnum(id, el);
  }
}
