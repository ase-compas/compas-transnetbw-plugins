import type { EditV2 } from "libs/oscd-event-api/src/lib/types";
import { createElementInNS } from "./scl.utils";

const PRIVATE_TAG = 'Private';

/**
 * Map-like get operation for SCL `Private` elements.
 * Returns the text content of the first `Private[type="..."]` in the provided namespace inside `root`.
 */
export function get(root: ParentNode, namespace: string, key: string): string | null {
	return findPrivateByType(root, namespace, key)?.textContent ?? null;
}

/**
 * Map-like set operation for SCL `Private` elements.
 * Returns edit events to create or update a `Private[type="..."]` value.
 * If the value already matches, no edit event is returned.
 */
export function set(
	root: Element,
	namespace: string,
	key: string,
	textContent: string,
    reference: Node | null = null,
): EditV2[] {
	const existing = findPrivateByType(root, namespace, key);
	if (existing) {
		if (existing.textContent === textContent) {
			return [];
		}

		return [{
			element: existing,
			textContent,
		}];
	}

	const doc = root.ownerDocument;
	if (!doc) {
		return [];
	}

	const privateElement = createElementInNS(doc, namespace, PRIVATE_TAG);
	privateElement.setAttribute('type', key);
	privateElement.textContent = textContent;

	return [{
		parent: root,
		node: privateElement,
		reference,
	}];
}

/**
 * Map-like delete operation for SCL `Private` elements.
 */

export function del(root: ParentNode, namespace: string, key: string): boolean {
	const privateElement = findPrivateByType(root, namespace, key);
	if (!privateElement || !privateElement.parentNode) {
		return false;
	}

	privateElement.parentNode.removeChild(privateElement);
	return true;
}

export { del as delete };

export const privateSclUtils = {
	get,
	set,
	delete: del,
};

function findPrivateByType(root: ParentNode, namespace: string, key: string): Element | null {
	if (!('getElementsByTagNameNS' in root)) {
		return null;
	}

	const privateElements = Array.from(
		(root as Document | Element).getElementsByTagNameNS(namespace, PRIVATE_TAG),
	);

	return privateElements.find((element) => element.getAttribute('type') === key) ?? null;
}
