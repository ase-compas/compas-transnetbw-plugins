import {Plugin} from "./Plugin";

export type Process = {
  id: string;
  version: string;
  name: string;
  description: string;
  plugins: Plugin[];
};
