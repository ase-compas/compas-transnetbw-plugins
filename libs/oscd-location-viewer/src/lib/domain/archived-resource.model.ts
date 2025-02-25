import {
  type ArchivedResource,
  type ResourceTag,
} from '@oscd-transnet-plugins/oscd-archiving-api-client';

export class ArchivedResourceModel implements ArchivedResource {
  readonly uuid: string;
  readonly name: string;
  readonly note?: string;
  readonly author: string;
  readonly approver?: string;
  readonly type?: string;
  readonly contentType: string;
  readonly voltage?: string;
  readonly version: string;
  readonly modifiedAt: string;
  readonly archivedAt: string;
  readonly fields: Array<ResourceTag>;

  constructor(
    uuid: string,
    name: string,
    note: string,
    author: string,
    approver: string,
    type: string,
    contentType: string,
    voltage: string,
    version: string,
    modifiedAt: string,
    archivedAt: string,
    fields: Array<ResourceTag>
  ) {
    this.uuid = uuid;
    this.name = name;
    this.note = note;
    this.author = author;
    this.approver = approver;
    this.type = type;
    this.contentType = contentType;
    this.voltage = voltage;
    this.version = version;
    this.modifiedAt = modifiedAt;
    this.archivedAt = archivedAt;
    this.fields = fields;
  }

  public static from(data: ArchivedResource) {
    return new ArchivedResourceModel(
      data.uuid,
      data.name,
      data.note,
      data.author,
      data.approver,
      data.type,
      data.contentType,
      data.voltage,
      data.version,
      data.modifiedAt,
      data.archivedAt,
      data.fields
    );
  }
}
