import { get, writable } from 'svelte/store';

export class LocationStore {
  private static instance: LocationStore;

  private constructor() {
    //
  }

  public static getInstance() {
    if (!LocationStore.instance) {
      LocationStore.instance = new LocationStore();
    }
    return LocationStore.instance;
  }

  #data = writable<Map<string, string>>(new Map());

  get store() {
    return this.#data;
  }

  public updateData(data: Map<string, string>) {
    this.#data.set(data);
  }

  /**
   * Get location name by key.
   */
  public getLocationNameByKey(key: string) {
    return get(this.#data).get(key);
  }
}
