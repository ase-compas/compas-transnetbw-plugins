import type {Plugin} from "./Plugin";

export type PluginGroup = {
  title: string;
  plugins: Plugin[];
};

export type Process = {
  id: string;
  version: string;
  name: string;
  description: string;
  plugins?: Plugin[];
  pluginGroups?: PluginGroup[];
};
