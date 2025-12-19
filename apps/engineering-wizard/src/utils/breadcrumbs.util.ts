import type { Process } from '@oscd-transnet-plugins/shared';

export interface BreadcrumbItem {
  label: string;
  enabled: boolean;
}

export function buildProcessBreadcrumbs(proc: Process | null, opts?: { edit?: boolean }): BreadcrumbItem[] {
  const name = proc?.name ?? '—';
  return [
    { label: 'Engineering-Wizard', enabled: true },
    { label: opts?.edit ? `Edit ${name}` : name, enabled: false },
  ];
}
