import type {
  UploadDataNextVersionTypeEnum
} from '@oscd-transnet-plugins/api-compas-custom-resource'

export interface DefaultTypeFilterParam {
  kind?: TypeKind
  instance?: string;
  page?: number;
  size?: number;
}

export interface DefaultTypeUploadParams {
  kind: TypeKind;
  instance: string;
  description?: string;
  doc: XMLDocument;
  nextVersionType?: UploadDataNextVersionTypeEnum
}

export interface DefaultType {
  id: string;
  kind: TypeKind;
  instance: string;
  description?: string
  version: string;
  dataCompatibilityVersion: string;
  updatedAt: Date
}

export interface DefaultTypeUploadResponse {
  id?: string;
  name?: string
  version?: string;
  uploadedAt: Date;
}


export interface DefaultTypeDetails extends DefaultType {
  doc: XMLDocument
}

export interface DefaultTypeList {
  content?: Array<DefaultType>;
  totalElements?: number;
  totalPages?: number;
  page?: number;
  size?: number;
}


