import type {
  CoMPASPlugin,
  Plugin,
  PluginGroup,
  Process,
} from '@oscd-transnet-plugins/shared';
import {
  corePlugins,
  engineeringProcesses,
  runningEngineeringProcess,
} from './stores.svelte';
import {
  addPluginToGroups,
  removePluginFromGroups,
  addGroupToGroups,
} from './pluginGroupOps';

function getProcess(procId: string): Process | undefined {
  return engineeringProcesses.processes.find((p) => p.id === procId);
}

// ---------------------------------------------------------------------------
// Process mutations
// ---------------------------------------------------------------------------

export function removeProcess(procId: string): boolean {
  const idx = engineeringProcesses.processes.findIndex((p) => p.id === procId);
  if (idx === -1) return false;
  engineeringProcesses.processes.splice(idx, 1);
  return true;
}

export function addProcess(process: Process): Process {
  const snap = $state.snapshot(process) as Process;

  const toInsert: Process = {
    id: snap.id || snap.name || 'process',
    version: snap.version || '1.0.0',
    name: snap.name || snap.id || 'process',
    description: snap.description || '',
    pluginGroups: snap.pluginGroups?.length
      ? snap.pluginGroups
      : [{ title: 'Ungrouped', plugins: [] }],
  };

  engineeringProcesses.processes = [...engineeringProcesses.processes, toInsert];
  return toInsert;
}

export function updateProcessMetadata(
  procId: string,
  updates: { name?: string; description?: string; version?: string },
): void {
  const process = getProcess(procId);
  if (!process) return;
  if (updates.name !== undefined) process.name = updates.name;
  if (updates.description !== undefined) process.description = updates.description;
  if (updates.version !== undefined) process.version = updates.version;
}

// ---------------------------------------------------------------------------
// Plugin mutations
// ---------------------------------------------------------------------------

export function addPluginToProcess(
  procId: string,
  plugin: Plugin,
  groupTitle?: string,
): void {
  const process = getProcess(procId);
  if (!process) return;
  process.pluginGroups = addPluginToGroups(process.pluginGroups ?? [], plugin, groupTitle);
}

export function removePluginFromProcess(procId: string, pluginId: string): boolean {
  const process = getProcess(procId);
  if (!process?.pluginGroups) return false;
  process.pluginGroups = removePluginFromGroups(process.pluginGroups, pluginId);
  return true;
}

/**
 * Removes ALL plugin groups entirely from a process (groups are deleted, not just cleared).
 * Use `removeAllPluginsFromGroups` (from pluginGroupOps) via `updateGroupsOfProcess`
 * when you want to preserve the group structure but remove their plugins.
 */
export function removeAllPluginsFromProcess(procId: string): void {
  const process = getProcess(procId);
  if (!process) return;
  process.pluginGroups = [];
}

// ---------------------------------------------------------------------------
// Group mutations
// ---------------------------------------------------------------------------

export function addGroupToProcess(
  procId: string,
  groupTitle: string,
  position?: number,
): void {
  const process = getProcess(procId);
  if (!process) return;
  process.pluginGroups = addGroupToGroups(process.pluginGroups ?? [], groupTitle, position);
}

export function updateGroupsOfProcess(procId: string, newGroups: PluginGroup[]): void {
  const process = getProcess(procId);
  if (!process) return;
  process.pluginGroups = [...newGroups];
}

// ---------------------------------------------------------------------------
// Runtime / plugin store mutations
// ---------------------------------------------------------------------------

export function setInternalPlugins(plugins: CoMPASPlugin[]): void {
  corePlugins.plugins = [...plugins];
}

export function setRunningProcess(
  process: Process | null,
  lastPluginId: string | null = null,
): void {
  runningEngineeringProcess.process = process;
  runningEngineeringProcess.lastSelectedPluginId = lastPluginId;
}

export function setLastSelectedPluginId(pluginId: string | null): void {
  runningEngineeringProcess.lastSelectedPluginId = pluginId;
}
