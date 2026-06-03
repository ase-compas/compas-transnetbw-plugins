import type { Process } from '@oscd-transnet-plugins/shared';
import { bumpVersion } from '@oscd-transnet-plugins/shared';
import type { VersionBump } from './process.service';

const KEY_PREFIX = 'engineering-wizard:offline-process:';

function keyFor(processId: string): string {
  return `${KEY_PREFIX}${processId}`;
}

/**
 * Saves a process to localStorage as an offline draft.
 * Applies the optional version bump before storing.
 * Returns the (potentially bumped) process that was stored.
 * Throws if the write fails (e.g. quota exceeded or storage disabled).
 */
export function saveLocal(process: Process, versionBump?: VersionBump): Process {
  const currentVersion = process.version || '1.0.0';
  const newVersion = versionBump ? bumpVersion(currentVersion, versionBump) : currentVersion;
  const toStore: Process = { ...process, version: newVersion };
  localStorage.setItem(keyFor(process.id), JSON.stringify(toStore));
  return toStore;
}

/**
 * Loads all offline process drafts from localStorage.
 * Skips entries that cannot be parsed so one corrupt entry never breaks the whole load.
 */
export function loadAllLocal(): Process[] {
  const results: Process[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key?.startsWith(KEY_PREFIX)) continue;
    try {
      const raw = localStorage.getItem(key);
      if (raw) {
        results.push(JSON.parse(raw) as Process);
      }
    } catch {
      // Silently skip malformed entries — they cannot be recovered.
    }
  }
  return results;
}

/**
 * Removes the offline draft for the given process ID.
 * No-op if no draft exists.
 */
export function removeLocal(processId: string): void {
  try {
    localStorage.removeItem(keyFor(processId));
  } catch {
    // Ignore removal errors — they are not user-facing.
  }
}
