import type { PluginGroup, Process } from '@oscd-transnet-plugins/shared';

export function getBreadcrumbs(
  proc: Process | null,
  opts?: { edit?: boolean }
) {
  const name = proc?.name ?? '—';
  return [
    { label: 'Engineering-Wizard', enabled: true },
    { label: opts?.edit ? `Edit ${name}` : name, enabled: false },
  ];
}

export function getPluginGroups(proc: Process | null): PluginGroup[] {
  if (proc?.pluginGroups?.length) return proc.pluginGroups as PluginGroup[];
  return [{ title: 'Process', plugins: proc?.plugins ?? [] }];
}
