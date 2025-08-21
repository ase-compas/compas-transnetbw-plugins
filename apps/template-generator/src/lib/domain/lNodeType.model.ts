import type { DOType } from './dataObjectType.model';
import type { DAType } from './dataAttributeType.model';
import type { EnumType } from './enumType.model';
import { BaseChild, BaseType, ChildMetadata } from './generic.model';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DO extends BaseChild {}
export interface DODetails extends DO {
  metadata: ChildMetadata
  cdc?: string
}

export interface LNodeType extends BaseType {
  lnClass: string;
  desc: string;
  dataObjects: DO[];
}
export interface LNodeTypeDetails extends LNodeType {
  dataObjects: DODetails[];
}

export type DataTypes = {
  dataObjectTypes: DOType[];
  dataAttributeTypes: DAType[];
  enumTypes: EnumType[];
};
