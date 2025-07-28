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
