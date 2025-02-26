import {type DataResource} from "@oscd-transnet-plugins/oscd-history-api-client";

export class SclResourceModel implements DataResource{
  readonly uuid: string;
  readonly name: string;
  readonly author: string;
  readonly type: string;
  readonly changedAt: string;
  readonly version: string;
  readonly available: boolean;
  readonly deleted: boolean;
  readonly location?: string;

  constructor(
    uuid: string,
    name: string,
    author: string,
    type: string,
    changedAt: string,
    version: string,
    available: boolean,
    deleted: boolean,
    location?: string,
  ) {
    this.uuid = uuid;
    this.name = name;
    this.author = author;
    this.type = type;
    this.changedAt = changedAt;
    this.version = version;
    this.available = available;
    this.deleted = deleted;
    this.location = location;
  }

  public static from (data: DataResource) {
    return new SclResourceModel(
      data.uuid,
      data.name,
      data.author,
      data.type,
      data.changedAt,
      data.version,
      data.available,
      data.deleted,
      data.location,
    );
  }
}
