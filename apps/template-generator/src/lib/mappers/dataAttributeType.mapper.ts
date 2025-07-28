import type { BDA, DAType } from '../domain';

export class BDAMapper {
  static fromElement(element: Element): BDA {
    const name = element.getAttribute('name') ?? '';
    const bType = element.getAttribute('bType') ?? '';
    const valKind = element.getAttribute('valKind') ?? undefined;
    const type = element.getAttribute('type') ?? undefined;

    return { name, bType, valKind, type };
  }

  static toElement(doc: XMLDocument, bda: BDA): Element {
    const element = doc.createElement('BDA');
    element.setAttribute('name', bda.name);
    element.setAttribute('bType', bda.bType);

    if (bda.valKind !== undefined) {
      element.setAttribute('valKind', bda.valKind);
    }

    if (bda.type !== undefined) {
      element.setAttribute('type', bda.type);
    }

    return element;
  }
}

export class DATypeMapper {
  static fromElement(element: Element): DAType {
    const id = element.getAttribute('id') ?? '';
    const iedType = element.getAttribute('iedType') ?? undefined;

    const bdaElements = Array.from(element.querySelectorAll('BDA'));
    const basicDataAttributes: BDA[] = bdaElements.map(BDAMapper.fromElement);

    return { id, iedType, basicDataAttributes };
  }

  static toElement(doc: XMLDocument, daType: DAType): Element {
    const element = doc.createElement('DAType');
    element.setAttribute('id', daType.id);

    if (daType.iedType !== undefined) {
      element.setAttribute('iedType', daType.iedType);
    }

    for (const bda of daType.basicDataAttributes) {
      const bdaElement = BDAMapper.toElement(doc, bda);
      element.appendChild(bdaElement);
    }

    return element;
  }
}
