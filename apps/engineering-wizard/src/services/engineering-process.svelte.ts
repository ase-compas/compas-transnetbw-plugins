import type {
  Plugin,
  PluginGroup,
  Process,
} from '@oscd-transnet-plugins/shared';
/* eslint-disable @nx/enforce-module-boundaries */
// const SOURCE_URL = new URL('../assets/processes.xml', import.meta.url).href;
import processesUrl from '../assets/processes.xml?url';

export const processesLoadingStore = $state<{ loading: boolean }>({
  loading: false
});

export const processesErrorStore = $state<{ error: string }>({
  error: ''
});

export const processesStore = $state<{ processes: Process[] }>({
  processes: []
});

const SOURCE_URL = processesUrl;
const LOCAL_STORAGE_KEY = 'engineeringWizardProcesses';

if (typeof localStorage !== 'undefined') {
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (saved) {
    try {
      const parsed: Process[] = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        processesStore.processes = parsed;
      }
    } catch (_) {
      // ignore corrupt data
    }
  }
}

$effect.root(() => {
  $effect(() => {
    if (typeof localStorage === 'undefined') return;

    try {
      console.log("Saving processes to localStorage");
      console.log("p", processesStore.processes);
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(processesStore.processes)
      );
    } catch (_) {
      // ignore storage errors
    }
  });
});

const text = (el: Element | null) => el?.textContent?.trim() ?? '';
const all = (root: ParentNode, selector: string) =>
  Array.from(root.querySelectorAll(selector));

const parsePlugin = (el: Element): Plugin => ({
  id:   text(el.querySelector('id')),
  name: text(el.querySelector('name')),
  src:  text(el.querySelector('src')),
});

const parseProcessesXml = (xml: XMLDocument): Process[] =>
  all(xml, 'process').map((procEl) => {
    const groupEls = all(procEl, 'plugins-sequence > group');

    const pluginGroups: PluginGroup[] | undefined = groupEls.length
      ? groupEls.map((g) => ({
        title:   text(g.querySelector(':scope > title')),
        plugins: all(g, ':scope > plugin').map(parsePlugin),
      }))
      : undefined;

    const plugins: Plugin[] = pluginGroups
      ? pluginGroups.flatMap((g) => g.plugins)
      : all(procEl, 'plugins-sequence > plugin').map(parsePlugin);

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
    processesStore.processes = [];
    throw err;
  } finally {
    processesLoadingStore.loading = false;
  }
}

export function addPluginToProcessStore(
  procId: string,
  plugin: Plugin
): void {
  processesStore.processes = processesStore.processes.map((p) =>
    p.id === procId
      ? { ...p, plugins: [...(p.plugins ?? []), plugin] }
      : p
  );
}
