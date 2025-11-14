import type { PluginGroup } from './PluginGroup';

export type Process = {
  id: string;
  version: string;
  name: string;
  description: string;
  pluginGroups: PluginGroup[];
};
