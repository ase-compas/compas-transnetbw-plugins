import type { LNodeType, DO } from '../domain/lNodeType.model';

export class LNodeTypeMapper {
  static fromElement(element: Element): LNodeType {
    const id = element.getAttribute('id') ?? '';
    const lnClass = element.getAttribute('lnClass') ?? '';
    const desc = element.getAttribute('desc') ?? '';

    const doElements = Array.from(element.querySelectorAll('DO'));
    const dataObjects: DO[] = doElements.map(el => ({
      name: el.getAttribute('name') ?? '',
      type: el.getAttribute('type') ?? '',
    }));

    return { id, lnClass, description: desc, dataObjects };
  }

  static toElement(doc: XMLDocument, lnode: LNodeType): Element {
    const element = doc.createElement('LNodeType');
    element.setAttribute('id', lnode.id);
    element.setAttribute('lnClass', lnode.lnClass);
    element.setAttribute('desc', lnode.description);

    for (const d of lnode.dataObjects) {
      const doEl = doc.createElement('DO');
      doEl.setAttribute('name', d.name);
      doEl.setAttribute('type', d.type);
      element.appendChild(doEl);
    }

    return element;
  }
}
