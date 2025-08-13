export type BDA = {
  name: string;
  bType: string;
  valKind?: string;
  type?: string;
};

export type DAType = {
  id: string;
  iedType?: string;
  basicDataAttributes: BDA[];
};
