export declare class FileSearchResult {
    private readonly _uuid;
    private readonly _filename;
    private readonly _author;
    private readonly _type;
    private readonly _date;
    private readonly _version;
    private readonly _comment;
    private readonly _archived;
    private readonly _available;
    constructor(_uuid: string, _filename: string, _author: string, _type: string, _date: Date, _version: string, _comment: string, _archived: boolean, _available: boolean);
    get uuid(): string;
    get filename(): string;
    get author(): string;
    get type(): string;
    get date(): Date;
    get version(): string;
    get comment(): string;
    get archived(): boolean;
    get available(): boolean;
}
