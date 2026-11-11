import {
  toStoredValidation,
  type CoMPASPlugin,
  type Plugin,
  type PluginGroup,
  type Process,
  type XPathValidation,
} from '@oscd-transnet-plugins/shared';
import {
  corePlugins,
  engineeringProcesses,
  runningEngineeringProcess,
  selectedEngineeringProcess,
} from './stores.svelte';
import {
  addPluginToGroups,
  removePluginFromGroups,
  addGroupToGroups,
} from './pluginGroupOps';
import {
  compareValidationTitles,
  createValidation,
  ensureValidationId,
  prepareValidationImport,
  type ValidationImportResult,
} from '../plugins/validation/validationRules';

function getProcess(procId: string): Process | undefined {
  const draft = selectedEngineeringProcess.draft;
  if (draft?.id === procId) return draft;
  return engineeringProcesses.processes.find((p) => p.id === procId);
}

function findPlugin(procId: string, pluginId: string): Plugin | undefined {
  return getProcess(procId)
    ?.pluginGroups?.flatMap((g) => g.plugins ?? [])
    .find((pl) => pl.id === pluginId);
}

function findValidationTarget(
  procId: string,
  pluginId: string,
  entry: XPathValidation,
): { validations: XPathValidation[]; index: number } {
  const validations = findPlugin(procId, pluginId)?.validations;
  const index = validations?.indexOf(entry) ?? -1;
  if (!validations || index < 0) {
    throw new Error('The selected validation no longer exists. Reopen the rule list and try again.');
  }
  return { validations, index };
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
    pluginGroups: snap.pluginGroups ?? [{ title: 'Ungrouped', plugins: [] }],
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
// Validation mutations
// ---------------------------------------------------------------------------

function appendPluginValidations(
  plugin: Plugin,
  validations: readonly XPathValidation[],
): void {
  if (validations.length === 0) return;
  plugin.validations = [
    ...(plugin.validations ?? []),
    ...validations,
  ].sort(compareValidationTitles);
}

export function addValidationToPluginInProcess(
  procId: string,
  pluginId: string,
  validation: XPathValidation,
): void {
  addValidationsToPluginInProcess(procId, pluginId, [validation]);
}

export function addValidationsToPluginInProcess(
  procId: string,
  pluginId: string,
  validations: readonly XPathValidation[],
): void {
  if (validations.length === 0) return;

  const plugin = findPlugin(procId, pluginId);
  if (!plugin) return;
  appendPluginValidations(plugin, validations.map(createValidation));
}

export function importValidationsToPluginInProcess(
  procId: string,
  pluginId: string,
  validations: readonly XPathValidation[],
): ValidationImportResult {
  const plugin = findPlugin(procId, pluginId);
  if (!plugin) throw new Error('The target plugin no longer exists.');

  const result = prepareValidationImport(plugin.validations ?? [], validations);
  appendPluginValidations(plugin, result.added);
  return result;
}

export function removeValidationFromPluginInProcess(
  procId: string,
  pluginId: string,
  entry: XPathValidation,
): void {
  const { validations, index } = findValidationTarget(procId, pluginId, entry);
  validations.splice(index, 1);
}

export function updateValidationInPluginInProcess(
  procId: string,
  pluginId: string,
  entry: XPathValidation,
  validation: XPathValidation,
): XPathValidation {
  const { validations, index } = findValidationTarget(procId, pluginId, entry);
  validations[index] = toStoredValidation({
    ...validation,
    id: ensureValidationId(entry),
  });
  const updated = validations[index];
  validations.sort(compareValidationTitles);
  return updated;
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
