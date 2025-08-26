import type { PluginGroup, Process } from '@oscd-transnet-plugins/shared';

export function getBreadcrumbs(proc: Process | null) {
  return [
    { label: 'Engineering-Wizard', enabled: true },
    { label: proc?.name ?? '—', enabled: false },
  ];
}

export function getPluginGroups(proc: Process | null): PluginGroup[] {
  if (proc?.pluginGroups?.length) return proc.pluginGroups as PluginGroup[];
  return [{ title: 'Process', plugins: proc?.plugins ?? [] }];
}

