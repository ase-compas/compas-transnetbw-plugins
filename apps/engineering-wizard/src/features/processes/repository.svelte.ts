import type { Process } from '@oscd-transnet-plugins/shared';
import { PROCESSES_SOURCE_URL } from './config';
import {
  engineeringProcesses,
  engineeringProcessesStatus,
} from './stores.svelte';
import { parseProcessesXml, parseXmlString } from './xml-parser';
import { processService } from '../../bootstrap';
import { UploadDataNextVersionTypeEnum } from '@oscd-transnet-plugins/api-compas-custom-resource';

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
    const parsed = parseProcessesXml(xml);

    // 2. Merge localStorage snapshot (local edits survive a refresh).
    const localSnapshot = $state.snapshot(
      engineeringProcesses.processes,
    ) as Process[];

    let merged =
      Array.isArray(localSnapshot) && localSnapshot.length
        ? mergeById(parsed, localSnapshot)
        : parsed;

    // 3. Hydrate from backend — backend-saved processes win over everything else.
    try {
      const entries = await processService.listLatest();
      if (entries.length > 0) {
        const backendProcesses = await Promise.all(
          entries.map((e) => processService.getById(e.resourceId)),
        );
        merged = mergeById(merged, backendProcesses);
      }
    } catch {
      // Backend unavailable — continue with static + localStorage data.
    }

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

/**
 * Persists a single process to the backend custom-resource API.
 *
 * Uses `nextVersionType: 'patch'` so every save auto-increments the
 * semver patch segment without requiring the caller to manage versions.
 *
 * Sets `engineeringProcessesStatus.saving / saveError` for UI feedback.
 */
export async function saveProcess(process: Process): Promise<void> {
  engineeringProcessesStatus.saving = true;
  engineeringProcessesStatus.saveError = '';

  try {
    await processService.save($state.snapshot(process) as Process, {
      nextVersionType: UploadDataNextVersionTypeEnum.Patch,
    });
  } catch (err) {
    engineeringProcessesStatus.saveError =
      err instanceof Error ? err.message : 'Failed to save process.';
    throw err;
  } finally {
    engineeringProcessesStatus.saving = false;
  }
}

