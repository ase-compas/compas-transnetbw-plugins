import type { EditV2 } from "@oscd-transnet-plugins/oscd-event-api";
import { SCL_PRIVATE_TYPE_INSTANCE_TYPE } from "../constants";
import { TypeKind, type SimpleDataType } from "../model";
import { get as getPrivate } from "./private-scl.utils";

export const DATA_TYPE_TEMPLATES_TAG = 'DataTypeTemplates';

/**
 * Escapes special characters in a string for safe use as an XML attribute value.
 */
export function escapeXmlAttr(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

export const DATA_TYPE_KIND_ORDER: TypeKind[] = [
    TypeKind.LNodeType,
    TypeKind.DOType,
    TypeKind.DAType,
    TypeKind.EnumType,
];

/**
 * Builds ordered `EditV2` insert edits for the given data type elements.
 *
 * Elements are sorted by kind order (`LNodeType → DOType → DAType → EnumType`) and
 * inserted before the first existing element of the next kind, preserving document order
 * when the edits are dispatched in sequence.
 *
 * Elements whose `id` already exists in the document are skipped.
 * If `DataTypeTemplates` is missing, a create-edit for it is prepended.
 * IDs listed in `releasedIds` are treated as reusable in this batch and are
 * not considered duplicates.
 *
 * @param doc      Target SCL document.
 * @param elements Data type elements to insert.
 * @param releasedIds IDs that should be treated as reusable during insertion.
 * @returns        Ordered `EditV2` array ready for a single dispatch.
 */
export function insertTypeElements(doc: XMLDocument, elements: Element[], releasedIds: string[] = []): EditV2[] {
    if (elements.length === 0) {
        return [];
    }

    const knownKinds = new Set(DATA_TYPE_KIND_ORDER);
    const sortedElements = [...elements].sort((a, b) => {
        const aIndex = DATA_TYPE_KIND_ORDER.indexOf(a.tagName as TypeKind);
        const bIndex = DATA_TYPE_KIND_ORDER.indexOf(b.tagName as TypeKind);

        if (aIndex < 0 && bIndex < 0) {
            return 0;
        }
        if (aIndex < 0) {
            return 1;
        }
        if (bIndex < 0) {
            return -1;
        }
        return aIndex - bIndex;
    });

    const edits: EditV2[] = [];

    let dataTypeTemplates = findDataTypeTemplatesElement(doc);
    if (!dataTypeTemplates) {
        const root = doc.documentElement;
        if (!root) {
            throw new Error('SCL root element not found in document');
        }

        dataTypeTemplates = createElementInDefaultNS(doc, DATA_TYPE_TEMPLATES_TAG);
        edits.push({
            parent: root,
            node: dataTypeTemplates,
            reference: null,
        });
    }

    const alreadyKnownIds = new Set(
        listDataTypeElements(doc)
            .map(element => element.getAttribute('id'))
            .filter((id): id is string => !!id),
    );

    for (const releasedId of releasedIds) {
        alreadyKnownIds.delete(releasedId);
    }

    for (const sourceElement of sortedElements) {
        const id = sourceElement.getAttribute('id');
        if (id && alreadyKnownIds.has(id)) {
            continue;
        }

        const typeKind = sourceElement.tagName as TypeKind;
        const reference = knownKinds.has(typeKind)
            ? findDataTypeInsertReferenceElement(doc, typeKind)
            : null;

        const node = sourceElement.ownerDocument === doc
            ? sourceElement.cloneNode(true) as Element
            : doc.importNode(sourceElement, true) as Element;

        edits.push({
            parent: dataTypeTemplates,
            node,
            reference,
        });

        if (id) {
            alreadyKnownIds.add(id);
        }
    }

    return edits;
}


/**
 * Finds the insertion reference element for a given data type kind.
 *
 * The method keeps `DataTypeTemplates` ordered by kind using this fixed order:
 * `LNodeType -> DOType -> DAType -> EnumType`.
 * It returns the first element of the next existing kind, so callers can insert
 * the new element before it.
 *
 * Example: inserting a `DOType` returns the first `DAType` (or `EnumType`
 * if no `DAType` exists). If no later kind exists, it returns `null`
 * (append at the end).
 *
 * @param typeKind The kind of data type that will be inserted.
* @returns The reference element for `InsertV2.reference`, or `null` to append.
 */
export function findDataTypeInsertReferenceElement(doc: XMLDocument, typeKind: TypeKind): Element | null {
    const currentKindIndex = DATA_TYPE_KIND_ORDER.indexOf(typeKind);
    if (currentKindIndex < 0) {
        return null;
    }

    for (let index = currentKindIndex + 1; index < DATA_TYPE_KIND_ORDER.length; index++) {
        const nextKind = DATA_TYPE_KIND_ORDER[index];
        const firstElementOfNextKind = doc.querySelector(`${DATA_TYPE_TEMPLATES_TAG} > ${nextKind}`);
        if (firstElementOfNextKind) {
            return firstElementOfNextKind;
        }
    }

    return null;
}

export function findDataTypeTemplatesElement(doc: XMLDocument): Element | null {
    return doc.querySelector(DATA_TYPE_TEMPLATES_TAG);
}

/**
 * Find a DataType element by id.
 */
export function findDataTypeElement(doc: XMLDocument, id: string): Element {
    const element = doc.querySelector(`${DATA_TYPE_TEMPLATES_TAG} > [id="${CSS.escape(id)}"]`);
    if (!element) {
        throw new Error(`DataType with id ${id} not found`);
    }
    return element;
}

/**
 * Get all DataType elements in the document.
 */
export function listDataTypeElements(doc: XMLDocument): Element[] {
    return Array.from(doc.querySelectorAll(`${DATA_TYPE_TEMPLATES_TAG} > [id]`));
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
    } else if (typeKind === TypeKind.DAType || typeKind === TypeKind.EnumType) {
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
    if (!root) {
        return '';
    }

    const lookupNamespace = (root as Element & { lookupNamespaceURI?: (prefix: string | null) => string | null }).lookupNamespaceURI;
    if (typeof lookupNamespace === 'function') {
        return lookupNamespace.call(root, null) ?? root.namespaceURI ?? '';
    }

    return root.namespaceURI ?? '';
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
        const typeElement = doc.querySelector(`${DATA_TYPE_TEMPLATES_TAG} > [id="${CSS.escape(currentId)}"]`);
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
        <Header id="${escapeXmlAttr(headerId)}"/>
    </SCL>`;
    return parser.parseFromString(sclString, "application/xml");
}