import type { ResourceTag } from '@oscd-transnet-plugins/oscd-archiving-api-client';

export class ArchiveSearchResult {
  constructor(
    private readonly _uuid: string,
    private readonly _name: string,
    private readonly _note: string,
    private readonly _author: string,
    private readonly _approver: string,
    private readonly _type: string,
    private readonly _voltage: string,
    private readonly _modifiedAt: string,
    private readonly _archivedAt: string,
    private readonly _contentType: string,
    private readonly _version: string,
    private readonly _fields: ResourceTag[]
  ) {}

  get uuid(): string {
    return this._uuid;
  }

  get filename(): string {
    return this._name;
  }

  get author(): string {
    return this._author;
  }

  get version(): string {
    return this._version;
  }

  get type(): string {
    return this._type;
  }

  get name(): string {
    return this._name;
  }

  get note(): string {
    return this._note;
  }

  get approver(): string {
    return this._approver;
  }

  get voltage(): string {
    return this._voltage;
  }

  get modifiedAt(): string {
    return this._modifiedAt;
  }

  get archivedAt(): string {
    return this._archivedAt;
  }

  get contentType(): string {
    return this._contentType;
  }

  get fields(): ResourceTag[] {
    return this._fields;
  }
}
