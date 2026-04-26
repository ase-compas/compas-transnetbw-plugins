import type { Process } from '@oscd-transnet-plugins/shared';
import { PROCESSES_SOURCE_URL } from './config';
import {
  engineeringProcesses,
  engineeringProcessesStatus,
} from './stores.svelte';
import { parseProcessesXml, parseXmlString } from './xml-parser';
import { processService } from '../../bootstrap';
import type { VersionBump } from './process.service';
import { updateProcessMetadata } from './mutations.svelte';

function mergeById(primary: Process[], secondary: Process[]): Process[] {
  const byId = new Map<string, Process>();
  for (const p of primary) byId.set(p.id, p);
  for (const p of secondary) byId.set(p.id, p);
  return Array.from(byId.values());
}

export async function loadEngineeringProcesses(): Promise<Process[]> {
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
          entries.map((e) => processService.getById(e.resourceId)),
        );
        processes = mergeById(processes, backendProcesses);
      }
    } catch {
      // Backend unavailable — continue with the static baseline.
    }

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


export async function saveProcess(
  process: Process,
  versionBump?: VersionBump,
): Promise<void> {
  engineeringProcessesStatus.saving = true;
  engineeringProcessesStatus.saveError = '';

  try {
    const { version } = await processService.save(
      $state.snapshot(process) as Process,
      versionBump,
    );

    updateProcessMetadata(process.id, { version });
  } catch (err) {
    engineeringProcessesStatus.saveError =
      err instanceof Error ? err.message : 'Failed to save process.';
    throw err;
  } finally {
    engineeringProcessesStatus.saving = false;
  }
}
