export type DA = {
  name: string;
  fc: string;
  bType: string;
  type?: string;
  qchg?: boolean;
  dupd?: boolean;
  dchg?: boolean;
};

export type DOType = {
  id: string;
  cd: string;
  dataAttributes: DA[];
};
