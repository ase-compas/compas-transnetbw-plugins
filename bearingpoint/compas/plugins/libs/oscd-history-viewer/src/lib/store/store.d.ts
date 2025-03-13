/// <reference types="svelte" />
import { FileSearchResult } from '@oscd-transnet-plugins/oscd-history-viewer';
export declare class VersionEditorStore {
    #private;
    get store(): import("svelte/store").Writable<FileSearchResult[]>;
    updateData(data: FileSearchResult[]): void;
    addData(data: FileSearchResult): void;
    removeData(uuid: string): void;
    getData(uuid: string): FileSearchResult;
}
