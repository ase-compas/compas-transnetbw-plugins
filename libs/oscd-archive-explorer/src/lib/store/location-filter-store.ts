import { get, writable } from 'svelte/store';
import type { ActiveFilter } from '@oscd-transnet-plugins/oscd-component';

export class LocationFilterStore {
  private static instance: LocationFilterStore;

  private constructor() {
    //
  }

  public static getInstance() {
    if (!LocationFilterStore.instance) {
      LocationFilterStore.instance = new LocationFilterStore();
    }
    return LocationFilterStore.instance;
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
