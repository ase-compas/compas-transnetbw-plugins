import type { InsertV2, RemoveV2, SetAttributesV2, SetTextContentV2 } from './types';

/**
 * Creates an InsertV2 edit object.
 * @param parent The parent node where the new node will be inserted.
 * @param node The node to insert.
 * @param reference If the reference is not null, the node will be inserted before the reference node.
 */
export function buildInsert(
  parent: Node,
  node: Node,
  reference: Node | null = null
): InsertV2 {
  return { parent, node, reference };
}

/**
 * Creates a RemoveV2 edit object.
 * @param node The node to remove.
 */
export function buildRemove(node: Node): RemoveV2 {
  return { node };
}

/**
 * Creates a SetAttributesV2 edit object.
 * @param element The element whose attributes will be set.
 * @param attrs A record of attributes to set (key-value pairs).
 */
export function buildSetAttributes(
  element: Element,
  attrs: Partial<Record<string, string | null>>
): SetAttributesV2 {
  return {
    element,
    attributes: attrs,
    attributesNS: {},
  };
}

/**
 * Creates a SetTextContentV2 edit object.
 * @param element The element whose textContent will be set.
 * @param text The text to set.
 */
export function buildSetTextContent(
  element: Element,
  text: string
): SetTextContentV2 {
  return { element, textContent: text };
}
