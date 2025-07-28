import type { EnumType, EnumVal } from '../domain';

export class EnumValMapper {
  static fromElement(element: Element): EnumVal {
    const ordStr = element.getAttribute('ord') ?? '0';
    const ord = parseInt(ordStr, 10);
    const value = element.textContent?.trim() ?? '';

    return { ord, value };
  }

  static toElement(doc: XMLDocument, val: EnumVal): Element {
    const element = doc.createElement('EnumVal');
    element.setAttribute('ord', String(val.ord));
    element.textContent = val.value;
    return element;
  }
}

export class EnumTypeMapper {
  static fromElement(element: Element): EnumType {
    const id = element.getAttribute('id') ?? '';

    const enumValElements = Array.from(element.querySelectorAll('EnumVal'));
    const values: EnumVal[] = enumValElements.map(EnumValMapper.fromElement);

    return { id, values };
  }

  static toElement(doc: XMLDocument, enumType: EnumType): Element {
    const element = doc.createElement('EnumType');
    element.setAttribute('id', enumType.id);

    for (const val of enumType.values) {
      const valEl = EnumValMapper.toElement(doc, val);
      element.appendChild(valEl);
    }

    return element;
  }
}
