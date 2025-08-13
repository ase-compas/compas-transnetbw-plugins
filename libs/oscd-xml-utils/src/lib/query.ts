/**
 * Get element by id attribute
 */
export function getElementById(doc: XMLDocument, id: string): Element | null {
  return doc.querySelector(`[id="${id}"]`);
}

/**
 * Query elements by tag name (returns all matching elements in the document or under a given element)
 * @param root -
 * @param tagName - Tag name to search for (case-insensitive)
 */
export function queryElementsByTagName(
  root: Document,
  tagName: string
): Element[] {
  return Array.from(root.getElementsByTagName(tagName));
}

/**
 * Convert NodeList to array and return elements matching selector
 */
export function querySelectorAll(
  doc: XMLDocument,
  selector: string
): Element[] {
  return Array.from(doc.querySelectorAll(selector));
}

/**
 * Get element by id and confirm it matches the given tag name (case-insensitive)
 * Returns the element if both id and tag name match, otherwise null.
 */
export function getElementByIdAndTagName(
  doc: Document | XMLDocument,
  id: string,
  tagName: string
): Element | null {
  const el = doc.getElementById(id);
  if (el && el.tagName.toLowerCase() === tagName.toLowerCase()) {
    return el;
  }
  return null;
}

/**
 * Query elements by attribute presence or attribute value
 */
export function queryElementsByAttr(
  doc: XMLDocument,
  attrName: string,
  attrValue?: string
): Element[] {
  const selector = attrValue ? `[${attrName}="${attrValue}"]` : `[${attrName}]`;
  return querySelectorAll(doc, selector);
}

/**
 * Get all child elements of a given element
 * @param element
 */
export function getChildElements(element: Element): Element[] {
  return Array.from(element.children);
}
