// make a type for SimpleLogicalNodeListItem params: id: string, lnClass: string, references: number
export type SimpleLogicalNodeTypeListItem = {
  id: string;
  lnClass: string;
  references: number;
};

export type SimpleLogicalNodeType = {
  id: string;
  lnClass: string;
};

export type LogicalNodeType = {
  id: string;
  lnClass: string;
  children: DataObject[];
};

export type DataObject = {
  name: string;
  desc: string;
  type: string;
};

export type DOType = {
  id: string;
  cdc: string;
};

export type EnumType = {
  id: string;
  values: EnumVal[];
};

export type EnumVal = {
  ord: string;
  val: string;
};

export type DAStructure = {
  name: string;
  type?: string;
  bType: string;
  tag: 'DA' | 'BDA'; // optional but helpful if you want to distinguish
};

export type DAType = {
  id: string;
};
