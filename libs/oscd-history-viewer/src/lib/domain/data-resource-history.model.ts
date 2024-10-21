import { FileSearchResult } from '@oscd-transnet-plugins/oscd-history-viewer';

export class DataResourceHistory {
  constructor(private readonly _versions: FileSearchResult[]) {}

  versions(): FileSearchResult[] {
    return this._versions;
  }
}
