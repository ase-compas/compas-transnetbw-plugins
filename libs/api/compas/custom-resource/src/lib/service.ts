import type {
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
  upload(params: UploadDataParams): Promise<UploadDataResponse>;
}

export function createCustomResourceService(
  api: PluginsCustomResourcesApi,
): CustomResourceService {
  return {
    listData: (params) => api.getAllData(params),
    getById: (id) => api.getDataById({ id }),
    upload: (params) => api.uploadData(params),
  };
}
