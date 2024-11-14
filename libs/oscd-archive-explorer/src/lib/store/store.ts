import { writable } from 'svelte/store';
import { ArchiveSearchResult } from '../domain/archive-search-result.model';

export class ArchiveExplorerStore {
  private static instance: ArchiveExplorerStore;

  private constructor() {
    //
  }

  public static getInstance() {
    if (!ArchiveExplorerStore.instance) {
      ArchiveExplorerStore.instance = new ArchiveExplorerStore();
    }
    return ArchiveExplorerStore.instance;
  }

  #data = writable<Map<string, ArchiveSearchResult[]>>(new Map());

  get store() {
    return this.#data;
  }

  public updateData(data: Map<string, ArchiveSearchResult[]>) {
    this.#data.set(data);
  }
}
