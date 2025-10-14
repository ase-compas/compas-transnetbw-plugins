import type { LNodeType, DOType, DAType, EnumType, ObjectReference } from '../domain';
import { PRIVATE_DEFAULT_VERSION_NS, PRIVATE_INSTANCE_TYPE_NS } from '../constants';

export type TypeMapper<T> = {
  fromElement(element: Element): T;
  toElement(type: T, doc?: XMLDocument): Element;
}

export class LNodeTypeMapperV implements TypeMapper<LNodeType> {
  fromElement(element: Element): LNodeType {
    const id = element.getAttribute('id') || '';
    const lnClass = element.getAttribute('lnClass') || '';
    const children: ObjectReference[] = Array.from(element.children)
      .filter(el => el.tagName !== 'Private')
      .map(mapElementToObjectReference);
    const defaultVersion = getDefaultVersionFromPrivate(element);
    return { id, lnClass, children, privates: defaultVersion ? { defaultVersion } : undefined };
  }

  toElement(type: LNodeType, doc: XMLDocument): Element {
    const el = doc.createElementNS(doc.documentElement.namespaceURI, 'LNodeType');
    el.setAttribute('id', type.id);
    el.setAttribute('lnClass', type.lnClass);
    type.children.forEach(child => el.appendChild(mapObjectReferenceToElement(child, doc)));
    appendPrivateWithDefaultVersion(doc, el, type.privates?.defaultVersion);
    return el;
  }
}

export class DOTypeMapperV implements TypeMapper<DOType> {
  fromElement(element: Element): DOType {
    const id = element.getAttribute('id') || '';
    const cdc = element.getAttribute('cdc') || '';
    const children: ObjectReference[] = Array.from(element.children)
      .filter(el => el.tagName !== 'Private')
      .map(mapElementToObjectReference);
    const defaultVersion = getDefaultVersionFromPrivate(element);
    return { id, cdc, children, privates: defaultVersion ? { defaultVersion } : undefined };
  }

  toElement(type: DOType, doc: XMLDocument): Element {
    const el = doc.createElementNS(doc.documentElement.namespaceURI, 'DOType');
    el.setAttribute('id', type.id);
    el.setAttribute('cdc', type.cdc);
    type.children.forEach(child => el.appendChild(mapObjectReferenceToElement(child, doc)));
    appendPrivateWithDefaultVersion(doc, el, type.privates?.defaultVersion);
    return el;
  }
}

export class DATypeMapperV implements TypeMapper<DAType> {
  fromElement(element: Element): DAType {
    const id = element.getAttribute('id') || '';
    const children: ObjectReference[] = Array.from(element.children)
      .filter(el => el.tagName !== 'Private')
      .map(mapElementToObjectReference)
      .filter(a => a.tagName === 'BDA' || a.tagName === 'DA');
    const defaultVersion = getDefaultVersionFromPrivate(element);
    const instanceType = getInstanceTypeFromPrivate(element);
    if (instanceType) {
      return { id, instanceType, children, privates: defaultVersion ? { defaultVersion } : undefined };
    }
    return { id, children, privates: defaultVersion ? { defaultVersion } : undefined };
  }

  toElement(type: DAType, doc: XMLDocument): Element {
    const el = doc.createElementNS(doc.documentElement.namespaceURI,'DAType');
    el.setAttribute('id', type.id);
    type.children.forEach(child => el.appendChild(mapObjectReferenceToElement(child, doc)));
    appendPrivateWithInstanceType(doc, el, type.instanceType);
    appendPrivateWithDefaultVersion(doc, el, type.privates?.defaultVersion);
    return el;
  }
}

export class EnumTypeMapperV implements TypeMapper<EnumType> {
  fromElement(element: Element): EnumType {
    const id = element.getAttribute('id') || '';

    const children: ObjectReference[] = Array.from(element.children)
      .filter(child => child.tagName === 'EnumVal')
      .map(child => ({
        tagName: 'EnumVal',
        name: child.textContent || '',
        typeRef: undefined,
        attributes: {
          literalValue: child.getAttribute('ord') || '',
        },
      }));
    const defaultVersion = getDefaultVersionFromPrivate(element);
    const instanceType = getInstanceTypeFromPrivate(element);
    if (instanceType) {
      return { id, instanceType, children, privates: defaultVersion ? { defaultVersion } : undefined };
    }
    return { id, children, privates: defaultVersion ? { defaultVersion } : undefined };
  }

  toElement(type: EnumType, doc: XMLDocument): Element {
    const el = doc.createElementNS(doc.documentElement.namespaceURI,'EnumType');
    el.setAttribute('id', type.id);
    type.children.forEach(val => {
      const valEl = doc.createElementNS(doc.documentElement.namespaceURI, 'EnumVal');
      valEl.textContent = val.name;
      valEl.setAttribute('ord', val.attributes.literalValue || '');
      el.appendChild(valEl);
    });
    appendPrivateWithInstanceType(doc, el, type.instanceType);
    appendPrivateWithDefaultVersion(doc, el, type.privates?.defaultVersion);
    return el;
  }
}

export function mapElementToObjectReference(element: Element): ObjectReference {
  return {
    name: element.getAttribute('name') || '',
    tagName: element.tagName,
    typeRef: element.getAttribute('type'),
    attributes: Object.fromEntries(Array.from(element.attributes)
      .filter(attr => attr.name !== 'name' && attr.name !== 'type')
      .map(attr => [attr.name, attr.value]))
  };
}

export function mapObjectReferenceToElement(ref: ObjectReference, doc: XMLDocument): Element {
  const el = doc.createElementNS(doc.documentElement.namespaceURI, ref.tagName);
  el.setAttribute('name', ref.name);
  if (ref.typeRef) el.setAttribute('type', ref.typeRef);
  if(!ref.attributes) return el;

  Object.entries(ref.attributes).forEach(([key, value]) => {
    if (key !== 'name' && key !== 'type') el.setAttribute(key, value);
  });
  return el;
}

function getPrivateValueFromElement(element: Element, privateTypeNS: string): string | undefined {
  const privateEl = element.querySelector(`Private[type="${privateTypeNS}"]`);
  return privateEl?.textContent || undefined;
}

// Helper to extract instanceType from <Private> child
function getInstanceTypeFromPrivate(element: Element): string | undefined {
  return getPrivateValueFromElement(element, PRIVATE_INSTANCE_TYPE_NS);
}

function getDefaultVersionFromPrivate(element: Element): string | undefined {
  return getPrivateValueFromElement(element, PRIVATE_DEFAULT_VERSION_NS);
}

// Helper to append <Private> with instanceType
function appendPrivateWithInstanceType(doc: XMLDocument, parent: Element, instanceType?: string): void {
  if (instanceType) {
    const privateEl = doc.createElementNS(doc.documentElement.namespaceURI, 'Private');
    privateEl.setAttribute('type', PRIVATE_INSTANCE_TYPE_NS);
    privateEl.textContent = instanceType;
    parent.appendChild(privateEl);
  }
}

function appendPrivateWithDefaultVersion(doc: XMLDocument, parent: Element, defaultVersion?: string): void {
  if (defaultVersion) {
    const privateEl = doc.createElementNS(doc.documentElement.namespaceURI, 'Private');
    privateEl.setAttribute('type', PRIVATE_DEFAULT_VERSION_NS);
    privateEl.textContent = defaultVersion;
    parent.appendChild(privateEl);
  }
}

