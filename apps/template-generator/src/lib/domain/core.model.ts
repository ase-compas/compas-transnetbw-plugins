// ----- Core Model -----

export enum DataTypeKind {
  LNodeType = 'LNodeType',
  DOType = 'DOType',
  DAType = 'DAType',
  EnumType = 'EnumType',
}

export interface ObjectReference {
  name: string;
  tagName: string;
  typeRef?: string;
  attributes?: Record<string, string>;
}

export interface DataType {id: string;}
export interface LNodeType extends DataType {lnClass: string; children: ObjectReference[]}
export interface DOType extends DataType {cdc: string; children: ObjectReference[]}
export interface DAType extends DataType {instanceType?: string, children: ObjectReference[]}
export interface EnumType extends DataType {instanceType?: string, children: ObjectReference[];}

export type DataTypes = {
 lNodeTypes: LNodeType[],
 dataObjectTypes: DOType[],
 dataAttributeTypes: DAType[],
 enumTypes: EnumType[],
}

export type DataTypeMap = {
  [DataTypeKind.LNodeType]: LNodeType;
  [DataTypeKind.DOType]: DOType;
  [DataTypeKind.DAType]: DAType;
  [DataTypeKind.EnumType]: EnumType;
};

// ----- DTO Model -----

export type BasicType = {
  id: string;
  typeKind: DataTypeKind;
  instanceType?: string;
  references: number;
}

export type TypeOption = {
  id: string,
  description: string,
}

export type BasicTypes = {
  lNodeTypes: BasicType[];
  dataObjectTypes: BasicType[];
  dataAttributeTypes: BasicType[];
  enumTypes: BasicType[];
}

export type ChildNameFilter = string[];

export type SimpleReference = {
  name: string;
  typeRef?: string;
}

export interface ObjectReferenceMeta {
  isMandatory: boolean;
  isConfigured: boolean;
  requiresReference: boolean;
  objectType: string;
  refTypeKind?: DataTypeKind;
}

export interface ObjectReferenceDetails extends ObjectReference {
  meta: ObjectReferenceMeta;
}

export interface LNodeTypeDetails extends LNodeType {
  children: ObjectReferenceDetails[];
}

export interface DOTypeDetails extends DOType {
  children: ObjectReferenceDetails[];
}

export interface DATypeDetails extends DAType {
  children: ObjectReferenceDetails[];
}

export interface EnumTypeDetails extends EnumType {
  children: ObjectReferenceDetails[];
}

export interface DataTypeUpdate {
  id: string;
  instanceType: string;
  children: SimpleReference[];
}

export type Mode = 'create' | 'edit' | 'view';

