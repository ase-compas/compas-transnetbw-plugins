import { LNodeType, DOType, DAType, EnumType, ObjectReference, EnumValue } from '../domain/core.model';

export type TypeMapper<T> = {
  fromElement(element: Element): T;
  toElement(type: T, doc?: XMLDocument): Element;
}

export class LNodeTypeMapperV implements TypeMapper<LNodeType> {
  fromElement(element: Element): LNodeType {
    const id = element.getAttribute('id') || '';
    const lnClass = element.getAttribute('lnClass') || '';
    const children: ObjectReference[] = Array.from(element.children).map(mapElementToObjectReference);
    return { id, lnClass, children };
  }

  toElement(type: LNodeType, doc: XMLDocument): Element {
    const el = doc.createElement('LNodeType');
    el.setAttribute('id', type.id);
    el.setAttribute('lnClass', type.lnClass);
    type.children.forEach(child => el.appendChild(mapObjectReferenceToElement(child, doc)));
    return el;
  }
}

export class DOTypeMapperV implements TypeMapper<DOType> {
  fromElement(element: Element): DOType {
    const id = element.getAttribute('id') || '';
    const cdc = element.getAttribute('cdc') || '';
    const children: ObjectReference[] = Array.from(element.children).map(mapElementToObjectReference);
    return { id, cdc, children };
  }

  toElement(type: DOType, doc: XMLDocument): Element {
    const el = doc.createElement('DOType');
    el.setAttribute('id', type.id);
    el.setAttribute('cdc', type.cdc);
    type.children.forEach(child => el.appendChild(mapObjectReferenceToElement(child, doc)));
    return el;
  }
}

export class DATypeMapperV implements TypeMapper<DAType> {
  fromElement(element: Element): DAType {
    const id = element.getAttribute('id') || '';
    const children: ObjectReference[] = Array.from(element.children).map(mapElementToObjectReference)
      .filter(a => a.tagName === 'BDA' || a.tagName === 'DA');
    return { id, children };
  }

  toElement(type: DAType, doc: XMLDocument): Element {
    const el = doc.createElement('DAType');
    el.setAttribute('id', type.id);
    type.children.forEach(child => el.appendChild(mapObjectReferenceToElement(child, doc)));
    return el;
  }
}

export class EnumTypeMapperV implements TypeMapper<EnumType> {
  fromElement(element: Element): EnumType {
    const id = element.getAttribute('id') || '';
    const values: EnumValue[] = Array.from(element.children)
      .filter(child => child.tagName === 'EnumVal')
      .map(child => ({
        value: child.textContent || '',
        ord: child.getAttribute('ord') || ''
      }));
    return { id, values };
  }

  toElement(type: EnumType, doc: Document = document): Element {
    const el = doc.createElement('EnumType');
    el.setAttribute('id', type.id);
    type.values.forEach(val => {
      const valEl = doc.createElement('EnumVal');
      valEl.textContent = val.value;
      valEl.setAttribute('ord', val.ord);
      el.appendChild(valEl);
    });
    return el;
  }
}

export function mapElementToObjectReference(element: Element): ObjectReference {
  return {
    name: element.getAttribute('name') || '',
    tagName: element.tagName,
    typeRef: element.getAttribute('type'),
    attributes: Object.fromEntries(Array.from(element.attributes).map(attr => [attr.name, attr.value]))
  };
}

export function mapObjectReferenceToElement(ref: ObjectReference, doc: Document = document): Element {
  const el = doc.createElement(ref.tagName);
  el.setAttribute('name', ref.name);
  if (ref.typeRef) el.setAttribute('type', ref.typeRef);
  if(!ref.attributes) return el;

  Object.entries(ref.attributes).forEach(([key, value]) => {
    if (key !== 'name' && key !== 'type') el.setAttribute(key, value);
  });
  return el;
}
