import type {
  CoMPASPlugin,
  Plugin,
  PluginGroup,
  Process,
  XPathValidation,
} from '@oscd-transnet-plugins/shared';
import {
  corePlugins,
  engineeringProcesses,
  runningEngineeringProcess,
} from './stores.svelte';

function ensureUniqueProcessId(base: string): string {
  const normalized = (base || '').trim() || 'process';
  const existing = new Set(
    (engineeringProcesses.processes ?? []).map((p) => p.id),
  );
  if (!existing.has(normalized)) return normalized;

  let i = 2;
  let candidate = `${normalized}-${i}`;
  while (existing.has(candidate)) {
    i += 1;
    candidate = `${normalized}-${i}`;
  }
  return candidate;
}

export function addProcess(process: Process): Process {
  const snap = $state.snapshot(process) as Process;

  const baseId = (snap.id || snap.name || 'process').trim();
  const id = ensureUniqueProcessId(baseId);

  const toInsert: Process = {
    id,
    version: snap.version || '1.0.0',
    name: snap.name || id,
    description: snap.description || '',
    pluginGroups: snap.pluginGroups?.length
      ? snap.pluginGroups
      : [{ title: 'Ungrouped', plugins: [] }],
  };

  engineeringProcesses.processes = [
    ...(engineeringProcesses.processes ?? []),
    toInsert,
  ];
  return toInsert;
}

/**
 * Add a plugin to a process, creating the group if necessary.
 * groupTitle blank => "Ungrouped"
 */
export function addPluginToProcess(
  procId: string,
  plugin: Plugin,
  groupTitle?: string,
): void {
  const title = (groupTitle && groupTitle.trim()) || 'Ungrouped';
  const process = engineeringProcesses.processes.find((p) => p.id === procId);
  if (!process) return;

  const groups = process.pluginGroups ?? (process.pluginGroups = []);
  let group = groups.find((g) => g.title === title);

  if (!group) {
    group = { title, plugins: [] };
    groups.push(group);
  }

  group.plugins ??= [];
  group.plugins.push(plugin);
}

export function addValidationToPluginInProcess(
  procId: string,
  pluginId: string,
  validation: XPathValidation,
): void {
  const processes = engineeringProcesses.processes ?? [];

  engineeringProcesses.processes = processes.map((p) => {
    if (p.id !== procId || !p.pluginGroups) return p;

    const pluginGroups = p.pluginGroups.map((g) => {
      const plugins = (g.plugins ?? []).map((pl) => {
        if (pl.id !== pluginId) return pl;

        const existing = pl.validations ?? [];
        return { ...pl, validations: [...existing, validation] };
      });

      return { ...g, plugins };
    });

    return { ...p, pluginGroups };
  });
}

export function removePluginFromProcess(
  procId: string,
  pluginId: string,
): boolean {
  const process = engineeringProcesses.processes.find((p) => p.id === procId);
  if (!process || !process.pluginGroups) return false;

  for (const group of process.pluginGroups) {
    if (!group?.plugins) continue;

    const index = group.plugins.findIndex((pl) => pl.id === pluginId);
    if (index === -1) continue;

    group.plugins.splice(index, 1);

    // remove empty groups
    if (group.plugins.length === 0) {
      const groupIndex = process.pluginGroups.indexOf(group);
      if (groupIndex !== -1) process.pluginGroups.splice(groupIndex, 1);
    }

    return true;
  }

  return false;
}

export function removeAllPluginsFromProcess(procId: string): void {
  const process = engineeringProcesses.processes.find((p) => p.id === procId);
  if (!process || !process.pluginGroups) return;

  for (const group of process.pluginGroups) {
    group.plugins?.splice(0, group.plugins.length);
  }
}

/**
 * Adds a plugin group to a process.
 * position is 1-based; undefined => append
 */
export function addGroupToProcess(
  procId: string,
  groupTitle: string,
  position?: number,
): void {
  const process = engineeringProcesses.processes.find((p) => p.id === procId);
  if (!process) return;

  const groups = process.pluginGroups ?? (process.pluginGroups = []);
  if (groups.some((g) => g.title === groupTitle)) return;

  const newGroup: PluginGroup = { title: groupTitle, plugins: [] };

  if (position === undefined) {
    groups.push(newGroup);
  } else {
    const idx = Math.max(0, position - 1);
    groups.splice(idx, 0, newGroup);
  }
}

export function updateGroupsOfProcess(
  procId: string,
  newGroups: PluginGroup[],
): void {
  const process = engineeringProcesses.processes.find((p) => p.id === procId);
  if (!process) return;
  process.pluginGroups ??= [];
  process.pluginGroups.splice(0, process.pluginGroups.length, ...newGroups);
}

export function setInternalPlugins(plugins: CoMPASPlugin[]) {
  corePlugins.plugins = [...plugins];
}

export function setRunningProcess(
  process: Process | null,
  lastSelectedPluginId: string | null = null,
): void {
  runningEngineeringProcess.process = process ?? null;
  runningEngineeringProcess.lastSelectedPluginId = lastSelectedPluginId ?? null;
}

export function setLastSelectedPluginId(pluginId: string | null): void {
  runningEngineeringProcess.lastSelectedPluginId = pluginId ?? null;
}
