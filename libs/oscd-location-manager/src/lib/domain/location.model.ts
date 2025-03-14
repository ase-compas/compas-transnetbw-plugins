import { type Location } from "@oscd-transnet-plugins/oscd-archiving-api-client";

export class LocationModel implements Location{
  readonly uuid?: string;
  readonly key: string;
  readonly name: string;
  readonly description?: string;
  readonly assignedResources?: number

  constructor(key: string, name: string, description?: string, assignedResources?: number, uuid?: string) {
    this.uuid = uuid;
    this.key = key;
    this.name = name;
    this.description = description;
    this.assignedResources = assignedResources;
  }

  public static from (data: Location) {
    return new LocationModel(data.key, data.name, data.description, data.assignedResources, data.uuid);
  }
}
