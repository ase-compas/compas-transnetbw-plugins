import { DataTypeKind } from '../domain/core.model';

type TypeElementVisitor = (typeKind: DataTypeKind, el: Element) => void;

// Helper to generate a unique key for visited types
function makeKey(id: string, kind: DataTypeKind): string {
  return `${kind}:${id}`;
}

export class TypeTraverser {
  constructor(private doc: XMLDocument) {
  }

  public traverse(typeKind: DataTypeKind, id: string, callback: TypeElementVisitor, includeSelf = false, childNameFilter: string[] = []) {
    const visited = new Set<string>();
    if (typeKind === DataTypeKind.LNodeType) this.resolveLNodeType(id, visited, callback, includeSelf, childNameFilter);
    else if (typeKind === DataTypeKind.DOType) this.resolveDOType(id, visited, callback, includeSelf, childNameFilter);
    else if (typeKind === DataTypeKind.DAType) this.resolveDAType(id, visited, callback, includeSelf, childNameFilter);
    else if (typeKind === DataTypeKind.EnumType) this.resolveEnumType(id, visited, callback, includeSelf);
  }

  private resolveLNodeType(id: string, visited: Set<string>, callback: TypeElementVisitor, includeSelf = true, childNameFilter: string[] = []) {
    const key = makeKey(id, DataTypeKind.LNodeType);
    if(visited.has(key)) return;
    visited.add(key);

    const el = this.doc.querySelector(`LNodeType[id="${id}"]`);
    if (!el) return;

    if (includeSelf) callback(DataTypeKind.LNodeType, el);

    Array.from(el.querySelectorAll('DO'))
      .filter(el => this.matchesChildNameFilter(el, childNameFilter))
      .forEach((doe) => {
        const typeId = doe.getAttribute('type');
        if (typeId) this.resolveDOType(typeId, visited, callback);
      });
  }

  private resolveDOType(id: string, visited: Set<string>, callback: TypeElementVisitor, includeSelf = true, childNameFilter: string[] = []) {
    const key = makeKey(id, DataTypeKind.DOType);
    if(visited.has(key)) return;
    visited.add(key);

    const el = this.doc.querySelector(`DOType[id="${id}"]`);
    if (!el) return

    if(includeSelf) callback(DataTypeKind.DOType, el);

    Array.from(el.querySelectorAll('DA'))
      .filter(el => this.matchesChildNameFilter(el, childNameFilter))
      .forEach((da) => {
        const typeId = da.getAttribute('type');
        const bType = da.getAttribute('bType');
        if (!typeId) return;

        if (bType === 'Struct') this.resolveDAType(typeId, visited, callback);
        else if (bType === 'Enum') this.resolveEnumType(typeId, visited, callback);
      });

    Array.from(el.querySelectorAll('SDO'))
      .filter(el => this.matchesChildNameFilter(el, childNameFilter))
      .forEach((sdo) => {
        const typeId = sdo.getAttribute('type');
        if (typeId) this.resolveDOType(typeId, visited, callback);
      });
  }

  private resolveDAType(id: string, visited: Set<string>, callback: TypeElementVisitor, includeSelf = true, childNameFilter: string[] = []) {
    const key = makeKey(id, DataTypeKind.DAType);
    if(visited.has(key)) return;
    visited.add(key);

    const el = this.doc.querySelector(`DAType[id="${id}"]`);
    if (!el) return;

    if(includeSelf) callback(DataTypeKind.DAType, el);

    Array.from(el.querySelectorAll('BDA'))
      .filter(el => this.matchesChildNameFilter(el, childNameFilter))
      .forEach((bda) => {
        const typeId = bda.getAttribute('type');
        const bType = bda.getAttribute('bType');
        if (!typeId) return;

        if (bType === 'Struct') this.resolveDAType(typeId, visited, callback);
        else if (bType === 'Enum') this.resolveEnumType(typeId, visited, callback);
      })
  }

  private resolveEnumType(id: string, visited: Set<string>, callback: TypeElementVisitor, includeSelf = true) {
    const key = makeKey(id, DataTypeKind.EnumType);
    if(visited.has(key)) return;
    visited.add(key);

    const el = this.doc.querySelector(`EnumType[id="${id}"]`);
    if (!el) return;

    if(includeSelf) callback(DataTypeKind.EnumType, el);
  }


  /**
   * Checks whether the element's 'name' attribute matches any in the provided filter.
   * If the filter is empty, it always returns true.
   */
  private matchesChildNameFilter(el: Element, filter: string[]): boolean {
    if (!filter.length) return true;
    const name = el.getAttribute("name");
    return name !== null && filter.includes(name);
  }
}
