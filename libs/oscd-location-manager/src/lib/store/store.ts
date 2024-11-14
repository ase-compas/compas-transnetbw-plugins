import { writable, get } from 'svelte/store';
import {type Location} from "@oscd-transnet-plugins/oscd-archiving-api-client";

export class LocationStore {
  #data = writable<Location[]>([]);

  get store() {
    return this.#data;
  }

  public set(locations: Location[]) {
    this.#data.set(locations);
  }

  public update(location: Location) {
    this.#data.update((d) => d.map((data) => data.uuid === location.uuid ? location : data));
  }

  public add(location: Location) {
    this.#data.update((d) => [...d, location]);
  }

  public remove(uuid: string) {
    this.#data.update((d) => d.filter((data) => data.uuid !== uuid));
  }

  public findById(uuid: string) {
    return get(this.#data).find((data) => data.uuid === uuid);
  }
}
