import { type SimpleLogicalNodeTypeListItem } from '../domain';

class TemplateService {
  /**
   * Extracts all logical node types from the given XML document.
   * @param doc
   */
  public getAllLogicalNodeTypes = (
    doc: XMLDocument
  ): SimpleLogicalNodeTypeListItem[] => {
    const result: SimpleLogicalNodeTypeListItem[] = [];

    if (!doc) return result;

    const dataTypeTemplates = doc.querySelector('DataTypeTemplates');
    if (!dataTypeTemplates) return result;

    const lNodeTypes = dataTypeTemplates.querySelectorAll('LNodeType');
    lNodeTypes.forEach((lNodeType) => {
      const id = lNodeType.getAttribute('id') || '';
      const refCount = doc.querySelectorAll(`[lnType="${id}"]`).length;
      result.push({
        id: id,
        lnClass: lNodeType.getAttribute('lnClass') || '',
        references: refCount,
      });
    });

    return result;
  };

  public duplicateLogicalNodeType(doc: XMLDocument, id: string): void {
    // TODO: Implement the logic to duplicate a logical node type
    return null;
  }

  public deleteLogicalNodeType(doc: XMLDocument, id: string): void {
    // TODO: Implement the logic to duplicate a logical node type
    return null;
  }
}

export const templateService = new TemplateService();
