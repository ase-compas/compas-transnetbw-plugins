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
import {
  addPluginToGroups,
  removePluginFromGroups,
  addGroupToGroups,
} from './pluginGroupOps';

function getProcess(procId: string): Process | undefined {
  return engineeringProcesses.processes.find((p) => p.id === procId);
}

function findPlugin(procId: string, pluginId: string): Plugin | undefined {
  return getProcess(procId)
    ?.pluginGroups?.flatMap((g) => g.plugins ?? [])
    .find((pl) => pl.id === pluginId);
}

/**
 * Returns the validations for a specific plugin scoped to a process,
 * together with their original indices in the raw validations array.
 */
function getFilteredValidations(
  validations: XPathValidation[],
  procId: string,
  pluginId: string,
): { validation: XPathValidation; rawIndex: number }[] {
  return validations
    .map((v, rawIndex) => ({ validation: v, rawIndex }))
    .filter(({ validation: v }) => v.processId === procId && v.pluginId === pluginId);
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

export function removeAllPluginsFromProcess(procId: string): void {
  const process = getProcess(procId);
  if (!process) return;
  process.pluginGroups = [];
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
    const filtered = getFilteredValidations(validations, procId, pluginId);
    const entry = filtered[entryIndex];
    if (entry) validations.splice(entry.rawIndex, 1);
  });
}

export function updateValidationInPluginInProcess(
  procId: string,
  pluginId: string,
  entryIndex: number,
  validation: XPathValidation,
): void {
  mutatePluginValidations(procId, pluginId, (validations) => {
    const filtered = getFilteredValidations(validations, procId, pluginId);
    const entry = filtered[entryIndex];
    if (entry) validations[entry.rawIndex] = validation;
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
