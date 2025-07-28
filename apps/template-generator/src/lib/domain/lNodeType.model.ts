import type { DOType } from './dataObjectType.model';
import type { DAType } from './dataAttributeType.model';
import type { EnumType } from './enumType.model';

export interface DO {
  name: string;
  type: string;
}

export interface LNodeType {
  id: string;
  lnClass: string;
  desc: string;
  dataObjects: DO[];
}

export type ReferencedTypes = {
  dataObjectTypes: DOType[];
  dataAttributeTypes: DAType[];
  enumTypes: EnumType[];
};
