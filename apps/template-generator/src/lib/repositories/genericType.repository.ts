import {
  buildInsert,
  buildRemove,
  createAndDispatchEditEvent,
} from '@oscd-transnet-plugins/oscd-event-api';
import { getDataTypeTemplateElement } from '../utils/scdUtils';

type Mapper<T> = {
  fromElement: (el: Element) => T;
  toElement: (doc: XMLDocument, obj: T) => Element;
};

export abstract class GenericCrudTypeRepository<T> {
  protected doc: XMLDocument;
  protected hostElement: HTMLElement;
  protected tagName: string;
  protected mapper: Mapper<T>;

  protected constructor(
    doc: XMLDocument,
    hostElement: HTMLElement,
    tagName: string,
    mapper: Mapper<T>
  ) {
    this.doc = doc;
    this.hostElement = hostElement;
    this.tagName = tagName;
    this.mapper = mapper;
  }

  setDocument(doc: XMLDocument): void {
    this.doc = doc;
  }

  findAll(): T[] {
    const elements = Array.from(this.doc.querySelectorAll(this.tagName));
    return elements.map((el) => this.mapper.fromElement(el));
  }

  findById(id: string): T | null {
    const el = this.doc.querySelector(`${this.tagName}[id="${id}"]`);
    return el ? this.mapper.fromElement(el) : null;
  }

  insert(item: T): void {
    const el = this.mapper.toElement(this.doc, item);
    const dataTypeTemplate = getDataTypeTemplateElement(this.doc);
    if (!dataTypeTemplate) {
      console.error('DataTypeTemplates element not found in XML document.');
      return;
    }
    const referenceElement = this.getInsertReferenceElement();
    const edit = buildInsert(dataTypeTemplate, el, referenceElement);
    createAndDispatchEditEvent(this.hostElement, edit);
  }

  update(updated: T & { id: string }): void {
    const oldEl = this.doc.querySelector(`${this.tagName}[id="${updated.id}"]`);
    if (oldEl) {
      const newEl = this.mapper.toElement(this.doc, updated);
      this.hostElement.replaceChild(newEl, oldEl);
    }
    // TODO: implement
    console.warn(
      'Update operation not implemented yet. Please implement the update logic.'
    );
  }

  delete(id: string): void {
    const el = this.doc.querySelector(`${this.tagName}[id="${id}"]`);
    if (!el) {
      console.error(
        `Remove failed. Could not find ${this.tagName} with id:`,
        id
      );
      return;
    }
    const edit = buildRemove(el);
    createAndDispatchEditEvent(this.hostElement, edit);
  }

  // Abstract method to be implemented by subclasses
  protected getInsertReferenceElement(): Element | null {
    const dataTypeTemplate = getDataTypeTemplateElement(this.doc);
    if (!dataTypeTemplate) {
      console.error('DataTypeTemplates element not found in XML document.');
      return;
    }
    return dataTypeTemplate.querySelector(this.tagName) ?? null;
  }
}
