import type {
  UploadDataNextVersionTypeEnum
} from '@oscd-transnet-plugins/api-compas-custom-resource'

export interface CreateDefaultTypeInfo {
    kind: TypeKind;
    instance: string;
    version: string;
};

export type DefaulteTypeSaveInfo =
    | {
          initialVersion: string;
          versionUpdate?: never;
          description?: string;
      }
    | {
          initialVersion?: never;
          versionUpdate: 'major' | 'minor' | 'patch';
          description?: string;
};

export interface CreateDefaultTypeDialogResult {
    action: 'create' | 'open-existing';
    kind?: TypeKind;
    instance?: string;
    initialVersion?: string;
    existingDefaultTypeId?: string;
  }

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
  version?: string; // only for create mode, ignored in edit mode
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

export interface DetailsConfig {
  includeHeader?: boolean;
}
