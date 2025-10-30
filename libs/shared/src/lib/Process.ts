import type {Plugin} from "./Plugin";
import type { PluginGroup } from './PluginGroup';

export type Process = {
  id: string;
  version: string;
  name: string;
  description: string;
  plugins?: Plugin[];
  pluginGroups?: PluginGroup[];
};
