import { compareVersions, type Process } from '@oscd-transnet-plugins/shared';
import { v5 as uuidv5 } from 'uuid';
import { toastService } from '@oscd-transnet-plugins/oscd-services/toast';
import { PROCESSES_SOURCE_URL } from './config';
import {
  engineeringProcesses,
  engineeringProcessesStatus,
} from './stores.svelte';
import { parseProcessesXml, parseXmlString } from './xml-parser';
import { processService } from '../../bootstrap';
import type { RemoteProcessEntry, VersionBump } from './process.service';
import { updateProcessMetadata, removeProcess } from './mutations.svelte';

const recentlySavedProcesses = new Map<string, Process>();
const LEGACY_VALIDATION_NAMESPACE = uuidv5('engineering-wizard/legacy-validation', uuidv5.URL);

function ensureProcessValidationIds(process: Process): void {
  for (const group of process.pluginGroups) {
    for (const plugin of group.plugins) {
      plugin.validations?.forEach((validation, index) => {
        // Legacy identities must survive reloads before the next explicit save.
        validation.id ??= uuidv5(JSON.stringify([
          process.id,
          plugin.id,
          index,
          validation.title,
          validation.description ?? '',
          validation.context,
          validation.assert,
          validation.message ?? '',
        ]), LEGACY_VALIDATION_NAMESPACE);
      });
    }
  }
}

async function readPersistedProcesses(
  entries: readonly RemoteProcessEntry[],
): Promise<Process[]> {
  return Promise.all(entries.map(async (entry) => {
    const process = await processService.getById(entry.resourceId);
    if (process.id !== entry.processId) {
      throw new Error(`Stored process ID does not match resource "${entry.resourceId}".`);
    }
    // The resource metadata carries the authoritative version after a backend bump.
    return { ...process, version: entry.version };
  }));
}

function mergeById(primary: Process[], secondary: Process[]): Process[] {
  const byId = new Map<string, Process>();
  for (const p of primary) byId.set(p.id, p);
  for (const p of secondary) byId.set(p.id, p);
  return Array.from(byId.values());
}

function preserveRecentlySavedProcesses(processes: Process[]): Process[] {
  const byId = new Map(processes.map((process) => [process.id, process]));

  for (const [processId, localProcess] of recentlySavedProcesses) {
    const remoteProcess = byId.get(processId);
    if (
      !remoteProcess ||
      compareVersions(localProcess.version, remoteProcess.version) > 0
    ) {
      byId.set(processId, localProcess);
    } else {
      recentlySavedProcesses.delete(processId);
    }
  }

  return Array.from(byId.values());
}

async function loadEngineeringProcessesFromSources(
  allowBackendFallback: boolean,
): Promise<Process[]> {
  engineeringProcessesStatus.loading = true;
  engineeringProcessesStatus.error = '';

  try {
    // 1. Load the static baseline XML shipped with the plugin.
    const res = await fetch(PROCESSES_SOURCE_URL, { cache: 'no-cache' });
    if (!res.ok) {
      throw new Error(
        `HTTP ${res.status}${res.statusText ? `: ${res.statusText}` : ''}`,
      );
    }

    const xmlText = await res.text();
    const xml = parseXmlString(xmlText);
    let processes = parseProcessesXml(xml);

    // 2. Hydrate from backend — backend-saved processes win over the static baseline.
    try {
      const entries = await processService.listLatest();
      if (entries.length > 0) {
        const backendProcesses = await readPersistedProcesses(entries);
        processes = mergeById(processes, backendProcesses);
      }
    } catch (error) {
      if (!allowBackendFallback) throw error;
      toastService.warn(
        'Saved processes could not be loaded',
        `The XML baseline is being used. Saved processes may be missing or outdated. ${
          error instanceof Error ? error.message : String(error)
        }`,
        15_000,
      );
    }

    processes = preserveRecentlySavedProcesses(processes);
    processes.forEach(ensureProcessValidationIds);
    engineeringProcesses.processes = processes;
    return processes;
  } catch (err) {
    engineeringProcessesStatus.error =
      err instanceof Error ? err.message : 'Failed to load processes.';
    throw err;
  } finally {
    engineeringProcessesStatus.loading = false;
  }
}

export function loadEngineeringProcesses(): Promise<Process[]> {
  return loadEngineeringProcessesFromSources(true);
}

export function refreshEngineeringProcesses(): Promise<Process[]> {
  return loadEngineeringProcessesFromSources(false);
}

export async function getPersistedProcesses(
  ids: ReadonlySet<string>,
): Promise<Map<string, Process>> {
  if (ids.size === 0) return new Map();
  const entries = await processService.listLatest();
  const processes = await readPersistedProcesses(
    entries.filter(({ processId }) => ids.has(processId)),
  );
  return new Map(processes.map((process) => [process.id, process]));
}

export async function saveProcess(
  process: Process,
  versionBump?: VersionBump,
): Promise<string> {
  engineeringProcessesStatus.saving = true;
  engineeringProcessesStatus.saveError = '';

  try {
    ensureProcessValidationIds(process);
    const processSnapshot = $state.snapshot(process) as Process;
    const { version } = await processService.save(
      processSnapshot,
      versionBump,
    );

    updateProcessMetadata(process.id, { version });
    recentlySavedProcesses.set(process.id, {
      ...processSnapshot,
      version,
    });
    return version;
  } catch (err) {
    engineeringProcessesStatus.saveError =
      err instanceof Error ? err.message : 'Failed to save process.';
    throw err;
  } finally {
    engineeringProcessesStatus.saving = false;
  }
}

export async function deleteProcess(process: Process): Promise<void> {
  engineeringProcessesStatus.saveError = '';

  try {
    await processService.delete(process.id);
    removeProcess(process.id);
  } catch (err) {
    engineeringProcessesStatus.saveError =
      err instanceof Error ? err.message : 'Failed to delete process.';
    throw err;
  }
}
