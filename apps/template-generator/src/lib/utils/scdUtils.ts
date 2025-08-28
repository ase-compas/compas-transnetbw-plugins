
export function getDataTypeTemplateElement(doc: XMLDocument): Element | null {
  if (!doc) return null;
  const dataTypeTemplates = doc.querySelector('DataTypeTemplates');
  return dataTypeTemplates ? dataTypeTemplates : null;
}

export function findElementByTagAndId(doc: XMLDocument, tagName: string, id: string): Element | null {
  if (!doc) return null;
  const element = doc.querySelector(`${tagName}[id="${id}"]`);
  return element ? element : null;
}
