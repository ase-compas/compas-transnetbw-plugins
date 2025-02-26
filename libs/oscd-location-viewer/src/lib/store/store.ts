import { writable, get } from 'svelte/store';
import {type DataResource} from "@oscd-transnet-plugins/oscd-history-api-client";

export class ResourceStore {
  #data = writable<DataResource[]>([]);

  get store() {
    return this.#data;
  }

  public set(dataResources: DataResource[]) {
    this.#data.set(dataResources);
  }

  public update(dataResource: DataResource) {
    this.#data.update((d) =>
      d.map((data) => data.uuid === dataResource.uuid ? dataResource : data));
  }

  public add(dataResource: DataResource) {
    this.#data.update((d) => [...d, dataResource]);
  }

  public remove(uuid: string) {
    this.#data.update((d) => d.filter((data) => data.uuid !== uuid));
  }

  public findById(uuid: string) {
    return get(this.#data).find((data) => data.uuid === uuid);
  }
}
