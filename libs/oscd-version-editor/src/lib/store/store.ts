import { writable, get } from "svelte/store"
import { FileSearchResult } from '@oscd-transnet-plugins/oscd-version-editor';

export class VersionEditorStore  {
  #data = writable<FileSearchResult[]>([])

  get store() {
    return this.#data
  }

  public updateData(data: FileSearchResult[]) {
    this.#data.set(data)
  }

  public addData(data: FileSearchResult) {
    this.#data.update((d) => [...d, data])
  }

  public removeData(uuid: string) {
    this.#data.update((d) => d.filter((data) => data.uuid !== uuid))
  }

  public getData(uuid: string) {
    return get(this.#data).find((data) => data.uuid === uuid)
  }
}
