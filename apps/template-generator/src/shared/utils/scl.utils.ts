import { SCL_PRIVATE_TYPE_INSTANCE_TYPE } from "../constants";
import { TypeKind, type SimpleDataType } from "../model";
import { get as getPrivate } from "./private-scl.utils";


/**
 * Find a DataType element by id.
 */
export function findDataTypeElement(doc: XMLDocument, id: string): Element {
    const element = doc.querySelector(`DataTypeTemplates > [id="${id}"]`);
    if (!element) {
        throw new Error(`DataType with id ${id} not found`);
    }
    return element;
}

/**
 * Get all DataType elements in the document.
 */
export function listDataTypeElements(doc: XMLDocument): Element[] {
    return Array.from(doc.querySelectorAll('DataTypeTemplates > [id]'));
}

/**
 * Extract base info (id, kind, instanceType) from a DataType element.
 */
export function getDataTypeBaseInfo(element: Element): {
    id: string;
    typeKind: TypeKind;
    instanceType: string | undefined;
} {
    const id = element.getAttribute('id');
    const typeKind = element.tagName as TypeKind;
    let instanceType: string | undefined = undefined;
    const namespace = getDocumentDefaultNamespace(element.ownerDocument as XMLDocument);
    if (typeKind === TypeKind.LNodeType) {
        instanceType = element.getAttribute('lnClass') || undefined;
    } else if (typeKind === TypeKind.DOType) {
        instanceType = element.getAttribute('cdc') || undefined;
    } else if (typeKind === TypeKind.DAType || typeKind === TypeKind.EnumType ) {
        instanceType = getPrivate(element, namespace, SCL_PRIVATE_TYPE_INSTANCE_TYPE) || undefined;
    }
    return { id: id!, typeKind, instanceType };
}

export function elementToSimpleDataType(element: Element): SimpleDataType {
    const { id, typeKind, instanceType } = getDataTypeBaseInfo(element);
    const references = Array.from(element.children).filter(el => el.tagName !== 'Private').length;
    return { id, typeKind, instanceType: instanceType!, references };
}


/**
 * Creates an element in the document default namespace (`xmlns`).
 * Falls back to no-namespace creation if the document has no default namespace.
 */
export function createElementInDefaultNS(doc: XMLDocument, tagName: string): Element {
    const namespace = getDocumentDefaultNamespace(doc);

    if (!namespace) {
        return doc.createElement(tagName);
    }

    return doc.createElementNS(namespace, tagName);
}

export function createElementInNS(doc: XMLDocument, namespace: string, tagName: string): Element {
	return doc.createElementNS(namespace, tagName);
}

export function getDocumentDefaultNamespace(doc: XMLDocument): string {
    const root = doc.documentElement;
    return root?.lookupNamespaceURI(null) ?? root?.namespaceURI ?? '';
}


/**
 * Collects all data type IDs reachable from a root ID via `type` attribute references.
 * Traversal follows direct non-Private children of each type element (matching SCL structure).
 * The root ID itself is always included in the result set.
 */
export function collectReachableTypeIds(doc: XMLDocument, rootId: string): Set<string> {
    const reachable = new Set<string>();
    if (!rootId) {
        return reachable;
    }

    const queue: string[] = [rootId];
    reachable.add(rootId);

    while (queue.length > 0) {
        const currentId = queue.shift()!;
        const typeElement = doc.querySelector(`DataTypeTemplates > [id="${currentId}"]`);
        if (!typeElement) {
            continue;
        }

        Array.from(typeElement.children)
            .filter(child => child.tagName !== 'Private')
            .forEach(child => {
                const refId = child.getAttribute('type');
                if (refId && !reachable.has(refId)) {
                    reachable.add(refId);
                    queue.push(refId);
                }
            });
    }

    return reachable;
}

export function createEmptySCLDocument(headerId: string): XMLDocument {
    const parser = new DOMParser();
    const sclString = `<SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B">
        <Header id="${headerId}"/>
    </SCL>`;
    return parser.parseFromString(sclString, "application/xml");
}