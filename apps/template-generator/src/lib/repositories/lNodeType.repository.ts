
import type { LNodeType } from '../domain';
import { LNodeTypeMapper } from '../mappers/lNodeType.mapper';
import { getDataTypeTemplateElement } from '../utils/scdUtils';
import {
  buildInsert,
  buildRemove,
  createAndDispatchEditEvent,
} from '@oscd-transnet-plugins/oscd-event-api';

export class LNodeTypeRepository {
  constructor(
    private doc: XMLDocument,
    private hostElement: HTMLElement // e.g., the root container of LNodeTypes
  ) {}

  findAll(): LNodeType[] {
    const elements = Array.from(this.doc.querySelectorAll('LNodeType'));
    return elements.map(el => LNodeTypeMapper.fromElement(el));
  }

  findById(id: string): LNodeType | null {
    const el = this.doc.querySelector(`LNodeType[id="${id}"]`);
    return el ? LNodeTypeMapper.fromElement(el) : null;
  }

  insert(ln: LNodeType): void {
    const el = LNodeTypeMapper.toElement(this.doc, ln);
    const dataTypeTemplate = getDataTypeTemplateElement(this.doc);
    if (!dataTypeTemplate) {
      console.error('DataTypeTemplates element not found in XML document.');
      return;
    }

    const edit = buildInsert(dataTypeTemplate, el, dataTypeTemplate.firstElementChild);
    createAndDispatchEditEvent(this.hostElement, edit);
  }

  update(updated: LNodeType): void {
    const oldEl = this.doc.querySelector(`LNodeType[id="${updated.id}"]`);
    if (oldEl) {
      const newEl = LNodeTypeMapper.toElement(this.doc, updated);
      this.hostElement.replaceChild(newEl, oldEl);
    }
  }

  delete(id: string): void {
    const el = this.doc.querySelector(`LNodeType[id="${id}"]`);
    if (!el) {
      console.error(
        'Remove failed. Could not find logical node type with id:',
        id
      );
      return;
    }

    const edit = buildRemove(el);
    createAndDispatchEditEvent(this.hostElement, edit);
  }
}
