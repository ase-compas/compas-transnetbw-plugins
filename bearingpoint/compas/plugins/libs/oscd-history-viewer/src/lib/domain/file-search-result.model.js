"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSearchResult = void 0;
class FileSearchResult {
    constructor(_uuid, _filename, _author, _type, _date, _version, _comment, _archived, _available) {
        this._uuid = _uuid;
        this._filename = _filename;
        this._author = _author;
        this._type = _type;
        this._date = _date;
        this._version = _version;
        this._comment = _comment;
        this._archived = _archived;
        this._available = _available;
    }
    get uuid() {
        return this._uuid;
    }
    get filename() {
        return this._filename;
    }
    get author() {
        return this._author;
    }
    get type() {
        return this._type;
    }
    get date() {
        return this._date;
    }
    get version() {
        return this._version;
    }
    get comment() {
        return this._comment;
    }
    get archived() {
        return this._archived;
    }
    get available() {
        return this._available;
    }
}
exports.FileSearchResult = FileSearchResult;
//# sourceMappingURL=file-search-result.model.js.map