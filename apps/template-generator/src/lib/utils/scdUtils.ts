
export function getDataTypeTemplateElement(doc: XMLDocument): Element | null {
  if (!doc) return null;
  const dataTypeTemplates = doc.querySelector('DataTypeTemplates');
  return dataTypeTemplates ? dataTypeTemplates : null;
}
