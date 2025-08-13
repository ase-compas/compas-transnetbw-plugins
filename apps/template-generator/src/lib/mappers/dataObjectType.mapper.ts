import type { DA, DOType, SDO } from '../domain';

export class DAMapper {
  static fromElement(element: Element): DA {
    const name = element.getAttribute('name') ?? '';
    const fc = element.getAttribute('fc') ?? '';
    const bType = element.getAttribute('bType') ?? '';
    const type = element.getAttribute('type') ?? undefined;
    const qchg = element.hasAttribute('qchg')
      ? element.getAttribute('qchg') === 'true'
      : undefined;
    const dupd = element.hasAttribute('dupd')
      ? element.getAttribute('dupd') === 'true'
      : undefined;
    const dchg = element.hasAttribute('dchg')
      ? element.getAttribute('dchg') === 'true'
      : undefined;

    return { name, fc, bType, type, qchg, dupd, dchg };
  }

  static toElement(doc: XMLDocument, da: DA): Element {
    const element = doc.createElement('DA');
    element.setAttribute('name', da.name);
    element.setAttribute('fc', da.fc);
    element.setAttribute('bType', da.bType);

    if (da.type !== undefined) element.setAttribute('type', da.type);
    if (da.qchg !== undefined) element.setAttribute('qchg', String(da.qchg));
    if (da.dupd !== undefined) element.setAttribute('dupd', String(da.dupd));
    if (da.dchg !== undefined) element.setAttribute('dchg', String(da.dchg));

    return element;
  }
}

export class SDOMapper {
  static fromElement(element: Element): SDO {
    const type = element.getAttribute('type') ?? '';
    const name = element.getAttribute('name') ?? '';

    return { type, name };
  }

  static toElement(doc: XMLDocument, sdo: { type: string; name: string }): Element {
    const element = doc.createElement('SDO');
    element.setAttribute('type', sdo.type);
    element.setAttribute('name', sdo.name);
    return element;
  }
}

export class DOTypeMapper {
  static fromElement(element: Element): DOType {
    const id = element.getAttribute('id') ?? '';
    const cdc = element.getAttribute('cdc') ?? '';

    // map child DA elements
    const daElements = Array.from(element.querySelectorAll('DA'));
    const dataAttributes: DA[] = daElements.map(DAMapper.fromElement);
    const sdoElements = Array.from(element.querySelectorAll('SDO'));
    const subDataObjects: SDO[] = sdoElements.map(SDOMapper.fromElement);

    return { id, cdc, dataAttributes, subDataObjects };
  }

  static toElement(doc: XMLDocument, doType: DOType): Element {
    const element = doc.createElement('DOType');
    element.setAttribute('id', doType.id);
    element.setAttribute('cdc', doType.cdc);

    // append child DA elements
    for (const da of doType.dataAttributes) {
      const daElement = DAMapper.toElement(doc, da);
      element.appendChild(daElement);
    }

    return element;
  }
}
