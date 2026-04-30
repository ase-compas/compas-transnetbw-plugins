import {type CustomResourceService, type PagedDataEntryResponse,} from '@oscd-transnet-plugins/api-compas-custom-resource';
import type {
  DefaultType,
  DefaultTypeDetails,
  DefaultTypeFilterParam,
  DefaultTypeList,
  DefaultTypeUploadParams,
  DefaultTypeUploadResponse,
} from '../types';
import { TypeKind } from '../../../shared/model';
import { UploadDataContentTypeEnum } from '@oscd-transnet-plugins/api-compas-custom-resource';
import { extractRootIdFromXml } from '../utils/default-type-scl.utils';

interface DefaultKey {
  kind: TypeKind;
  instance: string;
}

/**
 * Service for managing default types. The default types are stored as custom resources in the Compas Custom Resource Plugin.
 * The name of the custom resource is used to store the kind and instance of the default type in the format "kind:instance".
 * The content of the custom resource is the XML document of the default type.
 */
export class DefaultTypeService {

  static CUSTOM_RESOURCE_TYPE = "template-generator-default-type";
  static DATA_COMPATIBILITY_VERSION = "1.0.0"; // Default SCL format version

  constructor(private customResourceService: CustomResourceService) {}

  async listLatest(): Promise<DefaultTypeList> {
    let entries;
    try {
      entries = await this.customResourceService.getLatestByType(DefaultTypeService.CUSTOM_RESOURCE_TYPE);
    } catch (e) {
      if (this.isNotFoundError(e)) {
        return { content: [], totalElements: 0, totalPages: 0, page: 0, size: 0 };
      }
      throw e;
    }

    const content = entries.map((entry) => {
      const key = this.nameToKey(entry.name);
      return {
        id: entry.id,
        kind: key.kind,
        instance: key.instance,
        description: entry.description,
        version: entry.version,
        dataCompatibilityVersion: entry.dataCompatibilityVersion,
        updatedAt: entry.uploadedAt
      } as DefaultType;
    });

    return {
      content,
      totalElements: content.length,
      totalPages: 1,
      page: 0,
      size: content.length
    };
  }

  async listVersions(kind: TypeKind, instance: string): Promise<DefaultTypeList> {
    const name = this.keyToName(kind, instance);
    const result = await this.customResourceService.listData({
      type: DefaultTypeService.CUSTOM_RESOURCE_TYPE,
      name,
      page: 0,
      size: 100
    });
    return this.mapListResponseDefaultTypeList(result);
  }

  async upload(params: DefaultTypeUploadParams): Promise<DefaultTypeUploadResponse> {
    const uploadDataParams = {
      type: DefaultTypeService.CUSTOM_RESOURCE_TYPE,
      name: this.keyToName(params.kind, params.instance),
      contentType: UploadDataContentTypeEnum.Xml,
      content: new Blob([new XMLSerializer().serializeToString(params.doc)], { type: "application/xml" }),
      dataCompatibilityVersion: DefaultTypeService.DATA_COMPATIBILITY_VERSION,
      description: params.description,
      nextVersionType: params.nextVersionType,
      version: params.version
    };
    return this.customResourceService.upload(uploadDataParams) as Promise<DefaultTypeUploadResponse>;
  }

  async getById(id: string): Promise<DefaultTypeDetails> {
    const result = await this.customResourceService.getById(id);
    const key = this.nameToKey(result.name);
    const doc = this.parseDoc(result.content);
    if (doc === null) {
      throw Error("could not parse default type content. invalid xml format")
    }

    const rootId = extractRootIdFromXml(doc);
    if (!rootId) {
      throw Error("could not extract root ID from default type XML document. Missing 'id' attribute on root element");
    }

    return {
      id: result.id,
      rootId: rootId,
      kind: key.kind,
      instance: key.instance,
      description: result.description,
      version: result.version,
      dataCompatibilityVersion: result.dataCompatibilityVersion,
      updatedAt: result.uploadedAt,
      doc: doc
    }
  }

  async getLatestByKindAndInstance(kind: TypeKind, instance: string): Promise<DefaultTypeDetails | null> {
    const name = this.keyToName(kind, instance);
    try {
      const result = await this.customResourceService.getLatestByTypeAndName(DefaultTypeService.CUSTOM_RESOURCE_TYPE, name);
      const key = this.nameToKey(result.name);
      const doc = this.parseDoc(result.content);
      if (doc === null) {
        throw Error("could not parse default type content. invalid xml format")
      }

      const rootId = extractRootIdFromXml(doc);
      if (!rootId) {
        throw Error("could not extract root ID from default type XML document. Missing 'id' attribute on root element");
      }

      return {
        id: result.id,
        rootId: rootId,
        kind: key.kind,
        instance: key.instance,
        description: result.description,
        version: result.version,
        dataCompatibilityVersion: result.dataCompatibilityVersion,
        updatedAt: result.uploadedAt,
        doc: doc
      }
    } catch (e) {
      if (this.isNotFoundError(e)) {
        return null;
      }
      throw e;
    }
  }

  async delete(kind: TypeKind, instance: string): Promise<void> {
    const name = this.keyToName(kind, instance);
    await this.customResourceService.deleteByTypeAndName(DefaultTypeService.CUSTOM_RESOURCE_TYPE, name);
  }

  private mapListResponseDefaultTypeList(result: PagedDataEntryResponse): DefaultTypeList {
    const content = result.content?.map((entry) => {
      const key = this.nameToKey(entry.name);
      return {
        id: entry.id,
        kind: key.kind,
        instance: key.instance,
        description: entry.description,
        version: entry.version,
        dataCompatibilityVersion: entry.dataCompatibilityVersion,
        updatedAt: entry.uploadedAt
      } as DefaultType;
    });

    return {
      content: content,
      totalElements: result.totalElements,
      totalPages: result.totalPages,
      page: result.page,
      size: result.size
    }
  }

  private keyToName(kind: TypeKind, instance: string): string {
    return `${kind}:${instance}`;
  }

  private parseDoc(content: string): XMLDocument | null {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "application/xml");
    const parserError = doc.getElementsByTagName("parsererror");
    if (parserError.length > 0) {
      return null;
    }
    return doc; 
  }

  private isNotFoundError(error: unknown): boolean {
    return (
      error != null &&
      typeof error === 'object' &&
      'response' in error &&
      (error as { response: Response }).response?.status === 404
    );
  }

  private nameToKey(name: string): DefaultKey {
    const parts = name.split(':')
    if (parts.length !== 2) {
      throw Error("could not parse default key. invalid format")
    }

    const kind = TypeKind.toTypeKind(parts[0])
    if (kind === undefined) {
      throw Error("could not parse default key. invalid format")
    }

    return {
      kind: kind,
      instance: parts[1]
    };
  }
}
