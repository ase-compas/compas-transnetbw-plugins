import { writable, get } from 'svelte/store';

export class TemplateStore {
  private static instance: TemplateStore;
  #doc = writable<XMLDocument | null>(null);
  #selectedLNodeTypeId = writable<string | null>(null);

  private constructor() {

  }

  static getInstance() {
    if (!TemplateStore.instance) {
      TemplateStore.instance = new TemplateStore();
    }
    return TemplateStore.instance;
  }

  setDoc(doc: XMLDocument | null) {
    this.#doc.set(doc);
  }

  getDoc() {
    return get(this.#doc);
  }

  setSelectedLNodeTypeId(id: string | null) {
    this.#selectedLNodeTypeId.set(id);
  }

  getSelectedLNodeTypeId() {
    return this.#selectedLNodeTypeId;
  }

  reset() {
    this.#doc.set(null);
  }
}
