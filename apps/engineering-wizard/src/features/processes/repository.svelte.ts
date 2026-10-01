import { compareVersions, type Process } from '@oscd-transnet-plugins/shared';
import { PROCESSES_SOURCE_URL } from './config';
import {
  engineeringProcesses,
  engineeringProcessesStatus,
} from './stores.svelte';
import { parseProcessesXml, parseXmlString } from './xml-parser';
import { processService } from '../../bootstrap';
import type { VersionBump } from './process.service';
import { updateProcessMetadata } from './mutations.svelte';

const recentlySavedProcesses = new Map<string, Process>();

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
        const backendProcesses = await Promise.all(
          entries.map(async (e) => {
            const proc = await processService.getById(e.resourceId);
            // The JSON content may have a stale version (written before the
            // backend applied the version bump). Always use the authoritative
            // version returned by listLatest().
            return { ...proc, version: e.version };
          }),
        );
        processes = mergeById(processes, backendProcesses);
      }
    } catch (error) {
      if (!allowBackendFallback) throw error;
    }

    processes = preserveRecentlySavedProcesses(processes);
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

export async function saveProcess(
  process: Process,
  versionBump?: VersionBump,
): Promise<string> {
  engineeringProcessesStatus.saving = true;
  engineeringProcessesStatus.saveError = '';

  try {
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
