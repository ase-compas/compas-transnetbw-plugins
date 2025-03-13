"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionEditorFileService = void 0;
const rxjs_1 = require("rxjs");
const domain_1 = require("../domain");
const oscd_history_api_client_1 = require("@oscd-transnet-plugins/oscd-history-api-client");
class VersionEditorFileService {
    constructor() {
        this.endpoint = 'http://localhost:9090/compas-scl-data-service';
    }
    static getInstance() {
        if (!VersionEditorFileService.instance) {
            VersionEditorFileService.instance = new VersionEditorFileService();
        }
        return VersionEditorFileService.instance;
    }
    searchFiles(params) {
        const sclApiClient = this.generateApiClient(this.endpoint);
        return sclApiClient
            .searchForResources({
            dataResourceSearch: this.mapToDataResourceSearch(params),
        })
            .pipe((0, rxjs_1.filter)((response) => !!response || !!response.results), (0, rxjs_1.map)((response) => response.results), (0, rxjs_1.map)((data) => data.map((item) => this.mapToFileSearchResult(item))));
    }
    getHistoryFiles(uuid) {
        const sclApiClient = this.generateApiClient(this.endpoint);
        return sclApiClient
            .retrieveDataResourceHistory({
            id: uuid,
        })
            .pipe((0, rxjs_1.filter)((response) => !!response || !!response.versions), (0, rxjs_1.map)((response) => response.versions), (0, rxjs_1.map)((data) => data.map((item) => this.mapToFileSearchResult(item))));
    }
    downloadSclData(uuid, type, version) {
        const sclApiClient = this.generateApiClient(this.endpoint);
        return sclApiClient.retrieveDataResourceByVersion({
            id: uuid,
            version: version,
        });
    }
    mapToFileSearchResult(data) {
        console.log("data", data);
        return new domain_1.FileSearchResult(data.uuid, data.name, data.author, data.type, new Date(data.changedAt), data.version, data.comment, data.archived, data.available);
    }
    mapToDataResourceSearch(params) {
        return {
            uuid: params.uuid || null,
            type: params.type || null,
            name: params.filename || null,
            author: params.author || null,
            from: params.from || null,
            to: params.to || null,
        };
    }
    generateApiClient(url) {
        const config = new oscd_history_api_client_1.Configuration({
            basePath: url,
            // accessToken: authInfo.token,
        });
        return new oscd_history_api_client_1.HistoryApi(config);
    }
}
exports.VersionEditorFileService = VersionEditorFileService;
//# sourceMappingURL=version-editor-file.service.js.map