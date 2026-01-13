import type { Plugin, Process } from '@oscd-transnet-plugins/shared';

export function getPluginsForProcess(process: Process): Plugin[] {
  return (process.pluginGroups ?? []).flatMap((group) => group.plugins ?? []);
}
