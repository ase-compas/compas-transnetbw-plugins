import type { Plugin, PluginGroup, Process } from '@oscd-transnet-plugins/shared';
/* eslint-disable @nx/enforce-module-boundaries */
import processesUrl from '../assets/processes.xml?url';

export const processesLoadingStore = $state<{ loading: boolean }>({
  loading: false,
});

export const processesErrorStore = $state<{ error: string }>({
  error: '',
});

export const processesStore = $state<{ processes: Process[] }>({
  processes: [],
});

export const selectedProcessState = $state<{ process: Process }>({
  process: null,
});

const SOURCE_URL = processesUrl;
const LOCAL_STORAGE_KEY = 'engineeringWizardProcesses';

// --- Load from localStorage (SSR-safe) ---
if (typeof localStorage !== 'undefined') {
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (saved) {
    try {
      const parsed: unknown = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        processesStore.processes = parsed as Process[];
      }
    } catch {
      // ignore corrupt data
    }
  }
}

$effect.root(() => {
  $effect(() => {
    processesStore.processes.forEach((proc) => {
      proc.pluginGroups?.forEach((group) => {
        group.plugins?.length;
      });
    });

    const snapshot = $state.snapshot(processesStore.processes);
    console.log('new value', snapshot);

    if (typeof localStorage === 'undefined') return;
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(snapshot));
    } catch {
      // ignore storage errors
    }
  });
});

const text = (el: Element | null) => el?.textContent?.trim() ?? '';
const all = (root: ParentNode, selector: string) =>
  Array.from(root.querySelectorAll(selector));

const parsePlugin = (el: Element): Plugin => ({
  id:        text(el.querySelector('id')),
  name:      text(el.querySelector('name')),
  src:       text(el.querySelector('src')) || undefined,
  sourceUrl: text(el.querySelector('sourceUrl')) || undefined,
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
  processesLoadingStore.loading = true;
  processesErrorStore.error = '';

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
    processesStore.processes = parsed;
    return parsed;
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'Failed to load processes.';
    processesErrorStore.error = message;
    throw err;
  } finally {
    processesLoadingStore.loading = false;
  }
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
  console.log('Adding plugin to process store', procId, plugin, groupTitle);
  const title = (groupTitle && groupTitle.trim()) || 'Ungrouped';

  const process = processesStore.processes.find((p) => p.id === procId);
  if (!process) return;

  const groups = process.pluginGroups ?? (process.pluginGroups = []);

  let group = groups.find((g) => g.title === title);

  if (!group) {
    console.log('Creating new plugin group:', title);
    group = { title, plugins: [] };
    groups.push(group);
  }

  if (!group.plugins) {
    group.plugins = [];
  }

  group.plugins.push(plugin);

  console.log('Updated process', process);
}

export function getPluginsForProcess(process: Process): Plugin[] {
  return (process.pluginGroups ?? []).flatMap((group) => group.plugins ?? []);
}
