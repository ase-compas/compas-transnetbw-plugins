export class FileSearchResult {
  constructor(
    private readonly _uuid: string,
    private readonly _filename: string,
    private readonly _author: string,
    private readonly _type: string,
    private readonly _date: Date,
    private readonly _version: string,
  ) {
  }

  get uuid(): string {
    return this._uuid;
  }

  get filename(): string {
    return this._filename;
  }

  get author(): string {
    return this._author;
  }

  get type(): string {
    return this._type;
  }

  get date(): Date {
    return this._date;
  }

  get version(): string {
    return this._version;
  }
}
