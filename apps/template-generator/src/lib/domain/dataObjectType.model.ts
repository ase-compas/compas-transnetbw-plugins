export type DA = {
  name: string;
  fc: string;
  bType: string;
  type?: string;
  qchg?: boolean;
  dupd?: boolean;
  dchg?: boolean;
};

export type SDO = {
  type: string;
  name: string;
}

export type DOType = {
  id: string;
  cdc: string;
  dataAttributes: DA[];
  subDataObjects: SDO[];
};
