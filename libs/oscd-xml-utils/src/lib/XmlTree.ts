
export class XmlNode {
  tag: string;
  attributes: { [key: string]: string };
  text: string;
  children: XmlNode[];
  reference?: XmlNode | null;

  constructor(
    tag: string,
    attributes: { [key: string]: string } = {},
    text = "",
    children: XmlNode[] = []
  ) {
    this.tag = tag;
    this.attributes = attributes;
    this.text = text;
    this.children = children;
  }
}


export function createXmlNode(node: Element): XmlNode {
  const tag = node.tagName;
  const attributes: { [key: string]: string } = {};
  for (const attr of Array.from(node.attributes)) {
    attributes[attr.name] = attr.value;
  }

  const text = node.children.length === 0 ? node.textContent.trim() : "";
  const children: XmlNode[] = Array.from(node.children).map(createXmlNode);

  return new XmlNode(tag, attributes, text, children);
}


export function resolveReferences(doc: XMLDocument, node: XmlNode, idRegistry = new Map<string, XmlNode>()) {
  if (!node) return;

  if (node.tag === 'DO') {
    resolveDataTypeReferences(doc, node, idRegistry);
  } else if (node.tag == 'DA' || node.tag == 'SDA') {
    resolveDataAttributeTypeReferences(doc, node, idRegistry)
  }

  node.children?.forEach(child => {
    resolveReferences(doc, child, idRegistry);
  });
}

function resolveDataAttributeTypeReferences(doc: XMLDocument, node: XmlNode, idRegistry: Map<string, XmlNode>) {
  const bType = node.attributes?.bType;
  const typeId = node.attributes?.type;
  if (!typeId || !bType) return;

  if (bType === 'Struct') {
    const cachedReference = idRegistry.get(typeId);
    if (cachedReference) {
      node.reference = cachedReference;
    } else {
      const newRef = doc.querySelector(`:scope > DataTypeTemplates > DAType[id="${typeId}"]`);
      if (!newRef) return;

      const newNode = createXmlNode(newRef);
      idRegistry.set(typeId, newNode);

      // Resolve nested BDAs
      newNode.children?.forEach(child => {
        if (child.tag === 'BDA') {
          resolveDataAttributeTypeReferences(doc, child, idRegistry);
        }
      });

      node.reference = newNode;
    }
  } else if (bType === 'Enum') {
    const cachedReference = idRegistry.get(typeId);
    if (cachedReference) {
      node.reference = cachedReference;
    } else {
      const newRef = doc.querySelector(`:scope > DataTypeTemplates > EnumType[id="${typeId}"]`);
      if (!newRef) return;

      const newNode = createXmlNode(newRef);
      idRegistry.set(typeId, newNode);
      node.reference = newNode;
    }
  }
}

function resolveDataTypeReferences(doc: XMLDocument, node: XmlNode, idRegistry: Map<string, XmlNode>) {
  const typeId = node.attributes?.type;
  if (!typeId) return;

  const cachedReference = idRegistry.get(typeId);
  if (cachedReference) {
    node.reference = cachedReference;
  } else {
    const newRef = doc.querySelector(`:scope > DataTypeTemplates > DOType[id="${typeId}"]`);
    if (!newRef) return;

    const newNode = createXmlNode(newRef);
    idRegistry.set(typeId, newNode);
    resolveReferences(doc, newNode, idRegistry);
    node.reference = newNode;
  }
}
