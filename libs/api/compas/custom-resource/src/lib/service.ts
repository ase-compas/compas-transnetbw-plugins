import type {
  DataEntry,
  DataEntryWithContent,
  PagedDataEntryResponse,
  UploadDataResponse,
  UploadDataContentTypeEnum,
  UploadDataNextVersionTypeEnum,
} from '../generated';
import type { PluginsCustomResourcesApi } from '../generated';

export interface ListDataParams {
  type: string;
  uploadedAfter?: Date;
  uploadedBefore?: Date;
  name?: string;
  page?: number;
  size?: number;
};

export interface UploadDataParams {
  type: string;
  name: string;
  contentType: UploadDataContentTypeEnum;
  content: Blob;
  dataCompatibilityVersion: string;
  description?: string;
  version?: string;
  nextVersionType?: UploadDataNextVersionTypeEnum;
};

export interface CustomResourceService {
  listData(params: ListDataParams): Promise<PagedDataEntryResponse>;
  getById(id: string): Promise<DataEntryWithContent>;
  getLatestByType(dataType: string): Promise<DataEntry[]>;
  getLatestByTypeAndName(dataType: string, name: string): Promise<DataEntryWithContent>;
  upload(params: UploadDataParams): Promise<UploadDataResponse>;
  deleteByType(dataType: string): Promise<void>;
  deleteByTypeAndName(dataType: string, name: string): Promise<void>;
}

export function createCustomResourceService(
  api: PluginsCustomResourcesApi,
): CustomResourceService {
  return {
    listData: (params) => api.getAllData(params),
    getById: (id) => api.getDataById({ id }),
    getLatestByType: (dataType) => api.getLatestDataByType({ dataType }),
    getLatestByTypeAndName: (dataType, name) => api.getLatestDataByTypeAndName({ dataType, name }),
    upload: (params) => api.uploadData(params),
    deleteByType: (dataType) => api.deleteDataByType({ id: dataType }),
    deleteByTypeAndName: (dataType, name) => api.deleteDataByTypeAndName({ dataType, name }),
  };
}
