import type { CoMPASPlugin, Plugin, PluginGroup, PluginType, Process } from '@oscd-transnet-plugins/shared';
import processesUrl from '../assets/processes.xml?url';

export const engineeringProcessesState = $state<{ processes: Process[] }>({
  processes: [],
});

export const isEngineeringProcessesLoadingState = $state<{ loading: boolean }>({
  loading: false,
});

export const engineeringProcessesErrorState = $state<{ error: string }>({
  error: '',
});

export const selectedEngineeringProcessState = $state<{ process: Process }>({
  process: null,
});

export const isEngineeringProcessEditingState = $state<{ isEditing: boolean }>({
  isEditing: false,
});

// Track the currently running process plus the last selected plugin id for resume
export const runningEngineeringProcessState = $state<{ process: Process; lastSelectedPluginId: string | null }>({
  process: null,
  lastSelectedPluginId: null,
});

// Plugins that are available from the OSCD core
export const corePluginsState = $state<{plugins: CoMPASPlugin[]}>({
  plugins: []
});

const SOURCE_URL = processesUrl;
const LOCAL_STORAGE_KEY = 'engineeringWizardProcesses';
const RUNNING_PROCESS_STORAGE_KEY = 'engineeringWizardRunningProcess';
const DEFAULT_SRC_TYPE: PluginType = 'external';

// --- Load from localStorage (SSR-safe) ---
if (typeof localStorage !== 'undefined') {
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (saved) {
    try {
      const parsed: unknown = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        engineeringProcessesState.processes = parsed as Process[];
      }
    } catch {
      // ignore corrupt data
    }
  }

  // Load running process if present (support legacy shape = Process)
  const savedRunning = localStorage.getItem(RUNNING_PROCESS_STORAGE_KEY);
  if (savedRunning) {
    try {
      const parsed = JSON.parse(savedRunning) as unknown;
      if (parsed && typeof parsed === 'object') {
        type RunningSnapshot = { process?: Process | null; lastSelectedPluginId?: string | null } | Process;
        const obj = parsed as RunningSnapshot;
        if ('id' in obj && !('process' in obj)) {
          // Legacy: previously we stored just the Process directly
          runningEngineeringProcessState.process = obj as Process;
          runningEngineeringProcessState.lastSelectedPluginId = null;
        } else if ('process' in obj) {
          const snap = obj as { process?: Process | null; lastSelectedPluginId?: string | null };
          runningEngineeringProcessState.process = (snap.process ?? null) as Process;
          runningEngineeringProcessState.lastSelectedPluginId = snap.lastSelectedPluginId ?? null;
        }
      }
    } catch (e) {
      // ignore corrupt data in running process storage
      console.warn('Ignoring invalid running process snapshot');
    }
  }
}

$effect.root(() => {
  $effect(() => {
    engineeringProcessesState.processes.forEach((proc) => {
      proc.pluginGroups?.forEach((group) => {
        group.plugins?.length;
      });
    });

    const snapshot = $state.snapshot(engineeringProcessesState.processes);

    if (typeof localStorage === 'undefined') return;
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(snapshot));
    } catch {
      // ignore storage errors
    }
  });

  $effect(() => {
    const proc = runningEngineeringProcessState.process;
    if (proc?.pluginGroups) {
      proc.pluginGroups.forEach((g) => g.plugins?.length);
    }

    // Persist the entire running state so we can resume with last selected plugin
    const snapshot = $state.snapshot(runningEngineeringProcessState);

    if (typeof localStorage === 'undefined') return;
    try {
      if (snapshot && (snapshot as { process: Process | null }).process) {
        localStorage.setItem(RUNNING_PROCESS_STORAGE_KEY, JSON.stringify(snapshot));
      } else {
        localStorage.removeItem(RUNNING_PROCESS_STORAGE_KEY);
      }
    } catch (e) {
      // ignore storage errors while persisting running state
      console.warn('Failed persisting running process snapshot');
    }
  });
});

const text = (el: Element | null) => el?.textContent?.trim() ?? '';
const attr = (el: Element | null, attrKey: string) => el?.getAttribute(attrKey) ?? undefined;
/**
 * Parses the `type` attribute of a <src> tag within the given element.
 * Returns 'internal', 'external', or a default type if the attribute is missing or invalid.
 */
const parseSrcType = (el: Element | null): PluginType => {
  const value = attr(el?.querySelector('src'), 'type') ?? '';
  if( value === 'internal' || value === 'external') {
    return value;
  }

  return DEFAULT_SRC_TYPE;
}
const all = (root: ParentNode, selector: string) =>
  Array.from(root.querySelectorAll(selector));

const parsePlugin = (el: Element): Plugin => ({
  id:        text(el.querySelector('id')),
  name:      text(el.querySelector('name')),
  src:       text(el.querySelector('src')) || undefined,
  sourceUrl: text(el.querySelector('sourceUrl')) || undefined,
  type:      parseSrcType(el)
});

// Always return Process objects with a concrete `pluginGroups: PluginGroup[]`
const parseProcessesXml = (xml: XMLDocument): Process[] =>
  all(xml, 'process').map((procEl) => {
    const groupEls = all(procEl, ':scope > plugins-sequence > group');

    const pluginGroups: PluginGroup[] = groupEls.length
      ? groupEls.map((g) => ({
        title:   text(g.querySelector(':scope > title')) || 'Untitled',
        plugins: all(g, ':scope > plugin').map(parsePlugin),
      }))
      : [
        {
          title: 'Ungrouped',
          plugins: all(procEl, ':scope > plugins-sequence > plugin').map(parsePlugin),
        },
      ];

    return {
      id:          text(procEl.querySelector(':scope > id')),
      version:     text(procEl.querySelector(':scope > version')),
      name:        text(procEl.querySelector(':scope > name')),
      description: text(procEl.querySelector(':scope > description')),
      pluginGroups,
    };
  });

export async function getProcesses(): Promise<Process[]> {
  isEngineeringProcessesLoadingState.loading = true;
  engineeringProcessesErrorState.error = '';

  try {
    const res = await fetch(SOURCE_URL, { cache: 'no-cache' });
    if (!res.ok) {
      throw new Error(
        `HTTP ${res.status}${res.statusText ? `: ${res.statusText}` : ''}`
      );
    }

    const xmlText = await res.text();

    if (typeof DOMParser === 'undefined') {
      throw new Error('DOMParser is not available in this environment.');
    }

    const xml = new DOMParser().parseFromString(xmlText, 'application/xml');
    if (xml.getElementsByTagName('parsererror').length) {
      throw new Error('Invalid XML file format.');
    }

    const parsed = parseProcessesXml(xml);

    const localSnapshot = $state.snapshot(engineeringProcessesState.processes) as Process[];
    if (Array.isArray(localSnapshot) && localSnapshot.length) {
      const byId = new Map<string, Process>();
      for (const p of parsed) byId.set(p.id, p);
      for (const p of localSnapshot) byId.set(p.id, p);
      const merged = Array.from(byId.values());
      engineeringProcessesState.processes = merged;
      return merged;
    }

    engineeringProcessesState.processes = parsed;
    return parsed;
  } catch (err) {
    engineeringProcessesErrorState.error =
      err instanceof Error ? err.message : 'Failed to load processes.';
    throw err;
  } finally {
    isEngineeringProcessesLoadingState.loading = false;
  }
}

function ensureUniqueProcessId(base: string): string {
  const normalized = (base || '').trim() || 'process';
  const existing = new Set((engineeringProcessesState.processes ?? []).map(p => p.id));
  if (!existing.has(normalized)) return normalized;

  let i = 2;
  let candidate = `${normalized}-${i}`;
  while (existing.has(candidate)) {
    i += 1;
    candidate = `${normalized}-${i}`;
  }
  return candidate;
}

export function addProcessToStore(process: Process): Process {
  const snap = $state.snapshot(process) as Process;

  const baseId = (snap.id || snap.name || 'process').trim();
  const id = ensureUniqueProcessId(baseId);

  const toInsert: Process = {
    id,
    version: snap.version || '1.0.0',
    name: snap.name || id,
    description: snap.description || '',
    pluginGroups: (snap.pluginGroups?.length ? snap.pluginGroups : [{ title: 'Ungrouped', plugins: [] }]),
  };

  // assign a new array for clean reactivity
  engineeringProcessesState.processes = [...(engineeringProcessesState.processes ?? []), toInsert];

  return toInsert;
}


/**
 * Add a plugin to the given process, creating the group if necessary.
 * If groupTitle is not provided/blank, falls back to "Ungrouped".
 */
export function addPluginToProcessStore(
  procId: string,
  plugin: Plugin,
  groupTitle?: string
): void {
  const title = (groupTitle && groupTitle.trim()) || 'Ungrouped';

  const process = engineeringProcessesState.processes.find((p) => p.id === procId);
  if (!process) return;

  const groups = process.pluginGroups ?? (process.pluginGroups = []);

  let group = groups.find((g) => g.title === title);

  if (!group) {
    group = { title, plugins: [] };
    groups.push(group);
  }

  if (!group.plugins) {
    group.plugins = [];
  }

  group.plugins.push(plugin);
}

export function removePluginFromProcessStore(
  procId: string,
  pluginId: string
): boolean {
  const process = engineeringProcessesState.processes.find((p) => p.id === procId);
  if (!process || !process.pluginGroups) return false;

  for (const group of process.pluginGroups) {
    if (!group?.plugins) continue;

    const index = group.plugins.findIndex((pl) => pl.id === pluginId);
    if (index === -1) continue;

    group.plugins.splice(index, 1);

    if (group.plugins.length === 0) {
      const groupIndex = process.pluginGroups.indexOf(group);
      if (groupIndex !== -1) {
        process.pluginGroups.splice(groupIndex, 1);
      }
    }

    return true;
  }

  return false;
}

export function removeAllPluginsFromProcessStore(procId: string): void {
  const process = engineeringProcessesState.processes.find((p) => p.id === procId);
  if (!process || !process.pluginGroups) return;

  for (const group of process.pluginGroups) {
    if (group.plugins) {
      group.plugins.length = 0;
    }
  }
}

/**
 * Adds a plugin group to a process.
 * @param procId - ID of the process
 * @param groupTitle - Title of the new group
 * @param position - 1-based position to insert the group (optional, defaults to last)
 */
export function addGroupToProcessStore(
  procId: string,
  groupTitle: string,
  position?: number
): void {
  const process = engineeringProcessesState.processes.find((p) => p.id === procId);
  if (!process) return;

  const groups = process.pluginGroups ?? (process.pluginGroups = []);
  if (groups.find((g) => g.title === groupTitle)) return;

  const newGroup = { title: groupTitle, plugins: [] };

  if(position === undefined) {
    // add last
    groups.push(newGroup);
  } else {
    // add at position
    const idx = Math.max(0, position - 1);
    groups.splice(idx, 0, newGroup);
  }
}

/**
 * Updates the plugin groups of a process.
 * @param procId
 * @param newGroups
 */
export function updateGroupsOfProcessStore(
  procId: string,
  newGroups: PluginGroup[]
): void {
  const process = engineeringProcessesState.processes.find((p) => p.id === procId);
  if (!process) return;

  // Replace the entire plugin groups array with the new groups
  process.pluginGroups.splice(0, process.pluginGroups.length, ...newGroups);
}

export function setInternalPlugins(plugins :CoMPASPlugin[]) {
  corePluginsState.plugins = [...plugins]
}

export function getPluginsForProcess(process: Process): Plugin[] {
  return (process.pluginGroups ?? []).flatMap((group) => group.plugins ?? []);
}

// Convenience helpers for running process state
export function setRunningProcess(process: Process, lastSelectedPluginId: string | null = null): void {
  runningEngineeringProcessState.process = process ?? null;
  runningEngineeringProcessState.lastSelectedPluginId = lastSelectedPluginId;
}

export function setLastSelectedPluginId(pluginId: string | null): void {
  runningEngineeringProcessState.lastSelectedPluginId = pluginId ?? null;
}

export function clearRunningProcess(): void {
  runningEngineeringProcessState.process = null;
  runningEngineeringProcessState.lastSelectedPluginId = null;
  if (typeof localStorage !== 'undefined') {
    try {
      localStorage.removeItem(RUNNING_PROCESS_STORAGE_KEY);
    } catch (e) {
      // ignore storage errors on clear
      console.warn('Failed clearing running process snapshot');
    }
  }
}
