import { get, writable } from 'svelte/store';

export class ArchiveExplorerLocationStore {
  private static instance: ArchiveExplorerLocationStore;

  private constructor() {
    //
  }

  public static getInstance() {
    if (!ArchiveExplorerLocationStore.instance) {
      ArchiveExplorerLocationStore.instance =
        new ArchiveExplorerLocationStore();
    }
    return ArchiveExplorerLocationStore.instance;
  }

  #data = writable<Map<string, string>>(new Map());

  get store() {
    return this.#data;
  }

  public updateData(data: Map<string, string>) {
    this.#data.set(data);
  }

  public getLocationNameByUuid(uuid: string) {
    return get(this.#data).get(uuid);
  }
}
