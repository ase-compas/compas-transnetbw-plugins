import type { Process } from '@oscd-transnet-plugins/shared';
import { PROCESSES_SOURCE_URL } from './config';
import {
  engineeringProcesses,
  engineeringProcessesStatus,
} from './stores.svelte';
import { parseProcessesXml, parseXmlString } from './xml-parser';

function mergeById(primary: Process[], secondary: Process[]): Process[] {
  // secondary overwrites primary by id (or vice versa depending on usage)
  const byId = new Map<string, Process>();
  for (const p of primary) byId.set(p.id, p);
  for (const p of secondary) byId.set(p.id, p);
  return Array.from(byId.values());
}

export async function loadEngineeringProcesses(): Promise<Process[]> {
  engineeringProcessesStatus.loading = true;
  engineeringProcessesStatus.error = '';

  try {
    const res = await fetch(PROCESSES_SOURCE_URL, { cache: 'no-cache' });
    if (!res.ok) {
      throw new Error(
        `HTTP ${res.status}${res.statusText ? `: ${res.statusText}` : ''}`,
      );
    }

    const xmlText = await res.text();
    const xml = parseXmlString(xmlText);
    const parsed = parseProcessesXml(xml);

    const localSnapshot = $state.snapshot(
      engineeringProcesses.processes,
    ) as Process[];

    // Keep your existing behavior: if local exists, merge XML + local.
    const merged =
      Array.isArray(localSnapshot) && localSnapshot.length
        ? mergeById(parsed, localSnapshot)
        : parsed;

    engineeringProcesses.processes = merged;
    return merged;
  } catch (err) {
    engineeringProcessesStatus.error =
      err instanceof Error ? err.message : 'Failed to load processes.';
    throw err;
  } finally {
    engineeringProcessesStatus.loading = false;
  }
}
