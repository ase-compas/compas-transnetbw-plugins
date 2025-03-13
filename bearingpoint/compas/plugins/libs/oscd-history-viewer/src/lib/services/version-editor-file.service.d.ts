import { Observable } from 'rxjs';
import { FileSearchResult, SearchParams } from '../domain';
export declare class VersionEditorFileService {
    private static instance;
    private endpoint;
    private constructor();
    static getInstance(): VersionEditorFileService;
    searchFiles(params: SearchParams): Observable<FileSearchResult[]>;
    getHistoryFiles(uuid: string): Observable<any[]>;
    downloadSclData(uuid: string, type: string, version: string): Observable<Blob>;
    private mapToFileSearchResult;
    private mapToDataResourceSearch;
    private generateApiClient;
}
