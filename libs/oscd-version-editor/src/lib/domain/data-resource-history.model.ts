import { FileSearchResult } from '@oscd-transnet-plugins/oscd-version-editor';

export class DataResourceHistory {
  constructor(private readonly _versions: FileSearchResult[]) {}

  versions(): FileSearchResult[] {
    return this._versions;
  }
}
