import { get, writable } from 'svelte/store';
import type { ActiveFilter } from '@oscd-transnet-plugins/oscd-component';

export class FilterStore {
  private static instance: FilterStore;

  private constructor() {
    //
  }

  public static getInstance() {
    if (!FilterStore.instance) {
      FilterStore.instance = new FilterStore();
    }
    return FilterStore.instance;
  }

  #data = writable<ActiveFilter[]>([]);

  get store() {
    return this.#data;
  }

  get currentData() {
    return get(this.#data);
  }

  updateData(filters: ActiveFilter[]) {
    this.#data.set(filters);
  }
}
