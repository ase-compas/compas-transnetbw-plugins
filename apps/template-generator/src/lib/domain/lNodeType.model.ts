export interface DO {
  name: string;
  type: string;
}

export interface LNodeType {
  id: string;
  lnClass: string;
  description: string;
  dataObjects: DO[];
}
