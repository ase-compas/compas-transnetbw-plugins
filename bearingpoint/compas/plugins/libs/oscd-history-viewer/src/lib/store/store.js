"use strict";
var _VersionEditorStore_data;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionEditorStore = void 0;
const tslib_1 = require("tslib");
const store_1 = require("svelte/store");
class VersionEditorStore {
    constructor() {
        _VersionEditorStore_data.set(this, (0, store_1.writable)([]));
    }
    get store() {
        return tslib_1.__classPrivateFieldGet(this, _VersionEditorStore_data, "f");
    }
    updateData(data) {
        tslib_1.__classPrivateFieldGet(this, _VersionEditorStore_data, "f").set(data);
    }
    addData(data) {
        tslib_1.__classPrivateFieldGet(this, _VersionEditorStore_data, "f").update((d) => [...d, data]);
    }
    removeData(uuid) {
        tslib_1.__classPrivateFieldGet(this, _VersionEditorStore_data, "f").update((d) => d.filter((data) => data.uuid !== uuid));
    }
    getData(uuid) {
        return (0, store_1.get)(tslib_1.__classPrivateFieldGet(this, _VersionEditorStore_data, "f")).find((data) => data.uuid === uuid);
    }
}
exports.VersionEditorStore = VersionEditorStore;
_VersionEditorStore_data = new WeakMap();
//# sourceMappingURL=store.js.map