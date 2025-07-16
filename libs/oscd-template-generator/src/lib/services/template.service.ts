import { getElementById } from '@oscd-transnet-plugins/oscd-xml-utils';
import {
  buildInsert,
  buildRemove,
  createAndDispatchEditEvent,
} from '@oscd-transnet-plugins/oscd-event-api';
import {
  type DataObject,
  type DAType,
  type DOType,
  type EnumType,
  type EnumVal,
  type LogicalNodeType,
  type SimpleLogicalNodeType,
  type SimpleLogicalNodeTypeListItem,
} from '../domain/';

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
      const refCount = lNodeType.querySelectorAll('DO').length;
      result.push({
        id: id,
        lnClass: lNodeType.getAttribute('lnClass') || '',
        references: refCount,
      });
    });

    return result;
  };

  /**
   * Gets logical node type by id.
   * @param doc
   * @param id
   */
  public getLogicalNodeTypeById = (
    doc: XMLDocument,
    id: string
  ): SimpleLogicalNodeType | null => {
    if (!doc) return null;

    const dataTypeTemplates = doc.querySelector('DataTypeTemplates');
    if (!dataTypeTemplates) return null;

    const lNodeType = dataTypeTemplates.querySelector(`LNodeType[id="${id}"]`);
    if (!lNodeType) return null;

    return {
      id: lNodeType.getAttribute('id') || '',
      lnClass: lNodeType.getAttribute('lnClass') || '',
    };
  };

  public getLogicalNodeTypeByIdWithChildren = (
    doc: XMLDocument,
    id: string
  ): LogicalNodeType | null => {
    const lNodeTypeEl = Array.from(doc.getElementsByTagName('LNodeType')).find(
      (el) => el.getAttribute('id') === id
    );

    if (!lNodeTypeEl) return null;

    const lnClass = lNodeTypeEl.getAttribute('lnClass') ?? '';

    const children: DataObject[] = Array.from(
      lNodeTypeEl.getElementsByTagName('DO')
    ).map((doEl) => ({
      name: doEl.getAttribute('name') ?? '',
      desc: doEl.getAttribute('desc') ?? '',
      type: doEl.getAttribute('type') ?? '',
    }));

    return {
      id,
      lnClass,
      children,
    };
  };

  public getAllDOTypes = (doc: XMLDocument): DOType[] => {
    const doTypeEls = Array.from(doc.getElementsByTagName('DOType'));

    return doTypeEls.map((doTypeEl) => {
      const id = doTypeEl.getAttribute('id') ?? '';
      const cdc = doTypeEl.getAttribute('cdc') ?? '';

      const childrenEls = Array.from(doTypeEl.children).filter(
        (el) => el.tagName === 'DA' || el.tagName === 'BDA'
      );

      const children = childrenEls.map((child) => ({
        name: child.getAttribute('name') ?? '',
        type: child.getAttribute('type') ?? '',
        bType: child.getAttribute('bType') ?? '',
        tag: child.tagName as 'DA' | 'BDA',
      }));

      return { id, cdc, children };
    });
  };

  public getAllDATypes = (doc: XMLDocument): DAType[] => {
    const daTypeEls = Array.from(doc.getElementsByTagName('DAType'));
    return daTypeEls.map((daTypeEl) => ({
      id: daTypeEl.getAttribute('id') ?? '',
    }));
  };

  public getAllEnumTypes = (doc: XMLDocument): EnumType[] => {
    const enumTypeEls = Array.from(doc.getElementsByTagName('EnumType'));

    return enumTypeEls.map((enumTypeEl) => {
      const id = enumTypeEl.getAttribute('id') ?? '';

      const values: EnumVal[] = Array.from(
        enumTypeEl.getElementsByTagName('EnumVal')
      ).map((enumValEl) => ({
        ord: enumValEl.getAttribute('ord') ?? '',
        val: enumValEl.textContent?.trim() ?? '',
      }));

      return { id, values };
    });
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
  public duplicateLogicalNodeType(
    doc: XMLDocument,
    host: HTMLElement,
    logicalNodeTypeId: string
  ): void {
    if (this.warnIfHostNotSet(host, 'duplicateLogicalNodeType')) return;
    const dataTypeTemplates = doc.querySelector('DataTypeTemplates');
    if (!dataTypeTemplates) {
      console.error('No DataTypeTemplates found.');
      return;
    }

    const lNodeType = dataTypeTemplates.querySelector(
      `LNodeType[id="${logicalNodeTypeId}"]`
    );
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

    // Reference element, add duplicate as the first child of DataTypeTemplates
    const reference = dataTypeTemplates.firstElementChild ?? null;

    const edit = buildInsert(dataTypeTemplates, clone, reference);
    createAndDispatchEditEvent(host, edit);
  }

  /**
   * Deletes an `LNodeType` element from the given XML document by its id.
   *
   * @param doc - The XML document containing the `LNodeType` to delete.
   * @param host - The host element used to dispatch the edit event.
   * @param logicalNodeTypeId - The id of the `LNodeType` to delete.
   */
  public deleteLogicalNodeType(
    doc: XMLDocument,
    host: HTMLElement,
    logicalNodeTypeId: string
  ): void {
    if (this.warnIfHostNotSet(host, 'deleteLogicalNodeType')) return;
    const element = getElementById(doc, logicalNodeTypeId);
    if (!element) {
      console.error(
        'Remove failed. Could not find logical node type with id:',
        logicalNodeTypeId
      );
      return;
    }

    const edit = buildRemove(element);
    createAndDispatchEditEvent(host, edit);
  }

  /**
   * Warns if the host element is not set.
   * @param host - The host element.
   * @param action - The action being performed.
   */
  private warnIfHostNotSet(host: HTMLElement, action: string): boolean {
    if (!host) {
      console.warn(
        `Host element is not set. Action "${action}" cannot be performed. This action only works in the context of an editor (integrated as plugin).`
      );
      return true;
    }
    return false;
  }
}

export const templateService = new TemplateService();
