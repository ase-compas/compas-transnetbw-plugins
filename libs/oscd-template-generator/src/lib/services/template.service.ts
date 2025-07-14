import { type SimpleLogicalNodeTypeListItem } from '../domain';
import { getElementById } from '@oscd-transnet-plugins/oscd-xml-utils'
import { buildRemove, buildInsert, createAndDispatchEditEvent } from '@oscd-transnet-plugins/oscd-event-api';

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

  /**
   * Duplicates an `LNodeType` element in the given XML document.
   * The duplicate will have a unique id following the pattern `id_copy1`, `id_copy2`, etc.
   * The new element is inserted into the `DataTypeTemplates` section.
   *
   * @param doc - The XML document containing the `LNodeType` to duplicate.
   * @param host - The host element used to dispatch the edit event.
   * @param logicalNodeTypeId - The id of the `LNodeType` to duplicate.
   */
  public duplicateLogicalNodeType(doc: XMLDocument, host: HTMLElement, logicalNodeTypeId: string): void {
    const dataTypeTemplates = doc.querySelector('DataTypeTemplates');
    if (!dataTypeTemplates) {
      console.error('No DataTypeTemplates found.');
      return;
    }

    const lNodeType = dataTypeTemplates.querySelector(`LNodeType[id="${logicalNodeTypeId}"]`);
    if (!lNodeType) {
      console.error('LNodeType not found:', logicalNodeTypeId);
      return;
    }

    // Generate a unique id
    const baseId = logicalNodeTypeId + '_copy';
    let newId = baseId;
    let counter = 2;
    while (doc.getElementById(newId)) {
      newId = `${baseId}${counter}`;
      counter++;
    }

    // Clone and update id
    const clone = lNodeType.cloneNode(true) as Element;
    clone.setAttribute('id', newId);

    const edit = buildInsert(dataTypeTemplates, clone);
    createAndDispatchEditEvent(host, edit);
  }

  /**
   * Deletes an `LNodeType` element from the given XML document by its id.
   *
   * @param doc - The XML document containing the `LNodeType` to delete.
   * @param host - The host element used to dispatch the edit event.
   * @param logicalNodeTypeId - The id of the `LNodeType` to delete.
   */
  public deleteLogicalNodeType(doc: XMLDocument, host: HTMLElement, logicalNodeTypeId: string): void {
    const element = getElementById(doc, logicalNodeTypeId)
    if (!element) {
      console.error("Remove failed. Could not find logical node type with id:", logicalNodeTypeId);
      return;
    }

    const edit = buildRemove(element);
    createAndDispatchEditEvent(host, edit)
  }
}

export const templateService = new TemplateService();
