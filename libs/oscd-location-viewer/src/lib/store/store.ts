import { writable, get } from 'svelte/store';
import {type ArchivedResource} from "@oscd-transnet-plugins/oscd-archiving-api-client";

export class ArchivedResourceStore {
  #data = writable<ArchivedResource[]>([]);

  get store() {
    return this.#data;
  }

  public set(archivedResource: ArchivedResource[]) {
    this.#data.set(archivedResource);
  }

  public update(archivedResource: ArchivedResource) {
    this.#data.update((d) =>
      d.map((data) => data.uuid === archivedResource.uuid ? archivedResource : data));
  }

  public add(archivedResource: ArchivedResource) {
    this.#data.update((d) => [...d, archivedResource]);
  }

  public remove(uuid: string) {
    this.#data.update((d) => d.filter((data) => data.uuid !== uuid));
  }

  public findById(uuid: string) {
    return get(this.#data).find((data) => data.uuid === uuid);
  }
}
