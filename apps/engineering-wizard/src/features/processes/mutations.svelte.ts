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

function getProcess(procId: string): Process | undefined {
  return engineeringProcesses.processes.find((p) => p.id === procId);
}

function findPlugin(procId: string, pluginId: string): Plugin | undefined {
  return getProcess(procId)
    ?.pluginGroups?.flatMap((g) => g.plugins ?? [])
    .find((pl) => pl.id === pluginId);
}


function resolveValidationIndex(
  validations: XPathValidation[],
  procId: string,
  pluginId: string,
  entryIndex: number,
): number {
  let filteredCount = -1;
  return validations.findIndex((v) => {
    if (v.processId === procId && v.pluginId === pluginId) filteredCount++;
    return filteredCount === entryIndex;
  });
}

function mutatePluginValidations(
  procId: string,
  pluginId: string,
  fn: (validations: XPathValidation[]) => void,
): void {
  const plugin = findPlugin(procId, pluginId);
  if (!plugin) return;
  plugin.validations ??= [];
  fn(plugin.validations);
}

// ---------------------------------------------------------------------------
// Process mutations
// ---------------------------------------------------------------------------

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

  engineeringProcesses.processes = [...(engineeringProcesses.processes ?? []), toInsert];
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

  const title = groupTitle?.trim() || 'Ungrouped';
  const groups = (process.pluginGroups ??= []);
  const group = groups.find((g) => g.title === title) ?? (() => {
    const g: PluginGroup = { title, plugins: [] };
    groups.push(g);
    return g;
  })();

  (group.plugins ??= []).push(plugin);
}

export function removePluginFromProcess(procId: string, pluginId: string): boolean {
  const process = getProcess(procId);
  if (!process?.pluginGroups) return false;

  for (const group of process.pluginGroups) {
    const index = group.plugins?.findIndex((pl) => pl.id === pluginId) ?? -1;
    if (index === -1) continue;

    group.plugins.splice(index, 1);

    if (group.plugins.length === 0) {
      process.pluginGroups.splice(process.pluginGroups.indexOf(group), 1);
    }
    return true;
  }
  return false;
}

export function removeAllPluginsFromProcess(procId: string): void {
  const process = getProcess(procId);
  if (!process?.pluginGroups) return;
  process.pluginGroups.splice(0, process.pluginGroups.length);
}

// ---------------------------------------------------------------------------
// Validation mutations
// ---------------------------------------------------------------------------

export function addValidationToPluginInProcess(
  procId: string,
  pluginId: string,
  validation: XPathValidation,
): void {
  mutatePluginValidations(procId, pluginId, (v) => v.push(validation));
}

export function removeValidationFromPluginInProcess(
  procId: string,
  pluginId: string,
  entryIndex: number,
): void {
  mutatePluginValidations(procId, pluginId, (validations) => {
    const idx = resolveValidationIndex(validations, procId, pluginId, entryIndex);
    if (idx !== -1) validations.splice(idx, 1);
  });
}

export function updateValidationInPluginInProcess(
  procId: string,
  pluginId: string,
  entryIndex: number,
  validation: XPathValidation,
): void {
  mutatePluginValidations(procId, pluginId, (validations) => {
    const idx = resolveValidationIndex(validations, procId, pluginId, entryIndex);
    if (idx !== -1) validations[idx] = validation;
  });
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

  const groups = (process.pluginGroups ??= []);
  if (groups.some((g) => g.title === groupTitle)) return;

  const newGroup: PluginGroup = { title: groupTitle, plugins: [] };
  position === undefined
    ? groups.push(newGroup)
    : groups.splice(Math.max(0, position - 1), 0, newGroup);
}

export function updateGroupsOfProcess(procId: string, newGroups: PluginGroup[]): void {
  const process = getProcess(procId);
  if (!process) return;
  (process.pluginGroups ??= []).splice(0, process.pluginGroups.length, ...newGroups);
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
