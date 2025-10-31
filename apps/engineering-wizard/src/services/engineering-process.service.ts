import type {
  Plugin,
  PluginGroup,
  Process,
} from '@oscd-transnet-plugins/shared';
import { writable } from 'svelte/store';
/* eslint-disable @nx/enforce-module-boundaries */
// const SOURCE_URL = new URL('../assets/processes.xml', import.meta.url).href;
import processesUrl from '../assets/processes.xml?url';

export const processesLoadingStore = writable<boolean>(false);
export const processesErrorStore   = writable<string>('');
export const processesStore        = writable<Process[]>([]);

const SOURCE_URL = processesUrl;
const LOCAL_STORAGE_KEY = 'engineeringWizardProcesses';

if (typeof localStorage !== 'undefined') {
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (saved) {
    try {
      const parsed: Process[] = JSON.parse(saved);
      if (Array.isArray(parsed)) processesStore.set(parsed);
    } catch (_) {/* ignore corrupt data */}
  }
}

if (typeof localStorage !== 'undefined') {
  processesStore.subscribe((value) => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value));
    } catch (_) {
    }
  });
}

const text = (el: Element | null) => el?.textContent?.trim() ?? '';
const $all = (root: ParentNode, selector: string) => Array.from(root.querySelectorAll(selector));

const parsePlugin = (el: Element): Plugin => ({
  id:   text(el.querySelector('id')),
  name: text(el.querySelector('name')),
  src:  text(el.querySelector('src')),
});

const parseProcessesXml = (xml: XMLDocument): Process[] =>
  $all(xml, 'process').map((procEl) => {
    const groupEls = $all(procEl, 'plugins-sequence > group');

    const pluginGroups: PluginGroup[] | undefined = groupEls.length
      ? groupEls.map((g) => ({
        title:   text(g.querySelector(':scope > title')),
        plugins: $all(g, ':scope > plugin').map(parsePlugin),
      }))
      : undefined;

    const plugins: Plugin[] = pluginGroups
      ? pluginGroups.flatMap((g) => g.plugins)
      : $all(procEl, 'plugins-sequence > plugin').map(parsePlugin);

    return {
      id:          text(procEl.querySelector(':scope > id')),
      version:     text(procEl.querySelector(':scope > version')),
      name:        text(procEl.querySelector(':scope > name')),
      description: text(procEl.querySelector(':scope > description')),
      plugins,
      pluginGroups,
    };
  });

export async function getProcesses(): Promise<Process[]> {
  processesLoadingStore.set(true);
  processesErrorStore.set('');

  try {
    const res = await fetch(SOURCE_URL, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`HTTP ${res.status}${res.statusText ? `: ${res.statusText}` : ''}`);

    const xmlText = await res.text();
    const xml = new DOMParser().parseFromString(xmlText, 'application/xml');
    if (xml.getElementsByTagName('parsererror').length) throw new Error('Invalid XML file format.');

    const parsed = parseProcessesXml(xml);
    processesStore.set(parsed);
    return parsed;
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to load processes.';
    processesErrorStore.set(message);
    processesStore.set([]);
    throw err;
  } finally {
    processesLoadingStore.set(false);
  }
}

export function setProcesses(processes: Process[]): void {
  processesStore.set(processes);
}

export function updateProcesses(updater: (current: Process[]) => Process[]): void {
  processesStore.update((curr) => updater(curr));
}

export function addProcess(proc: Process): void {
  processesStore.update((curr) => [...curr, proc]);
}

export function addPluginToProcessStore(procId: string, plugin: Plugin): void {
  processesStore.update((curr) =>
    curr.map((p) =>
      p.id === procId
        ? { ...p, plugins: [...(p.plugins ?? []), plugin] }
        : p
    )
  );
}
